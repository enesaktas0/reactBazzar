import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://mwrnligqhnjlyyuqietz.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13cm5saWdxaG5qbHl5dXFpZXR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk4MzkxODgsImV4cCI6MjAzNTQxNTE4OH0.N7HAkrhsIj8IpdK8jc-CaSqtxXQkOFfCUjUGIaRWxns";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
