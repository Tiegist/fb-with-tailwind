/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
    screens:{
      'sm' : '640px',
      'md' : '768px',
      'lg' : '1024px',
      'xl' : '1280px',
    }
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
}

