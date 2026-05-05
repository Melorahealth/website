import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111B17",
        cream: "#F2EDE6",
        sage: {
          DEFAULT: "#264236",
          soft: "#7A8F7F"
        },
        rose: "#C98F8A",
        gold: "#C8A46B"
      },
      fontFamily: {
        serif: ["Playfair Display", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "Manrope", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 70px rgba(38, 66, 54, 0.09)"
      }
    }
  },
  plugins: []
};

export default config;
