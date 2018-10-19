import commander from "commander";
import { start } from "./webStart";

export function addStartCommand() {
  commander
    .command("start")
    .description("启动调试Web项目")
    .action((pars: any) => {
      start().then();
    });
}
