/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    fontFamily: {
      sans: ['Barlow', 'system-ui'],
      serif: ['Fraunces', 'system-ui'],
    },
    fontWeight: {
      semibold: 600,
      bold: 700,
      black: 900,
    },
    extend: {
      letterSpacing: {
        veryWide: '0.3em',
      },
      colors: {
        'red-100': 'hsla(var(--red-200),0.3)',
        'red-200': 'hsl(var(--red-200))',
        'cyan-100': 'hsl(var(--cyan-100))',
        'yellow-100': 'hsla(var(--yellow-200),0.3)',
        'yellow-200': 'hsl(var(--yellow-200))',
        'cyan-200': 'hsl(var(--cyan-200))',
        'blue-100': 'hsl(var(--blue-100))',
        'blue-400': 'hsl(var(--blue-400))',
        'cyan-400': 'hsl(var(--cyan-400))',
        'blue-600': 'hsl(var(--blue-600))',
        'blue-800': 'hsl(var(--blue-800))',
        'blue-700': 'hsl(var(--blue-700))',
        'blue-500': 'hsl(var(--blue-500))',
      },
    },
  },
  plugins: [],
};
