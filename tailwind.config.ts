import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        script: ["Dancing Script", "cursive"],
      },
      colors: {
        rose: {
          50: "#fff1f2",
          100: "#ffe4e6",
          200: "#fecdd3",
          300: "#fda4af",
          400: "#fb7185",
          500: "#f43f5e",
          600: "#e11d48",
          700: "#be123c",
          800: "#9f1239",
          900: "#881337",
          950: "#4c0519",
        },
        blush: {
          50: "#fdf4f8",
          100: "#fbe8f1",
          200: "#f9d1e3",
          300: "#f4aacb",
          400: "#ec75a8",
          500: "#e04f8a",
          600: "#cc306c",
          700: "#aa2257",
          800: "#8d1e49",
          900: "#761d3f",
        },
        champagne: {
          50: "#fdf9f0",
          100: "#faf0d8",
          200: "#f4deb0",
          300: "#ecc67f",
          400: "#e3a84d",
          500: "#da8f2c",
          600: "#c17421",
          700: "#a0591e",
          800: "#83481e",
          900: "#6c3c1c",
        },
      },
      animation: {
        "float-slow": "floatSlow 6s ease-in-out infinite",
        "float-medium": "floatMedium 4s ease-in-out infinite",
        "sparkle": "sparkle 2s ease-in-out infinite",
        "petal-fall": "petalFall 8s linear infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(5deg)" },
        },
        floatMedium: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        sparkle: {
          "0%, 100%": { opacity: "0", transform: "scale(0.5) rotate(0deg)" },
          "50%": { opacity: "1", transform: "scale(1) rotate(180deg)" },
        },
        petalFall: {
          "0%": { transform: "translateY(-10vh) translateX(0) rotate(0deg)", opacity: "1" },
          "100%": { transform: "translateY(110vh) translateX(100px) rotate(720deg)", opacity: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "shimmer-gradient":
          "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
      },
      boxShadow: {
        "romantic": "0 8px 32px rgba(244, 63, 94, 0.15), 0 2px 8px rgba(244, 63, 94, 0.1)",
        "romantic-lg": "0 20px 60px rgba(244, 63, 94, 0.2), 0 8px 24px rgba(244, 63, 94, 0.15)",
        "glass": "0 8px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.6)",
        "polaroid": "0 4px 16px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
