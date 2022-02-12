import type Bot from "Bot";

type Listener = (bot: Bot, ...args: any) => Promise<any>;

export default class Event {
  readonly listener: Listener;
  readonly on_or_once: "on" | "once";

  constructor(listener: Listener, on_or_once: Event["on_or_once"] = "on") {
    this.listener = listener;
    this.on_or_once = on_or_once;
  }
}
