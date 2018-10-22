import { unlinkSync, existsSync } from "fs";
import { spawn } from "child_process";

// function getTsc() {
//   const path1 = resolvePath(__dirname, "../node_modules/typescript/bin/tsc"); // 打包后 __dirname 变成 dist， 所以是'..'
//   if (existsSync(path1)) {
//     return path1;
//   }
//   const path2 = resolvePath(process.cwd(), "./node_modules/typescript/bin/tsc");
//   if (existsSync(path2)) {
//     return path2;
//   }
//   throw new Error("tsc is not exists!");
// }

export async function readTs(file: string) {
  return new Promise<any>((resolve, reject) => {
    if (!existsSync(file)) {
      reject(`${file} is not exists!`);
      return;
    }
    const jsFileName = file.replace(/.ts$/, ".js");

    if (existsSync(jsFileName)) {
      unlinkSync(jsFileName);
    }

    const client = spawn("tsc", [file, "--module", "commonjs"], { shell: true });

    client.on("close", (code, signal) => {
      if (existsSync(jsFileName)) {
        const content = require(jsFileName).default;
        resolve(content);
        unlinkSync(jsFileName);
      } else {
        reject(`编译${file}时出错！code:${code}`);
      }
    });
  });
}
