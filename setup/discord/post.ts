import commands from "discord/commands";
import rest from "discord/helpers/rest";

import { applicationCommands } from "./helpers/routes";

(async () => {
  const command_name = process.argv[2];
  if (!command_name) throw Error("Missing Command Name!");
  const command = commands[command_name];
  if (!command) throw Error(`Setup for Command ${command_name} does not exist!`);
  await rest.post(applicationCommands(), {
    body: command.toJSON()
  });
})();
