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
    flowType: 'pkce',
    // @ts-ignore - navigatorLockAcquireTimeout is supported in the underlying auth client but might not be in the types for this version
    navigatorLockAcquireTimeout: 60000,
  }
})