import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim()!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim()!

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase env variables are missing")
}

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
    // Increase wait time for the navigator lock to prevent the "Lock not released" error
    // in development environments with Strict Mode.
    flowType: 'pkce'
  }
})