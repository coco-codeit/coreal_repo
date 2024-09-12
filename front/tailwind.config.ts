import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-spoqa-han-sans-neo-regular)", "sans-serif"], // 기본폰트 Regular 폰트로 설정
        title: ["var(--font-spoqa-han-sans-neo-bold)", "sans-serif"], // Bold 폰트
        body: ["var(--font-spoqa-han-sans-neo-regular)", "sans-serif"], // Regular 폰트
      },

      fontSize: {
        // Title
        "display-5": ["40px", { lineHeight: "52px" }],
        "display-4": ["36px", { lineHeight: "46px" }],
        "display-3": ["32px", { lineHeight: "42px" }],
        "display-2": ["28px", { lineHeight: "38px" }],
        "display-1": ["24px", { lineHeight: "34px" }],
        headline: ["20px", { lineHeight: "28px" }],
        "subhead-3": ["16px", { lineHeight: "22px" }],
        "subhead-long-3": ["16px", { lineHeight: "28px" }],
        "subhead-2": ["14px", { lineHeight: "20px" }],
        "subhead-long-2": ["14px", { lineHeight: "24px" }],
        "subhead-1": ["12px", { lineHeight: "18px" }],

        // Body
        "body-2": ["16px", { lineHeight: "24px" }],
        "body-long-2": ["16px", { lineHeight: "28px" }],
        "body-1": ["14px", { lineHeight: "20px" }],
        "body-long-1": ["14px", { lineHeight: "24px" }],
        caption: ["12px", { lineHeight: "18px" }],
      },

      // 공통 letterSpacing 설정
      letterSpacing: {
        tighter: "-0.6px",
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: "#000",
        white: "#FFF",

        // gray scale
        gray: {
          1: "#FBFBFB",
          2: "#F7F7F7",
          3: "#F5F4F3",
          4: "#EFEFEF",
          5: "#ECECEC",
          6: "#DFDFDF",
          7: "#C1C1C1",
          8: "#A5A5A5",
          9: "#8B8B8B",
          10: "#6F6F6F",
          11: "#555",
          12: "#3D3D3D",
          13: "#333",
          14: "#242424",
          15: "#171717",

          // gray transparent scale
          "transparent-1": "rgba(176, 179, 188, 0.1)",
          "transparent-2": "rgba(176, 179, 188, 0.3)",
          "transparent-3": "rgba(176, 179, 188, 0.5)",
          "transparent-4": "rgba(176, 179, 188, 0.7)",
        },

        // purple scale
        purple: {
          1: "#E1C5FE",
          2: "#D3AAFD",
          3: "#C084FC",
          4: "#B773FB",
          5: "#AB5EF9",
          6: "#A451F7",
          7: "#9653D9",
          8: "#8256AE",
          9: "#6E5784",
          10: "#654C7E",
          11: "#533670",
          12: "#442365",
        },

        //system scale
        green: {
          "for-ios": "#06C755",
          "for-android": "#4CC764",
        },

        blue: {
          400: "#96B2FF",
          500: "#638DFF",
          600: "#4270ED",
          700: "#2F59CC",
        },

        red: {
          "ios-400": "#FF334B",
        },
      },
    },
  },
  plugins: [],
};

export default config;
