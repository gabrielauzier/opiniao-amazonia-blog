import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      gridTemplateColumns: {
        // app: 'minmax(18rem, 20rem) 1fr',
        profile: 'max-content 1fr min-content',
        form: 'minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0, 1fr)',
        header: 'minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0, 1fr)',
        body: '1fr minmax(18rem, 20rem) ',
        app: 'minmax(18rem, 36rem) 1fr',
        post: '1fr 12rem',
        blog: '512px 1fr',
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      borderWidth: {
        6: '6px',
      },

      colors: {
        brand: '#EE5626',
        'brand-hover': '#FE8C68',
        'brand-light': '#FFE6DE',
        'brand-extra-light': '#D4D4D8',
      },

      boxShadow: {
        '3xl': '0 0 10px rgba(0, 0, 0, 0.25)',
        '4xl': '0 0 65px rgba(0, 0, 0, 0.15)',
      },

      maxWidth: {
        body: '1120px',
        header: '1280px',
      },

      maxHeight: {
        body: '100vh',
      },

      height: {
        body: 'calc(100vh - 3.5rem)',
        header: '5rem',
      },

      padding: {
        body: 'minmax(480px, 512px)',
      },
    },
  },
  plugins: [],
}
export default config
