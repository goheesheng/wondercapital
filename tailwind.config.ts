// tailwind.config.js
// Add these custom configurations to your existing tailwind.config.js

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Custom Colors
      colors: {
        primary: {
          DEFAULT: "#ffc522",
          dark: "#ffb800",
          light: "#ffd65a",
        },
        dark: {
          DEFAULT: "#090a0e",
          lighter: "#191919",
          card: "#0a0a0a",
        },
      },
      
      // Custom Spacing
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "88": "22rem",
        "112": "28rem",
        "128": "32rem",
        "144": "36rem",
        "360": "1440px", // Your custom max-width
      },

      // Custom Font Sizes
      fontSize: {
        "2xs": "0.625rem",
        "3xs": "0.5rem",
      },

      // Custom Border Radius
      borderRadius: {
        "4xl": "2rem",
      },

      // Custom Box Shadows
      boxShadow: {
        "glow": "0 0 20px rgba(255, 197, 34, 0.5)",
        "glow-lg": "0 0 40px rgba(255, 197, 34, 0.6)",
        "card": "0 10px 30px rgba(0, 0, 0, 0.3)",
      },

      // Custom Animations
      animation: {
        "fadeIn": "fadeIn 0.8s ease-out forwards",
        "slideUp": "slideUp 0.8s ease-out forwards",
        "slideDown": "slideDown 0.8s ease-out forwards",
        "slideLeft": "slideLeft 0.8s ease-out forwards",
        "slideRight": "slideRight 0.8s ease-out forwards",
        "scaleIn": "scaleIn 0.6s ease-out forwards",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "bounce-slow": "bounce 2s ease-in-out infinite",
      },

      // Custom Keyframes
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },

      // Custom Background Images
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-gold": "linear-gradient(135deg, #ffc522 0%, #ffb800 100%)",
      },

      // Custom Backdrop Blur
      backdropBlur: {
        xs: "2px",
      },

      // Custom Max Width
      maxWidth: {
        "8xl": "90rem",
        "9xl": "100rem",
        "360": "1440px",
      },

      // Custom Z-Index
      zIndex: {
        "60": "60",
        "70": "70",
        "80": "80",
        "90": "90",
        "100": "100",
      },

      // Custom Transition Duration
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
      },
    },
  },
  plugins: [
    // Add any plugins you need
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
 
};

export default config;