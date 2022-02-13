import { REST } from "@discordjs/rest";

import { discord_config } from "configs";

const rest = new REST({ version: "9" }).setToken(discord_config.token);

export default rest;
