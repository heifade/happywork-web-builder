import { BuildConfig } from "happywork-node-builder";

const config: BuildConfig = {
  input: "src/index.ts",
  output: {
    dir: "dist",
    file: "index.js",
    mini: true,
    format: "cjs"
  }
};

export default config;
