import type { Config } from "tailwindcss";

const config: Config = {
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
        'nav': '820px',
      },
      gap: {
        '100': '450px',
      },
      spacing: {
        '50': '50%',
        '101': '100%',
        '105': '400px',
        '110': '569px',
      },
      fontSize: {
        link: '16px',
      },
      keyframes: {
        descer: {
          '0%': { transform: 'translateY(-100%)' },
          '50%': { transform: 'translateY(20px)' },
          '100%': { transform: 'translateY(0)' },
        },
        direita: {
          '0%': { transform: 'translatex(145%)' },
          '50%': { transform: 'translatex(-20px)' },
          '100%': { transform: 'translatex(0)' },
        },
      },
      animation: {
        dialog: 'descer 2s ease-out forwards',
        direcao: 'direita 3s ease-out forwards',
      },
      backgroundSize: {
        '50%': '20px',
        '16': '4rem',
      }
    },
  },
  plugins: [],
};
export default config;
