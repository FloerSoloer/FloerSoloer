import { SlashCommandBuilder } from "@discordjs/builders";

const ping = new SlashCommandBuilder().setName("ping").setDescription("Pong!");

export default ping;
