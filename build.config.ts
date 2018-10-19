import { BuildConfig } from "happywork-node-builder";

const config: BuildConfig = {
  input: "src/index.ts",
  output: {
    dir: "dist",
    file: "index.js",
    mini: false,
    format: "cjs"
  },
  external: [
    "webpack",
    "mini-css-extract-plugin",
    "html-webpack-plugin",
    "uglifyjs-webpack-plugin",
    "optimize-css-assets-webpack-plugin",
    "@babel",
    "webpack-dev-server",
    "util",
    "events",
    "assert"
  ]
};

export default config;
