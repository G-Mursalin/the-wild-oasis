import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cnjfvwqfhzsooobqomoz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNuamZ2d3FmaHpzb29vYnFvbW96Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUwMTM4NzIsImV4cCI6MjAxMDU4OTg3Mn0.OoJQcMLWB4xxrvTEo2rXG5Urq2L5dN9qkjhInMyefAc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
