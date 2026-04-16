import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

console.log('URL:', supabaseUrl)
console.log('Key:', supabaseKey ? 'PRESENT' : 'MISSING')

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing env variables')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function test() {
  const { count, error } = await supabase.from('gst_registrations').select('*', { count: 'exact', head: true })
  if (error) {
    console.error('Supabase Error:', error.message)
  } else {
    console.log('Connection successful! Record count:', count)
  }
}

test()
