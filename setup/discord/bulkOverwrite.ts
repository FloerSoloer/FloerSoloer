import commands from "discord/commands";
import rest from "discord/helpers/rest";

import { applicationCommands } from "./helpers/routes";

rest.put(applicationCommands(), {
  body: Object.values(commands)
});
