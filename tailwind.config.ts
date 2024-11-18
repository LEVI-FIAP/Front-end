import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        telefone: "#E41B69",
        faq: "#E8E8E8",
      },
      screens: {
        'phone': '200px',
      },
      gap: {
        '100': '450px',
      }
    },
  },
  plugins: [],
} satisfies Config;
