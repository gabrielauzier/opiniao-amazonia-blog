import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontSize: {
        xxs: '10px',
        xs: '12px',
      },

      backgroundImage: {
        hero: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.05)), url('/rio.jpg')",
        banner2:
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url('/encontro-das-aguas.jpg')",
        contact:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.05)), url('/manaus4.jpg')",
        newsletter:
          "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url('/newsletter.jpg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'categories-culture':
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.05)), url('https://images.pexels.com/photos/1036372/pexels-photo-1036372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        'categories-policy':
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.05)), url('https://live.staticflickr.com/5479/14062639285_5e0f93b902_b.jpg')",
        'categories-economy':
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.05)), url('https://images.pexels.com/photos/904735/pexels-photo-904735.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        'categories-business':
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.05)), url('https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        'categories-manaus':
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.05)), url('https://images.pexels.com/photos/7903925/pexels-photo-7903925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      },

      boxShadow: {
        '3xl': '0 0 10px rgba(0, 0, 0, 0.25)',
        '4xl': '0 0 65px rgba(0, 0, 0, 0.15)',
      },

      colors: {
        'surface-seconday': '#F8F8F8',
      },

      maxWidth: {
        body: '1120px',
        header: '1120px',
      },

      maxHeight: {
        body: '100vh',
      },

      height: {
        body: 'calc(100vh - 36rem)',
        header: '5rem',
      },

      marginTop: {
        999: '5rem',
      },

      padding: {
        body: 'minmax(480px, 512px)',
      },

      keyframes: {
        slideDownAndFade: {
          from: { opacity: '0', transform: 'translateY(-2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideUpAndFade: {
          from: { opacity: '0', transform: 'translateY(2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideRightAndFade: {
          from: { opacity: '0', transform: 'translateX(-2px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },

      animation: {
        slideDownAndFade:
          'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade:
          'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFadeFaster:
          'slideUpAndFade 100ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
}

export default config
