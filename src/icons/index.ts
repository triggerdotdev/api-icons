import { Icon } from "../types";

import { AirtableIcon } from "./AirtableIcon";
export { AirtableIcon };
import { AsanaIcon } from "./AsanaIcon";
export { AsanaIcon };

export const icons: Record<string, Icon> = {
  airtable: AirtableIcon,
  asana: AsanaIcon,
};
