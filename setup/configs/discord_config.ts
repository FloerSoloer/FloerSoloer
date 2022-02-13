import type { DiscordConfig } from "./types";

import getEnvVar from "./getEnvVar";

const discord_config: DiscordConfig = {
  application_id: getEnvVar("DISCORD_APPLICATION_ID"),
  token: getEnvVar("DISCORD_TOKEN")
};

export default discord_config;
