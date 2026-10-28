/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],

  presets: [require("nativewind/preset")],

  theme: {
    extend: {
      colors: {
        // Primary colors
        primary: {
          DEFAULT: "#F97316",
          hover: "#EA580C",
          soft: "#FFF0E5",
          deep: "#C2410C",
        },

        // Backgrounds and surfaces
        background: {
          DEFAULT: "#FFF9F3",
          secondary: "#FFF1E6",
          elevated: "#FFFCF9",
          dark: "#241A17",
        },

        surface: {
          DEFAULT: "#FFFFFF",
          elevated: "#FFFCF9",
          dark: "#241A17",
        },

        // Typography
        text: {
          DEFAULT: "#241A17",
          secondary: "#786B65",
          muted: "#9A8B83",
          inverse: "#FFF9F3",
          onPrimary: "#FFFFFF",
        },

        // Borders and focus
        border: {
          DEFAULT: "#F0E4D9",
          strong: "#D9C8BB",
          focus: "#FDBA74",
        },

        // Status colors
        success: {
          DEFAULT: "#16A34A",
          background: "#DCFCE7",
        },

        warning: {
          DEFAULT: "#D97706",
          background: "#FEF3C7",
        },

        error: {
          DEFAULT: "#DC2626",
          background: "#FEE2E2",
        },

        info: {
          DEFAULT: "#2563EB",
          background: "#DBEAFE",
        },

        // Special colors
        gradient: {
          start: "#FB923C",
          end: "#F97316",
        },

        gold: "#EAB308",
        rating: "#F59E0B",
        discount: "#E11D48",
      },
    },
  },

  plugins: [],
};
