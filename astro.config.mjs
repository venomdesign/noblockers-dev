// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  base: '/', // do NOT put /noblockers/ for custom domains
  site: 'https://noblockers.dev', // REQUIRED for correct asset resolving
  outDir: 'dist',
});
