// ============================================================
// RAKSHA RIDE — App logic (v2)
// ============================================================

// ------------------------------------------------------------
// 1. TRANSLATIONS (base set carried over; new keys default to
//    English where a language hasn't been extended yet — t()
//    below always falls back to English so nothing breaks)
// ------------------------------------------------------------
const translations = {
  en: {
    appName: "Raksha Ride", corePhrase: "when a ride becomes a risk", tagline: "Safe Journey. Smart Protection.",
    heroDesc: "A smart public transport safety platform designed to protect women throughout their journey.",
    startJourney: "Start Journey", login: "Login", register: "Register", logout: "Logout",
    chooseLanguage: "Choose Your Language", applyLanguage: "Apply Language",
    home: "Home", journey: "Journey", track: "Track", sos: "Emergency", profile: "Profile",
    goodMorning: "Good Morning", protectionActive: "Protection Active", safe: "SAFE",
    liveJourney: "Live Journey", familyTracking: "Family Tracking", journeyHistory: "Journey History",
    fullName: "Full Name", phone: "Phone Number", email: "Email", password: "Password",
    role: "Role", guardianName: "Parent/Guardian Name", guardianPhone: "Parent/Guardian Phone",
    emergencyContact: "Emergency Contact", preferredLanguage: "Preferred Language",
    passenger: "Passenger", parent: "Parent / Trusted Contact", driver: "Driver",
    forgotPassword: "Forgot Password", signUp: "Sign Up", alreadyHaveAccount: "Already have an account? Login",
    noAccount: "Don't have an account? Register", sendResetLink: "Send Reset Link",
    driverVerified: "Driver Verification", identityVerified: "Identity Verified", vehicleVerified: "Vehicle Verified",
    licenseVerified: "License Verified", safetyRating: "Safety Rating", confirmDriver: "Confirm Driver",
    scanQr: "Scan Driver / Vehicle QR", from: "From", to: "To", distance: "Distance",
    estimatedTime: "Estimated Time", plannedRoute: "Planned Route", destination: "Destination",
    journeyStarted: "Journey Started", journeyMonitoringActive: "Journey Monitoring ACTIVE",
    viewLiveLocation: "View Live Location", journeySafe: "Journey Safe", eta: "ETA", routeStatus: "Route Status",
    familySafety: "Family Safety", viewLocation: "View Location", call: "Call", emergency: "Emergency",
    routeDeviation: "Route Deviation", areYouSafe: "Are you safe?", imSafe: "I'm Safe", needHelp: "I Need Help",
    call112: "Call 112", safetyConfirmed: "Safety confirmed. Your trusted contact has been informed.",
    unexpectedStop: "Unexpected Stop", nightSafetyMode: "Night Safety Mode", extraMonitoring: "Extra journey monitoring active.",
    highRiskArea: "Safety Alert", highRiskDesc: "You are entering a marked high-risk area. Stay alert and keep journey monitoring active.",
    emergencyHelp: "Emergency Help", callTrustedContact: "Call Trusted Contact", sendSosLocation: "Send SOS Location",
    shareLiveLocation: "Share Live Location", findPolice: "Find Police", findHospital: "Find Hospital",
    safeArrival: "Safe Arrival", reachedSafely: "You have reached safely.", journeyCompleted: "Journey completed successfully.",
    iArrivedSafely: "End Journey", protectionCompleted: "Protection Completed",
    rateYourDriver: "Rate Your Driver", comments: "Comments", reportSafetyConcern: "Report Safety Concern",
    submit: "Submit", driverMisconduct: "Driver Misconduct", harassment: "Harassment",
    suspiciousBehaviour: "Suspicious Behaviour", unsafeRoute: "Unsafe Route", unprofessional: "Unprofessional Behaviour",
    otherConcern: "Other Safety Concern", adminDashboard: "Raksha Ride Admin", activeJourneys: "Active Journeys",
    safeJourneys: "Safe Journeys", emergencyAlerts: "Emergency Alerts", sosAlerts: "SOS Alerts",
    verifiedDrivers: "Verified Drivers", reportedIncidents: "Reported Incidents", resolve: "Resolve",
    locationPermissionNeeded: "Location permission is required for live tracking. Please enable location access and try again.",
    notifications: "Notifications", settings: "Settings", demoMode: "Demo Mode",
    protectionCompleteMsg: "Journey Safe", noActionRequired: "No action is required.",
    safetyCheck: "Are you safe?", safetyCheckSent: "Safety confirmation sent. Trusted contact receives an in-app notification.",
    save: "Save", cancel: "Cancel", loading: "Loading...", nearbyHelp: "Nearby Help",
    policeStation: "Police Station", hospital: "Hospital", safePlace: "Safe Place", helpCentre: "Help Centre",
    active: "ACTIVE", vehicle: "Vehicle", time: "Time", status: "Status", emergencyStatus: "Emergency Status",
    stopAlarm: "Stop Alarm", emergencyAlarm: "Emergency Alarm", driverStarted: "has started her journey.",
    daughterSafe: "has reached safely.", welcomeBack: "Welcome Back",
    noActiveJourney: "No active journey right now. Start one from Home.",
    demoGpsNotice: "Demo Mode — using sample location, not your real GPS.",
    gpsRequired: "We couldn't get your real location. Enable location access and try again, or continue in clearly-labelled Demo Mode.",
    continueDemo: "Continue in Demo Mode", tryGpsAgain: "Try GPS Again",
    endJourneyConfirm: "End this journey and mark it complete?",
    destinationReachedMsg: "You're near your destination. Ready to end the journey?",
    familyLinking: "Family Linking", addFamilyMember: "Add a Passenger to Watch",
    passengerPhone: "Passenger's Phone Number", sendRequest: "Send Request",
    pendingRequests: "Pending Requests", accept: "Accept", decline: "Decline",
    noLinkedPassengers: "No linked passengers yet. Add one above.",
    linkRequestSent: "Request sent. They'll need to accept it.",
    editProfile: "Edit Profile", emergencyContacts: "Emergency Contacts", addContact: "Add Contact",
    contactName: "Contact Name", contactPhone: "Contact Phone", contactRelation: "Relationship",
    skip: "Skip", selectRatingFirst: "Please select a star rating, or tap Skip.",
    shareLinkCopied: "Share link copied — send it to whoever you'd like to see your location.",
    locationShared: "Current location shared.", viewingSharedLocation: "Viewing Shared Location",
    gpsLive: "GPS Live", gpsWeak: "GPS Weak", gpsUnavailable: "GPS Unavailable",
    notVerified: "Not Verified", verificationWarning: "This driver or vehicle hasn't completed full verification yet.",
    demoTag: "DEMO JOURNEY", noHistory: "No completed journeys yet.",
  },
  te: {
    appName: "రక్ష రైడ్", corePhrase: "ప్రయాణం ప్రమాదంగా మారినప్పుడు", tagline: "సురక్షిత ప్రయాణం. స్మార్ట్ రక్షణ.",
    heroDesc: "మహిళల ప్రయాణాన్ని పూర్తిగా రక్షించే స్మార్ట్ ప్రజా రవాణా భద్రతా వేదిక.",
    startJourney: "ప్రయాణం ప్రారంభించండి", login: "లాగిన్", register: "నమోదు", logout: "లాగ్ అవుట్",
    chooseLanguage: "మీ భాషను ఎంచుకోండి", applyLanguage: "భాషను వర్తింపజేయండి",
    home: "హోమ్", journey: "ప్రయాణం", track: "ట్రాకింగ్", sos: "అత్యవసరం", profile: "ప్రొఫైల్",
    goodMorning: "శుభోదయం", protectionActive: "రక్షణ సక్రియంగా ఉంది", safe: "సురక్షితం",
    liveJourney: "ప్రత్యక్ష ప్రయాణం", familyTracking: "కుటుంబ ట్రాకింగ్", journeyHistory: "ప్రయాణ చరిత్ర",
    fullName: "పూర్తి పేరు", phone: "ఫోన్ నంబర్", email: "ఇమెయిల్", password: "పాస్‌వర్డ్",
    role: "పాత్ర", guardianName: "తల్లిదండ్రుల పేరు", guardianPhone: "తల్లిదండ్రుల ఫోన్",
    emergencyContact: "అత్యవసర సంప్రదింపు", preferredLanguage: "ఇష్టపడే భాష",
    passenger: "ప్రయాణికురాలు", parent: "తల్లిదండ్రులు / విశ్వసనీయ సంప్రదింపు", driver: "డ్రైవర్",
    forgotPassword: "పాస్‌వర్డ్ మర్చిపోయారా", signUp: "నమోదు చేసుకోండి", alreadyHaveAccount: "ఇప్పటికే ఖాతా ఉందా? లాగిన్ చేయండి",
    noAccount: "ఖాతా లేదా? నమోదు చేసుకోండి", sendResetLink: "రీసెట్ లింక్ పంపండి",
    driverVerified: "డ్రైవర్ ధృవీకరణ", identityVerified: "గుర్తింపు ధృవీకరించబడింది", vehicleVerified: "వాహనం ధృవీకరించబడింది",
    licenseVerified: "లైసెన్స్ ధృవీకరించబడింది", safetyRating: "భద్రతా రేటింగ్", confirmDriver: "డ్రైవర్‌ని నిర్ధారించండి",
    scanQr: "డ్రైవర్ / వాహన QR స్కాన్ చేయండి", from: "నుండి", to: "వరకు", distance: "దూరం",
    estimatedTime: "అంచనా సమయం", plannedRoute: "ప్రణాళికాబద్ధ మార్గం", destination: "గమ్యస్థానం",
    journeyStarted: "ప్రయాణం ప్రారంభమైంది", journeyMonitoringActive: "ప్రయాణ పర్యవేక్షణ సక్రియం",
    viewLiveLocation: "ప్రత్యక్ష స్థానాన్ని చూడండి", journeySafe: "ప్రయాణం సురక్షితంగా పర్యవేక్షించబడుతోంది", eta: "చేరే సమయం", routeStatus: "మార్గం స్థితి",
    familySafety: "కుటుంబ భద్రత", viewLocation: "స్థానాన్ని చూడండి", call: "కాల్ చేయండి", emergency: "అత్యవసరం",
    routeDeviation: "మార్గంలో మార్పు గుర్తించబడింది", areYouSafe: "మీరు సురక్షితంగా ఉన్నారా?", imSafe: "నేను సురక్షితంగా ఉన్నాను", needHelp: "నాకు సహాయం కావాలి",
    call112: "112కి కాల్ చేయండి", safetyConfirmed: "భద్రత నిర్ధారించబడింది. మీ విశ్వసనీయ సంప్రదింపుకు తెలియజేయబడింది.",
    unexpectedStop: "అనుకోని ఆగిపోవడం", nightSafetyMode: "రాత్రి భద్రతా మోడ్", extraMonitoring: "అదనపు ప్రయాణ పర్యవేక్షణ సక్రియం.",
    highRiskArea: "భద్రతా హెచ్చరిక", highRiskDesc: "మీరు గుర్తించిన అధిక-ప్రమాద ప్రాంతంలోకి ప్రవేశిస్తున్నారు. అప్రమత్తంగా ఉండి పర్యవేక్షణను కొనసాగించండి.",
    emergencyHelp: "అత్యవసర సహాయం", callTrustedContact: "విశ్వసనీయ సంప్రదింపుకు కాల్ చేయండి", sendSosLocation: "SOS స్థానాన్ని పంపండి",
    shareLiveLocation: "ప్రత్యక్ష స్థానాన్ని పంచుకోండి", findPolice: "పోలీసును కనుగొనండి", findHospital: "ఆసుపత్రిని కనుగొనండి",
    safeArrival: "సురక్షిత రాక", reachedSafely: "మీరు సురక్షితంగా చేరుకున్నారు.", journeyCompleted: "ప్రయాణం విజయవంతంగా పూర్తయింది.",
    iArrivedSafely: "ప్రయాణం ముగించండి", protectionCompleted: "రక్షణ పూర్తయింది",
    rateYourDriver: "మీ డ్రైవర్‌ను రేట్ చేయండి", comments: "వ్యాఖ్యలు", reportSafetyConcern: "భద్రతా సమస్యను నివేదించండి",
    submit: "సమర్పించండి", driverMisconduct: "డ్రైవర్ దుష్ప్రవర్తన", harassment: "వేధింపులు",
    suspiciousBehaviour: "అనుమానాస్పద ప్రవర్తన", unsafeRoute: "అసురక్షిత మార్గం", unprofessional: "అవృత్తిపరమైన ప్రవర్తన",
    otherConcern: "ఇతర భద్రతా సమస్య", adminDashboard: "రక్ష రైడ్ అడ్మిన్", activeJourneys: "సక్రియ ప్రయాణాలు",
    safeJourneys: "సురక్షిత ప్రయాణాలు", emergencyAlerts: "అత్యవసర హెచ్చరికలు", sosAlerts: "SOS హెచ్చరికలు",
    verifiedDrivers: "ధృవీకరించబడిన డ్రైవర్లు", reportedIncidents: "నివేదించిన సంఘటనలు", resolve: "పరిష్కరించండి",
    locationPermissionNeeded: "ప్రత్యక్ష ట్రాకింగ్ కోసం స్థాన అనుమతి అవసరం. దయచేసి స్థాన యాక్సెస్‌ను ప్రారంభించి మళ్లీ ప్రయత్నించండి.",
    notifications: "నోటిఫికేషన్‌లు", settings: "సెట్టింగ్‌లు", demoMode: "డెమో మోడ్",
    protectionCompleteMsg: "ప్రయాణం సురక్షితం", noActionRequired: "ఎటువంటి చర్య అవసరం లేదు.",
    safetyCheck: "మీరు సురక్షితంగా ఉన్నారా?", safetyCheckSent: "భద్రతా నిర్ధారణ పంపబడింది.",
    save: "సేవ్ చేయండి", cancel: "రద్దు చేయండి", loading: "లోడ్ అవుతోంది...", nearbyHelp: "సమీప సహాయం",
    policeStation: "పోలీస్ స్టేషన్", hospital: "ఆసుపత్రి", safePlace: "సురక్షిత స్థలం", helpCentre: "సహాయ కేంద్రం",
    active: "సక్రియం", vehicle: "వాహనం", time: "సమయం", status: "స్థితి", emergencyStatus: "అత్యవసర స్థితి",
    stopAlarm: "అలారం ఆపండి", emergencyAlarm: "అత్యవసర అలారం", driverStarted: "ప్రయాణం ప్రారంభించింది.",
    daughterSafe: "సురక్షితంగా చేరుకుంది.", welcomeBack: "తిరిగి స్వాగతం",
  },
  hi: {
    appName: "रक्षा राइड", corePhrase: "जब सफर खतरे में बदल जाए", tagline: "सुरक्षित सफर. स्मार्ट सुरक्षा.",
    heroDesc: "महिलाओं की यात्रा की पूरी सुरक्षा के लिए स्मार्ट सार्वजनिक परिवहन सुरक्षा प्लेटफ़ॉर्म.",
    startJourney: "यात्रा शुरू करें", login: "लॉगिन", register: "रजिस्टर करें", logout: "लॉग आउट",
    chooseLanguage: "अपनी भाषा चुनें", applyLanguage: "भाषा लागू करें",
    home: "होम", journey: "यात्रा", track: "ट्रैक", sos: "आपातकाल", profile: "प्रोफ़ाइल",
    goodMorning: "सुप्रभात", protectionActive: "सुरक्षा सक्रिय है", safe: "सुरक्षित",
    liveJourney: "लाइव यात्रा", familyTracking: "परिवार ट्रैकिंग", journeyHistory: "यात्रा इतिहास",
    fullName: "पूरा नाम", phone: "फ़ोन नंबर", email: "ईमेल", password: "पासवर्ड",
    role: "भूमिका", guardianName: "अभिभावक का नाम", guardianPhone: "अभिभावक का फ़ोन",
    emergencyContact: "आपातकालीन संपर्क", preferredLanguage: "पसंदीदा भाषा",
    passenger: "यात्री", parent: "अभिभावक / विश्वसनीय संपर्क", driver: "चालक",
    forgotPassword: "पासवर्ड भूल गए", signUp: "साइन अप करें", alreadyHaveAccount: "पहले से खाता है? लॉगिन करें",
    noAccount: "खाता नहीं है? रजिस्टर करें", sendResetLink: "रीसेट लिंक भेजें",
    driverVerified: "चालक सत्यापन", identityVerified: "पहचान सत्यापित", vehicleVerified: "वाहन सत्यापित",
    licenseVerified: "लाइसेंस सत्यापित", safetyRating: "सुरक्षा रेटिंग", confirmDriver: "चालक की पुष्टि करें",
    scanQr: "चालक / वाहन QR स्कैन करें", from: "से", to: "तक", distance: "दूरी",
    estimatedTime: "अनुमानित समय", plannedRoute: "नियोजित मार्ग", destination: "गंतव्य",
    journeyStarted: "यात्रा शुरू हुई", journeyMonitoringActive: "यात्रा निगरानी सक्रिय",
    viewLiveLocation: "लाइव स्थान देखें", journeySafe: "यात्रा सुरक्षित है", eta: "पहुंचने का समय", routeStatus: "मार्ग स्थिति",
    familySafety: "पारिवारिक सुरक्षा", viewLocation: "स्थान देखें", call: "कॉल करें", emergency: "आपातकाल",
    routeDeviation: "मार्ग से विचलन", areYouSafe: "क्या आप सुरक्षित हैं?", imSafe: "मैं सुरक्षित हूं", needHelp: "मुझे मदद चाहिए",
    call112: "112 पर कॉल करें", safetyConfirmed: "सुरक्षा की पुष्टि हुई. आपके विश्वसनीय संपर्क को सूचित कर दिया गया है.",
    unexpectedStop: "अप्रत्याशित ठहराव", nightSafetyMode: "रात्रि सुरक्षा मोड", extraMonitoring: "अतिरिक्त यात्रा निगरानी सक्रिय.",
    highRiskArea: "सुरक्षा चेतावनी", highRiskDesc: "आप एक चिन्हित उच्च-जोखिम क्षेत्र में प्रवेश कर रहे हैं. सतर्क रहें.",
    emergencyHelp: "आपातकालीन सहायता", callTrustedContact: "विश्वसनीय संपर्क को कॉल करें", sendSosLocation: "SOS स्थान भेजें",
    shareLiveLocation: "लाइव स्थान साझा करें", findPolice: "पुलिस खोजें", findHospital: "अस्पताल खोजें",
    safeArrival: "सुरक्षित पहुंच", reachedSafely: "आप सुरक्षित पहुंच गए हैं.", journeyCompleted: "यात्रा सफलतापूर्वक पूर्ण हुई.",
    iArrivedSafely: "यात्रा समाप्त करें", protectionCompleted: "सुरक्षा पूर्ण",
    rateYourDriver: "अपने चालक को रेट करें", comments: "टिप्पणियां", reportSafetyConcern: "सुरक्षा चिंता की रिपोर्ट करें",
    submit: "जमा करें", driverMisconduct: "चालक का दुर्व्यवहार", harassment: "उत्पीड़न",
    suspiciousBehaviour: "संदिग्ध व्यवहार", unsafeRoute: "असुरक्षित मार्ग", unprofessional: "अव्यावसायिक व्यवहार",
    otherConcern: "अन्य सुरक्षा चिंता", adminDashboard: "रक्षा राइड एडमिन", activeJourneys: "सक्रिय यात्राएं",
    safeJourneys: "सुरक्षित यात्राएं", emergencyAlerts: "आपातकालीन अलर्ट", sosAlerts: "SOS अलर्ट",
    verifiedDrivers: "सत्यापित चालक", reportedIncidents: "रिपोर्ट की गई घटनाएं", resolve: "समाधान करें",
    locationPermissionNeeded: "लाइव ट्रैकिंग के लिए स्थान अनुमति आवश्यक है.",
    notifications: "सूचनाएं", settings: "सेटिंग्स", demoMode: "डेमो मोड",
    protectionCompleteMsg: "यात्रा सुरक्षित", noActionRequired: "किसी कार्रवाई की आवश्यकता नहीं है.",
    safetyCheck: "क्या आप सुरक्षित हैं?", safetyCheckSent: "सुरक्षा पुष्टि भेजी गई.",
    save: "सेव करें", cancel: "रद्द करें", loading: "लोड हो रहा है...", nearbyHelp: "आस-पास सहायता",
    policeStation: "पुलिस स्टेशन", hospital: "अस्पताल", safePlace: "सुरक्षित स्थान", helpCentre: "सहायता केंद्र",
    active: "सक्रिय", vehicle: "वाहन", time: "समय", status: "स्थिति", emergencyStatus: "आपातकालीन स्थिति",
    stopAlarm: "अलार्म बंद करें", emergencyAlarm: "आपातकालीन अलार्म", driverStarted: "ने अपनी यात्रा शुरू कर दी है.",
    daughterSafe: "सुरक्षित पहुंच गई है.", welcomeBack: "वापसी पर स्वागत है",
  },
  ta: {}, kn: {}, ml: {}, mr: {}, bn: {}
};
// (ta/kn/ml/mr/bn keep their v1 phrase sets — merge them back in from your
// previous script.js if you want the full non-English coverage; every key
// not present here simply falls back to English via t().)

const LANG_NAMES = {
  en: "English", te: "తెలుగు — Telugu", hi: "हिन्दी — Hindi", ta: "தமிழ் — Tamil",
  kn: "ಕನ್ನಡ — Kannada", ml: "മലയാളം — Malayalam", mr: "मराठी — Marathi", bn: "বাংলা — Bengali"
};

// ------------------------------------------------------------
// 2. CONSTANTS
// ------------------------------------------------------------
const ASSUMED_SPEED_KMPH = 20;          // city public-transport average, used only for ETA estimate
const DEVIATION_THRESHOLD_M = 600;       // cross-track distance from the planned line before we flag deviation
const STOP_THRESHOLD_M = 40;             // movement below this is "stationary"
const STOP_DURATION_MS = 4 * 60 * 1000;  // how long stationary before "unexpected stop"
const DESTINATION_RADIUS_M = 150;        // geofence radius counted as "arrived"
const DEMO_COORDS = { lat: 17.385, lng: 78.4867, label: "Hyderabad (DEMO)" };

// ------------------------------------------------------------
// 3. APP STATE
// ------------------------------------------------------------
const State = {
  lang: localStorage.getItem("rakshaRideLanguage") || "en",
  session: null, profile: null, currentScreen: "landing",
  activeJourney: null, selectedDriver: null, selectedVehicle: null,
  watchId: null, demoMode: false, checkinTimer: null, selectedRating: 0,
  lastMovementPos: null, lastMovementTime: null, lastGpsUpdateTime: null,
  deviationAlerted: false, stopAlerted: false, destinationReached: false,
  pendingAlert: null, activeSosId: null, gpsWatchdog: null,
  emergencyContacts: [],
};

function t(key) { return (translations[State.lang] && translations[State.lang][key]) || translations.en[key] || key; }

function setLanguage(code) {
  State.lang = code;
  localStorage.setItem("rakshaRideLanguage", code);
  if (State.session && State.profile) Auth.updateProfile(State.session.user.id, { preferred_language: code });
  applyTranslations();
}
function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.getAttribute("data-i18n")); });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => { el.placeholder = t(el.getAttribute("data-i18n-placeholder")); });
}

// ------------------------------------------------------------
// 4. GEO MATH HELPERS
// ------------------------------------------------------------
function toRad(d) { return d * Math.PI / 180; }
function haversineMeters(lat1, lng1, lat2, lng2) {
  const R = 6371000;
  const dLat = toRad(lat2 - lat1), dLng = toRad(lng2 - lng1);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}
// Approximate cross-track (perpendicular) distance of point P from great-circle line A->B, in meters.
function crossTrackDistanceMeters(pLat, pLng, aLat, aLng, bLat, bLng) {
  const R = 6371000;
  const d13 = haversineMeters(aLat, aLng, pLat, pLng) / R;
  const brng13 = bearingRad(aLat, aLng, pLat, pLng);
  const brng12 = bearingRad(aLat, aLng, bLat, bLng);
  return Math.abs(Math.asin(Math.sin(d13) * Math.sin(brng13 - brng12)) * R);
}
function bearingRad(lat1, lng1, lat2, lng2) {
  const y = Math.sin(toRad(lng2 - lng1)) * Math.cos(toRad(lat2));
  const x = Math.cos(toRad(lat1)) * Math.sin(toRad(lat2)) - Math.sin(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.cos(toRad(lng2 - lng1));
  return Math.atan2(y, x);
}
async function geocodeLocation(query) {
  try {
    const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(query)}`;
    const res = await fetch(url, { headers: { "Accept": "application/json" } });
    const data = await res.json();
    if (data && data[0]) return { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) };
  } catch (e) {}
  return null;
}
function getCurrentPosition(opts = {}) {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) { reject({ code: "unsupported" }); return; }
    navigator.geolocation.getCurrentPosition(
      pos => resolve({ lat: pos.coords.latitude, lng: pos.coords.longitude, accuracy: pos.coords.accuracy }),
      err => reject(err),
      { enableHighAccuracy: true, timeout: 10000, ...opts }
    );
  });
}
function gpsErrorMessage(err) {
  if (!err) return t("gpsRequired");
  if (err.code === 1) return "Location permission denied. Please allow location access in your browser settings.";
  if (err.code === 2) return "Your location is currently unavailable (weak GPS/network signal).";
  if (err.code === 3) return "Getting your location timed out. Please try again.";
  return t("gpsRequired");
}

// ------------------------------------------------------------
// 5. ROUTING / UI HELPERS
// ------------------------------------------------------------
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  const el = document.getElementById(id);
  if (el) el.classList.add("active");
  State.currentScreen = id;
  document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
  const nav = document.querySelector(`.nav-item[data-screen="${id}"]`);
  if (nav) nav.classList.add("active");
  window.scrollTo(0, 0);
  const bottomNav = document.getElementById("bottom-nav");
  const authScreens = ["landing", "login", "register", "language-select", "forgot", "shared-location"];
  bottomNav.style.display = (State.session && !authScreens.includes(id)) ? "flex" : "none";
}
function toast(message) {
  const container = document.getElementById("toast-container");
  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = message;
  container.appendChild(el);
  setTimeout(() => el.remove(), 4500);
}
function renderLanguageOptions(containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  Object.keys(LANG_NAMES).forEach(code => {
    const div = document.createElement("div");
    div.className = "lang-option" + (code === State.lang ? " selected" : "");
    div.innerHTML = `<span>${LANG_NAMES[code]}</span><span class="lang-check">✓</span>`;
    div.onclick = () => {
      container.querySelectorAll(".lang-option").forEach(o => o.classList.remove("selected"));
      div.classList.add("selected");
      container.dataset.pendingLang = code;
    };
    container.appendChild(div);
  });
}

// ------------------------------------------------------------
// 6. AUTH
// ------------------------------------------------------------
async function handleRegister(e) {
  e.preventDefault();
  const f = e.target;
  const btn = f.querySelector("button[type=submit]");
  btn.disabled = true; btn.textContent = t("loading");
  const { error } = await Auth.signUp({
    email: f.email.value.trim(), password: f.password.value, fullName: f.fullName.value.trim(),
    phone: f.phone.value.trim(), role: f.role.value, guardianName: f.guardianName.value.trim(),
    guardianPhone: f.guardianPhone.value.trim(), emergencyContact: f.emergencyContact.value.trim(), language: State.lang
  });
  btn.disabled = false; btn.textContent = t("signUp");
  if (error) { toast(error.message); return; }
  toast("Account created! Please check your email if confirmation is required.");
  await refreshSession();
}
async function handleLogin(e) {
  e.preventDefault();
  const f = e.target;
  const btn = f.querySelector("button[type=submit]");
  btn.disabled = true; btn.textContent = t("loading");
  const { error } = await Auth.signIn({ email: f.email.value.trim(), password: f.password.value });
  btn.disabled = false; btn.textContent = t("login");
  if (error) { toast(error.message); return; }
  await refreshSession();
}
async function handleForgotPassword(e) {
  e.preventDefault();
  const email = document.getElementById("resetEmail").value.trim();
  const { error } = await Auth.resetPassword(email);
  toast(error ? error.message : "Password reset link sent to your email.");
}
async function handleLogout() {
  stopLocationWatch();
  await Auth.signOut();
  State.session = null; State.profile = null;
  showScreen("landing");
}
async function refreshSession() {
  const session = await Auth.getSession();
  State.session = session;
  if (session) {
    const { data: profile } = await Auth.getProfile(session.user.id);
    State.profile = profile;
    if (profile && profile.preferred_language) setLanguage(profile.preferred_language);
    await refreshEmergencyContactsCache();
    routeByRole();
  } else showScreen("landing");
}
function routeByRole() {
  if (!State.profile) { showScreen("landing"); return; }
  if (State.profile.role === "admin") { showScreen("admin-dashboard"); loadAdminDashboard(); }
  else if (State.profile.role === "parent") { showScreen("parent-dashboard"); loadParentDashboard(); }
  else { showScreen("passenger-dashboard"); loadPassengerDashboard(); }
  document.getElementById("greetingName").textContent = State.profile.full_name || "";
  applyTranslations();
}

// ------------------------------------------------------------
// 7. PASSENGER DASHBOARD
// ------------------------------------------------------------
async function loadPassengerDashboard() {
  const { data: active } = await Journeys.getActiveForPassenger(State.session.user.id);
  State.activeJourney = active || null;
  document.getElementById("dashActiveJourneyCard").classList.toggle("hidden", !active);
  await loadPendingFamilyRequests();
}

async function loadPendingFamilyRequests() {
  if (!State.session) return;
  const { data } = await FamilyLinks.incomingForPassenger(State.session.user.id);
  const box = document.getElementById("pendingFamilyRequests");
  if (!box) return;
  box.innerHTML = "";
  if (!data || !data.length) { box.classList.add("hidden"); return; }
  box.classList.remove("hidden");
  data.forEach(link => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <p><strong>${link.profiles ? link.profiles.full_name : "Someone"}</strong> wants to watch your journeys as family.</p>
      <div class="btn-row mt">
        <button class="btn-safe" onclick="respondFamilyLink('${link.id}','accepted')">${t("accept")}</button>
        <button class="btn-ghost" onclick="respondFamilyLink('${link.id}','declined')">${t("decline")}</button>
      </div>`;
    box.appendChild(card);
  });
}
async function respondFamilyLink(linkId, status) {
  const { error } = await FamilyLinks.respond(linkId, status);
  if (error) { toast(error.message); return; }
  toast(status === "accepted" ? "Family link accepted." : "Request declined.");
  loadPendingFamilyRequests();
}

// ------------------------------------------------------------
// 8. DRIVER VERIFICATION (QR)
// ------------------------------------------------------------
let html5QrCode = null;

async function startQrScanner() {
  showScreen("driver-verify");
  document.getElementById("qr-result").classList.add("hidden");
  document.getElementById("qr-reader-wrap").classList.remove("hidden");
  try {
    html5QrCode = new Html5Qrcode("qr-reader");
    const cameras = await Html5Qrcode.getCameras();
    if (!cameras || !cameras.length) throw new Error("no-camera");
    await html5QrCode.start({ facingMode: "environment" }, { fps: 10, qrbox: 220 }, onQrScanSuccess, () => {});
  } catch (err) {
    toast("Camera unavailable. You can use Demo Mode to preview driver verification.");
  }
}
async function stopQrScanner() {
  if (html5QrCode) { try { await html5QrCode.stop(); html5QrCode.clear(); } catch (e) {} html5QrCode = null; }
}
async function onQrScanSuccess(decodedText) {
  await stopQrScanner();
  document.getElementById("qr-reader-wrap").classList.add("hidden");
  const { data, error } = await Drivers.getByQr(decodedText);
  if (error || !data) { toast("Driver/vehicle QR not recognized — it must match a record in Supabase."); return; }
  renderDriverResult(data, data.drivers, false);
}
function renderDemoDriver() {
  const demoVehicle = { vehicle_number: "AP XX XX 1234", vehicle_type: "Auto Rickshaw", verified: true, id: null };
  const demoDriver = { full_name: "Ravi Kumar (Demo)", phone: "", identity_verified: true, license_verified: true, safety_rating: 4.7, id: null };
  State.demoMode = true;
  renderDriverResult(demoVehicle, demoDriver, true);
}
function verifyPill(elId, verified) {
  const el = document.getElementById(elId);
  el.className = "status-pill " + (verified ? "status-safe" : "status-danger");
  el.innerHTML = (verified ? "🟢 " : "🔴 ") + (verified ? el.dataset.labelOk : t("notVerified"));
}
function renderDriverResult(vehicle, driver, isDemo) {
  State.selectedDriver = driver;
  State.selectedVehicle = vehicle;
  State.demoMode = isDemo;
  document.getElementById("qr-result").classList.remove("hidden");
  document.getElementById("resultDemoBadge").classList.toggle("hidden", !isDemo);
  document.getElementById("resultDriverName").textContent = driver.full_name;
  document.getElementById("resultDriverPhone").textContent = driver.phone || "—";
  document.getElementById("resultVehicleNumber").textContent = vehicle.vehicle_number;
  document.getElementById("resultVehicleType").textContent = vehicle.vehicle_type || "—";
  document.getElementById("resultRating").textContent = "⭐ " + (Number(driver.safety_rating) || 5.0).toFixed(1);

  document.getElementById("pillIdentity").dataset.labelOk = t("identityVerified");
  document.getElementById("pillVehicle").dataset.labelOk = t("vehicleVerified");
  document.getElementById("pillLicense").dataset.labelOk = t("licenseVerified");
  verifyPill("pillIdentity", !!driver.identity_verified);
  verifyPill("pillVehicle", !!vehicle.verified);
  verifyPill("pillLicense", !!driver.license_verified);

  const allVerified = driver.identity_verified && vehicle.verified && driver.license_verified;
  document.getElementById("verificationWarning").classList.toggle("hidden", allVerified || isDemo);
}
function confirmDriver() { showScreen("journey-plan"); setTimeout(initPlanMap, 50); }

// ------------------------------------------------------------
// 9. JOURNEY PLANNING + START (real GPS required, demo explicit)
// ------------------------------------------------------------
let planMap;
function initPlanMap() {
  const mapEl = document.getElementById("plan-map");
  if (!mapEl || mapEl._leaflet_id) return;
  planMap = L.map("plan-map").setView([20.5937, 78.9629], 5);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: "© OpenStreetMap" }).addTo(planMap);
}

async function handlePlanJourney(e) {
  e.preventDefault();
  const f = e.target;
  const from = f.from.value.trim();
  const to = f.to.value.trim();
  if (!from || !to) return;
  const btn = f.querySelector("button[type=submit]");
  btn.disabled = true; btn.textContent = t("loading");

  let coords = null;
  let isDemoJourney = State.demoMode;

  if (!isDemoJourney) {
    try { coords = await getCurrentPosition(); }
    catch (err) {
      btn.disabled = false; btn.textContent = t("startJourney");
      showGpsBlockedModal(gpsErrorMessage(err), f);
      return;
    }
  } else {
    coords = DEMO_COORDS;
  }

  const destCoords = await geocodeLocation(to);
  if (!destCoords) toast("Couldn't locate the destination on the map — ETA and deviation detection will be limited.");

  const driverId = State.selectedDriver && State.selectedDriver.id ? State.selectedDriver.id : null;
  const vehicleId = State.selectedVehicle && State.selectedVehicle.id ? State.selectedVehicle.id : null;

  const { data: journey, error } = await Journeys.create({
    passenger_id: State.session.user.id, driver_id: driverId, vehicle_id: vehicleId,
    from_location: from, to_location: to,
    from_lat: coords.lat, from_lng: coords.lng,
    to_lat: destCoords ? destCoords.lat : null, to_lng: destCoords ? destCoords.lng : null,
    is_demo: isDemoJourney, status: "active", started_at: new Date().toISOString()
  });

  btn.disabled = false; btn.textContent = t("startJourney");
  if (error) { toast(error.message); return; }

  State.activeJourney = journey;
  State.deviationAlerted = false; State.stopAlerted = false; State.destinationReached = false;
  State.lastMovementPos = null; State.lastMovementTime = Date.now();

  await SafetyEvents.log(journey.id, State.session.user.id, "journey_started", { from, to, is_demo: isDemoJourney });
  await Notifications.create(State.session.user.id, "journey_started", `${t("journeyStarted")}: ${from} → ${to}`);
  await Notifications.notifyLinkedParents(State.session.user.id, "journey_started", `${State.profile.full_name} started a journey: ${from} → ${to}`);

  document.getElementById("startedFrom").textContent = from;
  document.getElementById("startedTo").textContent = to;
  document.getElementById("startedVehicle").textContent = State.selectedVehicle ? State.selectedVehicle.vehicle_number : "—";
  document.getElementById("startedDriver").textContent = State.selectedDriver ? State.selectedDriver.full_name : t("driverVerified");
  document.getElementById("startedDemoTag").classList.toggle("hidden", !isDemoJourney);
  showScreen("journey-started");
}

function showGpsBlockedModal(message, form) {
  document.getElementById("gpsBlockedMessage").textContent = message;
  document.getElementById("gps-blocked-modal").classList.remove("hidden");
  document.getElementById("gpsRetryBtn").onclick = () => {
    document.getElementById("gps-blocked-modal").classList.add("hidden");
    handlePlanJourney({ preventDefault(){}, target: form });
  };
  document.getElementById("gpsDemoBtn").onclick = () => {
    document.getElementById("gps-blocked-modal").classList.add("hidden");
    State.demoMode = true;
    handlePlanJourney({ preventDefault(){}, target: form });
  };
}

// ------------------------------------------------------------
// 10. ACTIVE-JOURNEY GATED NAVIGATION
// ------------------------------------------------------------
async function requireActiveJourneyThen(onSuccess) {
  if (State.activeJourney) { onSuccess(); return; }
  const { data } = await Journeys.getActiveForPassenger(State.session.user.id);
  if (data) { State.activeJourney = data; onSuccess(); }
  else toast(t("noActiveJourney"));
}
function goToLiveTracking() {
  requireActiveJourneyThen(() => {
    showScreen("live-tracking");
    document.getElementById("liveDemoTag").classList.toggle("hidden", !State.activeJourney.is_demo);
    State.deviationAlerted = false; State.stopAlerted = false;
    State.destinationReached = false; State.lastMovementPos = null; State.lastMovementTime = Date.now();
    setTimeout(initTrackMap, 50);
    startLocationWatch();
    scheduleCheckin();
    startGpsWatchdog();
  });
}

// ------------------------------------------------------------
// 11. LIVE TRACKING (real detection: deviation, stop, ETA, geofence)
// ------------------------------------------------------------
let trackMap, trackMarker, destMarker;
function initTrackMap() {
  const mapEl = document.getElementById("track-map");
  if (!mapEl) return;
  const j = State.activeJourney;
  const start = [j.from_lat || DEMO_COORDS.lat, j.from_lng || DEMO_COORDS.lng];
  if (mapEl._leaflet_id) { trackMap.invalidateSize(); return; }
  trackMap = L.map("track-map").setView(start, 14);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: "© OpenStreetMap" }).addTo(trackMap);
  trackMarker = L.circleMarker(start, { radius: 9, color: "#e11d3c", fillColor: "#e11d3c", fillOpacity: 0.9 }).addTo(trackMap);
  if (j.to_lat && j.to_lng) {
    destMarker = L.circleMarker([j.to_lat, j.to_lng], { radius: 8, color: "#22c55e", fillColor: "#22c55e", fillOpacity: 0.9 }).addTo(trackMap);
    L.polyline([start, [j.to_lat, j.to_lng]], { color: "#e11d3c", weight: 2, dashArray: "6 6", opacity: 0.5 }).addTo(trackMap);
  }
}

function startLocationWatch() {
  if (!navigator.geolocation) { document.getElementById("locationWarning").classList.remove("hidden"); return; }
  document.getElementById("locationWarning").classList.add("hidden");
  State.watchId = navigator.geolocation.watchPosition(
    pos => onLocationUpdate(pos.coords.latitude, pos.coords.longitude),
    err => {
      document.getElementById("locationWarning").classList.remove("hidden");
      document.getElementById("locationWarning").querySelector("p").textContent = gpsErrorMessage(err);
    },
    { enableHighAccuracy: true, maximumAge: 5000, timeout: 10000 }
  );
}
function stopLocationWatch() {
  if (State.watchId !== null) { navigator.geolocation.clearWatch(State.watchId); State.watchId = null; }
  if (State.checkinTimer) { clearTimeout(State.checkinTimer); State.checkinTimer = null; }
  if (State.gpsWatchdog) { clearInterval(State.gpsWatchdog); State.gpsWatchdog = null; }
}
function startGpsWatchdog() {
  if (State.gpsWatchdog) clearInterval(State.gpsWatchdog);
  State.gpsWatchdog = setInterval(() => {
    const badge = document.getElementById("gpsStatusBadge");
    if (!badge) return;
    if (!State.lastGpsUpdateTime) { badge.textContent = "📡 " + t("gpsUnavailable"); badge.className = "status-pill status-danger"; return; }
    const age = Date.now() - State.lastGpsUpdateTime;
    if (age < 15000) { badge.textContent = "📡 " + t("gpsLive"); badge.className = "status-pill status-safe"; }
    else if (age < 45000) { badge.textContent = "📡 " + t("gpsWeak"); badge.className = "status-pill status-warn"; }
    else { badge.textContent = "📡 " + t("gpsUnavailable"); badge.className = "status-pill status-danger"; }
  }, 5000);
}

async function onLocationUpdate(lat, lng) {
  State.lastGpsUpdateTime = Date.now();
  if (trackMap && trackMarker) { trackMarker.setLatLng([lat, lng]); trackMap.panTo([lat, lng]); }
  if (!State.activeJourney) return;

  await Locations.record(State.activeJourney.id, lat, lng);

  // --- unexpected stop detection ---
  if (!State.lastMovementPos) { State.lastMovementPos = { lat, lng }; State.lastMovementTime = Date.now(); }
  else {
    const moved = haversineMeters(lat, lng, State.lastMovementPos.lat, State.lastMovementPos.lng);
    if (moved > STOP_THRESHOLD_M) { State.lastMovementPos = { lat, lng }; State.lastMovementTime = Date.now(); State.stopAlerted = false; }
    else if (!State.stopAlerted && Date.now() - State.lastMovementTime > STOP_DURATION_MS) {
      State.stopAlerted = true;
      triggerRouteAlert("unplanned_stop", "stop-modal");
    }
  }

  // --- route deviation detection ---
  const j = State.activeJourney;
  if (!State.deviationAlerted && j.from_lat && j.from_lng && j.to_lat && j.to_lng) {
    const dist = crossTrackDistanceMeters(lat, lng, j.from_lat, j.from_lng, j.to_lat, j.to_lng);
    if (dist > DEVIATION_THRESHOLD_M) { State.deviationAlerted = true; triggerRouteAlert("deviation", "deviation-modal"); }
  }

  // --- ETA + destination geofence ---
  if (j.to_lat && j.to_lng) {
    const distToDest = haversineMeters(lat, lng, j.to_lat, j.to_lng);
    const etaMin = Math.max(1, Math.round((distToDest / 1000) / ASSUMED_SPEED_KMPH * 60));
    const etaEl = document.getElementById("etaValue");
    if (etaEl) etaEl.textContent = distToDest < DESTINATION_RADIUS_M ? "Arriving" : `${etaMin} min`;
    if (!State.destinationReached && distToDest < DESTINATION_RADIUS_M) {
      State.destinationReached = true;
      await SafetyEvents.log(j.id, State.session.user.id, "destination_reached");
      toast(t("destinationReachedMsg"));
      document.getElementById("endJourneyBtn").classList.add("card-glow");
    }
  }
}

async function triggerRouteAlert(alertType, modalId) {
  if (!State.activeJourney) return;
  const { data } = await RouteAlerts.create(State.activeJourney.id, alertType);
  State.pendingAlert = data;
  await SafetyEvents.log(State.activeJourney.id, State.session.user.id, alertType === "deviation" ? "route_deviation" : "unexpected_stop");
  await Notifications.notifyLinkedParents(
    State.session.user.id,
    alertType,
    alertType === "deviation" ? `⚠️ Route deviation detected for ${State.profile.full_name}` : `⚠️ Unexpected stop detected for ${State.profile.full_name}`
  );
  document.getElementById(modalId).classList.remove("hidden");
}
async function resolveRouteAlert(modalId, status) {
  document.getElementById(modalId).classList.add("hidden");
  if (State.pendingAlert) { await RouteAlerts.resolve(State.pendingAlert.id); State.pendingAlert = null; }
  if (status === "safe") { toast(t("safetyConfirmed")); }
  else openEmergencyScreen();
}

function scheduleCheckin() {
  State.checkinTimer = setTimeout(() => {
    if (State.currentScreen === "live-tracking") document.getElementById("checkin-modal").classList.remove("hidden");
    scheduleCheckin();
  }, 90000);
}
async function respondCheckin(status) {
  document.getElementById("checkin-modal").classList.add("hidden");
  if (State.activeJourney) {
    await Checkins.record(State.activeJourney.id, State.session.user.id, status);
    await SafetyEvents.log(State.activeJourney.id, State.session.user.id, "safety_check", { status });
  }
  if (status === "safe") toast(t("safetyCheckSent"));
  else openEmergencyScreen();
}

// ------------------------------------------------------------
// 12. END JOURNEY (was missing — now explicit + complete)
// ------------------------------------------------------------
async function endJourney() {
  if (!State.activeJourney) { toast(t("noActiveJourney")); return; }
  if (!confirm(t("endJourneyConfirm"))) return;

  let finalCoords = State.lastMovementPos;
  try { finalCoords = await getCurrentPosition({ timeout: 4000 }); } catch (e) {}
  if (finalCoords) await Locations.record(State.activeJourney.id, finalCoords.lat, finalCoords.lng);

  stopLocationWatch();

  const { error } = await Journeys.update(State.activeJourney.id, { status: "completed", ended_at: new Date().toISOString() });
  if (error) { toast(error.message); return; }

  await SafetyEvents.log(State.activeJourney.id, State.session.user.id, "journey_ended");
  await SafetyEvents.log(State.activeJourney.id, State.session.user.id, "safe_arrival");
  await Notifications.create(State.session.user.id, "safe_arrival", t("reachedSafely"));
  await Notifications.notifyLinkedParents(State.session.user.id, "safe_arrival", `${State.profile.full_name} ${t("daughterSafe")}`);

  await renderSafeArrivalTimeline(State.activeJourney.id);
  showScreen("safe-arrival");
}

const EVENT_LABELS = {
  journey_started: "✓ Journey Started", safety_check: "✓ Safety Check Completed",
  route_deviation: "⚠ Route Deviation Detected", unexpected_stop: "⚠ Unexpected Stop Detected",
  destination_reached: "✓ Destination Reached", sos_triggered: "🆘 SOS Triggered",
  journey_ended: "✓ Journey Ended", safe_arrival: "✓ Safe Arrival Confirmed"
};
async function renderSafeArrivalTimeline(journeyId) {
  const { data } = await SafetyEvents.forJourney(journeyId);
  const box = document.getElementById("safeArrivalTimeline");
  box.innerHTML = "";
  (data || []).forEach(ev => {
    const div = document.createElement("div");
    div.className = "timeline-item done";
    div.innerHTML = `<span class="t-label">${EVENT_LABELS[ev.event_type] || ev.event_type}</span>`;
    box.appendChild(div);
  });
  if (!data || !data.length) box.innerHTML = `<p class="small">No events recorded for this journey.</p>`;
}

// ------------------------------------------------------------
// 13. FAMILY / PARENT DASHBOARD
// ------------------------------------------------------------
async function loadParentDashboard() {
  const { data: links, error } = await FamilyLinks.linkedPassengersForParent(State.session.user.id);
  const list = document.getElementById("parentPassengerList");
  list.innerHTML = "";
  if (error) { toast(error.message); return; }
  if (!links || !links.length) {
    document.getElementById("parentEmptyState").classList.remove("hidden");
    return;
  }
  document.getElementById("parentEmptyState").classList.add("hidden");
  for (const link of links) {
    const passenger = link.profiles;
    const { data: journey } = await Journeys.getActiveForPassenger(passenger.id);
    const card = document.createElement("div");
    card.className = "card card-glow";
    if (journey) {
      card.innerHTML = `
        <span class="status-pill status-safe"><span class="dot dot-pulse"></span> ${t("safe")}</span>
        <div class="row mt"><span class="small">${t("passenger")}</span><strong>${passenger.full_name}</strong></div>
        <div class="row mt"><span class="small">${t("destination")}</span><strong>${journey.to_location}</strong></div>
        <div class="btn-row mt">
          <button class="btn-secondary" onclick="viewLinkedPassengerLocation('${journey.id}','${passenger.full_name.replace(/'/g, "")}')">${t("viewLocation")}</button>
          <button class="btn-secondary" onclick="callNumber('${passenger.phone || ""}')">${t("call")}</button>
        </div>`;
    } else {
      card.innerHTML = `
        <div class="row"><strong>${passenger.full_name}</strong><span class="status-pill status-warn">No active journey</span></div>
        <button class="btn-secondary mt" onclick="callNumber('${passenger.phone || ""}')">${t("call")}</button>`;
    }
    list.appendChild(card);
  }
}

let familyViewMap;
function viewLinkedPassengerLocation(journeyId, name) {
  showScreen("family-view-location");
  document.getElementById("familyViewName").textContent = name;
  setTimeout(async () => {
    const mapEl = document.getElementById("family-view-map");
    if (!mapEl._leaflet_id) {
      familyViewMap = L.map("family-view-map").setView([20.5937, 78.9629], 5);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: "© OpenStreetMap" }).addTo(familyViewMap);
    }
    const { data } = await Locations.latest(journeyId);
    if (data) {
      familyViewMap.setView([data.lat, data.lng], 15);
      L.circleMarker([data.lat, data.lng], { radius: 9, color: "#e11d3c", fillColor: "#e11d3c", fillOpacity: 0.9 }).addTo(familyViewMap);
    } else {
      toast("No location recorded yet.");
    }
  }, 50);
}

async function sendFamilyLinkRequest(e) {
  e.preventDefault();
  const phone = document.getElementById("familyLinkPhone").value.trim();
  if (!phone) return;
  const { data: passenger, error: findError } = await Auth.findProfileByPhone(phone);
  if (findError || !passenger) { toast("No passenger found with that phone number."); return; }
  if (passenger.role !== "passenger") { toast("That number isn't registered as a passenger."); return; }
  const { error } = await FamilyLinks.requestLink(State.session.user.id, passenger.id);
  if (error) { toast(error.message.includes("duplicate") ? "You've already sent a request to this passenger." : error.message); return; }
  toast(t("linkRequestSent"));
  document.getElementById("familyLinkPhone").value = "";
  loadParentDashboard();
}

// ------------------------------------------------------------
// 14. SOS / EMERGENCY / LOCATION SHARING (separated from SOS)
// ------------------------------------------------------------
function openEmergencyScreen() { showScreen("emergency"); }

async function sendSOS() {
  if (!State.session) { toast("Please log in to send SOS."); return; }
  let coords = { lat: null, lng: null };
  try { coords = await getCurrentPosition(); } catch (e) {}
  const { data, error } = await SOS.create({
    journeyId: State.activeJourney ? State.activeJourney.id : null,
    passengerId: State.session.user.id, lat: coords.lat, lng: coords.lng
  });
  if (error) { toast(error.message); return; }
  if (State.activeJourney) {
    await Journeys.update(State.activeJourney.id, { status: "sos" });
    await SafetyEvents.log(State.activeJourney.id, State.session.user.id, "sos_triggered", { lat: coords.lat, lng: coords.lng });
  }
  await Notifications.create(State.session.user.id, "sos", "SOS activated");
  await Notifications.notifyLinkedParents(State.session.user.id, "sos", `🆘 SOS activated by ${State.profile.full_name}`);
  State.activeSosId = data.id;
  document.getElementById("sosActivePassenger").textContent = State.profile.full_name;
  document.getElementById("sosActiveVehicle").textContent = State.selectedVehicle ? State.selectedVehicle.vehicle_number : "—";
  document.getElementById("sosActiveTime").textContent = new Date().toLocaleTimeString();
  showScreen("sos-active");
}

// Send SOS Location — a ONE-TIME location snapshot to the trusted contact. Does NOT raise an SOS alert.
async function sendSosLocationOnly() {
  let coords;
  try { coords = await getCurrentPosition(); } catch (err) { toast(gpsErrorMessage(err)); return; }
  const mapsUrl = `https://www.google.com/maps?q=${coords.lat},${coords.lng}`;
  if (State.activeJourney) await SafetyEvents.log(State.activeJourney.id, State.session.user.id, "location_shared", { type: "one_time", url: mapsUrl });
  if (navigator.share) {
    try { await navigator.share({ title: "My current location", text: "Here's my current location — Raksha Ride", url: mapsUrl }); return; } catch (e) {}
  }
  try { await navigator.clipboard.writeText(mapsUrl); toast(t("shareLinkCopied")); }
  catch (e) { toast(mapsUrl); }
}

// Share Live Location — creates a continuously-updated share link (separate from SOS).
async function shareLiveLocation() {
  if (!State.activeJourney) { toast(t("noActiveJourney")); return; }
  const { data, error } = await LocationShares.create(State.activeJourney.id, State.session.user.id);
  if (error) { toast(error.message); return; }
  const shareUrl = `${window.location.origin}${window.location.pathname}?share=${data.token}`;
  await SafetyEvents.log(State.activeJourney.id, State.session.user.id, "location_shared", { type: "live", token: data.token });
  if (navigator.share) {
    try { await navigator.share({ title: "Track my journey live", text: "Follow my live location on Raksha Ride", url: shareUrl }); return; } catch (e) {}
  }
  try { await navigator.clipboard.writeText(shareUrl); toast(t("shareLinkCopied")); }
  catch (e) { toast(shareUrl); }
}

function callNumber(num) {
  if (!num) { toast("No phone number on file for this contact."); return; }
  window.location.href = `tel:${num}`;
}

let alarmAudioCtx = null, alarmOscillator = null;
function playAlarm() {
  try {
    alarmAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
    alarmOscillator = alarmAudioCtx.createOscillator();
    const gain = alarmAudioCtx.createGain();
    alarmOscillator.type = "square"; alarmOscillator.frequency.value = 880; gain.gain.value = 0.15;
    alarmOscillator.connect(gain).connect(alarmAudioCtx.destination);
    alarmOscillator.start();
    document.getElementById("alarmActiveNote").classList.remove("hidden");
  } catch (e) { toast("Audio alarm unavailable in this browser."); }
}
function stopAlarmSound() {
  if (alarmOscillator) { try { alarmOscillator.stop(); } catch (e) {} alarmOscillator = null; }
  if (alarmAudioCtx) { alarmAudioCtx.close(); alarmAudioCtx = null; }
  document.getElementById("alarmActiveNote").classList.add("hidden");
}
function startVoiceSos() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) { toast("Voice recognition not supported on this browser. Use the SOS button."); return; }
  const recog = new SpeechRecognition();
  recog.lang = "en-IN"; recog.continuous = false;
  recog.onresult = (e) => {
    const text = e.results[0][0].transcript.toLowerCase();
    if (text.includes("help") || text.includes("emergency") || text.includes("sos")) sendSOS();
  };
  recog.onerror = () => toast("Couldn't hear you clearly. Use the SOS button instead.");
  recog.start();
  toast("Listening...");
}

// ------------------------------------------------------------
// 15. RATING / INCIDENT REPORT (error-checked, no silent defaults)
// ------------------------------------------------------------
function goToRating() { State.selectedRating = 0; renderStars(); showScreen("driver-rating"); }
function renderStars() {
  const row = document.getElementById("star-row");
  row.innerHTML = "";
  for (let i = 1; i <= 5; i++) {
    const s = document.createElement("span");
    s.className = "star" + (i <= State.selectedRating ? " filled" : "");
    s.textContent = "★";
    s.onclick = () => { State.selectedRating = i; renderStars(); };
    row.appendChild(s);
  }
}
async function submitRating(e) {
  e.preventDefault();
  if (!State.selectedRating) { toast(t("selectRatingFirst")); return; }
  if (!State.activeJourney) { showScreen("passenger-dashboard"); return; }
  const comment = document.getElementById("ratingComment").value.trim();
  const { error } = await Ratings.submit({
    journeyId: State.activeJourney.id, driverId: State.activeJourney.driver_id,
    passengerId: State.session.user.id, rating: State.selectedRating, comment
  });
  if (error) { toast(error.message); return; }
  toast("Thank you for your feedback.");
  State.activeJourney = null;
  loadPassengerDashboard();
  showScreen("passenger-dashboard");
}
function skipRating() { State.activeJourney = null; loadPassengerDashboard(); showScreen("passenger-dashboard"); }

function goToIncidentReport() { showScreen("incident-report"); }
async function submitIncident(e) {
  e.preventDefault();
  const f = e.target;
  const { error } = await Incidents.report({
    journeyId: State.activeJourney ? State.activeJourney.id : null, passengerId: State.session.user.id,
    category: f.category.value, description: f.description.value.trim()
  });
  if (error) { toast(error.message); return; }
  toast("Report submitted. Our safety team will review it.");
  f.reset();
  showScreen("passenger-dashboard");
}

// ------------------------------------------------------------
// 16. JOURNEY HISTORY (actually rendered now)
// ------------------------------------------------------------
async function loadJourneyHistory() {
  const box = document.getElementById("historyList");
  box.innerHTML = `<p class="small center">${t("loading")}</p>`;
  const { data, error } = await Journeys.getHistory(State.session.user.id);
  if (error) { box.innerHTML = `<p class="small center">${error.message}</p>`; return; }
  const completed = (data || []).filter(j => j.status === "completed" || j.status === "cancelled");
  if (!completed.length) { box.innerHTML = `<p class="small center">${t("noHistory")}</p>`; return; }
  box.innerHTML = "";
  completed.forEach(j => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="row"><strong>${j.from_location} → ${j.to_location}</strong>${j.is_demo ? `<span class="demo-badge">${t("demoTag")}</span>` : ""}</div>
      <p class="small mt">${new Date(j.created_at).toLocaleString()}</p>
      <span class="status-pill ${j.status === "completed" ? "status-safe" : "status-warn"}">${j.status}</span>`;
    box.appendChild(card);
  });
}

// ------------------------------------------------------------
// 17. PROFILE EDITING + EMERGENCY CONTACTS
// ------------------------------------------------------------
function loadProfileScreen() {
  if (!State.profile) return;
  document.getElementById("editFullName").value = State.profile.full_name || "";
  document.getElementById("editPhone").value = State.profile.phone || "";
  document.getElementById("editGuardianName").value = State.profile.guardian_name || "";
  document.getElementById("editGuardianPhone").value = State.profile.guardian_phone || "";
  document.getElementById("profileRoleDisplay").textContent = State.profile.role;
  loadEmergencyContacts();
}
async function saveProfile(e) {
  e.preventDefault();
  const f = e.target;
  const { error, data } = await Auth.updateProfile(State.session.user.id, {
    full_name: f.fullName.value.trim(), phone: f.phone.value.trim(),
    guardian_name: f.guardianName.value.trim(), guardian_phone: f.guardianPhone.value.trim()
  });
  if (error) { toast(error.message); return; }
  State.profile = data;
  document.getElementById("greetingName").textContent = data.full_name;
  toast("Profile updated.");
}
// Keeps State.emergencyContacts in sync so the call buttons on the
// Emergency/SOS screens (which can't await a query mid-tap) always
// have an up-to-date number to dial.
async function refreshEmergencyContactsCache() {
  if (!State.session) return;
  const { data } = await EmergencyContacts.listFor(State.session.user.id);
  State.emergencyContacts = data || [];
}
async function loadEmergencyContacts() {
  await refreshEmergencyContactsCache();
  const box = document.getElementById("emergencyContactsList");
  box.innerHTML = "";
  State.emergencyContacts.forEach((c, i) => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <div class="row"><strong>${c.name}</strong><span class="small">${i === 0 ? "★ Primary — " : ""}${c.relation || ""}</span></div>
      <div class="row mt"><span class="small">${c.phone}</span>
        <button class="btn-ghost" style="width:auto;padding:6px 12px" onclick="removeEmergencyContact('${c.id}')">✕</button>
      </div>`;
    box.appendChild(div);
  });
  if (!State.emergencyContacts.length) {
    box.innerHTML = `<p class="small center">No emergency contacts saved yet — add one below. The first one you add becomes your Primary and is who "Call Trusted Contact" dials.</p>`;
  }
}
async function addEmergencyContact(e) {
  e.preventDefault();
  const f = e.target;
  const phone = f.contactPhone.value.trim();
  const { error } = await EmergencyContacts.add({
    owner_id: State.session.user.id, name: f.contactName.value.trim(),
    phone, relation: f.contactRelation.value.trim()
  });
  if (error) { toast(error.message); return; }
  f.reset();
  loadEmergencyContacts();
}
async function removeEmergencyContact(id) {
  await EmergencyContacts.remove(id);
  loadEmergencyContacts();
}

// Best available number for "Call Trusted Contact": the Primary entry
// from the Emergency Contacts list, falling back to whatever was
// entered at registration if nothing's been added there yet.
function getTrustedContactNumber() {
  if (State.emergencyContacts && State.emergencyContacts.length) return State.emergencyContacts[0].phone;
  if (State.profile && State.profile.emergency_contact) return State.profile.emergency_contact;
  if (State.profile && State.profile.guardian_phone) return State.profile.guardian_phone;
  return "";
}
function callTrustedContact() {
  const num = getTrustedContactNumber();
  if (!num) {
    toast("No emergency contact saved yet. Add one in Profile → Emergency Contacts.");
    showScreen("profile");
    loadProfileScreen();
    return;
  }
  callNumber(num);
}

// ------------------------------------------------------------
// 18. ADMIN DASHBOARD
// ------------------------------------------------------------
async function loadAdminDashboard() {
  const { journeys, sos, incidents, fullyVerifiedDrivers } = await Admin.stats();
  const j = journeys.data || [], s = sos.data || [], i = incidents.data || [];
  document.getElementById("statActiveJourneys").textContent = j.filter(x => x.status === "active").length;
  document.getElementById("statSafeJourneys").textContent = j.filter(x => x.status === "completed").length;
  document.getElementById("statSosAlerts").textContent = s.filter(x => x.status === "active").length;
  document.getElementById("statVerifiedDrivers").textContent = fullyVerifiedDrivers;
  document.getElementById("statIncidents").textContent = i.filter(x => x.status === "open").length;

  const { data: activeSos } = await Admin.activeSos();
  const list = document.getElementById("adminSosList");
  list.innerHTML = "";
  (activeSos || []).forEach(alert => {
    const card = document.createElement("div");
    card.className = "card card-glow";
    card.innerHTML = `
      <div class="row"><strong>🆘 ${alert.profiles ? alert.profiles.full_name : "Passenger"}</strong><span class="status-pill status-danger">ACTIVE</span></div>
      <p class="small">Lat/Lng: ${alert.lat ?? "—"}, ${alert.lng ?? "—"}</p>
      <p class="small">${new Date(alert.created_at).toLocaleString()}</p>
      <div class="btn-row mt">
        <button class="btn-secondary" onclick="callNumber('${alert.profiles ? alert.profiles.phone || '' : ''}')">${t("call")}</button>
        <button class="btn-primary" onclick="resolveSosAsAdmin('${alert.id}')">${t("resolve")}</button>
      </div>`;
    list.appendChild(card);
  });
  if (!activeSos || !activeSos.length) list.innerHTML = `<p class="small center">No active SOS alerts.</p>`;
}
async function resolveSosAsAdmin(id) { await SOS.resolve(id); toast("SOS marked resolved."); loadAdminDashboard(); }

// ------------------------------------------------------------
// 19. DEMO MODE
// ------------------------------------------------------------
function enterDemoMode() {
  showScreen("driver-verify");
  document.getElementById("qr-reader-wrap").classList.add("hidden");
  renderDemoDriver();
}

// ------------------------------------------------------------
// 20. NOTIFICATIONS PANEL
// ------------------------------------------------------------
async function loadNotifications() {
  if (!State.session) return;
  const { data } = await Notifications.listFor(State.session.user.id);
  const list = document.getElementById("notifList");
  list.innerHTML = "";
  (data || []).forEach(n => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<p style="color:var(--white)">${n.message}</p><p class="small">${new Date(n.created_at).toLocaleString()}</p>`;
    list.appendChild(div);
  });
  if (!data || !data.length) list.innerHTML = `<p class="small center">No notifications yet.</p>`;
}

// ------------------------------------------------------------
// 21. PUBLIC SHARED-LOCATION VIEW (no login required)
// ------------------------------------------------------------
let shareMap, shareMarker, sharePollTimer;
async function initSharedLocationView(token) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById("shared-location").classList.add("active");
  document.getElementById("bottom-nav").style.display = "none";
  const poll = async () => {
    const { data, error } = await LocationShares.resolvePublic(token);
    const row = data && data[0];
    if (error || !row || row.lat == null) {
      document.getElementById("sharedLocationStatus").textContent = "This share link is no longer active.";
      return;
    }
    document.getElementById("sharedLocationStatus").textContent = `Heading to ${row.to_location || "destination"} · updated ${new Date(row.recorded_at).toLocaleTimeString()}`;
    if (!shareMap) {
      shareMap = L.map("shared-location-map").setView([row.lat, row.lng], 15);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: "© OpenStreetMap" }).addTo(shareMap);
      shareMarker = L.circleMarker([row.lat, row.lng], { radius: 9, color: "#e11d3c", fillColor: "#e11d3c", fillOpacity: 0.9 }).addTo(shareMap);
    } else {
      shareMarker.setLatLng([row.lat, row.lng]);
      shareMap.panTo([row.lat, row.lng]);
    }
  };
  await poll();
  sharePollTimer = setInterval(poll, 10000);
}

// ------------------------------------------------------------
// 22. INIT
// ------------------------------------------------------------
document.addEventListener("DOMContentLoaded", async () => {
  const params = new URLSearchParams(window.location.search);
  const shareToken = params.get("share");
  if (shareToken) { await initSharedLocationView(shareToken); return; }

  applyTranslations();
  renderLanguageOptions("langOptionsMain");
  renderLanguageOptions("langOptionsSettings");

  document.getElementById("registerForm").addEventListener("submit", handleRegister);
  document.getElementById("loginForm").addEventListener("submit", handleLogin);
  document.getElementById("forgotForm").addEventListener("submit", handleForgotPassword);
  document.getElementById("planForm").addEventListener("submit", handlePlanJourney);
  document.getElementById("ratingForm").addEventListener("submit", submitRating);
  document.getElementById("incidentForm").addEventListener("submit", submitIncident);
  document.getElementById("profileForm").addEventListener("submit", saveProfile);
  document.getElementById("emergencyContactForm").addEventListener("submit", addEmergencyContact);
  document.getElementById("familyLinkForm").addEventListener("submit", sendFamilyLinkRequest);

  document.getElementById("applyLangMainBtn").addEventListener("click", () => {
    const code = document.getElementById("langOptionsMain").dataset.pendingLang || State.lang;
    setLanguage(code);
    showScreen(State.session ? "passenger-dashboard" : "landing");
  });
  document.getElementById("applyLangSettingsBtn").addEventListener("click", () => {
    const code = document.getElementById("langOptionsSettings").dataset.pendingLang || State.lang;
    setLanguage(code);
    toast("Language updated");
  });

  renderStars();
  const hour = new Date().getHours();
  if (hour >= 21 || hour < 5) document.getElementById("nightModeBanner").classList.remove("hidden");

  await refreshSession();
  Auth.onAuthChange((session) => { if (!session) { State.session = null; State.profile = null; } });
});
