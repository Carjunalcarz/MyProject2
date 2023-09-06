/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [ 
      {alcarz: {
          
          "primary": "#5eead4",
                    
          "secondary": "#f000b8",
                    
          "accent": "#1dcdbc",
                    
          "content": "#f000b8",
                    
          "base-100": "#2b3440",
                    
          "info": "#3abff8",
                    
          "success": "#36d399",
                    
          "warning": "#fbbd23",
                    
          "error": "#f87272",
                    }},
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
    ],
    
  },
}