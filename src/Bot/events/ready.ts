import type Bot from "Bot";

import Event from "Bot/Event";

/**
 * @see https://discord.js.org/#/docs/discord.js/stable/class/Client?scrollTo=e-ready
 */
export default new Event(async (bot: Bot) => bot.logger.info(`${bot.user.tag} is online.`), "once");
