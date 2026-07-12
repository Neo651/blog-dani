import { createSupabaseServerClient, getSupabaseBrowserClient } from '~/lib/supabase/client';
import type { Comment } from './types';

const client = () => getSupabaseBrowserClient();

export async function getApprovedComments(reflectionId: number) {
  const { data, error } = await client()
    .from('comments')
    .select('*')
    .eq('reflection_id', reflectionId)
    .eq('is_approved', true)
    .order('created_at', { ascending: true });
  if (error) throw error;
  return (data ?? []) as Comment[];
}

export async function createComment(reflectionId: number, content: string) {
  const { data: auth, error: authError } = await client().auth.getUser();
  if (authError || !auth.user || auth.user.is_anonymous) throw authError ?? new Error('Inicia sesión con Google.');
  const metadata = auth.user.user_metadata;
  const payload = {
    reflection_id: reflectionId,
    user_id: auth.user.id,
    user_name: String(metadata.full_name ?? metadata.name ?? auth.user.email ?? 'Lector'),
    user_avatar: typeof metadata.avatar_url === 'string' ? metadata.avatar_url : null,
    content: content.trim(),
    is_approved: false,
  };
  const { data, error } = await client().from('comments').insert(payload).select().single();
  if (error) throw error;
  return data as Comment;
}

export async function updateComment(id: number, content: string) {
  const { error } = await client().from('comments').update({ content: content.trim() }).eq('id', id);
  if (error) throw error;
}

export async function deleteComment(id: number) {
  const { error } = await client().from('comments').delete().eq('id', id);
  if (error) throw error;
}

export async function getApprovedCommentCounts(reflectionIds: number[]) {
  const supabase = createSupabaseServerClient();
  const entries = await Promise.all(
    reflectionIds.map(async (reflectionId) => {
      const { count, error } = await supabase
        .from('comments')
        .select('*', { count: 'exact', head: true })
        .eq('reflection_id', reflectionId)
        .eq('is_approved', true);
      if (error) throw error;
      return [reflectionId, count ?? 0] as const;
    })
  );
  return new Map(entries);
}
