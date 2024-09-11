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
        "gray-1": "#FBFBFB",
        "gray-2": "#F7F7F7",
        "gray-3": "#F5F4F3",
        "gray-4": "#EFEFEF",
        "gray-5": "#ECECEC",
        "gray-6": "#DFDFDF",
        "gray-7": "#C1C1C1",
        "gray-8": "#A5A5A5",
        "gray-9": "#8B8B8B",
        "gray-10": "#6F6F6F",
        "gray-11": "#555",
        "gray-12": "#3D3D3D",
        "gray-13": "#333",
        "gray-14": "#242424",
        "gray-15": "#171717",

        // gray transparent scale
        "gray-transparent-01": "rgba(176, 179, 188, 0.1)",
        "gray-transparent-02": "rgba(176, 179, 188, 0.3)",
        "gray-transparent-03": "rgba(176, 179, 188, 0.5)",
        "gray-transparent-04": "rgba(176, 179, 188, 0.7)",

        // purple scale
        "purple-1": "#E1C5FE",
        "purple-2": "#D3AAFD",
        "purple-3": "#C084FC",
        "purple-4": "#B773FB",
        "purple-5": "#AB5EF9",
        "purple-6": "#A451F7",
        "purple-7": "#9653D9",
        "purple-8": "#8256AE",
        "purple-9": "#6E5784",
        "purple-10": "#654C7E",
        "purple-11": "#533670",
        "purple-12": "#442365",

        //systemscale
        "green-for-ios": "#06C755",
        "green-for-android": "#4CC764",

        "blue-400": "#96B2FF",
        "blue-500": "#638DFF",
        "blue-600": "#4270ED",
        "blue-700": "#2F59CC",

        "red-ios-400": "#FF334B",
      },
    },
  },
  plugins: [],
};

export default config;
