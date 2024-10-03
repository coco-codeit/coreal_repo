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

        // blue scale
        blue: {
          0: "#E7F5FF",
          1: "#D0EBFF",
          2: "#A6D8FF",
          3: "#74C0FC",
          4: "#4DABF7",
          5: "#339AF0",
          6: "#238BE6",
          7: "#1C7ED6",
          8: "#1971C2",
          9: "#1864AB",
          10: "#175D9E",
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
