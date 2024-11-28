import { defineConfig } from 'astro/config';

// Integrations:
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// MDX Plugins:
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import { HEADING_LINK_ANCHOR } from './src/ui/headings';

// Astro config:
export default defineConfig({
  site: 'https://toast.pheralb.dev',
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
      },
      gfm: true,
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          { behavior: 'wrap', properties: { className: HEADING_LINK_ANCHOR } },
        ],
      ],
    }),
  ],
});
