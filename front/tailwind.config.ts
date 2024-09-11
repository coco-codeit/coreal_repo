import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: "#000",
        white: "#FFF",

        "gray-01": "#FBFBFB",
        "gray-02": "#F7F7F7",
        "gray-03": "#F5F4F3",
        "gray-04": "#EFEFEF",
        "gray-05": "#ECECEC",
        "gray-06": "#DFDFDF",
        "gray-07": "#C1C1C1",
        "gray-08": "#A5A5A5",
        "gray-09": "#8B8B8B",
        "gray-10": "#6F6F6F",
        "gray-11": "#555",
        "gray-12": "#3D3D3D",
        "gray-13": "#333",
        "gray-14": "#242424",
        "gray-15": "#171717",

        "gray-transparent-01": "rgba(176, 179, 188, 0.1)",
        "gray-transparent-02": "rgba(176, 179, 188, 0.3)",
        "gray-transparent-03": "rgba(176, 179, 188, 0.5)",
        "gray-transparent-04": "rgba(176, 179, 188, 0.7)",

        "purple-01": "#E1C5FE",
        "purple-02": "#D3AAFD",
        "purple-03": "#C084FC",
        "purple-04": "#B773FB",
        "purple-05": "#AB5EF9",
        "purple-06": "#A451F7",
        "purple-07": "#9653D9",
        "purple-08": "#8256AE",
        "purple-09": "#6E5784",
        "purple-10": "#654C7E",
        "purple-11": "#533670",
        "purple-12": "#442365",

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
