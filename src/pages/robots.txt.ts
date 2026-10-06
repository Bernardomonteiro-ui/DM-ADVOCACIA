import type { APIRoute } from 'astro';
import { absoluteUrl, isNoindexBuild } from '@/utils/paths';

export const GET: APIRoute = () => {
  const body = isNoindexBuild
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\nDisallow: /404\n\nSitemap: ${absoluteUrl('/sitemap-index.xml')}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
