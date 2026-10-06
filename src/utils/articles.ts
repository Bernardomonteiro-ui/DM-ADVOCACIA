import { getCollection, type CollectionEntry } from 'astro:content';

export type Article = CollectionEntry<'artigos'>;

/** Artigos visíveis: em produção, rascunhos ficam de fora. */
export async function getArticles(): Promise<Article[]> {
  const all = await getCollection('artigos', ({ data }) => import.meta.env.DEV || !data.draft);
  return all.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export const formatDate = (d: Date) =>
  new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(d);

export const readingTime = (text: string) =>
  Math.max(1, Math.round(text.trim().split(/\s+/).length / 200));
