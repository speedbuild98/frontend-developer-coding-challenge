/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial':'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'illustration-bg': 'linear-gradient(180deg, #FF8800 0%, #FF6600 100%)',
        'section-bg': 'linear-gradient(102.47deg, rgba(23, 111, 235, 0.5) -5.34%, rgba(255, 128, 255, 0.5) 106.58%);',
        'aerolab': 'linear-gradient(180deg, #FF8800 0%, #FF6600 100%);',
        'brand-default': 'linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%);',
        'brand-hover': 'linear-gradient(102.47deg, #1667D9 -5.34%, #F279F2 106.58%);',
        "wave-pattern": "url('/app/public/assets/illustrations/wave-pattern.svg')",
      },
      colors: {
        '900':'#252F3D',
        '600':'#7C899C',
        '500':'#8FA3BF',
        '300':'#DAE4F2',
        '200':'#E6EDF7',
        '100':'#F5F9FF',
        'green':'#29CC74',
        'green-light':'#CCFFE3',
        'red':'#E07F4F',
        'red-light':'#FFDFD9',
        'brand-light': '#E5F0FF',
        'brand-light2': '#CCE1FF',
      },
    },
  },
  plugins: [],
}
