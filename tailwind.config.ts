import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|toggle|ripple|spinner).js"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "navy-blue": "#3E5C76",
        "dark-gray": "#4A4A4A",
        "soft-lavender": "#D1B2FF",
        "soft-white": "#F3F4F6",
      },
    },
  },
  darkMode: "selector",
  plugins: [nextui()],
} satisfies Config;
