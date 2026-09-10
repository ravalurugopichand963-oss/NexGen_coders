/* ==========================================================================
   RAKSHA RIDE — App logic
   Front-end only prototype. All data is simulated in-memory.
   Wire-up notes for production are in README.md (Supabase + realtime GPS).
   ========================================================================== */

(function () {
  "use strict";

  /* ------------------------------------------------------------------
     STATE
     ------------------------------------------------------------------ */
  const state = {
    lang: "en",
    role: "passenger",
    passengerName: "Madhu",
    guardianName: "Guardian",
    vehicle: "AP 21 XX 1234",
    driverName: "Ravi Kumar",
    from: "Kamalapuram",
    to: "Kadapa",
    paneStack: ["register"],
    journeyActive: false,
    progress: 8, // percent along route
    progressTimer: null,
    nightMode: false,
    alarmOn: false,
  };

  /* ------------------------------------------------------------------
     I18N
     ------------------------------------------------------------------ */
  const I18N = {
    te: {
      hero_status: "రక్ష రక్షణ చురుకుగా ఉంది",
      hero_kicker: "ప్రయాణం ప్రమాదంగా మారినప్పుడు",
      hero_tagline: "సురక్షిత ప్రయాణం. స్మార్ట్ రక్షణ.",
      hero_desc: "ప్రయాణం మొదలైనప్పటి నుండి ఇంటికి చేరే వరకు మహిళలను రక్షించే స్మార్ట్ ప్రజా రవాణా భద్రతా వేదిక.",
      cta_start: "సురక్షిత ప్రయాణం ప్రారంభించండి",
      cta_how: "ఇది ఎలా రక్షిస్తుంది",
      flow_title: "మొదటి నుండి చివరి వరకు రక్షించబడిన ప్రయాణం",
      flow_sub: "రక్ష రైడ్ అత్యవసర పరిస్థితి కోసం వేచి ఉండదు. ఇది ప్రయాణాన్ని ప్రారంభం నుండి చివరి వరకు రక్షిస్తుంది.",
      flow_verify: "ధృవీకరణ", flow_verify_d: "డ్రైవర్ ధృవీకరణ",
      flow_plan: "ప్రణాళిక", flow_plan_d: "సురక్షిత మార్గం",
      flow_share: "పంచుకోండి", flow_share_d: "కుటుంబానికి తెలియజేయండి",
      flow_monitor: "పర్యవేక్షణ", flow_monitor_d: "ప్రత్యక్ష ట్రాకింగ్",
      flow_protect: "రక్షణ", flow_protect_d: "భద్రతా పర్యవేక్షణ",
      flow_respond: "స్పందన", flow_respond_d: "అత్యవసర సహాయం",
      flow_arrival: "సురక్షిత రాక", flow_arrival_d: "గమ్యం నిర్ధారించండి",
      stat_1: "24/7 ప్రత్యక్ష పర్యవేక్షణ", stat_2: "2 భాషలు మద్దతు", stat_3: "SOS ప్రతిస్పందన ప్రారంభం", stat_4: "కుటుంబానికి తెలియజేసిన ప్రయాణాలు",
      footer_tag: "సురక్షిత ప్రయాణం. స్మార్ట్ రక్షణ.",
      footer_note: "మహిళల ప్రజా రవాణా భద్రతా వేదిక.",
      app_title: "రక్ష రైడ్",
      reg_title: "ప్రయాణీకుల నమోదు",
      reg_sub: "మిమ్మల్ని రక్షించడానికి కొన్ని వివరాలు మాత్రమే.",
      reg_name: "పేరు", reg_phone: "ఫోన్ నంబర్", reg_guardian: "తల్లిదండ్రులు / సంరక్షకుని పేరు", reg_emergency: "అత్యవసర సంప్రదింపు నంబర్",
      reg_continue: "కొనసాగించు",
      verify_title: "డ్రైవర్ QR స్కాన్ చేయండి",
      verify_sub: "వాహనంపై ఉన్న QR కోడ్‌పై మీ కెమెరాను చూపండి.",
      verify_scan: "డ్రైవర్ QR స్కాన్ చేయండి",
      verify_verified: "డ్రైవర్ ధృవీకరించబడింది",
      verify_vehicletype: "షేర్డ్ ఆటో",
      verify_id: "గుర్తింపు ధృవీకరించబడింది", verify_vehiclechk: "వాహనం ధృవీకరించబడింది", verify_license: "లైసెన్స్ ధృవీకరించబడింది",
      verify_rating: "డ్రైవర్ భద్రతా రేటింగ్", verify_history: "📋 భద్రత / ఫిర్యాదు చరిత్ర",
      verify_continue: "ప్రయాణానికి కొనసాగించు",
      plan_title: "మీ ప్రయాణాన్ని ప్రణాళిక చేయండి",
      plan_source: "మూలం", plan_dest: "గమ్యం", plan_routeready: "ప్రణాళికాబద్ధమైన మార్గం",
      plan_distance: "దూరం", plan_eta: "అంచనా సమయం", plan_start: "ప్రయాణం ప్రారంభించండి",
      start_title: "ప్రయాణం ప్రారంభమైంది", start_body: "ప్రయాణం ప్రారంభించింది.",
      start_active: "ప్రయాణ పర్యవేక్షణ చురుకుగా ఉంది", start_view: "ప్రత్యక్ష స్థానం చూడండి",
      track_safe: "ప్రయాణం సురక్షితం", track_protection: "రక్షణ చురుకుగా ఉంది",
      track_remaining: "మిగిలి ఉంది", track_start: "ప్రారంభం", track_dest: "గమ్యం",
      track_routestatus: "మార్గం స్థితి", track_normal: "సాధారణం",
      night_title: "రాత్రి భద్రతా మోడ్", night_desc: "మెరుగైన ప్రయాణ పర్యవేక్షణ చురుకుగా ఉంది.",
      night_1: "✓ మార్గం పర్యవేక్షణ", night_2: "✓ స్థాన భాగస్వామ్యం", night_3: "✓ భద్రతా తనిఖీలు", night_4: "✓ అత్యవసర సహాయం",
      sim_label: "డెమో నియంత్రణలు",
      sim_deviation: "⚠️ మార్గం విచలనం", sim_stop: "🛑 ఊహించని ఆగు", sim_risk: "🚦 అధిక-ప్రమాద ప్రాంతం",
      sim_checkin: "🛡️ భద్రతా తనిఖీ", sim_night: "🌙 రాత్రి మోడ్", sim_arrive: "🏁 గమ్యం చేరుకుంది",
      timeline_title: "ప్రయాణ భద్రతా కాలక్రమం",
      tl_verified: "డ్రైవర్ ధృవీకరించబడింది", tl_started: "ప్రయాణం ప్రారంభమైంది", tl_confirmed: "మార్గం నిర్ధారించబడింది",
      tl_notified: "కుటుంబానికి తెలియజేయబడింది", tl_monitoring: "ప్రత్యక్ష పర్యవేక్షణ చురుకుగా ఉంది", tl_checkin: "భద్రతా తనిఖీ పూర్తయింది",
      tl_alert: "భద్రతా హెచ్చరిక", tl_reached: "గమ్యం చేరుకుంది", tl_safearrival: "సురక్షిత రాక నిర్ధారించబడింది",
      arrival_title: "గమ్యం చేరుకుంది", arrival_body: "మీరు మీ గమ్యాన్ని చేరుకున్నారు.", arrival_confirm: "నేను సురక్షితంగా ఉన్నాను",
      safeconf_title: "సురక్షిత రాక నిర్ధారించబడింది", safeconf_body: "మీ ప్రయాణం సురక్షితంగా పూర్తయింది.", safeconf_continue: "కొనసాగించు",
      fb_title: "మీ ప్రయాణం ఎంత సురక్షితం?", fb_placeholder: "మీ అభిప్రాయం (ఐచ్ఛికం)",
      fb_report: "📝 సమస్యను నివేదించండి", fb_done: "పూర్తయింది",
      report_title: "భద్రతా ఆందోళనను నివేదించండి", report_sub: "ఇది ప్రైవేట్‌గా ఉంటుంది.",
      report_1: "డ్రైవర్ దుష్ప్రవర్తన", report_2: "వేధింపు", report_3: "అనుమానాస్పద ప్రవర్తన", report_4: "అసురక్షిత మార్గం", report_5: "ఇతర భద్రతా ఆందోళన",
      report_placeholder: "వివరాలు (ఐచ్ఛికం)", report_submit: "నివేదికను సమర్పించండి",
      nav_track: "ట్రాక్", nav_timeline: "కాలక్రమం", nav_sos: "SOS", nav_nearby: "సమీపంలో", nav_voice: "వాయిస్",
      nearby_title: "సమీప సురక్షిత ప్రదేశాలు", nearby_police: "పోలీస్ స్టేషన్", nearby_hospital: "ఆసుపత్రి",
      nearby_safeplace: "సురక్షిత ప్రదేశం", nearby_helpcentre: "ప్రజా సహాయ కేంద్రం", nearby_back: "ప్రయాణానికి తిరిగి వెళ్ళు",
      voice_title: "వాయిస్ SOS", voice_sub: "\"సహాయం చేయండి\" లేదా \"అత్యవసరం\" అని చెప్పండి.", voice_hint: "వినడానికి నొక్కండి", voice_back: "ప్రయాణానికి తిరిగి వెళ్ళు",
      modal_imsafe: "నేను సురక్షితంగా ఉన్నాను", modal_needhelp: "నాకు సహాయం కావాలి", modal_viewloc: "స్థానం చూడండి", modal_call112: "112కి కాల్ చేయండి",
      checkin_title: "మీరు సురక్షితంగా ఉన్నారా?",
      risk_title: "భద్రతా హెచ్చరిక", risk_body: "మీరు అధిక-ప్రమాద ప్రాంతంలోకి ప్రవేశిస్తున్నారు.",
      risk_police: "సమీప పోలీస్ స్టేషన్", risk_hospital: "సమీప ఆసుపత్రి", risk_safeplace: "సమీప సురక్షిత ప్రదేశం", risk_map: "మ్యాప్‌లో చూడండి",
      sos_active: "అత్యవసర మోడ్", sos_title: "🚨 రక్ష రైడ్ SOS",
      sos_call112: "112కి కాల్ చేయండి", sos_calltrusted: "విశ్వసనీయ సంప్రదింపుకు కాల్ చేయండి", sos_sendloc: "SOS స్థానం పంపండి",
      sos_sharelive: "ప్రత్యక్ష స్థానం పంచుకోండి", sos_findhelp: "సమీప సహాయం కనుగొనండి", sos_findpolice: "పోలీస్ స్టేషన్ కనుగొనండి",
      sos_alarm: "అలారం సక్రియం చేయండి", sos_close: "అత్యవసర మోడ్ మూసివేయండి",
      link_title: "అత్యవసర ప్రత్యక్ష ట్రాకింగ్ లింక్", link_active: "క్రియాశీల హెచ్చరిక",
      link_passenger: "ప్రయాణీకుడు:", link_vehicle: "వాహనం:", link_location: "స్థానం:", link_close: "మూసివేయండి",
      fam_title: "కుటుంబ భద్రత", fam_safe: "సురక్షితం", fam_vehicle: "వాహనం", fam_eta: "అంచనా సమయం",
      fam_route: "మార్గం స్థితి", fam_dest: "గమ్యం", fam_view: "స్థానం చూడండి", fam_call: "కాల్ చేయండి",
      fam_emergency: "అత్యవసరం", fam_notifications: "నోటిఫికేషన్లు",
      admin_title: "అధికార డాష్‌బోర్డ్", admin_active: "క్రియాశీల ప్రయాణాలు", admin_safejourneys: "🟢 సురక్షిత ప్రయాణాలు",
      admin_alerts: "⚠️ భద్రతా హెచ్చరికలు", admin_sos: "🚨 క్రియాశీల SOS", admin_incidents: "📋 నివేదించిన సంఘటనలు",
      admin_drivers: "🚗 ధృవీకరించిన డ్రైవర్లు", admin_livealerts: "ప్రత్యక్ష అత్యవసర సంఘటనలు", admin_analytics: "మహిళా భద్రతా విశ్లేషణ",
      chart_journeys: "ప్రయాణాలు", chart_arrivals: "సురక్షిత రాకలు", chart_deviation: "విచలనాలు",
      chart_checkins: "తనిఖీలు", chart_sos: "SOS", chart_incidents: "సంఘటనలు",
    }
  };

  function t(key, fallbackEl) {
    if (state.lang === "en") return null;
    return I18N.te[key] || null;
  }

  function applyI18n() {
    document.body.dataset.lang = state.lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (state.lang === "en") {
        if (el.dataset.enOriginal) el.textContent = el.dataset.enOriginal;
        return;
      }
      if (!el.dataset.enOriginal) el.dataset.enOriginal = el.textContent;
      const val = I18N.te[key];
      if (val) el.textContent = val;
    });
    document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
      const key = el.getAttribute("data-i18n-ph");
      if (state.lang === "en") {
        if (el.dataset.enPh) el.setAttribute("placeholder", " ");
        return;
      }
      const val = I18N.te[key];
      if (val) el.setAttribute("placeholder", " ");
    });
  }

  /* ------------------------------------------------------------------
     UTIL
     ------------------------------------------------------------------ */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.from((root || document).querySelectorAll(sel)); }

  function showToast(msg) {
    const toast = $("#toast");
    toast.textContent = msg;
    toast.classList.add("is-visible");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toast.classList.remove("is-visible"), 2600);
  }

  function nowTime() {
    const d = new Date();
    return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }

  function closeAllModals() {
    $all(".modal-backdrop").forEach((m) => m.classList.remove("is-open"));
  }

  /* ------------------------------------------------------------------
     TOP-LEVEL SCREEN SWITCHING (home / family / admin)
     ------------------------------------------------------------------ */
  function setRole(role) {
    state.role = role;
    $all(".role-btn").forEach((b) => b.classList.toggle("is-active", b.dataset.role === role));
    $all(".screen").forEach((s) => s.classList.remove("is-active"));
    document.getElementById("screen-" + role).classList.add("is-active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  $all(".role-btn").forEach((btn) => {
    btn.addEventListener("click", () => setRole(btn.dataset.role));
  });

  $("#brandHome").addEventListener("click", () => setRole("passenger"));

  $all(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.lang = btn.dataset.lang;
      $all(".lang-btn").forEach((b) => b.classList.toggle("is-active", b === btn));
      applyI18n();
    });
  });

  /* ------------------------------------------------------------------
     APP SHELL (phone) — open / close / navigation stack
     ------------------------------------------------------------------ */
  const appShell = $("#appShell");
  const phoneBody = $("#phoneBody");
  const bottomNav = $("#phoneBottomNav");

  const JOURNEY_PANES = ["track", "timeline", "nearby", "voicesos"];

  function openApp() {
    appShell.classList.add("is-open");
    resetJourney();
    goToPane("register", false);
  }

  function closeApp() {
    appShell.classList.remove("is-open");
    stopProgressTimer();
  }

  function resetJourney() {
    state.paneStack = [];
    state.journeyActive = false;
    state.progress = 8;
    state.nightMode = false;
    $("#nightBanner").classList.add("is-hidden");
    $("#verifyResult").classList.add("is-hidden");
    $("#qrScanner").classList.remove("is-hidden");
    $("#regForm").reset();
    $all(".timeline__item").forEach((li) => {
      if (["checkin", "reached", "safearrival"].includes(li.dataset.key)) li.classList.remove("is-done");
    });
    $("#timelineList [data-key='alert']").classList.add("is-hidden");
    updateProgressVisual();
  }

  function goToPane(name, pushHistory) {
    if (pushHistory !== false) state.paneStack.push(name);
    else state.paneStack = [name];

    $all(".pane").forEach((p) => p.classList.toggle("is-active", p.dataset.pane === name));
    bottomNav.classList.toggle("is-visible", JOURNEY_PANES.includes(name) && state.journeyActive);
    $all(".bnav-btn[data-goto]").forEach((b) => b.classList.toggle("is-active", b.dataset.goto === name));
    phoneBody.scrollTop = 0;

    const titles = {
      register: "reg_title", verify: "verify_title", plan: "plan_title", startnotice: "app_title",
      track: "app_title", timeline: "timeline_title", arrival: "arrival_title",
      arrivalconfirmed: "safeconf_title", feedback: "fb_title", report: "report_title",
      nearby: "nearby_title", voicesos: "voice_title"
    };
    const titleKey = titles[name];
    $("#phoneTitle").textContent = (state.lang === "te" && titleKey && I18N.te[titleKey]) ? I18N.te[titleKey] : "Raksha Ride";
  }

  function goBack() {
    if (state.paneStack.length > 1) {
      state.paneStack.pop();
      const prev = state.paneStack[state.paneStack.length - 1];
      goToPane(prev, false);
    } else {
      closeApp();
    }
  }

  $("#ctaStart").addEventListener("click", openApp);
  $("#ctaHow").addEventListener("click", () => {
    document.getElementById("how-it-protects").scrollIntoView({ behavior: "smooth" });
  });
  $("#phoneClose").addEventListener("click", closeApp);
  $("#phoneBack").addEventListener("click", goBack);

  $all("[data-goto]").forEach((el) => {
    el.addEventListener("click", () => goToPane(el.dataset.goto));
  });

  /* ------------------------------------------------------------------
     REGISTRATION -> VERIFY
     ------------------------------------------------------------------ */
  $("#regForm").addEventListener("submit", (e) => {
    e.preventDefault();
    state.passengerName = $("#regName").value.trim() || "Passenger";
    state.guardianName = $("#regGuardian").value.trim() || "Guardian";
    goToPane("verify");
  });

  /* ------------------------------------------------------------------
     QR VERIFICATION
     ------------------------------------------------------------------ */
  $("#btnScanQr").addEventListener("click", () => {
    const btn = $("#btnScanQr");
    btn.disabled = true;
    btn.textContent = state.lang === "te" ? "స్కాన్ అవుతోంది..." : "Scanning...";
    setTimeout(() => {
      $("#qrScanner").classList.add("is-hidden");
      $("#verifyResult").classList.remove("is-hidden");
      btn.disabled = false;
    }, 1400);
  });

  $("#btnHistory").addEventListener("click", () => {
    showToast(state.lang === "te" ? "ఫిర్యాదులు నమోదు కాలేదు." : "No complaints on record for this driver.");
  });

  $("#btnContinueJourney").addEventListener("click", () => goToPane("plan"));

  /* ------------------------------------------------------------------
     JOURNEY PLANNING -> START NOTICE
     ------------------------------------------------------------------ */
  $("#planForm").addEventListener("submit", (e) => {
    e.preventDefault();
    state.from = $("#planSource").value.trim() || state.from;
    state.to = $("#planDest").value.trim() || state.to;

    $("#startPassenger").textContent = state.passengerName;
    $("#startVehicle").textContent = state.vehicle;
    $("#startDriver").textContent = state.driverName;
    $("#startFrom").textContent = state.from;
    $("#startTo").textContent = state.to;
    $("#famPassenger").textContent = state.passengerName;

    addFamilyNotice(
      "🚗", state.lang === "te" ? "ప్రయాణం ప్రారంభమైంది" : "Journey Started",
      `${state.passengerName} ${state.lang === "te" ? "ప్రయాణం ప్రారంభించింది" : "started her journey from " + state.from + " to " + state.to + "."}`,
      ""
    );

    goToPane("startnotice");
  });

  $("#btnViewLive").addEventListener("click", () => {
    state.journeyActive = true;
    goToPane("track");
    startProgressTimer();
  });

  /* ------------------------------------------------------------------
     LIVE TRACKING SIMULATION
     ------------------------------------------------------------------ */
  function updateProgressVisual() {
    const pct = Math.min(state.progress, 100);
    $("#progressFill").style.width = pct + "%";

    // move vehicle marker along the SVG path
    const path = document.getElementById("mapRoute");
    const total = path.getTotalLength();
    const point = path.getPointAtLength((pct / 100) * total);
    $("#vehicleMarker").setAttribute("transform", `translate(${point.x},${point.y})`);

    const progressPath = document.getElementById("mapRouteProgress");
    const len = progressPath.getTotalLength();
    progressPath.style.strokeDasharray = len;
    progressPath.style.strokeDashoffset = len - (pct / 100) * len;

    const famPath = document.getElementById("famRouteProgress");
    if (famPath) {
      const flen = famPath.getTotalLength();
      famPath.style.strokeDasharray = flen;
      famPath.style.strokeDashoffset = flen - (pct / 100) * flen;
      const fvm = document.getElementById("famVehicleMarker");
      const fpt = famPath.getPointAtLength((pct / 100) * flen);
      if (fvm) fvm.setAttribute("transform", `translate(${fpt.x},${fpt.y})`);
    }

    const totalMin = 70;
    const remainMin = Math.max(1, Math.round(totalMin * (1 - pct / 100)));
    const remainKm = Math.max(1, Math.round(54 * (1 - pct / 100)));
    $("#etaVal").textContent = remainMin + " min";
    $("#distRemainVal").textContent = remainKm + " km";
    $("#famEta").textContent = remainMin + " min";
  }

  function startProgressTimer() {
    stopProgressTimer();
    state.progressTimer = setInterval(() => {
      if (!state.journeyActive) return;
      state.progress += 2;
      if (state.progress >= 96) {
        state.progress = 96;
        stopProgressTimer();
      }
      updateProgressVisual();
    }, 2200);
  }

  function stopProgressTimer() {
    if (state.progressTimer) clearInterval(state.progressTimer);
    state.progressTimer = null;
  }

  /* ------------------------------------------------------------------
     FAMILY NOTICE FEED
     ------------------------------------------------------------------ */
  function addFamilyNotice(icon, title, body, variant) {
    const feed = $("#familyNoticeFeed");
    const item = document.createElement("div");
    item.className = "notice-feed-item" + (variant ? " notice-feed-item--" + variant : "");
    item.innerHTML = `<b>${icon} ${title}</b><span>${body}</span><time>${nowTime()}</time>`;
    feed.appendChild(item);
    feed.scrollTop = feed.scrollHeight;
  }

  function addAdminAlert(title, reason) {
    const feed = $("#adminAlertFeed");
    const card = document.createElement("div");
    card.className = "admin-alert-card";
    card.innerHTML = `
      <div class="admin-alert-card__info">
        <span class="admin-alert-card__title">🚨 ${title}</span>
        <span>👧 ${state.passengerName} · 🚗 ${state.vehicle}</span>
        <span>⚠️ ${reason}</span>
      </div>
      <div class="admin-alert-card__actions">
        <button class="btn btn--ghost">📍 View</button>
        <button class="btn btn--ghost">📞 Contact</button>
      </div>`;
    feed.appendChild(card);
  }

  /* ------------------------------------------------------------------
     ALERT MODAL (deviation / stop) — shared
     ------------------------------------------------------------------ */
  const alertBackdrop = $("#alertModalBackdrop");

  function openAlertModal(type) {
    const icon = $("#alertModalIcon");
    const title = $("#alertModalTitle");
    const body = $("#alertModalBody");

    if (type === "deviation") {
      icon.textContent = "⚠️";
      title.textContent = state.lang === "te" ? "మార్గం విచలనం గుర్తించబడింది" : "Route Deviation Detected";
      body.textContent = state.lang === "te" ? "మీ వాహనం ప్రణాళికాబద్ధమైన మార్గం నుండి తప్పుకుంటున్నట్లు కనిపిస్తోంది." : "Your vehicle appears to be moving away from the planned route.";
      $("#routeStatusChip").innerHTML = `<span class="dot dot--warn"></span> ${state.lang === "te" ? "విచలనం" : "Deviation"}`;
    } else if (type === "stop") {
      icon.textContent = "🛑";
      title.textContent = state.lang === "te" ? "ఊహించని ఆగు" : "Unexpected Stop";
      body.textContent = state.lang === "te" ? "మీరు సురక్షితంగా ఉన్నారా?" : "The vehicle has been stationary longer than expected. Are you safe?";
    }
    alertBackdrop.dataset.type = type;
    alertBackdrop.classList.add("is-open");
  }

  $("#simDeviation").addEventListener("click", () => openAlertModal("deviation"));
  $("#simStop").addEventListener("click", () => openAlertModal("stop"));

  $("#alertImSafe").addEventListener("click", () => {
    alertBackdrop.classList.remove("is-open");
    $("#routeStatusChip").innerHTML = `<span class="dot dot--safe"></span> <span data-i18n="track_normal">${state.lang === "te" ? I18N.te.track_normal : "Normal"}</span>`;
    showToast(state.lang === "te" ? "మీరు సురక్షితంగా ఉన్నారని నిర్ధారించారు" : "Marked as safe");
    addFamilyNotice("😊", state.lang === "te" ? "సురక్షిత నవీకరణ" : "Safe Update",
      `${state.passengerName} ${state.lang === "te" ? "సురక్షితంగా ఉన్నట్లు నిర్ధారించింది." : "has confirmed that she is safe."}`, "safe");
  });

  $("#alertNeedHelp").addEventListener("click", () => {
    alertBackdrop.classList.remove("is-open");
    triggerSOS(alertBackdrop.dataset.type === "deviation" ? "Route deviation" : "Unexpected stop");
  });

  $("#alertViewLoc").addEventListener("click", () => showToast(state.lang === "te" ? "స్థానం మ్యాప్‌లో చూపబడింది" : "Location shown on map"));
  $("#alertCall112").addEventListener("click", () => showToast(state.lang === "te" ? "112కి కాల్ చేస్తోంది..." : "Calling 112..."));

  /* ------------------------------------------------------------------
     SAFETY CHECK-IN MODAL
     ------------------------------------------------------------------ */
  const checkinBackdrop = $("#checkinBackdrop");
  $("#simCheckin").addEventListener("click", () => checkinBackdrop.classList.add("is-open"));

  $("#checkinSafe").addEventListener("click", () => {
    checkinBackdrop.classList.remove("is-open");
    $("#timelineList [data-key='checkin']").classList.add("is-done");
    showToast(state.lang === "te" ? "సురక్షిత నవీకరణ పంపబడింది" : "Safe update sent to family");
    addFamilyNotice("😊", state.lang === "te" ? "సురక్షిత నవీకరణ" : "Safe Update",
      `${state.passengerName} ${state.lang === "te" ? "సురక్షితంగా ఉన్నట్లు నిర్ధారించింది." : "has confirmed that she is safe."}`, "safe");
  });

  $("#checkinHelp").addEventListener("click", () => {
    checkinBackdrop.classList.remove("is-open");
    triggerSOS("Safety check-in — help requested");
  });

  /* ------------------------------------------------------------------
     HIGH-RISK AREA MODAL
     ------------------------------------------------------------------ */
  const riskBackdrop = $("#riskBackdrop");
  $("#simRisk").addEventListener("click", () => riskBackdrop.classList.add("is-open"));
  $("#riskClose").addEventListener("click", () => riskBackdrop.classList.remove("is-open"));
  $all(".risk-link").forEach((btn) => btn.addEventListener("click", () => showToast(state.lang === "te" ? "మ్యాప్‌లో తెరవబడుతోంది..." : "Opening on map...")));

  /* ------------------------------------------------------------------
     NIGHT MODE
     ------------------------------------------------------------------ */
  $("#simNight").addEventListener("click", () => {
    state.nightMode = !state.nightMode;
    $("#nightBanner").classList.toggle("is-hidden", !state.nightMode);
    if (state.nightMode) showToast(state.lang === "te" ? "రాత్రి భద్రతా మోడ్ ఆన్ చేయబడింది" : "Night Safety Mode activated");
  });

  /* ------------------------------------------------------------------
     ARRIVAL
     ------------------------------------------------------------------ */
  $("#simArrive").addEventListener("click", () => {
    state.progress = 100;
    updateProgressVisual();
    stopProgressTimer();
    $("#timelineList [data-key='reached']").classList.add("is-done");
    goToPane("arrival");
  });

  $("#btnImSafe").addEventListener("click", () => {
    $("#timelineList [data-key='safearrival']").classList.add("is-done");
    goToPane("arrivalconfirmed");
    state.journeyActive = false;
    bottomNav.classList.remove("is-visible");

    addFamilyNotice("❤️", state.lang === "te" ? "సురక్షిత రాక నిర్ధారించబడింది" : "Safe Arrival Confirmed",
      `${state.passengerName} ${state.lang === "te" ? "సురక్షితంగా చేరుకుంది." : "has reached " + state.to + " safely."}`, "safe");
    $("#famStatusChip").innerHTML = `<span class="dot dot--safe"></span> <span>${state.lang === "te" ? I18N.te.fam_safe : "SAFE"}</span>`;
  });

  $("#btnGoFeedback").addEventListener("click", () => goToPane("feedback"));

  /* ------------------------------------------------------------------
     FEEDBACK / REPORT
     ------------------------------------------------------------------ */
  let starVal = 0;
  $all(".star").forEach((star) => {
    star.addEventListener("click", () => {
      starVal = parseInt(star.dataset.val, 10);
      $all(".star").forEach((s) => s.classList.toggle("is-active", parseInt(s.dataset.val, 10) <= starVal));
    });
  });

  $("#btnReportIssue").addEventListener("click", () => goToPane("report"));

  let reportVal = null;
  $all(".report-opt").forEach((opt) => {
    opt.addEventListener("click", () => {
      reportVal = opt.dataset.val;
      $all(".report-opt").forEach((o) => o.classList.toggle("is-active", o === opt));
    });
  });

  $("#btnSubmitReport").addEventListener("click", () => {
    showToast(state.lang === "te" ? "నివేదిక సమర్పించబడింది" : "Report submitted privately");
    goBack();
  });

  $("#btnFbDone").addEventListener("click", () => {
    showToast(state.lang === "te" ? "ధన్యవాదాలు!" : "Thanks for riding safe!");
    closeApp();
  });

  /* ------------------------------------------------------------------
     NEARBY / VOICE SOS
     ------------------------------------------------------------------ */
  const voiceOrb = $("#voiceOrb");
  voiceOrb.addEventListener("click", () => {
    voiceOrb.classList.add("is-listening");
    $("#voiceHint").textContent = state.lang === "te" ? "వింటోంది..." : "Listening...";
    setTimeout(() => {
      voiceOrb.classList.remove("is-listening");
      $("#voiceHint").textContent = state.lang === "te" ? "\"సహాయం చేయండి\" గుర్తించబడింది" : "Heard: \"Help me\"";
      setTimeout(() => triggerSOS("Voice SOS — \"Help me\""), 900);
    }, 1800);
  });

  /* ------------------------------------------------------------------
     SOS — bottom nav button + full emergency overlay
     ------------------------------------------------------------------ */
  const sosOverlay = $("#sosOverlay");

  function triggerSOS(reason) {
    closeAllModals();
    $("#sosName").textContent = state.passengerName;
    $("#sosVehicle").textContent = state.vehicle;
    $("#sosDriver").textContent = state.driverName;
    $("#sosLoc").textContent = "Near " + state.to;
    $("#sosRoute").textContent = state.from + " → " + state.to;
    $("#sosTime").textContent = nowTime();
    sosOverlay.classList.add("is-open");

    $("#timelineList [data-key='alert']").classList.remove("is-hidden");

    addFamilyNotice("🚨", state.lang === "te" ? "అత్యవసర హెచ్చరిక" : "Emergency Alert",
      `${state.passengerName} — ${reason || "SOS"}.`, "danger");
    addAdminAlert(state.lang === "te" ? "క్రియాశీల SOS" : "Active SOS", reason || "SOS triggered");
    showToast(state.lang === "te" ? "అత్యవసర సంప్రదింపుకు తెలియజేయబడింది" : "Trusted contact notified");
  }

  $("#sosButton").addEventListener("click", () => triggerSOS("Manual SOS activation"));
  $("#sosClose").addEventListener("click", () => sosOverlay.classList.remove("is-open"));

  $("#sosCall112").addEventListener("click", () => showToast(state.lang === "te" ? "112కి కాల్ చేస్తోంది..." : "Calling 112..."));
  $("#sosCallContact").addEventListener("click", () => showToast(state.lang === "te" ? "విశ్వసనీయ సంప్రదింపుకు కాల్ చేస్తోంది..." : "Calling trusted contact..."));
  $("#sosSendLoc").addEventListener("click", () => showToast(state.lang === "te" ? "SOS స్థానం పంపబడింది" : "SOS location sent"));
  $("#sosShareLive").addEventListener("click", () => $("#linkBackdrop").classList.add("is-open"));
  $("#sosFindHelp").addEventListener("click", () => { sosOverlay.classList.remove("is-open"); goToPane("nearby"); });
  $("#sosFindPolice").addEventListener("click", () => { sosOverlay.classList.remove("is-open"); goToPane("nearby"); });

  $("#linkClose").addEventListener("click", () => $("#linkBackdrop").classList.remove("is-open"));

  $("#btnAlarm").addEventListener("click", () => {
    state.alarmOn = !state.alarmOn;
    const btn = $("#btnAlarm");
    if (state.alarmOn) {
      btn.innerHTML = `<span>🛑</span> <span>${state.lang === "te" ? "అలారం ఆపండి" : "Stop Alarm"}</span>`;
      btn.classList.add("btn--danger");
      document.body.classList.add("alarm-active");
    } else {
      btn.innerHTML = `<span>🔊</span> <span data-i18n="sos_alarm">${state.lang === "te" ? I18N.te.sos_alarm : "Activate Alarm"}</span>`;
      btn.classList.remove("btn--danger");
      document.body.classList.remove("alarm-active");
    }
  });

  /* ------------------------------------------------------------------
     INIT
     ------------------------------------------------------------------ */
  updateProgressVisual();
  applyI18n();
})();
