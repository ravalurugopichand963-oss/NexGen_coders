# 🛡️ Raksha Ride

**Safe Journey. Smart Protection.**
*"when a ride becomes a risk"*

A women-focused smart public transport safety & tracking platform prototype. It protects a passenger from the moment she enters a vehicle until she confirms she's reached her destination — driver verification, journey planning, family notification, live monitoring, safety alerts, emergency response, and safe arrival.

This repo is a static front-end prototype (HTML/CSS/JS, no build step) with all data simulated in-memory, structured so it can be wired to Supabase and real GPS/mapping APIs without a rewrite.

## Files

```
raksha-ride/
├── index.html   — all screens/markup (landing + passenger app + family + admin views)
├── style.css    — cinematic dark design system (tokens, components, animations)
├── script.js    — navigation, journey simulation, SOS flow, i18n (EN / TE)
└── README.md
```

## Running it

No build tools needed. Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

Deploys as-is to **Vercel** (static site — no framework config required) or **GitHub Pages**.

## What's simulated vs. real in this prototype

- **Live GPS position** — currently animated along a fixed SVG path to demonstrate the UI. Swap `updateProgressVisual()` in `script.js` for a `navigator.geolocation.watchPosition()` feed, and replace the SVG map with a real map (see below).
- **QR driver verification** — the scan button simulates a successful scan after a short delay. Swap in a QR library (e.g. `html5-qrcode`) and validate the decoded ID against your driver records table.
- **Route deviation / unexpected stop / high-risk area** — triggered manually via the demo controls on the tracking screen. In production these are threshold checks run against live GPS vs. the planned route (a geofence / polyline-distance check), run either client-side or in a Supabase Edge Function on each location ping.
- **Family & Authority dashboard data** — populated client-side as events happen in this browser tab. In production these come from Supabase Realtime subscriptions so a parent's or authority's screen updates from another device instantly.
- **SOS message / emergency link** — the message content and link shown are illustrative. In production the link should be a signed, time-limited URL to a read-only tracking view.

## Suggested Supabase schema

```sql
passengers        (id, name, phone, guardian_name, guardian_phone, language)
drivers           (id, name, phone, vehicle_number, vehicle_type, id_verified, license_verified, rating)
journeys          (id, passenger_id, driver_id, source, destination, planned_route geojson,
                    status enum('planned','active','deviated','stopped','sos','completed'),
                    started_at, ended_at)
location_pings    (id, journey_id, lat, lng, recorded_at)
safety_events     (id, journey_id, type enum('deviation','unexpected_stop','checkin','sos','high_risk_area'),
                    resolved boolean, created_at)
incident_reports  (id, journey_id, passenger_id, category, details, created_at)
feedback          (id, journey_id, rating, comment, created_at)
```

- Use **Supabase Realtime** on `location_pings` and `safety_events` so the family/admin dashboards update live.
- Use **Row Level Security**: a passenger can only see their own journeys; a guardian can only see journeys where they're the registered emergency contact; authority accounts see all active/flagged journeys.
- Keep the Supabase **service-role key server-side only** (Edge Function / API route) — never ship it to the browser. The frontend should only ever use the public anon key with RLS enforced.

## Suggested mapping/routing integration

Replace the SVG route in `#mapCard` / `#mapSvg` with:
- **Leaflet.js** + **OpenStreetMap** tiles for the live map.
- A routing API (e.g. OSRM or a routing provider) for real distance/ETA in the journey planning screen.
- `navigator.geolocation` (Browser Geolocation API) for the passenger's live position, sent to `location_pings` on an interval.
- Google Maps deep links (`https://www.google.com/maps?q=lat,lng`) for the "View Location" / "Call 112" style share actions where a full map isn't needed.

## Scope note

Raksha Ride is intentionally scoped to **passenger safety during the journey** — driver verification, route/stop monitoring, check-ins, and emergency response. It does not include accident/crash/collision detection, general vehicle safety monitoring, AI-based prediction, or shake-to-SOS.

## Accessibility & language

- English and Telugu (తెలుగు) are supported via the language switch in the top bar.
- Status is communicated primarily through color + icon (🟢 safe / 🟡 check / 🔴 emergency) alongside short text, for usability across literacy levels.
- Large touch targets, bottom navigation, and a prominent SOS button are used throughout for one-handed mobile use.
