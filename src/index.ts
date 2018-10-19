import commander from "commander";

import { addBuildCommand } from "./build/buildCommand";
import { addStartCommand } from "./start/startCommand";

addBuildCommand();
addStartCommand();

commander.parse(process.argv);
