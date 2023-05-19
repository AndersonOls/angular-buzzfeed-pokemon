/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    
    extend: {
      colors:{
        'custom_blue':'#4224d9',
        'custom_bg':'#644ED2'
      },
    },
  },
  plugins: [],
}

