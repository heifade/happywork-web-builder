import { BuildConfig } from "happywork-node-builder";

const config: BuildConfig = {
  input: "src/index.ts",
  output: {
    dir: "dist",
    file: "index.js",
    format: "cjs"
  },
  external: [
    "@babel",
    "babel-loader",
    "css-loader",
    "file-loader",
    "html-webpack-plugin",
    "less",
    "less-loader",
    "mini-css-extract-plugin",
    "optimize-css-assets-webpack-plugin",
    "ts-loader",
    "typings-for-css-modules-loader",
    "url-loader",
    "webpack",
    "webpack-dev-server",

    "util",

    "uglifyjs-webpack-plugin"
  ],
  mini: true
};

export default config;
