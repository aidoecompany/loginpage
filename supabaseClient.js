import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const SUPABASE_URL = "https://rttugjwsfmbihrviwbfn.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0dHVnandzZm1iaWhydml3YmZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzODQxMDksImV4cCI6MjA4NTk2MDEwOX0.0Wjf4EswFsqI2lV41yMwqSL2MRe6qQ-k5tFl_Jevgjk"; // one single line, no breaks

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
