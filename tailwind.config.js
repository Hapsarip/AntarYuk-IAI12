/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "login-image": "url('/src/assets/background.png')",
      },
      colors: {
        navy: "#041562",
        blue: "#11468F",
        red: "DA1212",
        grey: "EEEEEE",
      },
      fontFamily: {
        notoseriftc: ["NotoSeriffTC"],
        reemkuflink: ["ReemKuflInk"],
      },
    },
  },
  plugins: [
    require("tailwindcss-font-inter"),
    require("tailwind-scrollbar-hide"),
  ],
};