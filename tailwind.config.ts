import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        slate: {
          base: "#0A0D12",
          surface1: "#121620",
          surface2: "#1A202E",
          surface3: "#242C3D",
        },
        amber: {
          industrial: "#F59E0B",
          glow: "#D97706",
          dark: "#B45309",
        },
        steel: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
          border: "rgba(255, 255, 255, 0.08)",
          "border-light": "rgba(255, 255, 255, 0.14)",
        },
        safety: {
          cyan: "#0EA5E9",
          emerald: "#10B981",
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "blueprint-grid": "linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      backgroundSize: {
        "blueprint-sm": "24px 24px",
        "blueprint-lg": "72px 72px",
      },
      boxShadow: {
        "industrial-glow": "0 0 25px -5px rgba(245, 158, 11, 0.25)",
        "subtle-card": "0 4px 20px -2px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
