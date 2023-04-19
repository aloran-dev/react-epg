/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        smLayout: '20rem auto',
        mdLayout: '25rem auto'
      },
      gridTemplateColumns: {
        channelTable: '9rem auto'
      }
    }
  },
  plugins: []
}
