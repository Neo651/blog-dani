// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SUPABASE_URL: string;
  readonly PUBLIC_SUPABASE_PUBLISHABLE_KEY: string;
  readonly PUBLIC_ADMIN_EMAIL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
/// <reference types="vite/client" />
/// <reference types="../vendor/integration/types.d.ts" />

// Fontsource packages ship CSS only (no type declarations); declare them so
// side-effect imports type-check under TypeScript 6 strict (ts2882).
declare module '@fontsource-variable/*';
declare module '@fontsource/*';
