import type { Application, Client } from "discord.js";

export type DiscordConfig = {
  application_id: Application["id"];
  token: Exclude<Client["token"], null>;
};
