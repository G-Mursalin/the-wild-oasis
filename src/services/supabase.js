import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://ihgqdibtvscsbukcmvvc.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImloZ3FkaWJ0dnNjc2J1a2NtdnZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc5MzM2NTgsImV4cCI6MjA0MzUwOTY1OH0.7GIRkAbdH_J2K9RRC-3ftj473eN--38GfCNNNFXmDew';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
