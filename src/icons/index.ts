import { Icon } from "../types";

import { AirtableIcon } from "./AirtableIcon";
export { AirtableIcon };
import { AsanaIcon } from "./AsanaIcon";
export { AsanaIcon };
import { GitHubLightIcon } from "./GitHubLightIcon";
export { GitHubLightIcon };
import { GitHubDarkIcon } from "./GitHubDarkIcon";
export { GitHubDarkIcon };
import { SlackIcon } from "./Slack";
export { SlackIcon };

export const icons: Record<string, Icon> = {
  airtable: { all: AirtableIcon },
  asana: { all: AsanaIcon },
  github: { light: GitHubLightIcon, dark: GitHubDarkIcon, default: "dark" },
  slack: { all: SlackIcon },
};
