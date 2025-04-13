/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'nunito': ['Nunito Sans 10pt', 'sans-serif'],
        'timmana': ['Timmana', 'sans-serif'],
        'bangers': ['Bangers', 'sans-serif'],
        'quicksand': ['Quicksand', 'sans-serif'],
      },
      fontSize: {
        'xxs' : '0.55rem',
        'xxxs' : '0.45rem',
        'xxxxs' : '0.4rem',
      },
      scale: {
        '120': '1.20',
        '130': '1.30',
        '140': '1.40',
        '150': '1.50',
      },
      spacing: {
        '88' : '352px',
        '100' : '400px',
        '112' : '420px',
        '118' : '450px',
        '124' : '475px',
        '130' : '505px',
        '136' : '540px',
        '142' : '575px',
        '148' : '605px',
        '154' : '660px'
      },
      screens: {
        'lgplus' : '1100px',
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },

  variants: {
    extend: {
      scale: ['hover'], // Ensure hover variants are generated
    },
  },

  plugins: [],
};
