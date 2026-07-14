/*
====================================================
Cliente de Product Analytics

Responsabilidad
Ofrecer una API interna estable y segura para eventos de producto, independiente del proveedor.

Qué hace
Entrega eventos a GA4 cuando está configurado y omite silenciosamente rutas privadas o proveedores bloqueados.

Qué no hace
No recopila identidad, texto libre, correo, comentarios, datos del Admin ni información sensible del referrer.

Dependencias
Únicamente la cola global `gtag`, preparada por Analytics.astro.

Autor: Daniel Montesinos
====================================================
*/

export type AnalyticsEventName =
  | 'reflection_open'
  | 'reflection_scroll'
  | 'reflection_finish'
  | 'reading_engagement'
  | 'like_add'
  | 'like_remove'
  | 'comment_login_click'
  | 'comment_form_focus'
  | 'comment_submit'
  | 'comment_submit_success'
  | 'comment_submit_error'
  | 'share_open'
  | 'share_click'
  | 'share_success'
  | 'share_cancel'
  | 'cta_click'
  | 'navigation_click';

export type AnalyticsProperties = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...arguments_: unknown[]) => void;
  }
}

const isPrivatePath = (pathname: string) =>
  pathname === '/admin' || pathname.startsWith('/admin/') || pathname.startsWith('/auth/');

export const trackEvent = (name: AnalyticsEventName, properties: AnalyticsProperties = {}) => {
  if (typeof window === 'undefined' || isPrivatePath(window.location.pathname) || typeof window.gtag !== 'function')
    return;
  try {
    window.gtag('event', name, properties);
  } catch {
    // Una métrica nunca debe interrumpir la navegación ni la lectura.
  }
};

export const trackPageView = () => {
  if (typeof window === 'undefined' || isPrivatePath(window.location.pathname) || typeof window.gtag !== 'function')
    return;
  window.gtag('event', 'page_view', {
    page_location: window.location.href,
    page_path: `${window.location.pathname}${window.location.search}`,
    page_title: document.title,
  });
};

export type ReflectionEntrySource =
  | 'home_featured'
  | 'home_previous'
  | 'discover'
  | 'related'
  | 'direct'
  | 'search'
  | 'social'
  | 'external_referral'
  | 'unknown';

const SOURCE_KEY = 'reflection_entry_source';

export const rememberReflectionEntrySource = (slug: string, source: ReflectionEntrySource) => {
  try {
    sessionStorage.setItem(SOURCE_KEY, JSON.stringify({ slug, source }));
  } catch {
    // El bloqueo de Storage no altera la navegación.
  }
};

export const resolveReflectionEntrySource = (slug: string): ReflectionEntrySource => {
  try {
    const stored = JSON.parse(sessionStorage.getItem(SOURCE_KEY) || '{}') as {
      slug?: string;
      source?: ReflectionEntrySource;
    };
    sessionStorage.removeItem(SOURCE_KEY);
    if (stored.slug === slug && stored.source) return stored.source;
  } catch {
    // Un valor corrupto se ignora y se usa el referrer no identificable.
  }

  if (!document.referrer) return 'direct';
  try {
    const referrer = new URL(document.referrer);
    if (referrer.origin === window.location.origin) return 'unknown';
    if (/google\.|bing\.|duckduckgo\.|yahoo\./i.test(referrer.hostname)) return 'search';
    if (/linkedin\.|facebook\.|instagram\.|t\.co$|x\.com$|wa\.me$/i.test(referrer.hostname)) return 'social';
    return 'external_referral';
  } catch {
    return 'unknown';
  }
};

export const getReferrerType = () => {
  if (!document.referrer) return 'none';
  try {
    return new URL(document.referrer).origin === window.location.origin ? 'internal' : 'external';
  } catch {
    return 'unknown';
  }
};
