import { Icon } from "../types";

import { AirtableIcon } from "./companies/airtable";
export { AirtableIcon };
import { AsanaIcon } from "./companies/asana";
export { AsanaIcon };
import { GitHubDarkIcon, GitHubLightIcon } from "./companies/github";
export { GitHubDarkIcon, GitHubLightIcon };
import { NotionIcon } from "./companies/notion";
export { NotionIcon };
import { SendGridIcon } from "./companies/sendgrid";
export { SendGridIcon };
import { SlackIcon } from "./companies/slack";
export { SlackIcon };
import { StripeIcon } from "./companies/stripe";
export { StripeIcon };

export const icons: Record<string, Icon> = {
  airtable: { all: AirtableIcon },
  asana: { all: AsanaIcon },
  github: { light: GitHubLightIcon, dark: GitHubDarkIcon, default: "dark" },
  notion: { all: NotionIcon },
  sendgrid: { all: SendGridIcon },
  slack: { all: SlackIcon },
  stripe: { all: StripeIcon },
};
