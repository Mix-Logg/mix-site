/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-roboto)',

      },
      colors: {
        primary: '#FF5F00',
        secondary: '#F4F4F4',
        terciary: '#7B7B7B',
        quarter: '#1e1e1e',  
             
      },
    },
  },
  plugins: [require('@tailwindcss/forms'),],
  
}
