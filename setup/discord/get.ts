import rest from "discord/helpers/rest";
import { applicationCommand } from "discord/helpers/routes";

(async () => {
  const command = await rest.get(applicationCommand());
  console.log(command);
})();
