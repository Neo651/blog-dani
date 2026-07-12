import { defineMiddleware } from 'astro:middleware';

const legacyPrefixes = ['/homes/', '/landing/'];
const legacyPages = new Set(['/about', '/contact', '/services', '/pricing', '/terms', '/privacy']);

export const onRequest = defineMiddleware(async ({ url }, next) => {
  const pathname = url.pathname.replace(/\/$/, '') || '/';
  if (legacyPages.has(pathname) || legacyPrefixes.some((prefix) => url.pathname.startsWith(prefix))) {
    return new Response('Página no encontrada', {
      status: 404,
      headers: { 'Content-Type': 'text/plain; charset=utf-8', 'X-Robots-Tag': 'noindex' },
    });
  }

  const response = await next();
  if (pathname.startsWith('/admin') || pathname.startsWith('/auth/')) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  }
  return response;
});
