/*
====================================================
Sitemap dinámico de reflexiones

Responsabilidad
Exponer a buscadores las URLs públicas que Astro no puede enumerar en build porque viven en Supabase.

Dependencias
Servicio de reflexiones y configuración canónica del sitio.

Qué no debe hacer
No incluye borradores, no consulta Supabase directamente y no reemplaza el sitemap estático de páginas públicas.

Autor: Daniel Montesinos
====================================================
*/

import type { APIRoute } from 'astro';
import { siteConfig } from '~/config/site';
import { getPublishedReflectionSitemapEntries } from '~/features/reflections/service';

const escapeXml = (value: string) =>
  value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

export const GET: APIRoute = async () => {
  try {
    const reflections = await getPublishedReflectionSitemapEntries();
    const urls = reflections
      .map(
        ({ slug, published_at }) =>
          `<url><loc>${escapeXml(new URL(`/reflexiones/${slug}`, siteConfig.brand.siteUrl).toString())}</loc><lastmod>${escapeXml(published_at)}</lastmod></url>`
      )
      .join('');
    const body = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;

    return new Response(body, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('No se pudo generar el sitemap de reflexiones', error);
    return new Response('Sitemap temporalmente no disponible', {
      status: 503,
      headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Retry-After': '120' },
    });
  }
};
