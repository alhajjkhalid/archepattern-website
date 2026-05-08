import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        arabic: [
          "IBM Plex Sans Arabic",
          "Tajawal",
          "Cairo",
          "system-ui",
          "sans-serif"
        ],
        latin: [
          "Inter",
          "IBM Plex Sans Arabic",
          "system-ui",
          "sans-serif"
        ]
      },
      colors: {
        ink: "#05070d",
        navy: "#08101f",
        panel: "rgba(12, 24, 43, 0.72)",
        electric: "#4db8ff",
        teal: "#37f5d0",
        violet: "#a78bfa",
        gold: "#d6b56d"
      },
      boxShadow: {
        glow: "0 0 40px rgba(77, 184, 255, 0.18)",
        teal: "0 0 34px rgba(55, 245, 208, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
