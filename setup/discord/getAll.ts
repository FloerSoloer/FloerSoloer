import rest from "discord/helpers/rest";
import { applicationCommands } from "discord/helpers/routes";

(async () => {
  const commands = await rest.get(applicationCommands());
  console.log(commands);
})();
