import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { areaSlugs } from './data/areas';

/**
 * Artigos jurídicos — um arquivo .md por artigo em src/content/artigos/.
 *
 * - `draft: true`  → aparece só em desenvolvimento (npm run dev), nunca no site publicado.
 * - `example: true` → exibe o selo "Conteúdo de exemplo". Use apenas em material demonstrativo.
 */
const artigos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/artigos' }),
  schema: z.object({
    title: z.string().max(110),
    description: z.string().max(170),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    area: z.enum(areaSlugs),
    author: z.string().default('Deivid Marcolino'),
    draft: z.boolean().default(false),
    example: z.boolean().default(false),
  }),
});

export const collections = { artigos };
