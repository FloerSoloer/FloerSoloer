import Event from "Bot/Event";

/**
 * @see https://discord.js.org/#/docs/discord.js/stable/class/Client?scrollTo=e-warn
 */
export default new Event(async (bot, info) => bot.logger.warn(info), "on");
