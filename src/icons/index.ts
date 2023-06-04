import { Icon } from "../types";

import { AirtableIcon } from "./companies/airtable";
export { AirtableIcon };
import { AsanaIcon } from "./companies/asana";
export { AsanaIcon };
import { GitHubDarkIcon, GitHubLightIcon } from "./companies/github";
export { GitHubDarkIcon, GitHubLightIcon };
import { NotionIcon } from "./companies/notion";
export { NotionIcon };
import { SlackIcon } from "./companies/slack";
export { SlackIcon };

export const icons: Record<string, Icon> = {
  airtable: { all: AirtableIcon },
  asana: { all: AsanaIcon },
  github: { light: GitHubLightIcon, dark: GitHubDarkIcon, default: "dark" },
  notion: { all: NotionIcon },
  slack: { all: SlackIcon },
};
