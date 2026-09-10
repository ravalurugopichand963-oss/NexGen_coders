# 🛡️ Raksha Ride — Safe Journey. Smart Protection.

_"when a ride becomes a risk"_

A public transport safety platform for women: driver verification, live journey tracking, family monitoring, route safety alerts, and one-tap SOS. Built as a plain static site (HTML/CSS/JS) so it can be maintained entirely from a phone — no build tools, no terminal, no laptop required.

## What's included

| File | Purpose |
|---|---|
| `index.html` | All screens (single-page app, hash-free JS routing) |
| `style.css` | Cinematic black/crimson security-command-center theme |
| `script.js` | App logic, 8-language translation system, journey/SOS/admin flows |
| `supabase.js` | Supabase client + all database calls (auth, journeys, SOS, etc.) |
| `assets/schema.sql` | Full database schema + Row Level Security policies |

## 1. Set up Supabase (5 minutes, from your phone browser)

1. Open your Supabase project → **SQL Editor** → **New query**.
2. Copy the entire contents of `assets/schema.sql` and paste it in, then **Run**.
   This creates all 13 tables (`profiles`, `drivers`, `vehicles`, `journeys`, `journey_locations`, `safety_checkins`, `route_alerts`, `sos_alerts`, `emergency_contacts`, `notifications`, `high_risk_areas`, `driver_ratings`, `incident_reports`), turns on Row Level Security, and enables Realtime on the live-tracking tables.
3. Go to **Authentication → Providers** and make sure **Email** sign-up is enabled. For a quick prototype you can turn off "Confirm email" under **Authentication → Settings** so test accounts work instantly.
4. **Admin accounts are never self-assignable.** After your first real signup, promote yourself in the Supabase **Table Editor** (`profiles` table) by manually setting `role` to `admin` for that row.

The app is already pointed at your project:
- URL: `https://jyujdxifqglqfqxratlj.supabase.co`
- Key: the publishable/anon key (safe for frontend use — never put a `service_role` key in this project)

## 2. Add demo driver data (optional but recommended)

In the Supabase Table Editor, add one row to `drivers` and one to `vehicles` (link `vehicles.driver_id` to the driver's `id`) and set `vehicles.qr_code` to any short string like `RR-DEMO-001`. Generate a QR code for that string (any free QR generator website) to test the real camera scanner — or just tap **"Use Demo Driver Instead"** on the driver-verification screen, which skips the camera entirely.

## 3. Push to GitHub — entirely from your phone

1. In the GitHub app (or mobile browser at github.com), create a new repository called `raksha-ride`.
2. Use GitHub's **"Add file → Upload files"** web UI (works great on mobile) to upload these five files, keeping `assets/schema.sql` inside an `assets` folder.
3. Commit directly to `main`.

No `git` commands, no npm, no build step — this is a static site GitHub can host as-is.

## 4. Deploy to Vercel — entirely from your phone

1. Go to vercel.com, sign in with your GitHub account.
2. **Add New → Project**, pick your `raksha-ride` repo.
3. Framework preset: choose **"Other"** (it's plain static HTML — no build command needed).
4. Deploy. Vercel gives you a free `https://raksha-ride.vercel.app`-style URL.
5. Any future edit you make to a file in the GitHub web UI auto-redeploys.

## Scope notes — please read

This build implements the full architecture and the core safety journey end-to-end (verify → plan → share → monitor → protect → respond → safe arrival), matching your spec's technology constraints (HTML/CSS/JS, Supabase, Leaflet/OSM, no paid services, no React/Node).

A few pragmatic calls, given the size of the original 45-section brief:

- **Route deviation / unplanned stop** are implemented as manually-triggered safety prompts (buttons on the tracking screen) rather than automatic polyline-deviation math — this keeps it simple to run from a phone and avoids any of the "automatic accident/crash detection" logic your brief explicitly excludes. If you want real automatic deviation detection later, it needs a stored planned route (polyline) and a distance-from-route calculation, which I can add.
- **Parent–passenger linking**: the schema links guardians by phone number match or an `emergency_contacts` row. You'll want to add a simple "link my daughter's account" flow if you need multiple family members watching one passenger.
- **Translations**: all 8 languages (English, Telugu, Hindi, Tamil, Kannada, Malayalam, Marathi, Bengali) are wired into one central `translations` object in `script.js` and cover every screen. Telugu, Hindi and English got the closest attention per your sample text; I'd recommend a native-speaker pass on the other five before a real launch, since a few phrasings are my best direct translation rather than tested local phrasing.
- **Voice SOS** uses the browser's Web Speech API where supported, always with the manual SOS button as fallback, as specified.
- **QR scanning** uses `html5-qrcode` (works over HTTPS, which Vercel provides free).

## Extending it

Everything lives in three JS-readable files, so any future request like "add push notifications" or "add a high-risk-area editor for admins" is a normal edit to `script.js` + `index.html` — no rebuild step.
