import rest from "./helpers/rest";
import { applicationCommand, applicationCommands } from "./helpers/routes";

(async () => {
  const commands = <Record<"id", string>[]>await rest.get(applicationCommands());
  await Promise.allSettled(commands.map(({ id }) => rest.delete(applicationCommand(id))));
})();
