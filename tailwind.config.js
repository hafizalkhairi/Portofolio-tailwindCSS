/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '30px',
    },
    extend: {
      fontFamily :{
        poppins :['Poppins'],
      },
      colors :{
        primary:'#14b8a6',
        dark:'#0f172a',
      },
      screens : {
        '2xl' : '1320px',
      },      
    },
  },
  plugins: [],
}

