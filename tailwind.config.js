/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      transitionDuration: {
        '2500': '2500ms'
      },
      height: {
        'lg': '500px'
      },
      width: {
        'lg': '500px'
      },
      colors: {
        'dark1': '#1d1d1f',
        'dark2': '#232326',
        'dark3': '#2a2a2d'
      }
    }
  }
}
