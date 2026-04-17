import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testTable() {
  const { data: row, error } = await supabase.from('pf_registration').select('*').limit(1);
  console.log("Table info:", row, error);
}

testTable();
