import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const SUPABASE_URL =
  (typeof window !== "undefined" && window.NEXT_PUBLIC_SUPABASE_URL) ||
  (typeof process !== "undefined" && process.env?.NEXT_PUBLIC_SUPABASE_URL);

const SUPABASE_ANON_KEY =
  (typeof window !== "undefined" && window.NEXT_PUBLIC_SUPABASE_ANON_KEY) ||
  (typeof process !== "undefined" && process.env?.NEXT_PUBLIC_SUPABASE_ANON_KEY);

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.error(
    "Missing Supabase env vars. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY."
  );
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
