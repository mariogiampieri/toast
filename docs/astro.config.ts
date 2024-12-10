import { defineConfig } from 'astro/config';

// Integrations:
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// MDX Plugins:
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import { HEADING_LINK_ANCHOR } from './src/ui/headings';
import { targetBlank } from './src/components/mdx/targetBlank';

// Shiki Transformers:
import { transformerMetaHighlight } from '@shikijs/transformers';

// Global settings:
let websiteUrl = 'https://toast.pheralb.dev';

// Astro config:
export default defineConfig({
  site: websiteUrl,
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: {
        themes: {
          light: 'github-light',
          dark: 'github-dark',
        },
        wrap: true,
        transformers: [transformerMetaHighlight()],
      },
      gfm: true,
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          { behavior: 'wrap', properties: { className: HEADING_LINK_ANCHOR } },
        ],
        [targetBlank, { domain: websiteUrl }],
      ],
    }),
  ],
});
