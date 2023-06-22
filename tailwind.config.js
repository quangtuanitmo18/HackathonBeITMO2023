const plugin = require('tailwindcss/plugin')
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--font-open_Sans)', ...fontFamily.sans]
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        base: {
          black: '#333333',
          white: '#FFFFFF'
        },
        primary: {
          blue: '#1846C7',
          blue24: '#C8D3F2',
          blue8: '#DAE1F6',
          pink: '#EE215B',
          pink24: '#FCD3DE',
          pink8: '#FDE9EE'
        },
        secondary: {
          blue: '#0091FF',
          purple: '#A50AFF',
          green: '#22B217',
          red: '#E02E2E',
          orange: '#FA6400',
          yellow: '#F7B500'
        },
        secondary_light: {
          blue_light: '#E5F4FF',
          purple_light: '#F6E6FF',
          green_light: '#E9F7E8',
          red_light: '#FCEAEA',
          orange_light: '#FFEFE5',
          yello_light: '#FEF8E5'
        },
        gray: {
          gray80: '#5C5C5C',
          gray60: '#858585',
          gray40: '#ADADAD',
          gray12: '#E7E7E7',
          gray4: '#F7F7F7'
        },
        non_style: {
          gray20: '#D6D6D6',
          gray8: '#EFEFEF',
          blue_hover: '#1846C7',
          blue_active: '#143AA4',
          deep_sky: '#00C2FF',
          mint: '#300FFA3',
          drak_green: '#008D6B',
          violet_red: '#D4007D'
        },
        be: {
          friendly: '#E359DB',
          friendly_light: '#FBEDFB',
          healthy: '#FF3A32',
          healthy_light: '#FBEDED',
          open: '#FC9315',
          open_light: '#FBF7ED',
          eco: '#6FD52E',
          eco_light: '#F1FBED',
          fit: '#006EFF',
          fit_light: '#EDF1FB',
          pro: '#950CFF',
          pro_light: '#F7EDFB'
        }
      }
    }
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.container': {
          maxWidth: theme('columns.7xl'),
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: theme('spacing.4'),
          paddingRight: theme('spacing.4')
        }
      })
    })
  ]
}
