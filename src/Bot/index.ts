import { Client, CommandInteraction, Intents, Options } from "discord.js";

import type Command from "Bot/Command";
import type Event from "Bot/Event";

type CommandsRecord = Record<string, Command>;
type EventsRecord = Record<string, Event>;

export default class Bot extends Client<true> {
  readonly logger = console;
  #commands: CommandsRecord;

  constructor(commands: CommandsRecord, events: EventsRecord) {
    super({
      intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_MESSAGE_TYPING,
        Intents.FLAGS.GUILD_VOICE_STATES
      ],
      makeCache: Options.cacheWithLimits()
    });

    this.#commands = commands;
    for (const [name, { listener, on_or_once }] of Object.entries(events))
      this[on_or_once](name, (...args) => listener(this, ...args));

    this.login();
  }

  readonly executeCommand = (interaction: CommandInteraction) => {
    const { commandName } = interaction;
    const command = this.#commands[commandName];
    if (!command) throw Error(`Command ${commandName} not implemented`);

    return command.execute(this, interaction);
  };
}
