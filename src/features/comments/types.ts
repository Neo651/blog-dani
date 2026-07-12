export interface Comment {
  id: number;
  reflection_id: number;
  user_id: string;
  user_name: string;
  user_avatar: string | null;
  content: string;
  is_approved: boolean;
  created_at: string;
}
