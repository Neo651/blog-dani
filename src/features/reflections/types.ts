export interface Reflection {
  id: number;
  slug: string;
  published_at: string;
  image_url: string;
  quote: string;
  quote_author: string | null;
  title: string;
  body: string;
  reading_minutes: number;
  is_published: boolean;
}

export type ReflectionInput = Omit<Reflection, 'id'>;
