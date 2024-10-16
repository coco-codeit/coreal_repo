import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        "screen-minus-nav": "calc(100vh - 60px)",
      },

      keyframes: {
        fillToBorder: {
          "0%": { r: "0" },
          "50%": { r: "12" },
          "100%": { r: "15" },
        },
      },
      animation: {
        fillToBorder: "fillToBorder 1s ease-in-out forwards",
      },

      fontFamily: {
        pretendard: ["var(--font-pretendard)"],
      },

      fontSize: {
        xs: ["12px", "16px"],
        sm: ["14px", "20px"],
        base: ["16px", "24px"],
        lg: ["18px", "28px"],
        xl: ["20px", "28px"],
        "2xl": ["24px", "32px"],
        "3xl": ["30px", "36px"],
      },

      fontWeight: {
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: "#000",
        white: "#FFF",

        //blue color
        blue: "#4E40DB",

        // green scale
        green: {
          1: "#77E2C4",
          2: "#03FFA3",
        },

        // purple scale
        purple: {
          1: "#EBE2FF",
          2: "#9589FF",
          3: "#7B3DFF",
          warm: "#B382E3",
        },

        // gray scale
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
          950: "#030712",
        },

        // red scale
        red: {
          600: "#DC2626",
        },
      },
      boxShadow: {
        custom: "0px 10px 10px -5px #0000000A",
      },
    },
  },
  plugins: [],
};

export default config;
