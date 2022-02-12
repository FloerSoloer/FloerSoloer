import Event from "Bot/Event";

/**
 * @see https://discord.js.org/#/docs/discord.js/stable/class/Client?scrollTo=e-error
 */
export default new Event(async (bot, err) => bot.logger.error(err), "on");
