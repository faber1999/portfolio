/** @type {import('tailwindcss').Config} */

export default {
  important: true,
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ['Helvetica Neue', 'Arial', 'sans-serif']
      },
      colors: {
        primary: '#282828',
        'sub-primary': '#282828',
        'post-primary': '#282828',
        secondary: '#25b8c6'
      },
      // colors: {
      //   primary: '#25b8c6',
      //   'sub-primary': '#25b8c6',
      //   'post-primary': '#25b8c6',
      //   secondary: '#282828'
      // },
      boxShadow: {
        inner: 'inset 0 0px 4px 0 rgba(0, 0, 0, 0.6)',
        'inner-md': 'inset 0 0px 8px 0 rgba(0, 0, 0, 0.6)',
        'inner-lg': 'inset 0 0px 12px 0 rgba(0, 0, 0, 0.6)',
        'inner-xl': 'inset 0 0px 16px 0 rgba(0, 0, 0, 0.6)',
        'inner-2xl': 'inset 0 0px 20px 0 rgba(0, 0, 0, 0.6)',
        'inner-3xl': 'inset 0 0px 24px 0 rgba(0, 0, 0, 0.6)',
        'inner-full': 'inset 0 0px 32px 0 rgba(0, 0, 0, 0.6)'
      }
    }
  }
}
