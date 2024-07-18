import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      colors: {
        pale: "#B6B8D6",
        cream: "#B6B8D6",
        main: "#6F58C9",
        blue: "#7E78D2",
        "light-blue": "#7E78D2",
        beak: "#BDEDE0",
      },
      boxShadow: {
        "outline-custom": "-5px 5px 10px 5px rgba(0, 0, 0, 0.25)", // Customize as needed
      },
    },
  },
  plugins: [],
} satisfies Config;
