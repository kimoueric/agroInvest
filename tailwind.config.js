/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "main-color": "#08311D",
      "main-color-light": "#fff",
      "main-color-dark": "#000",
      "main-color-btn-submit": "#7DDA58",
      "main-color-input": "#D9D9D9",
    },
    backgroundImage: {
      bform: "url('src/assets/images/bg-form.svg')",
    },
  },
  plugins: [],
};
