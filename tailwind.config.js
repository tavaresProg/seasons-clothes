/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      primary: ['Poppins', 'Arial', 'sans'],
    },
    container: {
      padding: {
        DEFAULT: '30px',
        lg: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: '#222222',
        secondary: '#F5E6E0',
        custom_primary: '#acc3a7',
        custom_secondary: '#c5d8d4',
        custom_background: '#efeaf1',
        custom_text: '#101319',
        custom_accent: '#5c7c55',

      },
      backgroundImage: {
        custom_bg: "url('./img/bg.png')",
      },
    },
  },
  plugins: [],
}

