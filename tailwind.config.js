/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js", // <--- Add this line
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        Kalam:['Kalam','cursive'],
        comicNeue:['Comic Neue','cursive']
      },
      backgroundImage:{
        'note':"url('https://www.transparenttextures.com/patterns/lined-paper.png');"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

