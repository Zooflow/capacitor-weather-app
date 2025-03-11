/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'cozy-primary': 'var(--cozy-primary)',
        'cozy-secondary': 'var(--cozy-secondary)',
        'cozy-accent': 'var(--cozy-accent)',
        'cozy-dark': 'var(--cozy-dark)',
        'cozy-text': 'var(--cozy-text)',
        'good-quality': 'var(--good-quality)',
        'moderate-quality': 'var(--moderate-quality)',
        'poor-quality': 'var(--poor-quality)',
      },
      boxShadow: {
        'cozy': 'var(--cozy-shadow)',
        'cozy-hover': 'var(--cozy-shadow-hover)',
      }
    },
  },
  plugins: [],
}
