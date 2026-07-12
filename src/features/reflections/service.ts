import type { SupabaseClient } from '@supabase/supabase-js';
import { createSupabaseServerClient, getSupabaseBrowserClient } from '~/lib/supabase/client';
import type { Reflection, ReflectionInput } from './types';

const columns = 'id, slug, published_at, image_url, quote, quote_author, title, body, reading_minutes, is_published';

const mapRows = (rows: unknown) => (Array.isArray(rows) ? (rows as Reflection[]) : []);

export async function getPublishedReflections(limit = 12): Promise<Reflection[]> {
  const { data, error } = await createSupabaseServerClient()
    .from('reflections')
    .select(columns)
    .eq('is_published', true)
    .order('published_at', { ascending: false })
    .limit(limit);
  if (error) throw error;
  return mapRows(data);
}

export async function getLandingReflections(): Promise<Reflection[]> {
  return getPublishedReflections(4);
}

export async function getPublishedReflectionBySlug(slug: string): Promise<Reflection | null> {
  const { data, error } = await createSupabaseServerClient()
    .from('reflections')
    .select(columns)
    .eq('slug', slug)
    .eq('is_published', true)
    .maybeSingle();
  if (error) throw error;
  return data as Reflection | null;
}

/**
 * Selecciona continuaciones reales sin fingir relevancia semántica.
 * Hasta que existan categorías o etiquetas, la recencia es la única señal objetiva y comprensible disponible.
 */
export async function getRelatedReflections(currentReflectionId: number, limit = 3): Promise<Reflection[]> {
  const { data, error } = await createSupabaseServerClient()
    .from('reflections')
    .select(columns)
    .eq('is_published', true)
    .neq('id', currentReflectionId)
    .order('published_at', { ascending: false })
    .limit(limit);
  if (error) throw error;
  return mapRows(data);
}

const browser = (): SupabaseClient => getSupabaseBrowserClient();

export async function getAdminReflections(): Promise<Reflection[]> {
  const { data, error } = await browser()
    .from('reflections')
    .select(columns)
    .order('published_at', { ascending: false });
  if (error) throw error;
  return mapRows(data);
}

export async function createReflection(input: ReflectionInput) {
  const { data, error } = await browser().from('reflections').insert(input).select(columns).single();
  if (error) throw error;
  return data as Reflection;
}

export async function updateReflection(id: number, input: Partial<ReflectionInput>) {
  const { data, error } = await browser().from('reflections').update(input).eq('id', id).select(columns).single();
  if (error) throw error;
  return data as Reflection;
}

export async function deleteReflection(id: number) {
  const { error } = await browser().from('reflections').delete().eq('id', id);
  if (error) throw error;
}

export async function uploadReflectionImage(file: File) {
  const extension = file.name.split('.').pop()?.toLowerCase() || 'jpg';
  const path = `${Date.now()}-${crypto.randomUUID()}.${extension}`;
  const storage = browser().storage.from('Reflections');
  const { error } = await storage.upload(path, file, { cacheControl: '3600', upsert: false });
  if (error) throw error;
  const { data } = storage.getPublicUrl(path);
  return { url: data.publicUrl, path };
}

export async function removeReflectionImage(path: string) {
  if (!path) return;
  const { error } = await browser().storage.from('Reflections').remove([path]);
  if (error) throw error;
}

export const imagePathFromUrl = (url: string) => {
  const marker = '/Reflections/';
  const position = url.indexOf(marker);
  return position >= 0 ? decodeURIComponent(url.slice(position + marker.length)) : '';
};

export const createSlug = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
