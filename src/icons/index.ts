import { Icon } from "../types";

import { AirtableIcon } from "./companies/airtable";
export { AirtableIcon };
import { AsanaIcon } from "./companies/asana";
export { AsanaIcon };
import { DiscordIcon } from "./companies/discord";
export { DiscordIcon };
import { FacebookIcon } from "./companies/facebook";
export { FacebookIcon };
import { GitHubDarkIcon, GitHubLightIcon } from "./companies/github";
export { GitHubDarkIcon, GitHubLightIcon };
import { GMailIcon } from "./companies/gmail";
export { GMailIcon };
import { GoogleCalendarIcon } from "./companies/googlecalendar";
export { GoogleCalendarIcon };
import { GoogleDocsIcon } from "./companies/googledocs";
export { GoogleDocsIcon };
import { GoogleIcon } from "./companies/google";
export { GoogleIcon };
import { HubspotIcon } from "./companies/hubspot";
export { HubspotIcon };
import { LinearDarkIcon, LinearLightIcon } from "./companies/linear";
export { LinearDarkIcon, LinearLightIcon };
import { MailgunIcon } from "./companies/mailgun";
export { MailgunIcon };
import { NotionIcon } from "./companies/notion";
export { NotionIcon };
import { OpenAIDarkIcon, OpenAILightIcon } from "./companies/openai";
export { OpenAIDarkIcon, OpenAILightIcon };
import { RedditIcon } from "./companies/reddit";
export { RedditIcon };
import { SalesforceIcon } from "./companies/salesforce";
export { SalesforceIcon };
import { SendGridIcon } from "./companies/sendgrid";
export { SendGridIcon };
import { ShopifyIcon } from "./companies/shopify";
export { ShopifyIcon };
import { SlackIcon } from "./companies/slack";
export { SlackIcon };
import { StripeIcon } from "./companies/stripe";
export { StripeIcon };
import { TwilioIcon } from "./companies/twilio";
export { TwilioIcon };
import { TwitterIcon } from "./companies/twitter";
import { YouTubeIcon } from "./companies/youtube";
import { InstagramIcon } from "./companies/instagram";
import { WhatsAppIcon } from "./companies/whatsapp";
import { GoogleMapsIcon } from "./companies/googlemaps";
import { FlickrIcon } from "./companies/flickr";
import { DropBoxIcon } from "./companies/dropbox";
import { LinkedInLogo } from "./companies/linkedin";
import { GiphyIcon } from "./companies/giphy";
import { TrelloIcon } from "./companies/trello";
import { MailchimpLightIcon, MailchimpDarkIcon } from "./companies/mailchimp";
import { MicrosoftAzureIcon } from "./companies/microsoftazure";
import { GoogleCloudPlatformIcon } from "./companies/googlecloudplatform";
import { AWSLightIcon, AWSDarkIcon } from "./companies/aws";
export { TwitterIcon };

export const icons: Record<string, Icon> = {
  airtable: { all: AirtableIcon },
  asana: { all: AsanaIcon },
  aws: { light: AWSLightIcon, dark: AWSDarkIcon, default: "dark" },
  discord: { all: DiscordIcon },
  dropbox: { all: DropBoxIcon },
  facebook: { all: FacebookIcon },
  flickr: { all: FlickrIcon },
  github: { light: GitHubLightIcon, dark: GitHubDarkIcon, default: "dark" },
  giphy: { all: GiphyIcon },
  gmail: { all: GMailIcon },
  google: { all: GoogleIcon },
  googlecalendar: { all: GoogleCalendarIcon },
  googlecloudplatform: { all: GoogleCloudPlatformIcon },
  googledocs: { all: GoogleDocsIcon },
  googlemaps: { all: GoogleMapsIcon },
  hubspot: { all: HubspotIcon },
  instagram: { all: InstagramIcon },
  linear: { light: LinearLightIcon, dark: LinearDarkIcon, default: "light" },
  linkedin: { all: LinkedInLogo },
  mailchimp: {
    light: MailchimpLightIcon,
    dark: MailchimpDarkIcon,
    default: "dark",
  },
  mailgun: { all: MailgunIcon },
  microsoftazure: { all: MicrosoftAzureIcon },
  notion: { all: NotionIcon },
  openai: { light: OpenAILightIcon, dark: OpenAIDarkIcon, default: "dark" },
  reddit: { all: RedditIcon },
  salesforce: { all: SalesforceIcon },
  sendgrid: { all: SendGridIcon },
  shopify: { all: ShopifyIcon },
  slack: { all: SlackIcon },
  stripe: { all: StripeIcon },
  trello: { all: TrelloIcon },
  twilio: { all: TwilioIcon },
  twitter: { all: TwitterIcon },
  whatsapp: { all: WhatsAppIcon },
  youtube: { all: YouTubeIcon },
};
