/*
====================================================
Servicio de autenticación

Responsabilidad
Centralizar las operaciones públicas de sesión que necesitan los componentes de interfaz.

Por qué existe
Evita que comentarios y administración conozcan detalles del cliente de Supabase o repliquen flujos OAuth.

Decisión sobre sesión ausente
getCurrentUser usa getSession porque la interfaz necesita distinguir con normalidad entre usuario y visitante.
Las escrituras sensibles continúan verificando getUser en su servicio y dependen de RLS para autorización real.

Qué no debe hacer
No sustituye RLS, no decide permisos administrativos y no expone credenciales privadas.

Autor: Daniel Montesinos
====================================================
*/

import { getSupabaseBrowserClient } from '~/lib/supabase/client';
import { getSafeAuthReturnTo } from '~/features/auth/returnTo';

export const getCurrentUser = async () => {
  const { data, error } = await getSupabaseBrowserClient().auth.getSession();
  if (error) throw error;
  return data.session?.user ?? null;
};

export const signInWithPassword = async (email: string, password: string) => {
  const { data, error } = await getSupabaseBrowserClient().auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data.user;
};

export const signInWithGoogle = async (returnTo: string) => {
  const callback = new URL('/auth/callback', window.location.origin);
  callback.searchParams.set('returnTo', getSafeAuthReturnTo(returnTo, window.location.origin));
  const { error } = await getSupabaseBrowserClient().auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: callback.toString() },
  });
  if (error) throw error;
};

export const signOut = async () => {
  const { error } = await getSupabaseBrowserClient().auth.signOut();
  if (error) throw error;
};
