import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

const site = process.env.SITE_URL?.trim() || undefined;

if (site) {
  const url = new URL(site);

  if (url.protocol !== 'https:' || url.href !== url.origin + '/') {
    throw new Error('SITE_URL must be the HTTPS origin of the production site.');
  }
}

export default defineConfig({
  site,
  output: 'static',
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
});
