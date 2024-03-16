/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-orange": "linear-gradient(179.75deg, #FFEDD1 0.2%, #FDE5C5 9.02%, #F8CA9C 39.9%, #F2AD6E 73.94%, #F09F5A 88.94%, #EE964B 99.78%)",
      },
    },
  },
  plugins: [],
};
