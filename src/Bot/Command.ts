import type Bot from "Bot";
import type { CommandInteraction } from "discord.js";

type Execute = (bot: Bot, interaction: CommandInteraction, ...args: any[]) => Promise<any>;

export default class Command {
  readonly execute: Execute;

  constructor(execute: Execute) {
    this.execute = execute;
  }
}
