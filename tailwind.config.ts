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
        "bg-primary": "#0d0d1a",
        "bg-secondary": "#12122a",
        "accent-purple": "#7c3aed",
        "accent-cyan": "#a78bfa",
        highlight: "#c084fc",
        "text-primary": "#f1f5f9",
        "text-muted": "#94a3b8",
      },
      fontFamily: {
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
        body: ["var(--font-dm)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
