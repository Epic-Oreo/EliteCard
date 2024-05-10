/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'background-light': '#fbfbfe',
        'background': '#131313',
        'primary': '#e01f45',
        'secondary': '#cbf24a',
        'accent': '#e66af6',
       },
    },
  },
  plugins: [],
}

