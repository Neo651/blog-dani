import type { SupabaseClient } from '@supabase/supabase-js';
import { createSupabaseServerClient, getSupabaseBrowserClient } from '~/lib/supabase/client';
import { calculateReadingMinutes } from '~/utils/reflections';
import type { Reflection, ReflectionInput } from './types';

const columns = 'id, slug, published_at, image_url, quote, quote_author, title, body, reading_minutes, is_published';

// `reading_minutes` permanece en el esquema por compatibilidad, pero el cuerpo es la fuente canónica. Normalizar cada
// lectura corrige registros antiguos y garantiza el mismo número en Home, Discover, Reading y el flujo del Admin.
const withCalculatedReadingMinutes = (reflection: Reflection): Reflection => ({
  ...reflection,
  reading_minutes: calculateReadingMinutes(reflection.body),
});

const mapRows = (rows: unknown) =>
  Array.isArray(rows) ? (rows as Reflection[]).map(withCalculatedReadingMinutes) : [];

const withCanonicalReadingMinutes = <T extends Partial<ReflectionInput>>(input: T): T =>
  input.body ? ({ ...input, reading_minutes: calculateReadingMinutes(input.body) } as T) : input;

/**
 * Devuelve únicamente contenido que ya puede descubrir el lector. El límite es opcional: Home y RSS conservan
 * colecciones acotadas, mientras que la biblioteca puede solicitar el catálogo completo hasta que exista paginación.
 */
export async function getPublishedReflections(limit?: number): Promise<Reflection[]> {
  let query = createSupabaseServerClient()
    .from('reflections')
    .select(columns)
    .eq('is_published', true)
    .lte('published_at', new Date().toISOString())
    .order('published_at', { ascending: false });

  if (limit !== undefined) query = query.limit(limit);

  const { data, error } = await query;
  if (error) throw error;
  return mapRows(data);
}

export interface ReflectionSitemapEntry {
  slug: string;
  published_at: string;
}

/**
 * El sitemap solo necesita URL y fecha. Esta consulta deliberadamente pequeña evita descargar cuerpos e imágenes de
 * todas las publicaciones en cada regeneración del XML y mantiene el acceso a Supabase fuera de la ruta HTTP.
 */
export async function getPublishedReflectionSitemapEntries(): Promise<ReflectionSitemapEntry[]> {
  const { data, error } = await createSupabaseServerClient()
    .from('reflections')
    .select('slug, published_at')
    .eq('is_published', true)
    .lte('published_at', new Date().toISOString())
    .order('published_at', { ascending: false });
  if (error) throw error;
  return (data || []) as ReflectionSitemapEntry[];
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

/**
 * Valida la URL antes de guardar para ofrecer un mensaje editorial comprensible en lugar de exponer el error de la
 * restricción única de PostgreSQL. Al editar excluye el registro actual, por lo que conservar su URL sigue siendo válido.
 */
export async function isReflectionSlugAvailable(slug: string, excludedReflectionId?: number): Promise<boolean> {
  let query = browser().from('reflections').select('id').eq('slug', slug).limit(1);
  if (excludedReflectionId !== undefined) query = query.neq('id', excludedReflectionId);
  const { data, error } = await query;
  if (error) throw error;
  return !data?.length;
}

export async function createReflection(input: ReflectionInput) {
  const { data, error } = await browser()
    .from('reflections')
    .insert(withCanonicalReadingMinutes(input))
    .select(columns)
    .single();
  if (error) throw error;
  return withCalculatedReadingMinutes(data as Reflection);
}

export async function updateReflection(id: number, input: Partial<ReflectionInput>) {
  const { data, error } = await browser()
    .from('reflections')
    .update(withCanonicalReadingMinutes(input))
    .eq('id', id)
    .select(columns)
    .single();
  if (error) throw error;
  return withCalculatedReadingMinutes(data as Reflection);
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
