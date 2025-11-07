import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        primary: {
          50: "#e6f2ff",
          100: "#b3d9ff",
          200: "#80bfff",
          300: "#4da6ff",
          400: "#1a8cff",
          500: "#0066cc",
          600: "#0052a3",
          700: "#003d7a",
          800: "#002952",
          900: "#001429",
        },
        secondary: {
          50: "#fff4e6",
          100: "#ffd9b3",
          200: "#ffbf80",
          300: "#ffa44d",
          400: "#ff8a1a",
          500: "#ff6b00",
          600: "#cc5600",
          700: "#994000",
          800: "#662b00",
          900: "#331500",
        },
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeInLeft: {
          from: { opacity: "0", transform: "translateX(-40px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        fadeInRight: {
          from: { opacity: "0", transform: "translateX(40px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "scale(0.9)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        slideDown: {
          from: { opacity: "0", transform: "translateY(-20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        gridSlide: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-52px)" },
        },
        // Extras used by hero/cta variants:
        float1: {
          "0%,100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(-14px,-10px,0) scale(1.05)" },
        },
        float2: {
          "0%,100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(18px,12px,0) scale(1.06)" },
        },
        dashmove: {
          to: { strokeDashoffset: "-1000" },
        },
        columnGlow: {
          "0%,100%": { boxShadow: "0 0 0px rgba(59,130,246,0)" },
          "50%": { boxShadow: "0 0 28px rgba(59,130,246,0.35)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
        fadeIn: "fadeIn 0.6s ease-out forwards",
        fadeInUp: "fadeInUp 0.8s ease-out forwards",
        fadeInLeft: "fadeInLeft 0.8s ease-out forwards",
        fadeInRight: "fadeInRight 0.8s ease-out forwards",
        scaleIn: "scaleIn 0.6s ease-out forwards",
        gridSlide: "gridSlide 18s linear infinite",
        slideDown: "slideDown 0.4s ease-out forwards",
        float1: "float1 10s ease-in-out infinite",
        float2: "float2 12s ease-in-out infinite",
        dashmove: "dashmove 16s linear infinite",
        columnGlow: "columnGlow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
