import { resolve as resolvePath, dirname, } from "path";
import { unlinkSync, existsSync } from "fs";
import { spawn } from "child_process";

export async function readTs(file: string) {
  return new Promise<any>((resolve, reject) => {
    let jsFileName = file.replace(/.ts$/, ".js");

    const typescript = require.resolve("typescript");
    const tsc = resolvePath(dirname(typescript), "../bin/tsc");

    if (!existsSync(tsc)) {
      throw new Error("tsc is not exists!");
    }
    if (existsSync(jsFileName)) {
      unlinkSync(jsFileName);
    }

    const client = spawn(tsc, [file, "--module", "commonjs"], { shell: true });

    client.on("close", (code, signal) => {
      if (existsSync(jsFileName)) {
        const content = require(jsFileName).default;
        resolve(content);
        unlinkSync(jsFileName);
      } else {
        reject(`编译${file}时出错！code:${code} signal:${signal}`);
      }
    });
  });
}
