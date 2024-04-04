import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
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
      },
      colors:{
        color1:"#E7A94E",
        color2:"#873C3C",
        color3:"#E7D74E",
        color4:"#3A964E",
        color5:"#8E3F27",
        color6:"#836334",
        color7:"#DD5A3E",
        color8:"#5C72BF"
      }
    },
  },
  fontFamily: {
    sans: ['Roboto'],
    serif: ['Times New Roman'],
  },
  plugins: [],
};
export default config;
