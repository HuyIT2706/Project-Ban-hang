/** @type {import('tailwindcss').Config} */
export default {
  content: ["./docs/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      maxWidth: {
        'custom' : 'calc(100% - 48px)',
      },
      colors: {
        'primary-color' : '#171C28',
        'color-primary-2': '#1A162E',
        'color-dark' : '#FFFFFF',
        'custom-border' : '#D2D1D6',
      },
      fontFamily: {
        'gordita' : ['gordita', 'ui-sans-serif'],
      },
      fontSize: {
        'base' : ['22px', '32px'],
        'derc' : ['17px', '24px'],
      },
      backgroundColor: {
        'backgroud-3' : '#EEEEEE',
        'bg-dark' : '#171C28',
        'bg-main' : '#F6F6F6',
      },
      boxShadow :{
        '5xl' : '0px 20px 60px 10px #EDEDF633',
        'heare-product' : '0px 20px 60px 6px #7C7C7C33',
        'nav-inner' : '0px 40px 90px 20px #fff',
        'filter' : '0px 40px 90px 20px #C8C8C866;',
        
      },
      screens: {
        'mobile': {'max': '768.98px'}, // Mobile: max-width 767px
        'tablet': {'min': '768.98px', 'max': '991.98px'}, // Tablet: 768px - 991px
        'tablet-mobile': {'max': '991.98px'}, // Tablet & mobile: max-width 991px
        'table-pc': {'min': '992px', 'max': '1219.98px'},
        'pc' : {'min' : '1219.98px'} // PC: min-width 992px
      },
    },
  },
  plugins: [],
}