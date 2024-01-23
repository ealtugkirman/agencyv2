/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#000000",
        light: "#FAF6F0",
        newcolor: "#311ed6",
        accent: "#7B00D3",
        accentDark: "#ffdb4d",
        sikko: "#c9fd74"
      },
},
  },
  plugins: [],
}