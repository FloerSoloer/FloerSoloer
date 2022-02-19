import { Routes } from "discord-api-types/v9";

import { discord_config } from "configs";

const { application_id } = discord_config;

export const applicationCommands = () => Routes.applicationCommands(application_id);

export const applicationCommand = (command_id?: string) => {
  if (!command_id) {
    command_id = process.argv[2];
    if (!command_id) throw Error("Missing Command ID!");
  }
  return Routes.applicationCommand(application_id, command_id);
};
