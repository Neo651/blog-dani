import { getRssString } from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { siteConfig } from '~/config/site';
import { getPublishedReflections } from '~/features/reflections/service';

export const GET: APIRoute = async ({ site }) => {
  const reflections = await getPublishedReflections(50);
  const rss = await getRssString({
    title: `Reflexiones de ${siteConfig.brand.name}`,
    description: siteConfig.brand.description,
    site: site ?? new URL(siteConfig.brand.siteUrl),
    items: reflections.map((reflection) => ({
      link: `/reflexiones/${reflection.slug}`,
      title: reflection.title,
      description: reflection.body.replace(/\s+/g, ' ').slice(0, 200),
      pubDate: new Date(reflection.published_at),
    })),
  });
  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
};
