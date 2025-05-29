/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        screens: {
          'xs': '320px',      // Extra small phones
          'xs2': '360px',     // Small Android phones
          'xs3': '375px',     // iPhone X/12/13/14
          'xs4': '414px',     // iPhone Plus/Max
          'sm': '480px',      // Large phones, phablets
          'sm2': '540px',     // Pixel 2 XL, some Androids
          'sm3': '600px',     // Small tablets
          'md': '768px',      // iPad portrait, most tablets
          'md2': '820px',     // iPad Air, iPad Mini
          'md3': '853px',     // Surface Duo, some Android tablets
          'md4': '912px',     // Samsung Tab S7, some tablets in landscape
          'lg': '1024px',     // iPad landscape, small laptops
          'lg2': '1112px',    // iPad Pro 10.5"
          'xl': '1280px',     // Standard laptop, desktop
          'xl2': '1366px',    // Common laptop
          'xl3': '1440px',    // Large laptop/desktop
          '2xl': '1536px',    // Large desktop
          '3xl': '1600px',    // HD monitor
          '4xl': '1920px',    // Full HD monitor
          '5xl': '2560px',    // 2K/4K monitor
        },
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        borderRadius: {
          '4xl': '2rem',
        },
        fontFamily: {
          sans: ['Inter', 'system-ui', 'sans-serif'],
        },
        fontSize: {
          'xs': ['0.75rem', { lineHeight: '1rem' }],
          'sm': ['0.875rem', { lineHeight: '1.25rem' }],
          'base': ['1rem', { lineHeight: '1.5rem' }],
          'lg': ['1.125rem', { lineHeight: '1.75rem' }],
          'xl': ['1.25rem', { lineHeight: '1.75rem' }],
          '2xl': ['1.5rem', { lineHeight: '2rem' }],
          '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
          '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
          '5xl': ['3rem', { lineHeight: '1' }],
          '6xl': ['3.75rem', { lineHeight: '1' }],
        },
        container: {
          center: true,
          padding: {
            DEFAULT: '1rem',
            xs: '1.5rem',
            sm: '2rem',
            md: '2.5rem',
            lg: '4rem',
            xl: '5rem',
            '2xl': '6rem',
          },
        },
      },
    },
    plugins: [],
  }