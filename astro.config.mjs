import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: "https://capacitor-weather-app.vercel.app",
    vite: {
      plugins: [tailwindcss()],
      assetsInclude: ['**/*.svg'],
      build: {
        assetsInlineLimit: 0
      }
    },
});
