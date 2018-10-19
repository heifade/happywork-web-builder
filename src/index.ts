import commander from "commander";

import { addBuildCommand } from "./build/buildCommand";

addBuildCommand();

commander.parse(process.argv);
