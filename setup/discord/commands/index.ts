import type { SlashCommandBuilder } from "@discordjs/builders";

import ping from "./ping";
import starscape from "./starscape";

const commands: Record<string, SlashCommandBuilder> = {
  ping,
  starscape
};

export default commands;
