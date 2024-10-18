import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ["/node_modules/"],
  coverageProvider: "v8",
  moduleDirectories: ["node_modules"],
  setupFilesAfterEnv: ["./test/setup.ts"],
};

export default config;
