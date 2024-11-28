import { text } from "stream/consumers";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background_1: "var(--background_1)",
        background_2: "var(--background_2)",
        // foreground: "var(--foreground)",
        dark : "var(--text-dark)",
        light: "var(--text-light)",

        border: {
          DEFAULT: "var(--border)",
        },

      },
    },
  },
  plugins: [],
} satisfies Config;
