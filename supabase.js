// ============================================================
// RAKSHA RIDE — Supabase client + data helpers
// Uses the publishable (anon) key only. Never put a service_role
// key in this file.
// ============================================================

const SUPABASE_URL = "https://jyujdxifqglqfqxratlj.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_YdpFsoAQloY_g58EPV1BUg_JtgTC7oS";

// supabase-js is loaded globally via CDN script tag in index.html as `window.supabase`
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
      // role is limited to non-admin values here — admin can never be self-selected.
      const safeRole = ["passenger", "parent", "driver"].includes(role) ? role : "passenger";
      const { error: profileError } = await sb.from("profiles").insert({
        id: user.id,
        full_name: fullName,
        phone,
        role: safeRole,
        guardian_name: guardianName || null,
        guardian_phone: guardianPhone || null,
        emergency_contact: emergencyContact || null,
        preferred_language: language || "en"
      });
      if (profileError) return { error: profileError };
    }
    return { data };
  },

  async signIn({ email, password }) {
    return await sb.auth.signInWithPassword({ email, password });
  },

  async signOut() {
    return await sb.auth.signOut();
  },

  async resetPassword(email) {
    return await sb.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.origin + window.location.pathname
    });
  },

  async getSession() {
    const { data } = await sb.auth.getSession();
    return data.session;
  },

  async getProfile(userId) {
    const { data, error } = await sb.from("profiles").select("*").eq("id", userId).single();
    return { data, error };
  },

  async updateProfile(userId, fields) {
    return await sb.from("profiles").update(fields).eq("id", userId);
  },

  onAuthChange(callback) {
    return sb.auth.onAuthStateChange((_event, session) => callback(session));
  }
};

// ------------------------------------------------------------
// DRIVERS / VEHICLES
// ------------------------------------------------------------
const Drivers = {
  async getByQr(qrCode) {
    const { data, error } = await sb
      .from("vehicles")
      .select("*, drivers(*)")
      .eq("qr_code", qrCode)
      .single();
    return { data, error };
  },
  async getById(driverId) {
    return await sb.from("drivers").select("*").eq("id", driverId).single();
  }
};

// ------------------------------------------------------------
// JOURNEYS
// ------------------------------------------------------------
const Journeys = {
  async create(journey) {
    return await sb.from("journeys").insert(journey).select().single();
  },
  async update(id, fields) {
    return await sb.from("journeys").update(fields).eq("id", id).select().single();
  },
  async getById(id) {
    return await sb.from("journeys").select("*, drivers(*), vehicles(*)").eq("id", id).single();
  },
  async getHistory(passengerId) {
    return await sb
      .from("journeys")
      .select("*, drivers(*), vehicles(*)")
      .eq("passenger_id", passengerId)
      .order("created_at", { ascending: false });
  },
  async getActiveForPassenger(passengerId) {
    return await sb
      .from("journeys")
      .select("*, drivers(*), vehicles(*)")
      .eq("passenger_id", passengerId)
      .in("status", ["active", "deviated", "sos"])
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();
  },
  subscribeToJourney(journeyId, callback) {
    return sb
      .channel(`journey-${journeyId}`)
      .on("postgres_changes", { event: "*", schema: "public", table: "journeys", filter: `id=eq.${journeyId}` }, callback)
      .subscribe();
  }
};

// ------------------------------------------------------------
// JOURNEY LOCATIONS
// ------------------------------------------------------------
const Locations = {
  async record(journeyId, lat, lng) {
    return await sb.from("journey_locations").insert({ journey_id: journeyId, lat, lng });
  },
  async latest(journeyId) {
    return await sb
      .from("journey_locations")
      .select("*")
      .eq("journey_id", journeyId)
      .order("recorded_at", { ascending: false })
      .limit(1)
      .maybeSingle();
  },
  subscribe(journeyId, callback) {
    return sb
      .channel(`locations-${journeyId}`)
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "journey_locations", filter: `journey_id=eq.${journeyId}` },
        callback
      )
      .subscribe();
  }
};

// ------------------------------------------------------------
// SAFETY CHECK-INS
// ------------------------------------------------------------
const Checkins = {
  async record(journeyId, passengerId, status) {
    return await sb.from("safety_checkins").insert({ journey_id: journeyId, passenger_id: passengerId, status });
  }
};

// ------------------------------------------------------------
// ROUTE ALERTS
// ------------------------------------------------------------
const RouteAlerts = {
  async create(journeyId, alertType) {
    return await sb.from("route_alerts").insert({ journey_id: journeyId, alert_type: alertType }).select().single();
  },
  async resolve(id) {
    return await sb.from("route_alerts").update({ resolved: true }).eq("id", id);
  }
};

// ------------------------------------------------------------
// SOS
// ------------------------------------------------------------
const SOS = {
  async create({ journeyId, passengerId, lat, lng }) {
    return await sb
      .from("sos_alerts")
      .insert({ journey_id: journeyId, passenger_id: passengerId, lat, lng, status: "active" })
      .select()
      .single();
  },
  async resolve(id) {
    return await sb.from("sos_alerts").update({ status: "resolved" }).eq("id", id);
  },
  subscribeAll(callback) {
    return sb
      .channel("sos-admin")
      .on("postgres_changes", { event: "*", schema: "public", table: "sos_alerts" }, callback)
      .subscribe();
  }
};

// ------------------------------------------------------------
// EMERGENCY CONTACTS
// ------------------------------------------------------------
const EmergencyContacts = {
  async listFor(ownerId) {
    return await sb.from("emergency_contacts").select("*").eq("owner_id", ownerId);
  },
  async add(contact) {
    return await sb.from("emergency_contacts").insert(contact);
  }
};

// ------------------------------------------------------------
// NOTIFICATIONS
// ------------------------------------------------------------
const Notifications = {
  async create(userId, type, message) {
    return await sb.from("notifications").insert({ user_id: userId, type, message });
  },
  async listFor(userId) {
    return await sb.from("notifications").select("*").eq("user_id", userId).order("created_at", { ascending: false }).limit(30);
  },
  subscribe(userId, callback) {
    return sb
      .channel(`notif-${userId}`)
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "notifications", filter: `user_id=eq.${userId}` }, callback)
      .subscribe();
  }
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
const Admin = {
  async stats() {
    const [journeys, sos, drivers, incidents] = await Promise.all([
      sb.from("journeys").select("id, status", { count: "exact" }),
      sb.from("sos_alerts").select("id, status", { count: "exact" }),
      sb.from("drivers").select("id, identity_verified", { count: "exact" }),
      sb.from("incident_reports").select("id, status", { count: "exact" })
    ]);
    return { journeys, sos, drivers, incidents };
  },
  async activeSos() {
    return await sb.from("sos_alerts").select("*, journeys(*), profiles:passenger_id(full_name, phone)").eq("status", "active");
  }
};
