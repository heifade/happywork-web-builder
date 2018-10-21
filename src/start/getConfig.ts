import { getWebpackConfig } from "../configs/webpackConfig";
import { existsSync } from "fs";
import { Entry } from "webpack";
import { resolve } from "path";
import { isString, isArray } from "util";

function getDevServerClient() {
  const path1 = resolve(__dirname, "../node_modules/webpack-dev-server/client"); // 打包后 __dirname 变成 dist， 所以是'..'
  if (existsSync(path1)) {
    return path1;
  }
  const path2 = resolve(process.cwd(), "./node_modules/webpack-dev-server/client");
  if (existsSync(path2)) {
    return path2;
  }
  throw new Error("webpack-dev-server is not exists!");
}

export async function getConfig(host: string) {
  let { webConfig, webpackConfig } = await getWebpackConfig("development");

  let entry = webpackConfig.entry as Entry;

  let client = getDevServerClient() + `?http://${host}:${webConfig.development.port}`;

  let resultEntry: any = {};
  for (let key of Object.keys(entry)) {
    let entryValue = entry[key];
    if (isString(entryValue)) {
      resultEntry[key] = [client, entryValue];
    } else if (isArray(entryValue)) {
      resultEntry[key] = [client].concat(entryValue);
    }
  }

  webpackConfig.entry = resultEntry;

  return { webConfig, webpackConfig };
}
