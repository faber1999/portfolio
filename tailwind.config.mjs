/** @type {import('tailwindcss').Config} */

export default {
  important: true,
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#25b8c6',
        'sub-primary': '#4ed1db',
        'post-primary': '#13cfe1',
        secondary: '#282828'
      }
    }
  }
}
