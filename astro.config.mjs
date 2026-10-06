// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { readdirSync, readFileSync } from 'node:fs';

// [TODO — CONFIRMAR COM CLIENTE] domínio definitivo.
// Mantenha igual a `siteConfig.url` em src/config/site.ts (ou defina SITE_URL no ambiente de build).
const SITE_URL = process.env.SITE_URL ?? 'https://www.dmadvocacia.com.br';

// Enquanto não houver artigos publicados, /artigos fica com noindex e fora do sitemap.
const hasPublishedArticles = readdirSync('./src/content/artigos')
  .filter((f) => f.endsWith('.md'))
  .some((f) => !/^draft:\s*true/m.test(readFileSync(`./src/content/artigos/${f}`, 'utf8')));

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && (hasPublishedArticles || !page.endsWith('/artigos')),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
