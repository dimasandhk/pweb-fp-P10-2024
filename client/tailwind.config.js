/** @type {import('tailwindcss').Config} */
export default {
  // Konfigurasi yang perlu ditambahkan:
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  // notes: sesuaikan file path dengan kebutuhan kalian dan pastikan file path-nya benar
  theme: {
    extend: {
      colors: {
        primary: "#3490dc",
        secondary: "#ffed4a",
        danger: "#e3342f",
      },
    },
  },
  plugins: [],
};
