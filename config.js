// =====================================================
// PASTE YOUR SUPABASE CREDENTIALS HERE — used by every screen
// Get these from: Supabase Dashboard → Project Settings → API
// =====================================================
const SUPABASE_URL = "https://qfczhpjbnthmxoqskuhz.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFmY3pocGpibnRobXhvcXNrdWh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE5MzM3OTIsImV4cCI6MjA5NzUwOTc5Mn0.cTx4PALK28XePRdifKSRXqGrcTZXI_Wvkl55YtrXI6w";

// =====================================================
// STAFF ACCESS CODES
// Replace these with the codes you want to give to staff.
// "all" codes can open both Kitchen and Floor screens.
// "kitchen" codes can open only kitchen.html.
// "floor" codes can open only floor.html.
const ACCESS_CODES = {
  all: ['staff-1234'],
  kitchen: ['kitchen-1234'],
  floor: ['floor-1234']
};
// =====================================================
