/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    
  
    colors: {
      'body':'#ffff',
      'theme':'#5a4ae3',
      'hero':'rgba(255, 237, 218, 1)',
      'hover':'#e2e2e2',
      'Cart':'rgba(248, 248, 248, 1)',
      'Dashboard':'#222222',
      'Dashboard-border':'#9b9a9a',
      'Rating':'#fcdf03',
      'Red':'#ff2600',
      'Downloade':'#00b009',
      'white-transparent':'#ffffff1e',
      'black-transparent':'rgba(0, 0, 0, 0.75)'
    },
   
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
