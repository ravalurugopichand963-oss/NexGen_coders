// ============================================================
// RAKSHA RIDE — App logic
// ============================================================

// ------------------------------------------------------------
// 1. TRANSLATIONS
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
    driverVerified: "Driver Verified", identityVerified: "Identity Verified", vehicleVerified: "Vehicle Verified",
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
    iArrivedSafely: "I Arrived Safely", protectionCompleted: "Protection Completed",
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
    driverVerified: "డ్రైవర్ ధృవీకరించబడింది", identityVerified: "గుర్తింపు ధృవీకరించబడింది", vehicleVerified: "వాహనం ధృవీకరించబడింది",
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
    iArrivedSafely: "నేను సురక్షితంగా చేరుకున్నాను", protectionCompleted: "రక్షణ పూర్తయింది",
    rateYourDriver: "మీ డ్రైవర్‌ను రేట్ చేయండి", comments: "వ్యాఖ్యలు", reportSafetyConcern: "భద్రతా సమస్యను నివేదించండి",
    submit: "సమర్పించండి", driverMisconduct: "డ్రైవర్ దుష్ప్రవర్తన", harassment: "వేధింపులు",
    suspiciousBehaviour: "అనుమానాస్పద ప్రవర్తన", unsafeRoute: "అసురక్షిత మార్గం", unprofessional: "అవృత్తిపరమైన ప్రవర్తన",
    otherConcern: "ఇతర భద్రతా సమస్య", adminDashboard: "రక్ష రైడ్ అడ్మిన్", activeJourneys: "సక్రియ ప్రయాణాలు",
    safeJourneys: "సురక్షిత ప్రయాణాలు", emergencyAlerts: "అత్యవసర హెచ్చరికలు", sosAlerts: "SOS హెచ్చరికలు",
    verifiedDrivers: "ధృవీకరించబడిన డ్రైవర్లు", reportedIncidents: "నివేదించిన సంఘటనలు", resolve: "పరిష్కరించండి",
    locationPermissionNeeded: "ప్రత్యక్ష ట్రాకింగ్ కోసం స్థాన అనుమతి అవసరం. దయచేసి స్థాన యాక్సెస్‌ను ప్రారంభించి మళ్లీ ప్రయత్నించండి.",
    notifications: "నోటిఫికేషన్‌లు", settings: "సెట్టింగ్‌లు", demoMode: "డెమో మోడ్",
    protectionCompleteMsg: "ప్రయాణం సురక్షితం", noActionRequired: "ఎటువంటి చర్య అవసరం లేదు.",
    safetyCheck: "మీరు సురక్షితంగా ఉన్నారా?", safetyCheckSent: "భద్రతా నిర్ధారణ పంపబడింది. విశ్వసనీయ సంప్రదింపుకు యాప్‌లో నోటిఫికేషన్ అందుతుంది.",
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
    driverVerified: "चालक सत्यापित", identityVerified: "पहचान सत्यापित", vehicleVerified: "वाहन सत्यापित",
    licenseVerified: "लाइसेंस सत्यापित", safetyRating: "सुरक्षा रेटिंग", confirmDriver: "चालक की पुष्टि करें",
    scanQr: "चालक / वाहन QR स्कैन करें", from: "से", to: "तक", distance: "दूरी",
    estimatedTime: "अनुमानित समय", plannedRoute: "नियोजित मार्ग", destination: "गंतव्य",
    journeyStarted: "यात्रा शुरू हुई", journeyMonitoringActive: "यात्रा निगरानी सक्रिय",
    viewLiveLocation: "लाइव स्थान देखें", journeySafe: "यात्रा सुरक्षित है", eta: "पहुंचने का समय", routeStatus: "मार्ग स्थिति",
    familySafety: "पारिवारिक सुरक्षा", viewLocation: "स्थान देखें", call: "कॉल करें", emergency: "आपातकाल",
    routeDeviation: "मार्ग से विचलन", areYouSafe: "क्या आप सुरक्षित हैं?", imSafe: "मैं सुरक्षित हूं", needHelp: "मुझे मदद चाहिए",
    call112: "112 पर कॉल करें", safetyConfirmed: "सुरक्षा की पुष्टि हुई. आपके विश्वसनीय संपर्क को सूचित कर दिया गया है.",
    unexpectedStop: "अप्रत्याशित ठहराव", nightSafetyMode: "रात्रि सुरक्षा मोड", extraMonitoring: "अतिरिक्त यात्रा निगरानी सक्रिय.",
    highRiskArea: "सुरक्षा चेतावनी", highRiskDesc: "आप एक चिन्हित उच्च-जोखिम क्षेत्र में प्रवेश कर रहे हैं. सतर्क रहें और निगरानी सक्रिय रखें.",
    emergencyHelp: "आपातकालीन सहायता", callTrustedContact: "विश्वसनीय संपर्क को कॉल करें", sendSosLocation: "SOS स्थान भेजें",
    shareLiveLocation: "लाइव स्थान साझा करें", findPolice: "पुलिस खोजें", findHospital: "अस्पताल खोजें",
    safeArrival: "सुरक्षित पहुंच", reachedSafely: "आप सुरक्षित पहुंच गए हैं.", journeyCompleted: "यात्रा सफलतापूर्वक पूर्ण हुई.",
    iArrivedSafely: "मैं सुरक्षित पहुंच गई", protectionCompleted: "सुरक्षा पूर्ण",
    rateYourDriver: "अपने चालक को रेट करें", comments: "टिप्पणियां", reportSafetyConcern: "सुरक्षा चिंता की रिपोर्ट करें",
    submit: "जमा करें", driverMisconduct: "चालक का दुर्व्यवहार", harassment: "उत्पीड़न",
    suspiciousBehaviour: "संदिग्ध व्यवहार", unsafeRoute: "असुरक्षित मार्ग", unprofessional: "अव्यावसायिक व्यवहार",
    otherConcern: "अन्य सुरक्षा चिंता", adminDashboard: "रक्षा राइड एडमिन", activeJourneys: "सक्रिय यात्राएं",
    safeJourneys: "सुरक्षित यात्राएं", emergencyAlerts: "आपातकालीन अलर्ट", sosAlerts: "SOS अलर्ट",
    verifiedDrivers: "सत्यापित चालक", reportedIncidents: "रिपोर्ट की गई घटनाएं", resolve: "समाधान करें",
    locationPermissionNeeded: "लाइव ट्रैकिंग के लिए स्थान अनुमति आवश्यक है. कृपया स्थान एक्सेस सक्षम करें और पुनः प्रयास करें.",
    notifications: "सूचनाएं", settings: "सेटिंग्स", demoMode: "डेमो मोड",
    protectionCompleteMsg: "यात्रा सुरक्षित", noActionRequired: "किसी कार्रवाई की आवश्यकता नहीं है.",
    safetyCheck: "क्या आप सुरक्षित हैं?", safetyCheckSent: "सुरक्षा पुष्टि भेजी गई. विश्वसनीय संपर्क को ऐप में सूचना मिलेगी.",
    save: "सेव करें", cancel: "रद्द करें", loading: "लोड हो रहा है...", nearbyHelp: "आस-पास सहायता",
    policeStation: "पुलिस स्टेशन", hospital: "अस्पताल", safePlace: "सुरक्षित स्थान", helpCentre: "सहायता केंद्र",
    active: "सक्रिय", vehicle: "वाहन", time: "समय", status: "स्थिति", emergencyStatus: "आपातकालीन स्थिति",
    stopAlarm: "अलार्म बंद करें", emergencyAlarm: "आपातकालीन अलार्म", driverStarted: "ने अपनी यात्रा शुरू कर दी है.",
    daughterSafe: "सुरक्षित पहुंच गई है.", welcomeBack: "वापसी पर स्वागत है",
  },
  ta: {
    appName: "ரக்ஷா ரைட்", corePhrase: "பயணம் அபாயமாக மாறும்போது", tagline: "பாதுகாப்பான பயணம். ஸ்மார்ட் பாதுகாப்பு.",
    heroDesc: "பெண்களின் பயணத்தை முழுவதும் பாதுகாக்க வடிவமைக்கப்பட்ட பொது போக்குவரத்து பாதுகாப்பு தளம்.",
    startJourney: "பயணத்தைத் தொடங்கு", login: "உள்நுழை", register: "பதிவு செய்", logout: "வெளியேறு",
    chooseLanguage: "உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்", applyLanguage: "மொழியைப் பயன்படுத்து",
    home: "முகப்பு", journey: "பயணம்", track: "கண்காணி", sos: "அவசரம்", profile: "சுயவிவரம்",
    goodMorning: "காலை வணக்கம்", protectionActive: "பாதுகாப்பு செயலில் உள்ளது", safe: "பாதுகாப்பானது",
    liveJourney: "நேரடி பயணம்", familyTracking: "குடும்ப கண்காணிப்பு", journeyHistory: "பயண வரலாறு",
    fullName: "முழு பெயர்", phone: "தொலைபேசி எண்", email: "மின்னஞ்சல்", password: "கடவுச்சொல்",
    role: "பங்கு", guardianName: "பெற்றோர் பெயர்", guardianPhone: "பெற்றோர் தொலைபேசி",
    emergencyContact: "அவசர தொடர்பு", preferredLanguage: "விருப்ப மொழி",
    passenger: "பயணி", parent: "பெற்றோர் / நம்பகமான தொடர்பு", driver: "ஓட்டுநர்",
    forgotPassword: "கடவுச்சொல் மறந்துவிட்டதா", signUp: "பதிவு செய்யவும்", alreadyHaveAccount: "ஏற்கனவே கணக்கு உள்ளதா? உள்நுழையவும்",
    noAccount: "கணக்கு இல்லையா? பதிவு செய்யவும்", sendResetLink: "மீட்டமை இணைப்பை அனுப்பு",
    driverVerified: "ஓட்டுநர் சரிபார்க்கப்பட்டது", identityVerified: "அடையாளம் சரிபார்க்கப்பட்டது", vehicleVerified: "வாகனம் சரிபார்க்கப்பட்டது",
    licenseVerified: "உரிமம் சரிபார்க்கப்பட்டது", safetyRating: "பாதுகாப்பு மதிப்பீடு", confirmDriver: "ஓட்டுநரை உறுதிப்படுத்து",
    scanQr: "ஓட்டுநர் / வாகன QR ஸ்கேன் செய்", from: "இருந்து", to: "வரை", distance: "தூரம்",
    estimatedTime: "மதிப்பிடப்பட்ட நேரம்", plannedRoute: "திட்டமிட்ட பாதை", destination: "இலக்கு",
    journeyStarted: "பயணம் தொடங்கியது", journeyMonitoringActive: "பயண கண்காணிப்பு செயலில்",
    viewLiveLocation: "நேரடி இருப்பிடத்தைக் காண்க", journeySafe: "பயணம் பாதுகாப்பாக உள்ளது", eta: "வரும் நேரம்", routeStatus: "பாதை நிலை",
    familySafety: "குடும்ப பாதுகாப்பு", viewLocation: "இருப்பிடத்தைக் காண்க", call: "அழை", emergency: "அவசரம்",
    routeDeviation: "பாதை விலகல்", areYouSafe: "நீங்கள் பாதுகாப்பாக இருக்கிறீர்களா?", imSafe: "நான் பாதுகாப்பாக இருக்கிறேன்", needHelp: "எனக்கு உதவி தேவை",
    call112: "112ஐ அழை", safetyConfirmed: "பாதுகாப்பு உறுதிசெய்யப்பட்டது. உங்கள் நம்பகமான தொடர்புக்கு தெரிவிக்கப்பட்டது.",
    unexpectedStop: "எதிர்பாராத நிறுத்தம்", nightSafetyMode: "இரவு பாதுகாப்பு முறை", extraMonitoring: "கூடுதல் பயண கண்காணிப்பு செயலில்.",
    highRiskArea: "பாதுகாப்பு எச்சரிக்கை", highRiskDesc: "நீங்கள் அதிக ஆபத்துள்ள பகுதிக்குள் நுழைகிறீர்கள். எச்சரிக்கையாக இருந்து கண்காணிப்பை தொடரவும்.",
    emergencyHelp: "அவசர உதவி", callTrustedContact: "நம்பகமான தொடர்பை அழை", sendSosLocation: "SOS இருப்பிடத்தை அனுப்பு",
    shareLiveLocation: "நேரடி இருப்பிடத்தைப் பகிர்", findPolice: "காவல்துறையைக் கண்டறி", findHospital: "மருத்துவமனையைக் கண்டறி",
    safeArrival: "பாதுகாப்பான வருகை", reachedSafely: "நீங்கள் பாதுகாப்பாக சென்றடைந்துவிட்டீர்கள்.", journeyCompleted: "பயணம் வெற்றிகரமாக முடிந்தது.",
    iArrivedSafely: "நான் பாதுகாப்பாக சென்றடைந்தேன்", protectionCompleted: "பாதுகாப்பு முடிந்தது",
    rateYourDriver: "உங்கள் ஓட்டுநரை மதிப்பிடுங்கள்", comments: "கருத்துகள்", reportSafetyConcern: "பாதுகாப்பு கவலையைப் புகாரளி",
    submit: "சமர்ப்பி", driverMisconduct: "ஓட்டுநர் தவறான நடத்தை", harassment: "துன்புறுத்தல்",
    suspiciousBehaviour: "சந்தேகத்திற்குரிய நடத்தை", unsafeRoute: "பாதுகாப்பற்ற பாதை", unprofessional: "தொழில்முறை அல்லாத நடத்தை",
    otherConcern: "மற்ற பாதுகாப்பு கவலை", adminDashboard: "ரக்ஷா ரைட் நிர்வாகம்", activeJourneys: "செயலில் உள்ள பயணங்கள்",
    safeJourneys: "பாதுகாப்பான பயணங்கள்", emergencyAlerts: "அவசர எச்சரிக்கைகள்", sosAlerts: "SOS எச்சரிக்கைகள்",
    verifiedDrivers: "சரிபார்க்கப்பட்ட ஓட்டுநர்கள்", reportedIncidents: "புகாரளிக்கப்பட்ட சம்பவங்கள்", resolve: "தீர்",
    locationPermissionNeeded: "நேரடி கண்காணிப்புக்கு இருப்பிட அனுமதி தேவை. இருப்பிட அணுகலை இயக்கி மீண்டும் முயற்சிக்கவும்.",
    notifications: "அறிவிப்புகள்", settings: "அமைப்புகள்", demoMode: "டெமோ முறை",
    protectionCompleteMsg: "பயணம் பாதுகாப்பானது", noActionRequired: "எந்த நடவடிக்கையும் தேவையில்லை.",
    safetyCheck: "நீங்கள் பாதுகாப்பாக இருக்கிறீர்களா?", safetyCheckSent: "பாதுகாப்பு உறுதிப்பாடு அனுப்பப்பட்டது.",
    save: "சேமி", cancel: "ரத்து செய்", loading: "ஏற்றுகிறது...", nearbyHelp: "அருகிலுள்ள உதவி",
    policeStation: "காவல் நிலையம்", hospital: "மருத்துவமனை", safePlace: "பாதுகாப்பான இடம்", helpCentre: "உதவி மையம்",
    active: "செயலில்", vehicle: "வாகனம்", time: "நேரம்", status: "நிலை", emergencyStatus: "அவசர நிலை",
    stopAlarm: "அலாரத்தை நிறுத்து", emergencyAlarm: "அவசர அலாரம்", driverStarted: "பயணத்தைத் தொடங்கிவிட்டார்.",
    daughterSafe: "பாதுகாப்பாக சென்றடைந்தார்.", welcomeBack: "மீண்டும் வரவேற்கிறோம்",
  },
  kn: {
    appName: "ರಕ್ಷಾ ರೈಡ್", corePhrase: "ಪ್ರಯಾಣ ಅಪಾಯವಾಗಿ ಬದಲಾದಾಗ", tagline: "ಸುರಕ್ಷಿತ ಪ್ರಯಾಣ. ಸ್ಮಾರ್ಟ್ ರಕ್ಷಣೆ.",
    heroDesc: "ಮಹಿಳೆಯರ ಪ್ರಯಾಣವನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ರಕ್ಷಿಸಲು ವಿನ್ಯಾಸಗೊಳಿಸಿದ ಸ್ಮಾರ್ಟ್ ಸಾರ್ವಜನಿಕ ಸಾರಿಗೆ ಸುರಕ್ಷತಾ ವೇದಿಕೆ.",
    startJourney: "ಪ್ರಯಾಣ ಪ್ರಾರಂಭಿಸಿ", login: "ಲಾಗಿನ್", register: "ನೋಂದಣಿ", logout: "ಲಾಗ್ ಔಟ್",
    chooseLanguage: "ನಿಮ್ಮ ಭಾಷೆಯನ್ನು ಆರಿಸಿ", applyLanguage: "ಭಾಷೆ ಅನ್ವಯಿಸಿ",
    home: "ಮುಖಪುಟ", journey: "ಪ್ರಯಾಣ", track: "ಟ್ರ್ಯಾಕ್", sos: "ತುರ್ತು", profile: "ಪ್ರೊಫೈಲ್",
    goodMorning: "ಶುಭೋದಯ", protectionActive: "ರಕ್ಷಣೆ ಸಕ್ರಿಯವಾಗಿದೆ", safe: "ಸುರಕ್ಷಿತ",
    liveJourney: "ನೇರ ಪ್ರಯಾಣ", familyTracking: "ಕುಟುಂಬ ಟ್ರ್ಯಾಕಿಂಗ್", journeyHistory: "ಪ್ರಯಾಣ ಇತಿಹಾಸ",
    fullName: "ಪೂರ್ಣ ಹೆಸರು", phone: "ಫೋನ್ ಸಂಖ್ಯೆ", email: "ಇಮೇಲ್", password: "ಪಾಸ್‌ವರ್ಡ್",
    role: "ಪಾತ್ರ", guardianName: "ಪೋಷಕರ ಹೆಸರು", guardianPhone: "ಪೋಷಕರ ಫೋನ್",
    emergencyContact: "ತುರ್ತು ಸಂಪರ್ಕ", preferredLanguage: "ಆದ್ಯತೆಯ ಭಾಷೆ",
    passenger: "ಪ್ರಯಾಣಿಕರು", parent: "ಪೋಷಕರು / ವಿಶ್ವಾಸಾರ್ಹ ಸಂಪರ್ಕ", driver: "ಚಾಲಕ",
    forgotPassword: "ಪಾಸ್‌ವರ್ಡ್ ಮರೆತಿದ್ದೀರಾ", signUp: "ಸೈನ್ ಅಪ್ ಮಾಡಿ", alreadyHaveAccount: "ಈಗಾಗಲೇ ಖಾತೆ ಇದೆಯೇ? ಲಾಗಿನ್ ಮಾಡಿ",
    noAccount: "ಖಾತೆ ಇಲ್ಲವೇ? ನೋಂದಾಯಿಸಿ", sendResetLink: "ರೀಸೆಟ್ ಲಿಂಕ್ ಕಳುಹಿಸಿ",
    driverVerified: "ಚಾಲಕ ಪರಿಶೀಲಿಸಲಾಗಿದೆ", identityVerified: "ಗುರುತು ಪರಿಶೀಲಿಸಲಾಗಿದೆ", vehicleVerified: "ವಾಹನ ಪರಿಶೀಲಿಸಲಾಗಿದೆ",
    licenseVerified: "ಪರವಾನಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ", safetyRating: "ಸುರಕ್ಷತಾ ರೇಟಿಂಗ್", confirmDriver: "ಚಾಲಕರನ್ನು ದೃಢೀಕರಿಸಿ",
    scanQr: "ಚಾಲಕ / ವಾಹನ QR ಸ್ಕ್ಯಾನ್ ಮಾಡಿ", from: "ಇಂದ", to: "ಗೆ", distance: "ದೂರ",
    estimatedTime: "ಅಂದಾಜು ಸಮಯ", plannedRoute: "ಯೋಜಿತ ಮಾರ್ಗ", destination: "ಗಮ್ಯಸ್ಥಾನ",
    journeyStarted: "ಪ್ರಯಾಣ ಪ್ರಾರಂಭವಾಗಿದೆ", journeyMonitoringActive: "ಪ್ರಯಾಣ ಮೇಲ್ವಿಚಾರಣೆ ಸಕ್ರಿಯ",
    viewLiveLocation: "ನೇರ ಸ್ಥಳ ವೀಕ್ಷಿಸಿ", journeySafe: "ಪ್ರಯಾಣ ಸುರಕ್ಷಿತವಾಗಿದೆ", eta: "ತಲುಪುವ ಸಮಯ", routeStatus: "ಮಾರ್ಗ ಸ್ಥಿತಿ",
    familySafety: "ಕುಟುಂಬ ಸುರಕ್ಷತೆ", viewLocation: "ಸ್ಥಳ ವೀಕ್ಷಿಸಿ", call: "ಕರೆ ಮಾಡಿ", emergency: "ತುರ್ತು",
    routeDeviation: "ಮಾರ್ಗ ವಿಚಲನೆ", areYouSafe: "ನೀವು ಸುರಕ್ಷಿತವಾಗಿದ್ದೀರಾ?", imSafe: "ನಾನು ಸುರಕ್ಷಿತವಾಗಿದ್ದೇನೆ", needHelp: "ನನಗೆ ಸಹಾಯ ಬೇಕು",
    call112: "112ಗೆ ಕರೆ ಮಾಡಿ", safetyConfirmed: "ಸುರಕ್ಷತೆ ದೃಢಪಡಿಸಲಾಗಿದೆ. ನಿಮ್ಮ ವಿಶ್ವಾಸಾರ್ಹ ಸಂಪರ್ಕಕ್ಕೆ ತಿಳಿಸಲಾಗಿದೆ.",
    unexpectedStop: "ಅನಿರೀಕ್ಷಿತ ನಿಲುಗಡೆ", nightSafetyMode: "ರಾತ್ರಿ ಸುರಕ್ಷತಾ ಮೋಡ್", extraMonitoring: "ಹೆಚ್ಚುವರಿ ಪ್ರಯಾಣ ಮೇಲ್ವಿಚಾರಣೆ ಸಕ್ರಿಯ.",
    highRiskArea: "ಸುರಕ್ಷತಾ ಎಚ್ಚರಿಕೆ", highRiskDesc: "ನೀವು ಗುರುತಿಸಲಾದ ಹೆಚ್ಚಿನ ಅಪಾಯದ ಪ್ರದೇಶಕ್ಕೆ ಪ್ರವೇಶಿಸುತ್ತಿದ್ದೀರಿ. ಎಚ್ಚರಿಕೆಯಿಂದಿರಿ.",
    emergencyHelp: "ತುರ್ತು ಸಹಾಯ", callTrustedContact: "ವಿಶ್ವಾಸಾರ್ಹ ಸಂಪರ್ಕಕ್ಕೆ ಕರೆ ಮಾಡಿ", sendSosLocation: "SOS ಸ್ಥಳ ಕಳುಹಿಸಿ",
    shareLiveLocation: "ನೇರ ಸ್ಥಳ ಹಂಚಿಕೊಳ್ಳಿ", findPolice: "ಪೊಲೀಸ್ ಹುಡುಕಿ", findHospital: "ಆಸ್ಪತ್ರೆ ಹುಡುಕಿ",
    safeArrival: "ಸುರಕ್ಷಿತ ಆಗಮನ", reachedSafely: "ನೀವು ಸುರಕ್ಷಿತವಾಗಿ ತಲುಪಿದ್ದೀರಿ.", journeyCompleted: "ಪ್ರಯಾಣ ಯಶಸ್ವಿಯಾಗಿ ಪೂರ್ಣಗೊಂಡಿದೆ.",
    iArrivedSafely: "ನಾನು ಸುರಕ್ಷಿತವಾಗಿ ತಲುಪಿದೆ", protectionCompleted: "ರಕ್ಷಣೆ ಪೂರ್ಣಗೊಂಡಿದೆ",
    rateYourDriver: "ನಿಮ್ಮ ಚಾಲಕರನ್ನು ರೇಟ್ ಮಾಡಿ", comments: "ಕಾಮೆಂಟ್‌ಗಳು", reportSafetyConcern: "ಸುರಕ್ಷತಾ ಕಾಳಜಿ ವರದಿ ಮಾಡಿ",
    submit: "ಸಲ್ಲಿಸಿ", driverMisconduct: "ಚಾಲಕ ದುರ್ವರ್ತನೆ", harassment: "ಕಿರುಕುಳ",
    suspiciousBehaviour: "ಅನುಮಾನಾಸ್ಪದ ನಡವಳಿಕೆ", unsafeRoute: "ಅಸುರಕ್ಷಿತ ಮಾರ್ಗ", unprofessional: "ಅವೃತ್ತಿಪರ ನಡವಳಿಕೆ",
    otherConcern: "ಇತರ ಸುರಕ್ಷತಾ ಕಾಳಜಿ", adminDashboard: "ರಕ್ಷಾ ರೈಡ್ ನಿರ್ವಾಹಕ", activeJourneys: "ಸಕ್ರಿಯ ಪ್ರಯಾಣಗಳು",
    safeJourneys: "ಸುರಕ್ಷಿತ ಪ್ರಯಾಣಗಳು", emergencyAlerts: "ತುರ್ತು ಎಚ್ಚರಿಕೆಗಳು", sosAlerts: "SOS ಎಚ್ಚರಿಕೆಗಳು",
    verifiedDrivers: "ಪರಿಶೀಲಿಸಿದ ಚಾಲಕರು", reportedIncidents: "ವರದಿಯಾದ ಘಟನೆಗಳು", resolve: "ಪರಿಹರಿಸಿ",
    locationPermissionNeeded: "ನೇರ ಟ್ರ್ಯಾಕಿಂಗ್‌ಗೆ ಸ್ಥಳ ಅನುಮತಿ ಅಗತ್ಯವಿದೆ. ದಯವಿಟ್ಟು ಸ್ಥಳ ಪ್ರವೇಶವನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಿ ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
    notifications: "ಅಧಿಸೂಚನೆಗಳು", settings: "ಸೆಟ್ಟಿಂಗ್‌ಗಳು", demoMode: "ಡೆಮೊ ಮೋಡ್",
    protectionCompleteMsg: "ಪ್ರಯಾಣ ಸುರಕ್ಷಿತ", noActionRequired: "ಯಾವುದೇ ಕ್ರಮ ಅಗತ್ಯವಿಲ್ಲ.",
    safetyCheck: "ನೀವು ಸುರಕ್ಷಿತವಾಗಿದ್ದೀರಾ?", safetyCheckSent: "ಸುರಕ್ಷತಾ ದೃಢೀಕರಣ ಕಳುಹಿಸಲಾಗಿದೆ.",
    save: "ಉಳಿಸಿ", cancel: "ರದ್ದುಮಾಡಿ", loading: "ಲೋಡ್ ಆಗುತ್ತಿದೆ...", nearbyHelp: "ಹತ್ತಿರದ ಸಹಾಯ",
    policeStation: "ಪೊಲೀಸ್ ಠಾಣೆ", hospital: "ಆಸ್ಪತ್ರೆ", safePlace: "ಸುರಕ್ಷಿತ ಸ್ಥಳ", helpCentre: "ಸಹಾಯ ಕೇಂದ್ರ",
    active: "ಸಕ್ರಿಯ", vehicle: "ವಾಹನ", time: "ಸಮಯ", status: "ಸ್ಥಿತಿ", emergencyStatus: "ತುರ್ತು ಸ್ಥಿತಿ",
    stopAlarm: "ಅಲಾರಂ ನಿಲ್ಲಿಸಿ", emergencyAlarm: "ತುರ್ತು ಅಲಾರಂ", driverStarted: "ಪ್ರಯಾಣ ಪ್ರಾರಂಭಿಸಿದ್ದಾರೆ.",
    daughterSafe: "ಸುರಕ್ಷಿತವಾಗಿ ತಲುಪಿದ್ದಾರೆ.", welcomeBack: "ಮತ್ತೆ ಸ್ವಾಗತ",
  },
  ml: {
    appName: "രക്ഷാ റൈഡ്", corePhrase: "യാത്ര അപകടമായി മാറുമ്പോൾ", tagline: "സുരക്ഷിത യാത്ര. സ്മാർട്ട് സംരക്ഷണം.",
    heroDesc: "സ്ത്രീകളുടെ യാത്രയെ പൂർണ്ണമായി സംരക്ഷിക്കാൻ രൂപകൽപ്പന ചെയ്ത സ്മാർട്ട് പൊതുഗതാഗത സുരക്ഷാ പ്ലാറ്റ്‌ഫോം.",
    startJourney: "യാത്ര ആരംഭിക്കുക", login: "ലോഗിൻ", register: "രജിസ്റ്റർ ചെയ്യുക", logout: "ലോഗ് ഔട്ട്",
    chooseLanguage: "നിങ്ങളുടെ ഭാഷ തിരഞ്ഞെടുക്കുക", applyLanguage: "ഭാഷ പ്രയോഗിക്കുക",
    home: "ഹോം", journey: "യാത്ര", track: "ട്രാക്ക്", sos: "അടിയന്തരം", profile: "പ്രൊഫൈൽ",
    goodMorning: "സുപ്രഭാതം", protectionActive: "സംരക്ഷണം സജീവമാണ്", safe: "സുരക്ഷിതം",
    liveJourney: "തത്സമയ യാത്ര", familyTracking: "കുടുംബ ട്രാക്കിംഗ്", journeyHistory: "യാത്രാ ചരിത്രം",
    fullName: "മുഴുവൻ പേര്", phone: "ഫോൺ നമ്പർ", email: "ഇമെയിൽ", password: "പാസ്‌വേഡ്",
    role: "പങ്ക്", guardianName: "രക്ഷിതാവിന്റെ പേര്", guardianPhone: "രക്ഷിതാവിന്റെ ഫോൺ",
    emergencyContact: "അടിയന്തര ബന്ധം", preferredLanguage: "ഇഷ്ടഭാഷ",
    passenger: "യാത്രക്കാരി", parent: "രക്ഷിതാവ് / വിശ്വസ്ത ബന്ധം", driver: "ഡ്രൈവർ",
    forgotPassword: "പാസ്‌വേഡ് മറന്നോ", signUp: "സൈൻ അപ്പ് ചെയ്യുക", alreadyHaveAccount: "അക്കൗണ്ട് ഉണ്ടോ? ലോഗിൻ ചെയ്യുക",
    noAccount: "അക്കൗണ്ട് ഇല്ലേ? രജിസ്റ്റർ ചെയ്യുക", sendResetLink: "റീസെറ്റ് ലിങ്ക് അയയ്ക്കുക",
    driverVerified: "ഡ്രൈവർ പരിശോധിച്ചു", identityVerified: "ഐഡന്റിറ്റി പരിശോധിച്ചു", vehicleVerified: "വാഹനം പരിശോധിച്ചു",
    licenseVerified: "ലൈസൻസ് പരിശോധിച്ചു", safetyRating: "സുരക്ഷാ റേറ്റിംഗ്", confirmDriver: "ഡ്രൈവറെ സ്ഥിരീകരിക്കുക",
    scanQr: "ഡ്രൈവർ / വാഹന QR സ്കാൻ ചെയ്യുക", from: "നിന്ന്", to: "ലേക്ക്", distance: "ദൂരം",
    estimatedTime: "കണക്കാക്കിയ സമയം", plannedRoute: "ആസൂത്രിത റൂട്ട്", destination: "ലക്ഷ്യസ്ഥാനം",
    journeyStarted: "യാത്ര ആരംഭിച്ചു", journeyMonitoringActive: "യാത്രാ നിരീക്ഷണം സജീവം",
    viewLiveLocation: "തത്സമയ സ്ഥാനം കാണുക", journeySafe: "യാത്ര സുരക്ഷിതമാണ്", eta: "എത്തുന്ന സമയം", routeStatus: "റൂട്ട് സ്ഥിതി",
    familySafety: "കുടുംബ സുരക്ഷ", viewLocation: "സ്ഥാനം കാണുക", call: "വിളിക്കുക", emergency: "അടിയന്തരം",
    routeDeviation: "റൂട്ട് വ്യതിയാനം", areYouSafe: "നിങ്ങൾ സുരക്ഷിതരാണോ?", imSafe: "ഞാൻ സുരക്ഷിതയാണ്", needHelp: "എനിക്ക് സഹായം വേണം",
    call112: "112 ലേക്ക് വിളിക്കുക", safetyConfirmed: "സുരക്ഷ സ്ഥിരീകരിച്ചു. നിങ്ങളുടെ വിശ്വസ്ത ബന്ധത്തെ അറിയിച്ചു.",
    unexpectedStop: "അപ്രതീക്ഷിത നിർത്തം", nightSafetyMode: "രാത്രി സുരക്ഷാ മോഡ്", extraMonitoring: "അധിക യാത്രാ നിരീക്ഷണം സജീവം.",
    highRiskArea: "സുരക്ഷാ മുന്നറിയിപ്പ്", highRiskDesc: "നിങ്ങൾ അടയാളപ്പെടുത്തിയ ഉയർന്ന അപകടസാധ്യതയുള്ള പ്രദേശത്തേക്ക് പ്രവേശിക്കുന്നു. ജാഗ്രത പാലിക്കുക.",
    emergencyHelp: "അടിയന്തര സഹായം", callTrustedContact: "വിശ്വസ്ത ബന്ധത്തെ വിളിക്കുക", sendSosLocation: "SOS സ്ഥാനം അയയ്ക്കുക",
    shareLiveLocation: "തത്സമയ സ്ഥാനം പങ്കിടുക", findPolice: "പോലീസിനെ കണ്ടെത്തുക", findHospital: "ആശുപത്രി കണ്ടെത്തുക",
    safeArrival: "സുരക്ഷിത വരവ്", reachedSafely: "നിങ്ങൾ സുരക്ഷിതമായി എത്തി.", journeyCompleted: "യാത്ര വിജയകരമായി പൂർത്തിയായി.",
    iArrivedSafely: "ഞാൻ സുരക്ഷിതമായി എത്തി", protectionCompleted: "സംരക്ഷണം പൂർത്തിയായി",
    rateYourDriver: "നിങ്ങളുടെ ഡ്രൈവറെ റേറ്റ് ചെയ്യുക", comments: "അഭിപ്രായങ്ങൾ", reportSafetyConcern: "സുരക്ഷാ ആശങ്ക റിപ്പോർട്ട് ചെയ്യുക",
    submit: "സമർപ്പിക്കുക", driverMisconduct: "ഡ്രൈവറുടെ ദുർവൃത്തി", harassment: "പീഡനം",
    suspiciousBehaviour: "സംശയാസ്പദമായ പെരുമാറ്റം", unsafeRoute: "സുരക്ഷിതമല്ലാത്ത റൂട്ട്", unprofessional: "പ്രൊഫഷണലല്ലാത്ത പെരുമാറ്റം",
    otherConcern: "മറ്റ് സുരക്ഷാ ആശങ്ക", adminDashboard: "രക്ഷാ റൈഡ് അഡ്മിൻ", activeJourneys: "സജീവ യാത്രകൾ",
    safeJourneys: "സുരക്ഷിത യാത്രകൾ", emergencyAlerts: "അടിയന്തര മുന്നറിയിപ്പുകൾ", sosAlerts: "SOS മുന്നറിയിപ്പുകൾ",
    verifiedDrivers: "പരിശോധിച്ച ഡ്രൈവർമാർ", reportedIncidents: "റിപ്പോർട്ട് ചെയ്ത സംഭവങ്ങൾ", resolve: "പരിഹരിക്കുക",
    locationPermissionNeeded: "തത്സമയ ട്രാക്കിംഗിന് സ്ഥാന അനുമതി ആവശ്യമാണ്. സ്ഥാന ആക്സസ് പ്രവർത്തനക്ഷമമാക്കി വീണ്ടും ശ്രമിക്കുക.",
    notifications: "അറിയിപ്പുകൾ", settings: "സെറ്റിംഗ്സ്", demoMode: "ഡെമോ മോഡ്",
    protectionCompleteMsg: "യാത്ര സുരക്ഷിതം", noActionRequired: "നടപടി ആവശ്യമില്ല.",
    safetyCheck: "നിങ്ങൾ സുരക്ഷിതരാണോ?", safetyCheckSent: "സുരക്ഷാ സ്ഥിരീകരണം അയച്ചു.",
    save: "സേവ് ചെയ്യുക", cancel: "റദ്ദാക്കുക", loading: "ലോഡ് ചെയ്യുന്നു...", nearbyHelp: "സമീപത്തെ സഹായം",
    policeStation: "പോലീസ് സ്റ്റേഷൻ", hospital: "ആശുപത്രി", safePlace: "സുരക്ഷിത സ്ഥലം", helpCentre: "സഹായ കേന്ദ്രം",
    active: "സജീവം", vehicle: "വാഹനം", time: "സമയം", status: "നില", emergencyStatus: "അടിയന്തര നില",
    stopAlarm: "അലാറം നിർത്തുക", emergencyAlarm: "അടിയന്തര അലാറം", driverStarted: "യാത്ര ആരംഭിച്ചു.",
    daughterSafe: "സുരക്ഷിതമായി എത്തി.", welcomeBack: "വീണ്ടും സ്വാഗതം",
  },
  mr: {
    appName: "रक्षा राईड", corePhrase: "जेव्हा प्रवास धोक्यात बदलतो", tagline: "सुरक्षित प्रवास. स्मार्ट संरक्षण.",
    heroDesc: "महिलांच्या प्रवासाचे पूर्ण संरक्षण करण्यासाठी तयार केलेले स्मार्ट सार्वजनिक वाहतूक सुरक्षा व्यासपीठ.",
    startJourney: "प्रवास सुरू करा", login: "लॉगिन", register: "नोंदणी करा", logout: "लॉग आउट",
    chooseLanguage: "तुमची भाषा निवडा", applyLanguage: "भाषा लागू करा",
    home: "मुख्यपृष्ठ", journey: "प्रवास", track: "ट्रॅक", sos: "आणीबाणी", profile: "प्रोफाइल",
    goodMorning: "शुभ सकाळ", protectionActive: "संरक्षण सक्रिय आहे", safe: "सुरक्षित",
    liveJourney: "थेट प्रवास", familyTracking: "कुटुंब ट्रॅकिंग", journeyHistory: "प्रवास इतिहास",
    fullName: "पूर्ण नाव", phone: "फोन नंबर", email: "ईमेल", password: "पासवर्ड",
    role: "भूमिका", guardianName: "पालकांचे नाव", guardianPhone: "पालकांचा फोन",
    emergencyContact: "आणीबाणी संपर्क", preferredLanguage: "पसंतीची भाषा",
    passenger: "प्रवासी", parent: "पालक / विश्वासू संपर्क", driver: "चालक",
    forgotPassword: "पासवर्ड विसरलात", signUp: "साइन अप करा", alreadyHaveAccount: "आधीपासून खाते आहे? लॉगिन करा",
    noAccount: "खाते नाही? नोंदणी करा", sendResetLink: "रीसेट लिंक पाठवा",
    driverVerified: "चालक सत्यापित", identityVerified: "ओळख सत्यापित", vehicleVerified: "वाहन सत्यापित",
    licenseVerified: "परवाना सत्यापित", safetyRating: "सुरक्षा रेटिंग", confirmDriver: "चालकाची पुष्टी करा",
    scanQr: "चालक / वाहन QR स्कॅन करा", from: "पासून", to: "पर्यंत", distance: "अंतर",
    estimatedTime: "अंदाजित वेळ", plannedRoute: "नियोजित मार्ग", destination: "गंतव्यस्थान",
    journeyStarted: "प्रवास सुरू झाला", journeyMonitoringActive: "प्रवास निरीक्षण सक्रिय",
    viewLiveLocation: "थेट स्थान पहा", journeySafe: "प्रवास सुरक्षित आहे", eta: "पोहोचण्याची वेळ", routeStatus: "मार्ग स्थिती",
    familySafety: "कौटुंबिक सुरक्षा", viewLocation: "स्थान पहा", call: "कॉल करा", emergency: "आणीबाणी",
    routeDeviation: "मार्गातील बदल", areYouSafe: "तुम्ही सुरक्षित आहात का?", imSafe: "मी सुरक्षित आहे", needHelp: "मला मदत हवी आहे",
    call112: "112 ला कॉल करा", safetyConfirmed: "सुरक्षितता पुष्टी झाली. तुमच्या विश्वासू संपर्काला कळवले आहे.",
    unexpectedStop: "अनपेक्षित थांबा", nightSafetyMode: "रात्री सुरक्षा मोड", extraMonitoring: "अतिरिक्त प्रवास निरीक्षण सक्रिय.",
    highRiskArea: "सुरक्षा इशारा", highRiskDesc: "तुम्ही चिन्हांकित उच्च-जोखीम क्षेत्रात प्रवेश करत आहात. सतर्क रहा.",
    emergencyHelp: "आणीबाणी मदत", callTrustedContact: "विश्वासू संपर्काला कॉल करा", sendSosLocation: "SOS स्थान पाठवा",
    shareLiveLocation: "थेट स्थान शेअर करा", findPolice: "पोलीस शोधा", findHospital: "रुग्णालय शोधा",
    safeArrival: "सुरक्षित आगमन", reachedSafely: "तुम्ही सुरक्षितपणे पोहोचला आहात.", journeyCompleted: "प्रवास यशस्वीरित्या पूर्ण झाला.",
    iArrivedSafely: "मी सुरक्षित पोहोचले", protectionCompleted: "संरक्षण पूर्ण",
    rateYourDriver: "तुमच्या चालकाला रेट करा", comments: "टिप्पण्या", reportSafetyConcern: "सुरक्षा चिंतेची तक्रार करा",
    submit: "सबमिट करा", driverMisconduct: "चालकाचे गैरवर्तन", harassment: "छळ",
    suspiciousBehaviour: "संशयास्पद वर्तन", unsafeRoute: "असुरक्षित मार्ग", unprofessional: "अव्यावसायिक वर्तन",
    otherConcern: "इतर सुरक्षा चिंता", adminDashboard: "रक्षा राईड प्रशासक", activeJourneys: "सक्रिय प्रवास",
    safeJourneys: "सुरक्षित प्रवास", emergencyAlerts: "आणीबाणी इशारे", sosAlerts: "SOS इशारे",
    verifiedDrivers: "सत्यापित चालक", reportedIncidents: "नोंदवलेल्या घटना", resolve: "निराकरण करा",
    locationPermissionNeeded: "थेट ट्रॅकिंगसाठी स्थान परवानगी आवश्यक आहे. कृपया स्थान प्रवेश सक्षम करा.",
    notifications: "सूचना", settings: "सेटिंग्ज", demoMode: "डेमो मोड",
    protectionCompleteMsg: "प्रवास सुरक्षित", noActionRequired: "कोणतीही कारवाई आवश्यक नाही.",
    safetyCheck: "तुम्ही सुरक्षित आहात का?", safetyCheckSent: "सुरक्षा पुष्टीकरण पाठवले.",
    save: "जतन करा", cancel: "रद्द करा", loading: "लोड होत आहे...", nearbyHelp: "जवळपासची मदत",
    policeStation: "पोलीस स्टेशन", hospital: "रुग्णालय", safePlace: "सुरक्षित जागा", helpCentre: "मदत केंद्र",
    active: "सक्रिय", vehicle: "वाहन", time: "वेळ", status: "स्थिती", emergencyStatus: "आणीबाणी स्थिती",
    stopAlarm: "अलार्म थांबवा", emergencyAlarm: "आणीबाणी अलार्म", driverStarted: "ने प्रवास सुरू केला आहे.",
    daughterSafe: "सुरक्षित पोहोचली आहे.", welcomeBack: "पुन्हा स्वागत आहे",
  },
  bn: {
    appName: "রক্ষা রাইড", corePhrase: "যখন যাত্রা ঝুঁকিতে পরিণত হয়", tagline: "নিরাপদ যাত্রা। স্মার্ট সুরক্ষা।",
    heroDesc: "নারীদের যাত্রা সম্পূর্ণরূপে সুরক্ষিত রাখতে ডিজাইন করা স্মার্ট গণপরিবহন সুরক্ষা প্ল্যাটফর্ম।",
    startJourney: "যাত্রা শুরু করুন", login: "লগইন", register: "নিবন্ধন করুন", logout: "লগ আউট",
    chooseLanguage: "আপনার ভাষা নির্বাচন করুন", applyLanguage: "ভাষা প্রয়োগ করুন",
    home: "হোম", journey: "যাত্রা", track: "ট্র্যাক", sos: "জরুরি", profile: "প্রোফাইল",
    goodMorning: "শুভ সকাল", protectionActive: "সুরক্ষা সক্রিয় আছে", safe: "নিরাপদ",
    liveJourney: "লাইভ যাত্রা", familyTracking: "পারিবারিক ট্র্যাকিং", journeyHistory: "যাত্রার ইতিহাস",
    fullName: "পুরো নাম", phone: "ফোন নম্বর", email: "ইমেইল", password: "পাসওয়ার্ড",
    role: "ভূমিকা", guardianName: "অভিভাবকের নাম", guardianPhone: "অভিভাবকের ফোন",
    emergencyContact: "জরুরি যোগাযোগ", preferredLanguage: "পছন্দের ভাষা",
    passenger: "যাত্রী", parent: "অভিভাবক / বিশ্বস্ত যোগাযোগ", driver: "চালক",
    forgotPassword: "পাসওয়ার্ড ভুলে গেছেন", signUp: "সাইন আপ করুন", alreadyHaveAccount: "ইতিমধ্যে অ্যাকাউন্ট আছে? লগইন করুন",
    noAccount: "অ্যাকাউন্ট নেই? নিবন্ধন করুন", sendResetLink: "রিসেট লিংক পাঠান",
    driverVerified: "চালক যাচাইকৃত", identityVerified: "পরিচয় যাচাইকৃত", vehicleVerified: "যানবাহন যাচাইকৃত",
    licenseVerified: "লাইসেন্স যাচাইকৃত", safetyRating: "সুরক্ষা রেটিং", confirmDriver: "চালক নিশ্চিত করুন",
    scanQr: "চালক / যানবাহন QR স্ক্যান করুন", from: "থেকে", to: "পর্যন্ত", distance: "দূরত্ব",
    estimatedTime: "আনুমানিক সময়", plannedRoute: "পরিকল্পিত পথ", destination: "গন্তব্য",
    journeyStarted: "যাত্রা শুরু হয়েছে", journeyMonitoringActive: "যাত্রা পর্যবেক্ষণ সক্রিয়",
    viewLiveLocation: "লাইভ অবস্থান দেখুন", journeySafe: "যাত্রা নিরাপদ আছে", eta: "পৌঁছানোর সময়", routeStatus: "পথের অবস্থা",
    familySafety: "পারিবারিক সুরক্ষা", viewLocation: "অবস্থান দেখুন", call: "কল করুন", emergency: "জরুরি",
    routeDeviation: "পথ বিচ্যুতি", areYouSafe: "আপনি কি নিরাপদ আছেন?", imSafe: "আমি নিরাপদ আছি", needHelp: "আমার সাহায্য দরকার",
    call112: "112 নম্বরে কল করুন", safetyConfirmed: "সুরক্ষা নিশ্চিত হয়েছে। আপনার বিশ্বস্ত যোগাযোগকে জানানো হয়েছে।",
    unexpectedStop: "অপ্রত্যাশিত থামা", nightSafetyMode: "রাত্রিকালীন সুরক্ষা মোড", extraMonitoring: "অতিরিক্ত যাত্রা পর্যবেক্ষণ সক্রিয়।",
    highRiskArea: "সুরক্ষা সতর্কতা", highRiskDesc: "আপনি একটি চিহ্নিত উচ্চ-ঝুঁকিপূর্ণ এলাকায় প্রবেশ করছেন। সতর্ক থাকুন।",
    emergencyHelp: "জরুরি সাহায্য", callTrustedContact: "বিশ্বস্ত যোগাযোগে কল করুন", sendSosLocation: "SOS অবস্থান পাঠান",
    shareLiveLocation: "লাইভ অবস্থান শেয়ার করুন", findPolice: "পুলিশ খুঁজুন", findHospital: "হাসপাতাল খুঁজুন",
    safeArrival: "নিরাপদ পৌঁছানো", reachedSafely: "আপনি নিরাপদে পৌঁছেছেন।", journeyCompleted: "যাত্রা সফলভাবে সম্পন্ন হয়েছে।",
    iArrivedSafely: "আমি নিরাপদে পৌঁছেছি", protectionCompleted: "সুরক্ষা সম্পন্ন",
    rateYourDriver: "আপনার চালককে রেট করুন", comments: "মন্তব্য", reportSafetyConcern: "সুরক্ষা উদ্বেগ রিপোর্ট করুন",
    submit: "জমা দিন", driverMisconduct: "চালকের অসদাচরণ", harassment: "হয়রানি",
    suspiciousBehaviour: "সন্দেহজনক আচরণ", unsafeRoute: "অনিরাপদ পথ", unprofessional: "অপেশাদার আচরণ",
    otherConcern: "অন্যান্য সুরক্ষা উদ্বেগ", adminDashboard: "রক্ষা রাইড অ্যাডমিন", activeJourneys: "সক্রিয় যাত্রা",
    safeJourneys: "নিরাপদ যাত্রা", emergencyAlerts: "জরুরি সতর্কতা", sosAlerts: "SOS সতর্কতা",
    verifiedDrivers: "যাচাইকৃত চালক", reportedIncidents: "রিপোর্ট করা ঘটনা", resolve: "সমাধান করুন",
    locationPermissionNeeded: "লাইভ ট্র্যাকিংয়ের জন্য অবস্থান অনুমতি প্রয়োজন। অনুগ্রহ করে অবস্থান অ্যাক্সেস সক্রিয় করুন।",
    notifications: "বিজ্ঞপ্তি", settings: "সেটিংস", demoMode: "ডেমো মোড",
    protectionCompleteMsg: "যাত্রা নিরাপদ", noActionRequired: "কোনো পদক্ষেপের প্রয়োজন নেই।",
    safetyCheck: "আপনি কি নিরাপদ আছেন?", safetyCheckSent: "সুরক্ষা নিশ্চিতকরণ পাঠানো হয়েছে।",
    save: "সংরক্ষণ করুন", cancel: "বাতিল করুন", loading: "লোড হচ্ছে...", nearbyHelp: "কাছাকাছি সাহায্য",
    policeStation: "থানা", hospital: "হাসপাতাল", safePlace: "নিরাপদ স্থান", helpCentre: "সহায়তা কেন্দ্র",
    active: "সক্রিয়", vehicle: "যানবাহন", time: "সময়", status: "অবস্থা", emergencyStatus: "জরুরি অবস্থা",
    stopAlarm: "অ্যালার্ম বন্ধ করুন", emergencyAlarm: "জরুরি অ্যালার্ম", driverStarted: "যাত্রা শুরু করেছে।",
    daughterSafe: "নিরাপদে পৌঁছেছে।", welcomeBack: "আবার স্বাগতম",
  }
};

const LANG_NAMES = {
  en: "English", te: "తెలుగు — Telugu", hi: "हिन्दी — Hindi", ta: "தமிழ் — Tamil",
  kn: "ಕನ್ನಡ — Kannada", ml: "മലയാളം — Malayalam", mr: "मराठी — Marathi", bn: "বাংলা — Bengali"
};

// ------------------------------------------------------------
// 2. APP STATE
// ------------------------------------------------------------
const State = {
  lang: localStorage.getItem("rakshaRideLanguage") || "en",
  session: null,
  profile: null,
  currentScreen: "landing",
  activeJourney: null,
  watchId: null,
  locationSub: null,
  demoMode: false,
  checkinTimer: null,
  selectedRating: 0,
};

function t(key) {
  return (translations[State.lang] && translations[State.lang][key]) || translations.en[key] || key;
}

function setLanguage(code) {
  State.lang = code;
  localStorage.setItem("rakshaRideLanguage", code);
  if (State.session && State.profile) {
    Auth.updateProfile(State.session.user.id, { preferred_language: code });
  }
  applyTranslations();
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.getAttribute("data-i18n"));
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    el.placeholder = t(el.getAttribute("data-i18n-placeholder"));
  });
}

// ------------------------------------------------------------
// 3. ROUTING
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
  const authScreens = ["landing", "login", "register", "language-select"];
  bottomNav.style.display = (State.session && !authScreens.includes(id)) ? "flex" : "none";
}

function toast(message) {
  const container = document.getElementById("toast-container");
  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = message;
  container.appendChild(el);
  setTimeout(() => el.remove(), 4000);
}

// ------------------------------------------------------------
// 4. LANGUAGE SELECTOR
// ------------------------------------------------------------
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
      div.dataset.pending = code;
      container.dataset.pendingLang = code;
    };
    container.appendChild(div);
  });
}

// ------------------------------------------------------------
// 5. AUTH FLOWS
// ------------------------------------------------------------
async function handleRegister(e) {
  e.preventDefault();
  const f = e.target;
  const btn = f.querySelector("button[type=submit]");
  btn.disabled = true; btn.textContent = t("loading");
  const { error } = await Auth.signUp({
    email: f.email.value.trim(),
    password: f.password.value,
    fullName: f.fullName.value.trim(),
    phone: f.phone.value.trim(),
    role: f.role.value,
    guardianName: f.guardianName.value.trim(),
    guardianPhone: f.guardianPhone.value.trim(),
    emergencyContact: f.emergencyContact.value.trim(),
    language: State.lang
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
  if (error) toast(error.message);
  else toast("Password reset link sent to your email.");
}

async function handleLogout() {
  stopLocationWatch();
  await Auth.signOut();
  State.session = null;
  State.profile = null;
  showScreen("landing");
}

async function refreshSession() {
  const session = await Auth.getSession();
  State.session = session;
  if (session) {
    const { data: profile } = await Auth.getProfile(session.user.id);
    State.profile = profile;
    if (profile && profile.preferred_language) setLanguage(profile.preferred_language);
    routeByRole();
  } else {
    showScreen("landing");
  }
}

function routeByRole() {
  if (!State.profile) { showScreen("landing"); return; }
  if (State.profile.role === "admin") {
    showScreen("admin-dashboard");
    loadAdminDashboard();
  } else if (State.profile.role === "parent") {
    showScreen("parent-dashboard");
    loadParentDashboard();
  } else {
    showScreen("passenger-dashboard");
    loadPassengerDashboard();
  }
  document.getElementById("greetingName").textContent = State.profile.full_name || "";
  applyTranslations();
}

// ------------------------------------------------------------
// 6. PASSENGER DASHBOARD
// ------------------------------------------------------------
async function loadPassengerDashboard() {
  const { data: active } = await Journeys.getActiveForPassenger(State.session.user.id);
  if (active) {
    State.activeJourney = active;
    document.getElementById("dashActiveJourneyCard").classList.remove("hidden");
  } else {
    document.getElementById("dashActiveJourneyCard").classList.add("hidden");
  }
}

// ------------------------------------------------------------
// 7. DRIVER VERIFICATION (QR)
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
    await html5QrCode.start(
      { facingMode: "environment" },
      { fps: 10, qrbox: 220 },
      onQrScanSuccess,
      () => {}
    );
  } catch (err) {
    toast("Camera unavailable. You can use Demo Mode to preview driver verification.");
  }
}

async function stopQrScanner() {
  if (html5QrCode) {
    try { await html5QrCode.stop(); html5QrCode.clear(); } catch (e) {}
    html5QrCode = null;
  }
}

async function onQrScanSuccess(decodedText) {
  await stopQrScanner();
  document.getElementById("qr-reader-wrap").classList.add("hidden");
  await loadDriverFromQr(decodedText);
}

async function loadDriverFromQr(qrCode) {
  const { data, error } = await Drivers.getByQr(qrCode);
  if (error || !data) {
    toast("Driver/vehicle QR not recognized.");
    return;
  }
  renderDriverResult(data, data.drivers);
}

function renderDemoDriver() {
  const demoVehicle = { vehicle_number: "AP XX XX 1234", vehicle_type: "Auto Rickshaw", verified: true };
  const demoDriver = { full_name: "Ravi Kumar", phone: "+91 90000 00000", identity_verified: true, license_verified: true, safety_rating: 4.7, id: "demo-driver" };
  renderDriverResult(demoVehicle, demoDriver, true);
}

function renderDriverResult(vehicle, driver, isDemo) {
  State.selectedDriver = driver;
  State.selectedVehicle = vehicle;
  document.getElementById("qr-result").classList.remove("hidden");
  document.getElementById("resultDriverName").textContent = driver.full_name;
  document.getElementById("resultDriverPhone").textContent = driver.phone || "—";
  document.getElementById("resultVehicleNumber").textContent = vehicle.vehicle_number;
  document.getElementById("resultVehicleType").textContent = vehicle.vehicle_type || "—";
  document.getElementById("resultRating").textContent = "⭐ " + (driver.safety_rating || 5.0).toFixed(1);
  document.getElementById("resultDemoBadge").classList.toggle("hidden", !isDemo);
}

function confirmDriver() {
  showScreen("journey-plan");
}

// ------------------------------------------------------------
// 8. JOURNEY PLANNING + START
// ------------------------------------------------------------
let planMap, planFromMarker, planToMarker;

function initPlanMap() {
  const mapEl = document.getElementById("plan-map");
  if (!mapEl || mapEl._leaflet_id) return;
  planMap = L.map("plan-map").setView([17.385, 78.4867], 12);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: "© OpenStreetMap" }).addTo(planMap);
}

async function handlePlanJourney(e) {
  e.preventDefault();
  const f = e.target;
  const from = f.from.value.trim();
  const to = f.to.value.trim();
  if (!from || !to) return;

  let coords = { lat: 17.385, lng: 78.4867 };
  try {
    coords = await getCurrentPosition();
  } catch (err) {}

  const driverId = State.selectedDriver && !State.selectedDriver.id?.toString().startsWith("demo") ? State.selectedDriver.id : null;
  const vehicleId = State.selectedVehicle && State.selectedVehicle.id ? State.selectedVehicle.id : null;

  const { data: journey, error } = await Journeys.create({
    passenger_id: State.session.user.id,
    driver_id: driverId,
    vehicle_id: vehicleId,
    from_location: from,
    to_location: to,
    from_lat: coords.lat,
    from_lng: coords.lng,
    status: "active",
    started_at: new Date().toISOString()
  });

  if (error) { toast(error.message); return; }
  State.activeJourney = journey;

  await Notifications.create(State.session.user.id, "journey_started", `${t("journeyStarted")}: ${from} → ${to}`);

  document.getElementById("startedFrom").textContent = from;
  document.getElementById("startedTo").textContent = to;
  document.getElementById("startedVehicle").textContent = State.selectedVehicle ? State.selectedVehicle.vehicle_number : "—";
  document.getElementById("startedDriver").textContent = State.selectedDriver ? State.selectedDriver.full_name : t("driverVerified");
  showScreen("journey-started");
}

function getCurrentPosition() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) { reject(new Error("no-geo")); return; }
    navigator.geolocation.getCurrentPosition(
      pos => resolve({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      err => reject(err),
      { enableHighAccuracy: true, timeout: 8000 }
    );
  });
}

// ------------------------------------------------------------
// 9. LIVE TRACKING
// ------------------------------------------------------------
let trackMap, trackMarker;

function goToLiveTracking() {
  showScreen("live-tracking");
  setTimeout(initTrackMap, 50);
  startLocationWatch();
  scheduleCheckin();
}

function initTrackMap() {
  const mapEl = document.getElementById("track-map");
  if (!mapEl) return;
  if (mapEl._leaflet_id) { trackMap.invalidateSize(); return; }
  trackMap = L.map("track-map").setView([17.385, 78.4867], 14);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: "© OpenStreetMap" }).addTo(trackMap);
  trackMarker = L.circleMarker([17.385, 78.4867], { radius: 9, color: "#e11d3c", fillColor: "#e11d3c", fillOpacity: 0.9 }).addTo(trackMap);
}

function startLocationWatch() {
  if (!navigator.geolocation) {
    document.getElementById("locationWarning").classList.remove("hidden");
    return;
  }
  State.watchId = navigator.geolocation.watchPosition(
    pos => onLocationUpdate(pos.coords.latitude, pos.coords.longitude),
    err => { document.getElementById("locationWarning").classList.remove("hidden"); },
    { enableHighAccuracy: true, maximumAge: 5000, timeout: 10000 }
  );
}

function stopLocationWatch() {
  if (State.watchId !== null) {
    navigator.geolocation.clearWatch(State.watchId);
    State.watchId = null;
  }
  if (State.checkinTimer) { clearTimeout(State.checkinTimer); State.checkinTimer = null; }
}

async function onLocationUpdate(lat, lng) {
  if (trackMap && trackMarker) {
    trackMarker.setLatLng([lat, lng]);
    trackMap.panTo([lat, lng]);
  }
  if (State.activeJourney) {
    await Locations.record(State.activeJourney.id, lat, lng);
  }
}

function scheduleCheckin() {
  // Periodic safety check-in prompt (demo cadence: every 90s)
  State.checkinTimer = setTimeout(() => {
    if (State.currentScreen === "live-tracking") {
      showSafetyCheckModal();
    }
    scheduleCheckin();
  }, 90000);
}

function showSafetyCheckModal() {
  document.getElementById("checkin-modal").classList.remove("hidden");
}

async function respondCheckin(status) {
  document.getElementById("checkin-modal").classList.add("hidden");
  if (State.activeJourney) {
    await Checkins.record(State.activeJourney.id, State.session.user.id, status);
  }
  if (status === "safe") {
    toast(t("safetyCheckSent"));
  } else {
    openEmergencyScreen();
  }
}

// Simulated route deviation / unplanned stop (manual trigger for demo/testing,
// since real deviation detection needs a defined planned polyline)
async function simulateRouteAlert(type) {
  if (!State.activeJourney) return;
  const { data } = await RouteAlerts.create(State.activeJourney.id, type);
  State.pendingAlert = data;
  document.getElementById(type === "deviation" ? "deviation-modal" : "stop-modal").classList.remove("hidden");
}

async function resolveRouteAlert(modalId, status) {
  document.getElementById(modalId).classList.add("hidden");
  if (State.pendingAlert) await RouteAlerts.resolve(State.pendingAlert.id);
  if (status === "safe") toast(t("safetyConfirmed"));
  else openEmergencyScreen();
}

// ------------------------------------------------------------
// 10. FAMILY / PARENT DASHBOARD
// ------------------------------------------------------------
async function loadParentDashboard() {
  // In a full build, parent-passenger linking uses emergency_contacts;
  // here we show the most recent journey visible under RLS policies.
  const { data } = await Journeys.getActiveForPassenger(State.session.user.id);
  const card = document.getElementById("parentJourneyCard");
  if (data) {
    card.classList.remove("hidden");
    document.getElementById("parentPassengerName").textContent = data.passenger_id;
    document.getElementById("parentVehicle").textContent = data.vehicles ? data.vehicles.vehicle_number : "—";
    document.getElementById("parentDestination").textContent = data.to_location;
  } else {
    card.classList.add("hidden");
  }
}

// ------------------------------------------------------------
// 11. SOS / EMERGENCY
// ------------------------------------------------------------
function openEmergencyScreen() {
  showScreen("emergency");
}

async function sendSOS() {
  let coords = { lat: null, lng: null };
  try { coords = await getCurrentPosition(); } catch (e) {}
  if (!State.session) { toast("Please log in to send SOS."); return; }
  const { data, error } = await SOS.create({
    journeyId: State.activeJourney ? State.activeJourney.id : null,
    passengerId: State.session.user.id,
    lat: coords.lat, lng: coords.lng
  });
  if (error) { toast(error.message); return; }
  if (State.activeJourney) await Journeys.update(State.activeJourney.id, { status: "sos" });
  await Notifications.create(State.session.user.id, "sos", "SOS activated");
  State.activeSosId = data.id;
  document.getElementById("sosActivePassenger").textContent = State.profile.full_name;
  document.getElementById("sosActiveVehicle").textContent = State.selectedVehicle ? State.selectedVehicle.vehicle_number : "—";
  document.getElementById("sosActiveTime").textContent = new Date().toLocaleTimeString();
  showScreen("sos-active");
}

function callNumber(num) {
  window.location.href = `tel:${num}`;
}

let alarmAudioCtx = null, alarmOscillator = null;
function playAlarm() {
  try {
    alarmAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
    alarmOscillator = alarmAudioCtx.createOscillator();
    const gain = alarmAudioCtx.createGain();
    alarmOscillator.type = "square";
    alarmOscillator.frequency.value = 880;
    gain.gain.value = 0.15;
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

// Voice SOS (Web Speech API), always with a manual fallback button present
function startVoiceSos() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) { toast("Voice recognition not supported on this browser."); return; }
  const recog = new SpeechRecognition();
  recog.lang = "en-IN";
  recog.continuous = false;
  recog.onresult = (e) => {
    const text = e.results[0][0].transcript.toLowerCase();
    if (text.includes("help") || text.includes("emergency") || text.includes("sos")) {
      sendSOS();
    }
  };
  recog.onerror = () => toast("Couldn't hear you clearly. Use the SOS button instead.");
  recog.start();
  toast("Listening...");
}

// ------------------------------------------------------------
// 12. SAFE ARRIVAL
// ------------------------------------------------------------
async function markArrivedSafely() {
  if (State.activeJourney) {
    await Journeys.update(State.activeJourney.id, { status: "completed", ended_at: new Date().toISOString() });
    await Notifications.create(State.session.user.id, "safe_arrival", t("reachedSafely"));
  }
  stopLocationWatch();
  showScreen("safe-arrival");
}

function goToRating() {
  State.selectedRating = 0;
  renderStars();
  showScreen("driver-rating");
}

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
  if (!State.activeJourney) { showScreen("passenger-dashboard"); return; }
  const comment = document.getElementById("ratingComment").value.trim();
  await Ratings.submit({
    journeyId: State.activeJourney.id,
    driverId: State.activeJourney.driver_id,
    passengerId: State.session.user.id,
    rating: State.selectedRating || 5,
    comment
  });
  toast("Thank you for your feedback.");
  State.activeJourney = null;
  loadPassengerDashboard();
  showScreen("passenger-dashboard");
}

function goToIncidentReport() {
  showScreen("incident-report");
}

async function submitIncident(e) {
  e.preventDefault();
  const f = e.target;
  await Incidents.report({
    journeyId: State.activeJourney ? State.activeJourney.id : null,
    passengerId: State.session.user.id,
    category: f.category.value,
    description: f.description.value.trim()
  });
  toast("Report submitted. Our safety team will review it.");
  f.reset();
  showScreen("passenger-dashboard");
}

// ------------------------------------------------------------
// 13. ADMIN DASHBOARD
// ------------------------------------------------------------
async function loadAdminDashboard() {
  const { journeys, sos, drivers, incidents } = await Admin.stats();
  const j = journeys.data || [];
  const s = sos.data || [];
  const d = drivers.data || [];
  const i = incidents.data || [];

  document.getElementById("statActiveJourneys").textContent = j.filter(x => x.status === "active").length;
  document.getElementById("statSafeJourneys").textContent = j.filter(x => x.status === "completed").length;
  document.getElementById("statSosAlerts").textContent = s.filter(x => x.status === "active").length;
  document.getElementById("statVerifiedDrivers").textContent = d.filter(x => x.identity_verified).length;
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
  if (!activeSos || !activeSos.length) {
    list.innerHTML = `<p class="small center">No active SOS alerts.</p>`;
  }
}

async function resolveSosAsAdmin(id) {
  await SOS.resolve(id);
  toast("SOS marked resolved.");
  loadAdminDashboard();
}

// ------------------------------------------------------------
// 14. DEMO MODE
// ------------------------------------------------------------
function enterDemoMode() {
  State.demoMode = true;
  showScreen("driver-verify");
  document.getElementById("qr-reader-wrap").classList.add("hidden");
  renderDemoDriver();
}

// ------------------------------------------------------------
// 15. NOTIFICATIONS PANEL
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
// 16. INIT
// ------------------------------------------------------------
document.addEventListener("DOMContentLoaded", async () => {
  applyTranslations();
  renderLanguageOptions("langOptionsMain");
  renderLanguageOptions("langOptionsSettings");

  document.getElementById("registerForm").addEventListener("submit", handleRegister);
  document.getElementById("loginForm").addEventListener("submit", handleLogin);
  document.getElementById("forgotForm").addEventListener("submit", handleForgotPassword);
  document.getElementById("planForm").addEventListener("submit", handlePlanJourney);
  document.getElementById("ratingForm").addEventListener("submit", submitRating);
  document.getElementById("incidentForm").addEventListener("submit", submitIncident);

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

  const savedNightHour = new Date().getHours();
  if (savedNightHour >= 21 || savedNightHour < 5) {
    document.getElementById("nightModeBanner").classList.remove("hidden");
  }

  await refreshSession();
  Auth.onAuthChange((session) => {
    if (!session) { State.session = null; State.profile = null; }
  });
});
