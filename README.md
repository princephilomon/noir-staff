# Noir — Staff Dashboard (Kitchen + Floor)

Live order management for kitchen and waitstaff. This repo also contains the database setup instructions — set this up **first**, before the customer ordering repo, since both depend on the same Supabase project.

## Files
- `index.html` — landing page to choose Kitchen or Floor
- `kitchen.html` — New Orders → Preparing → Ready
- `floor.html` — Ready to Serve → Awaiting Payment → Paid
- `config.js` — your Supabase credentials go here
- `supabase-schema.sql` — run once to create the shared database table

## Setup

### 1. Create your free Supabase project
1. Go to https://supabase.com → sign up → **New Project**
2. Name it (e.g. "noir-orders"), set a database password, pick the closest region
3. Wait ~2 minutes for provisioning

### 2. Create the orders table
1. Open **SQL Editor** in your Supabase project → **New query**
2. Copy everything from `supabase-schema.sql` in this repo, paste it in, click **Run**
3. You should see "Success. No rows returned"

### 3. Get your API credentials
1. Go to **Project Settings → API**
2. Copy your **Project URL** and **anon public** key

### 4. Paste credentials into config.js
```js
const SUPABASE_URL = "https://yourproject.supabase.co";
const SUPABASE_ANON_KEY = "your-anon-key-here";
```

**Important:** use these exact same two values in the customer ordering repo's `config.js` too — both repos must point to the same Supabase project for orders to sync between them.

### 5. Test locally
```bash
python3 -m http.server 8000
```
Open:
- `http://localhost:8000/kitchen.html`
- `http://localhost:8000/floor.html`

### 6. Deploy
Deploy this repo to Vercel, Netlify, or any static host. Give staff the deployed URLs for `/kitchen.html` and `/floor.html` (e.g. bookmark on a tablet at each station).

## How the status flow works

```
Customer places order  (from the separate customer repo)
        ↓
  KITCHEN: "New Orders"
        ↓ tap "Start Preparing"
  KITCHEN: "Preparing"
        ↓ tap "Mark Ready"
  KITCHEN: "Ready"  +  FLOOR: "Ready to Serve"   ← shows on both at once
        ↓ waiter taps "Delivered to Table"
  FLOOR: "Awaiting Payment"
        ↓ waiter taps "Paid — Cash" or "Paid — Online"
  Order complete, clears from all boards
```

## Notes
- Both `kitchen.html` and `floor.html` subscribe to live database changes via Supabase Realtime — no polling, no manual refresh.
- Phone vibration alerts (`navigator.vibrate`) work on Android Chrome; iOS Safari doesn't support this, so iPhone users rely on the visual toast notification and badge counts instead.
- Current database policy allows open read/write access — fine for a single internal restaurant tool. Add proper authentication before exposing this more broadly or scaling to multiple locations.
- No build step — plain HTML/CSS/JS, deployable as-is.
