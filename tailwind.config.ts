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
        pale: "rgb(234,184,151)",
        cream: "rgb(249,243,229)",
        "dark-blue": "rgb(4,32,56)",
        blue: "rgb(72,152,201)",
        "light-blue": "rgb(136,210,249)",
        beak: "rgb(201,116,85)",
      },
      boxShadow: {
        "outline-custom": "-5px 5px 10px 5px rgba(0, 0, 0, 0.25)", // Customize as needed
      },
    },
  },
  plugins: [],
} satisfies Config;
