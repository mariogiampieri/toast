import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const docsSchema = z.object({
  title: z.string(),
  description: z.string(),
  category: z.string(),
});

export type Docs = z.infer<typeof docsSchema>;

const docs = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content' }),
  schema: docsSchema,
});

export const collections = {
  docs,
};
