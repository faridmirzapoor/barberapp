// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}', // اگر از دایرکتوری app استفاده می‌کنی
  ],
  theme: {
    extend: {
      colors: {
        primary: '#363062',
      },
    },
  },
  plugins: [],
};
