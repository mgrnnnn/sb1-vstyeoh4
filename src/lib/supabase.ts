import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

// Add error handling for invalid URL
try {
  new URL(supabaseUrl);
} catch (e) {
  throw new Error('Invalid Supabase URL');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);