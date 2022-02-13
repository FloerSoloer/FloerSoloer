import type { SlashCommandBuilder } from "@discordjs/builders";

import ping from "./ping";

const commands: Record<string, SlashCommandBuilder> = {
  ping
};

export default commands;
