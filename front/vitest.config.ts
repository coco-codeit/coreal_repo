import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      provider: "v8",
      reportsDirectory: "./coverage", // 리포트 디렉토리
      reporter: ["text", "lcov"], // lcov 형식으로 리포트 생성
    },
  },
});
