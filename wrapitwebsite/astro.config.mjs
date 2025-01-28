import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import rss from '@astrojs/rss';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), rss({
      title: 'My Astro Blog',
      description: 'A simple blog built with Astro',
      site: 'http://localhost:4321',
      items: [],
      customData: '<language>en-us</language>',
    })],
  site: 'http://localhost:4321',
});
