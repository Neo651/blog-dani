import { createClient, type SupabaseClient } from '@supabase/supabase-js';

let client: SupabaseClient | undefined;

const getConfiguration = () => {
  const url = import.meta.env.PUBLIC_SUPABASE_URL;
  const key = import.meta.env.PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!url || !key) throw new Error('Falta la configuración pública de Supabase.');
  return { url, key };
};

export const getSupabaseBrowserClient = () => {
  if (!client) {
    const { url, key } = getConfiguration();
    client = createClient(url, key);
  }
  return client;
};

export const createSupabaseServerClient = () => {
  const { url, key } = getConfiguration();
  return createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
};
