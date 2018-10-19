import commander from "commander";
import { build } from "./webBuilder";

export function addBuildCommand() {
  commander
    .command("build")
    //.option("--step <n>", "步进", toInt, 2)
    .description("构建Web项目")
    .action((pars: any) => {
      build()
        .then()
        .catch(e => {
          console.log(`构建失败,${e}`);
        });
    });
}
