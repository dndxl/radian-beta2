/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {

      backgroundImage : {
        'Rectangle': "url('/img/Rectangle.png')",
      },

      colors: {
        primary: '#0096ff',
        sma: '#002B5B',
        dark: '#0f172a',
        text: '#9796a1',
        second: '#ffb200',
        body: '#767676',
        section: '#E2E8F0',
        footer: '#F8FAFC',
        secondary: '#FFE099',
        sd: '#EA4242',
        red: '#FF0000',
        radian: '#33ABFF',
        orange: '#FF8A00',
        mhs: '#4C26FF',
        hero: '#F2F5FF',
        bandung: '#5172F4',
        jogja: '#20A4B0',
        surabaya: '#F88E27',
        herosby: '#FEF5ED',
        border: '#EEF8FF',
      },

      screens: {
        '2xl' : '1320px',
      },

      fontFamily: {
        poppins: 'Poppins',
      },
      
    },
  },
  plugins: [],
}
