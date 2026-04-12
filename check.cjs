const fs = require('fs');
const env = fs.readFileSync('.env.local', 'utf8').split('\n').reduce((acc, line) => {
  const [key, ...vals] = line.split('=');
  if(key) acc[key.trim()] = vals.join('=').trim();
  return acc;
}, {});

const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function debug() {
  // Let's get the most recent gst_registrations and payments
  const { data: regs } = await supabase.from('gst_registrations').select('*').order('created_at', { ascending: false }).limit(5);
  const { data: pays } = await supabase.from('payments').select('*').order('created_at', { ascending: false }).limit(5);

  console.log("Recent Registrations:", JSON.stringify(regs, null, 2));
  console.log("Recent Payments:", JSON.stringify(pays, null, 2));
}

debug();
