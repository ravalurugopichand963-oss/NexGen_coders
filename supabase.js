// ============================================================
// RAKSHA RIDE — Supabase client + data helpers (v2)
// Uses the publishable (anon) key only.
// ============================================================

const SUPABASE_URL = "https://jyujdxifqglqfqxratlj.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_YdpFsoAQloY_g58EPV1BUg_JtgTC7oS";

const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: { persistSession: true, autoRefreshToken: true }
});

// ------------------------------------------------------------
// AUTH
// ------------------------------------------------------------
const Auth = {
  async signUp({ email, password, fullName, phone, role, guardianName, guardianPhone, emergencyContact, language }) {
    const { data, error } = await sb.auth.signUp({ email, password });
    if (error) return { error };
    const user = data.user;
    if (user) {
      const safeRole = ["passenger", "parent", "driver"].includes(role) ? role : "passenger";
      const { error: profileError } = await sb.from("profiles").insert({
        id: user.id, full_name: fullName, phone, role: safeRole,
        guardian_name: guardianName || null, guardian_phone: guardianPhone || null,
        emergency_contact: emergencyContact || null, preferred_language: language || "en"
      });
      if (profileError) return { error: profileError };
    }
    return { data };
  },
  async signIn({ email, password }) { return await sb.auth.signInWithPassword({ email, password }); },
  async signOut() { return await sb.auth.signOut(); },
  async resetPassword(email) {
    return await sb.auth.resetPasswordForEmail(email, { redirectTo: window.location.origin + window.location.pathname });
  },
  async getSession() { const { data } = await sb.auth.getSession(); return data.session; },
  async getProfile(userId) { return await sb.from("profiles").select("*").eq("id", userId).single(); },
  async findProfileByPhone(phone) { return await sb.from("profiles").select("id, full_name, phone, role").eq("phone", phone).maybeSingle(); },
  async updateProfile(userId, fields) { return await sb.from("profiles").update(fields).eq("id", userId).select().single(); },
  onAuthChange(callback) { return sb.auth.onAuthStateChange((_event, session) => callback(session)); }
};

// ------------------------------------------------------------
// DRIVERS / VEHICLES — always read real verification flags
// ------------------------------------------------------------
const Drivers = {
  async getByQr(qrCode) {
    return await sb.from("vehicles").select("*, drivers(*)").eq("qr_code", qrCode).single();
  }
};

// ------------------------------------------------------------
// JOURNEYS
// ------------------------------------------------------------
const Journeys = {
  async create(journey) { return await sb.from("journeys").insert(journey).select().single(); },
  async update(id, fields) { return await sb.from("journeys").update(fields).eq("id", id).select().single(); },
  async getById(id) { return await sb.from("journeys").select("*, drivers(*), vehicles(*)").eq("id", id).single(); },
  async getHistory(passengerId) {
    return await sb.from("journeys").select("*, drivers(*), vehicles(*)")
      .eq("passenger_id", passengerId).order("created_at", { ascending: false });
  },
  async getActiveForPassenger(passengerId) {
    return await sb.from("journeys").select("*, drivers(*), vehicles(*)")
      .eq("passenger_id", passengerId).in("status", ["active", "deviated", "sos"])
      .order("created_at", { ascending: false }).limit(1).maybeSingle();
  }
};

// ------------------------------------------------------------
// JOURNEY LOCATIONS
// ------------------------------------------------------------
const Locations = {
  async record(journeyId, lat, lng) { return await sb.from("journey_locations").insert({ journey_id: journeyId, lat, lng }); },
  async latest(journeyId) {
    return await sb.from("journey_locations").select("*").eq("journey_id", journeyId)
      .order("recorded_at", { ascending: false }).limit(1).maybeSingle();
  },
  async history(journeyId, limit = 200) {
    return await sb.from("journey_locations").select("*").eq("journey_id", journeyId)
      .order("recorded_at", { ascending: true }).limit(limit);
  }
};

// ------------------------------------------------------------
// SAFETY CHECK-INS / ROUTE ALERTS
// ------------------------------------------------------------
const Checkins = {
  async record(journeyId, passengerId, status) {
    return await sb.from("safety_checkins").insert({ journey_id: journeyId, passenger_id: passengerId, status });
  }
};

const RouteAlerts = {
  async create(journeyId, alertType) {
    return await sb.from("route_alerts").insert({ journey_id: journeyId, alert_type: alertType }).select().single();
  },
  async resolve(id) { return await sb.from("route_alerts").update({ resolved: true }).eq("id", id); }
};

// ------------------------------------------------------------
// SOS
// ------------------------------------------------------------
const SOS = {
  async create({ journeyId, passengerId, lat, lng }) {
    return await sb.from("sos_alerts").insert({ journey_id: journeyId, passenger_id: passengerId, lat, lng, status: "active" }).select().single();
  },
  async resolve(id) { return await sb.from("sos_alerts").update({ status: "resolved" }).eq("id", id); }
};

// ------------------------------------------------------------
// EMERGENCY CONTACTS (personal contact book, distinct from family_links)
// ------------------------------------------------------------
const EmergencyContacts = {
  async listFor(ownerId) { return await sb.from("emergency_contacts").select("*").eq("owner_id", ownerId).order("created_at"); },
  async add(contact) { return await sb.from("emergency_contacts").insert(contact).select().single(); },
  async remove(id) { return await sb.from("emergency_contacts").delete().eq("id", id); }
};

// ------------------------------------------------------------
// FAMILY LINKS (account-to-account monitoring relationship)
// ------------------------------------------------------------
const FamilyLinks = {
  async requestLink(parentId, passengerId) {
    return await sb.from("family_links").insert({ parent_id: parentId, passenger_id: passengerId, status: "pending" }).select().single();
  },
  async incomingForPassenger(passengerId) {
    return await sb.from("family_links").select("*, profiles:parent_id(full_name, phone)").eq("passenger_id", passengerId).eq("status", "pending");
  },
  async respond(linkId, status) { return await sb.from("family_links").update({ status }).eq("id", linkId); },
  async linkedPassengersForParent(parentId) {
    return await sb.from("family_links").select("*, profiles:passenger_id(id, full_name, phone, emergency_contact)")
      .eq("parent_id", parentId).eq("status", "accepted");
  }
};

// ------------------------------------------------------------
// NOTIFICATIONS
// ------------------------------------------------------------
const Notifications = {
  async create(userId, type, message) { return await sb.from("notifications").insert({ user_id: userId, type, message }); },
  async notifyLinkedParents(passengerId, type, message) {
    // find parents linked to this passenger
    const { data: parents } = await sb.from("family_links").select("parent_id").eq("passenger_id", passengerId).eq("status", "accepted");
    if (!parents || !parents.length) return { data: [] };
    const rows = parents.map(p => ({ user_id: p.parent_id, type, message }));
    return await sb.from("notifications").insert(rows);
  },
  async listFor(userId) {
    return await sb.from("notifications").select("*").eq("user_id", userId).order("created_at", { ascending: false }).limit(30);
  },
  subscribe(userId, callback) {
    return sb.channel(`notif-${userId}`)
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "notifications", filter: `user_id=eq.${userId}` }, callback)
      .subscribe();
  }
};

// ------------------------------------------------------------
// SAFETY EVENTS (audit trail for the Safe Arrival timeline)
// ------------------------------------------------------------
const SafetyEvents = {
  async log(journeyId, passengerId, eventType, meta = null) {
    return await sb.from("safety_events").insert({ journey_id: journeyId, passenger_id: passengerId, event_type: eventType, meta });
  },
  async forJourney(journeyId) {
    return await sb.from("safety_events").select("*").eq("journey_id", journeyId).order("created_at", { ascending: true });
  }
};

// ------------------------------------------------------------
// LOCATION SHARES (one-off share link, NOT an SOS)
// ------------------------------------------------------------
const LocationShares = {
  async create(journeyId, passengerId) {
    return await sb.from("location_shares").insert({ journey_id: journeyId, passenger_id: passengerId }).select().single();
  },
  async deactivate(id) { return await sb.from("location_shares").update({ active: false }).eq("id", id); },
  async resolvePublic(token) { return await sb.rpc("get_shared_location", { p_token: token }); }
};

// ------------------------------------------------------------
// DRIVER RATINGS / INCIDENTS
// ------------------------------------------------------------
const Ratings = {
  async submit({ journeyId, driverId, passengerId, rating, comment }) {
    return await sb.from("driver_ratings").insert({ journey_id: journeyId, driver_id: driverId, passenger_id: passengerId, rating, comment });
  }
};

const Incidents = {
  async report({ journeyId, passengerId, category, description }) {
    return await sb.from("incident_reports").insert({ journey_id: journeyId, passenger_id: passengerId, category, description });
  }
};

// ------------------------------------------------------------
// ADMIN AGGREGATES
// ------------------------------------------------------------
// ------------------------------------------------------------
// MEDIA (Supabase Storage) — for Voice/Video SOS clips
// ------------------------------------------------------------
const Media = {
  async upload(file, path) {
    return await sb.storage.from("sos-media").upload(path, file, { contentType: file.type, upsert: true });
  },
  getPublicUrl(path) {
    const { data } = sb.storage.from("sos-media").getPublicUrl(path);
    return data.publicUrl;
  }
};

const Admin = {
  async stats() {
    const [journeys, sos, incidents] = await Promise.all([
      sb.from("journeys").select("id, status", { count: "exact" }),
      sb.from("sos_alerts").select("id, status", { count: "exact" }),
      sb.from("incident_reports").select("id, status", { count: "exact" })
    ]);
    // "verified" driver = identity_verified AND license_verified AND at least one verified vehicle
    const { data: drivers } = await sb.from("drivers").select("id, identity_verified, license_verified");
    const { data: vehicles } = await sb.from("vehicles").select("driver_id, verified").eq("verified", true);
    const verifiedVehicleDriverIds = new Set((vehicles || []).map(v => v.driver_id));
    const fullyVerifiedDrivers = (drivers || []).filter(d =>
      d.identity_verified && d.license_verified && verifiedVehicleDriverIds.has(d.id)
    ).length;
    return { journeys, sos, incidents, fullyVerifiedDrivers };
  },
  async activeSos() {
    return await sb.from("sos_alerts").select("*, journeys(*), profiles:passenger_id(full_name, phone)").eq("status", "active");
  }
};
