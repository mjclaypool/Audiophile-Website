/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "manrope": ["Manrope", "sans-serif"]
      },
      fontSize: {
        'h1': ['56px', {
          lineHeight: '58px',
          letterSpacing: '2px',
          fontWeight: 'bold'
        }],
        'h2': ['40px', {
          lineHeight: '44px',
          letterSpacing: '1.5px',
          fontWeight: 'bold'
        }],
        'h2-5': ['36px', {
          lineHeight: '40px',
          letterSpacing: '1.3px',
          fontWeight: 'bold'
        }],
        'h3': ['32px', {
          lineHeight: '36px',
          letterSpacing: '1.15px',
          fontWeight: 'bold'
        }],
        'h4': ['28px', {
          lineHeight: '38px',
          letterSpacing: '2px',
          fontWeight: 'bold'
        }],
        'h5': ['24px', {
          lineHeight: '33px',
          letterSpacing: '1.7px',
          fontWeight: 'bold'
        }],
        'h6': ['18px', {
          lineHeight: '24px',
          letterSpacing: '1.3px',
          fontWeight: 'bold'
        }],
        'overline': ['14px', {
          lineHeight: '19px',
          letterSpacing: '10px',
          fontWeight: 'normal'
        }],
        'sub-title': ['13px', {
          lineHeight: '25px',
          letterSpacing: '1px',
          fontWeight: 'bold'
        }],
        'body': ['15px', {
          lineHeight: '25px',
          fontWeight: 'medium'
        }],
      },
      colors: {
        "p-orange-dark": "#D87D4A",
        "p-orange-light": "#FBAF85",
        "n-grey-v-dark": "#101010",
        "n-grey-dark": "#F1F1F1",
        "n-grey": "#4C4C4C",
        "n-grey-light": "#FAFAFA",
        "n-white": "#FFFFFF",
        "n-black": "#000000",
      }
    },
  },
  plugins: [],
}

