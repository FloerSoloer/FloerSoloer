import type { Interaction } from "discord.js";

import Event from "Bot/Event";

/**
 * @see https://discord.js.org/#/docs/discord.js/stable/class/Client?scrollTo=e-interactionCreate
 */
export default new Event(async (bot, interaction: Interaction) => {
  if (interaction.isCommand())
    return bot.executeCommand(interaction).catch((err) => bot.logger.error(err));
});
