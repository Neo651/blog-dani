import { createSupabaseServerClient, getSupabaseBrowserClient } from '~/lib/supabase/client';

const client = () => getSupabaseBrowserClient();

export async function ensureLikeUser() {
  const { data } = await client().auth.getUser();
  if (data.user) return data.user;
  const { data: signed, error } = await client().auth.signInAnonymously();
  if (error || !signed.user) throw error ?? new Error('No se pudo iniciar la sesión anónima.');
  return signed.user;
}

export async function getLikeState(reflectionId: number, userId: string) {
  const [countResult, ownResult] = await Promise.all([
    client().from('likes').select('*', { count: 'exact', head: true }).eq('reflection_id', reflectionId),
    client()
      .from('likes')
      .select('reflection_id')
      .eq('reflection_id', reflectionId)
      .eq('user_id', userId)
      .maybeSingle(),
  ]);
  if (countResult.error) throw countResult.error;
  if (ownResult.error) throw ownResult.error;
  return { count: countResult.count ?? 0, liked: Boolean(ownResult.data) };
}

export async function setLiked(reflectionId: number, userId: string, liked: boolean) {
  const query = liked
    ? client().from('likes').insert({ reflection_id: reflectionId, user_id: userId })
    : client().from('likes').delete().eq('reflection_id', reflectionId).eq('user_id', userId);
  const { error } = await query;
  if (error && error.code !== '23505') throw error;
}

export async function getLikeCounts(reflectionIds: number[]) {
  const supabase = createSupabaseServerClient();
  const entries = await Promise.all(
    reflectionIds.map(async (reflectionId) => {
      const { count, error } = await supabase
        .from('likes')
        .select('*', { count: 'exact', head: true })
        .eq('reflection_id', reflectionId);
      if (error) throw error;
      return [reflectionId, count ?? 0] as const;
    })
  );
  return new Map(entries);
}
