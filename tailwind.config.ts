import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1B33",
          deep: "#071426",
          soft: "#12294A",
          line: "#1E3A5F",
        },
        gold: {
          DEFAULT: "#C8A24A",
          light: "#E3C87F",
          dark: "#9E7C2C",
        },
        paper: "#F7F5F1",
        ink: "#111827",
        muted: "#5B6B82",
      },
      fontFamily: {
        display: ["Inter", "Noto Sans TC", "system-ui", "sans-serif"],
        body: ["Inter", "Noto Sans TC", "system-ui", "sans-serif"],
        serif: ["Noto Serif TC", "Times New Roman", "serif"],
      },
      maxWidth: {
        content: "72rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,27,51,0.06), 0 12px 32px -18px rgba(11,27,51,0.28)",
        gold: "0 10px 30px -12px rgba(200,162,74,0.55)",
      },
    },
  },
  plugins: [],
} satisfies Config;
