import { Routes } from "discord-api-types/v9";

import { discord_config } from "configs";
import commands from "discord/commands";
import rest from "discord/helpers/rest";

(async () => {
  const command_name = process.argv[2];
  if (!command_name) throw Error("Missing Command Name!");
  const command = commands[command_name];
  if (!command) throw Error(`Setup for Command ${command_name} does not exist!`);
  await rest.post(Routes.applicationCommands(discord_config.application_id), {
    body: command.toJSON()
  });
})();
