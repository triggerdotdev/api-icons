import { Icon } from "../types";

import { AirtableIcon } from "./companies/airtable";
export { AirtableIcon };
import { AsanaIcon } from "./companies/asana";
export { AsanaIcon };
import { GitHubDarkIcon, GitHubLightIcon } from "./companies/github";
export { GitHubDarkIcon, GitHubLightIcon };
import { SlackIcon } from "./companies/Slack";
export { SlackIcon };

export const icons: Record<string, Icon> = {
  airtable: { all: AirtableIcon },
  asana: { all: AsanaIcon },
  github: { light: GitHubLightIcon, dark: GitHubDarkIcon, default: "dark" },
  slack: { all: SlackIcon },
};
