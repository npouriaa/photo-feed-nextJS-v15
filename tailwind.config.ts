import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "max-sm": "320px",
      "max-sm2": "360px",
      "max-sm3": "400px",
      "sm": "481px",
      "sm2": "580px",
      "md": "641px",
      "md2": "768px",
      "md3": "850px",
      "lg": "961px",
      "xl": "1024px",
      "2xl": "1250px",
      "3xl": "1350px",
      "4xl": "1500px",
      "5xl": "1700px",
    },
  },
  plugins: [],
} satisfies Config;
