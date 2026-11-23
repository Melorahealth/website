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
        // The product dashboard's accent (app.melorahealth.io): its primary sage
        // and the mint tint it uses for chips and soft fills.
        accent: {
          DEFAULT: "#4C7A6E",
          deep: "#3D6258",
          soft: "#E6F1EB"
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
