/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
     {
        dark: {
          "primary": "#4b5563",
          "secondary": "#0284c7",
          "accent": "#0891b2",
          "neutral": "#374151",
          "base-100": "#1f2937",
          "info": "#0ea5e9",
          "success": "#6ee7b7",
          "warning": "#ea580c",
          "error": "#ef4444",
        },
        light:{
          "primary": "#e5e7eb",
          "secondary": "#06b6d4",
          "accent": "#1dcdbc",
          "neutral": "#2b3440",
          "base-100": "#ffffff",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fb923c",
          "error": "#f87272",
        }
      },
    ],
  },
  plugins: [require("daisyui")],
}
