import { resolve as resolvePath } from "path";

import { spawn } from "child_process";
import { WebConfig } from "../webConfig";
import { ifNullOrUndefined } from "../utils/utils";
import rimraf from "rimraf";
import { readTs } from "./readTs";

export async function getWebConfig(file: string) {
  let CWD = process.cwd();

  let webConfig = resolvePath(CWD, "./webConfig.ts");

  const content = await readTs(webConfig);

  return await readConfig(content);
}

async function readConfig(config: any) {
  let webConfig: WebConfig;

  switch (typeof config) {
    case "function":
      webConfig = (await config()) as WebConfig;
      break;
    case "object":
    default:
      webConfig = config as WebConfig;
      break;
  }

  if (webConfig.build) {
    let { build } = webConfig;
    build.sourceMap = ifNullOrUndefined(build.sourceMap, false);
    build.minimize = ifNullOrUndefined(build.minimize, true);
    build.dropConsole = ifNullOrUndefined(build.dropConsole, false);
    build.optimization = ifNullOrUndefined(build.optimization, {
      splitChunks: {
        cacheGroups: {}
      }
    });
  } else {
    webConfig.build = {
      sourceMap: false,
      minimize: true,
      dropConsole: false,
      optimization: {
        splitChunks: {
          cacheGroups: {}
        }
      }
    };
  }

  if (webConfig.development) {
    let { development } = webConfig;
    development.port = ifNullOrUndefined(development.port, 8080);
  } else {
    webConfig.development = { port: 8080 };
  }

  return webConfig;
}
