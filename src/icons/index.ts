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
import { GoogleDriveIcon } from "./companies/googledrive";
import { SpotifyIcon } from "./companies/spotify";
import { AlgoliaIcon } from "./companies/algolia";
import { AppsmithIcon } from "./companies/appsmith";
import { ClickUpIcon } from "./companies/clickup";
import { CodaIcon } from "./companies/coda";
import { InfisicalIcon } from "./companies/infisical";
import { LoopsIcon } from "./companies/loops";
import { PlainIcon } from "./companies/plain";
import { SegmentIcon } from "./companies/segment";
import { SupabaseIcon } from "./companies/supabase";
import { SvixIcon } from "./companies/svix";
import { AnthropicDarkIcon, AnthropicLightIcon } from "./companies/anthropic";
import { CalDotComDarkIcon, CalDotComLightIcon } from "./companies/caldotcom";
import { MuxLightIcon, MuxDarkIcon } from "./companies/mux";
import { PosthogDarkIcon, PosthogLightIcon } from "./companies/posthog";
export { TwitterIcon };

export const icons: Record<string, Icon> = {
  airtable: { all: AirtableIcon },
  algolia: { all: AlgoliaIcon },
  appsmith: { all: AppsmithIcon },
  anthropic: {
    light: AnthropicLightIcon,
    dark: AnthropicDarkIcon,
    default: "dark",
  },
  asana: { all: AsanaIcon },
  aws: { light: AWSLightIcon, dark: AWSDarkIcon, default: "dark" },
  cal: { light: CalDotComLightIcon, dark: CalDotComDarkIcon, default: "dark" },
  coda: { all: CodaIcon },
  clickup: { all: ClickUpIcon },
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
  googledrive: { all: GoogleDriveIcon },
  googlemaps: { all: GoogleMapsIcon },
  hubspot: { all: HubspotIcon },
  infisical: { all: InfisicalIcon },
  instagram: { all: InstagramIcon },
  linear: { light: LinearLightIcon, dark: LinearDarkIcon, default: "light" },
  linkedin: { all: LinkedInLogo },
  loops: { all: LoopsIcon },
  mailchimp: {
    light: MailchimpLightIcon,
    dark: MailchimpDarkIcon,
    default: "dark",
  },
  mailgun: { all: MailgunIcon },
  mux: { light: MuxLightIcon, dark: MuxDarkIcon, default: "dark" },
  microsoftazure: { all: MicrosoftAzureIcon },
  notion: { all: NotionIcon },
  posthog: { light: PosthogLightIcon, dark: PosthogDarkIcon, default: "dark" },
  plain: { all: PlainIcon },
  openai: { light: OpenAILightIcon, dark: OpenAIDarkIcon, default: "dark" },
  reddit: { all: RedditIcon },
  salesforce: { all: SalesforceIcon },
  segment: { all: SegmentIcon },
  sendgrid: { all: SendGridIcon },
  spotify: { all: SpotifyIcon },
  shopify: { all: ShopifyIcon },
  slack: { all: SlackIcon },
  stripe: { all: StripeIcon },
  supabase: { all: SupabaseIcon },
  svix: { all: SvixIcon },
  trello: { all: TrelloIcon },
  twilio: { all: TwilioIcon },
  twitter: { all: TwitterIcon },
  whatsapp: { all: WhatsAppIcon },
  youtube: { all: YouTubeIcon },
};
