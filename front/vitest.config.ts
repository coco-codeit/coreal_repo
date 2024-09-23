import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    coverage: {
      provider: "v8",
      reportsDirectory: "./coverage", // 리포트 디렉토리
      reporter: ["text", "lcov"], // lcov 형식으로 리포트 생성
    },
  },
});
