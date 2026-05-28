import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",

  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
    "./src/features/**/*.{ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },

        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },

        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },

        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },

        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },

        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },

        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "#ffffff",
        },

        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",

        brand: {
          blue: "#2563EB",
          teal: "#14B8A6",
        },

        navy: {
          DEFAULT: "#0A0F1E",
          secondary: "#111827",
        },

        success: "#10B981",
        warning: "#F59E0B",
        danger: "#EF4444",
      },

      fontFamily: {
        sans: ["var(--font-sans)"],
        heading: ["var(--font-heading)"],
      },

      borderRadius: {
        sm: "calc(var(--radius) - 6px)",
        md: "calc(var(--radius) - 4px)",
        lg: "var(--radius)",
        xl: "calc(var(--radius) + 4px)",
        "2xl": "calc(var(--radius) + 8px)",
        "3xl": "calc(var(--radius) + 16px)",
      },

      keyframes: {
        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(24px)",
          },

          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        aurora: {
          "0%": {
            transform: "translate3d(0,0,0) scale(1)",
          },

          "50%": {
            transform: "translate3d(30px,-20px,0) scale(1.1)",
          },

          "100%": {
            transform: "translate3d(0,0,0) scale(1)",
          },
        },

        pulseSlow: {
          "0%, 100%": {
            opacity: "0.7",
          },

          "50%": {
            opacity: "1",
          },
        },
      },

      animation: {
        "fade-up": "fadeUp 0.8s ease both",

        aurora: "aurora 18s ease-in-out infinite",

        "pulse-slow": "pulseSlow 4s ease-in-out infinite",
      },

      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",

        "hero-gradient":
          "radial-gradient(circle at top, rgba(37,99,235,0.15), transparent 30%)",

        "hero-gradient-teal":
          "radial-gradient(circle at bottom right, rgba(20,184,166,0.12), transparent 25%)",
      },

      boxShadow: {
        glow: "0 0 40px rgba(37, 99, 235, 0.25)",

        teal: "0 0 40px rgba(20, 184, 166, 0.25)",

        glass:
          "0 8px 32px rgba(15, 23, 42, 0.35)",
      },

      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },

  plugins: [],
};

export default config;

