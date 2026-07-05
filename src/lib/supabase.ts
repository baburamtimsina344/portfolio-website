import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://etcmysdhiieegwdwrkxd.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0Y215c2RoaWllZWd3ZHdya3hkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMyNjgwMDEsImV4cCI6MjA5ODg0NDAwMX0.nH0f0HU1n2YHq9IY5YKby1pBE7rjYfvAcLKhjbjBEmE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
