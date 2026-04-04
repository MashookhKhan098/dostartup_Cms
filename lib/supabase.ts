import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://rvxaaduqeplfputxmlzv.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2eGFhZHVxZXBsZnB1dHhtbHp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUyMDIwNDEsImV4cCI6MjA5MDc3ODA0MX0.lwYeJJ-rg4Q7CJluj8rTOYTiWGG-GPaRbjFMing7soU'
)