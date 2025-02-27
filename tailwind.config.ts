import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffba00",
        secondary: "#000000",
        tertiary: "#171717",
      },
      fontFamily: {
        oswald: ["var(--font-oswald)", "sans-serif"],
        dmSans: ["var(--font-dm-sans)", "sans-serif"],
      },
    },
  },
  plugins: [require("preline/plugin")],
} satisfies Config;
