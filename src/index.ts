import commander from "commander";
import { addBuildCommand } from "./build/buildCommand";
import { addStartCommand } from "./start/startCommand";
import { version } from "../package.json";

console.log(`version: ${version}`);

addBuildCommand();
addStartCommand();

commander.parse(process.argv);
