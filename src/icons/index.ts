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
export { TwitterIcon };
import { YouTubeIcon } from "./companies/youtube";
export { YouTubeIcon };
import { InstagramIcon } from "./companies/instagram";
export { InstagramIcon };
import { WhatsAppIcon } from "./companies/whatsapp";
export { WhatsAppIcon };
import { GoogleMapsIcon } from "./companies/googlemaps";
export { GoogleMapsIcon };
import { FlickrIcon } from "./companies/flickr";
export { FlickrIcon };
import { DropBoxIcon } from "./companies/dropbox";
export { DropBoxIcon };
import { LinkedInIcon } from "./companies/linkedin";
export { LinkedInIcon };
import { GiphyIcon } from "./companies/giphy";
export { GiphyIcon };
import { TrelloIcon } from "./companies/trello";
export { TrelloIcon };
import { MailchimpLightIcon, MailchimpDarkIcon } from "./companies/mailchimp";
export { MailchimpLightIcon, MailchimpDarkIcon };
import { MicrosoftAzureIcon } from "./companies/microsoftazure";
export { MicrosoftAzureIcon };
import { GoogleCloudPlatformIcon } from "./companies/googlecloudplatform";
export { GoogleCloudPlatformIcon };
import { AWSLightIcon, AWSDarkIcon } from "./companies/aws";
export { AWSLightIcon, AWSDarkIcon };
import { GoogleDriveIcon } from "./companies/googledrive";
export { GoogleDriveIcon };
import { SpotifyIcon } from "./companies/spotify";
export { SpotifyIcon };
import { AlgoliaIcon } from "./companies/algolia";
export { AlgoliaIcon };
import { AppsmithIcon } from "./companies/appsmith";
export { AppsmithIcon };
import { ClickUpIcon } from "./companies/clickup";
export { ClickUpIcon };
import { CodaIcon } from "./companies/coda";
export { CodaIcon };
import { InfisicalIcon } from "./companies/infisical";
export { InfisicalIcon };
import { LoopsIcon } from "./companies/loops";
export { LoopsIcon };
import { PlainIcon } from "./companies/plain";
export { PlainIcon };
import { SegmentIcon } from "./companies/segment";
export { SegmentIcon };
import { SupabaseIcon } from "./companies/supabase";
export { SupabaseIcon };
import { SvixIcon } from "./companies/svix";
export { SvixIcon };
import { AnthropicDarkIcon, AnthropicLightIcon } from "./companies/anthropic";
export { AnthropicDarkIcon, AnthropicLightIcon };
import { CalDotComDarkIcon, CalDotComLightIcon } from "./companies/caldotcom";
export { CalDotComDarkIcon, CalDotComLightIcon };
import { MuxLightIcon, MuxDarkIcon } from "./companies/mux";
export { MuxLightIcon, MuxDarkIcon };
import { PosthogDarkIcon, PosthogLightIcon } from "./companies/posthog";
export { PosthogDarkIcon, PosthogLightIcon };
import { ReplicateLightIcon, ReplicateDarkIcon } from "./companies/replicate";
export { ReplicateLightIcon, ReplicateDarkIcon };
import {
  TriggerDotDevDarkIcon,
  TriggerDotDevLightIcon,
} from "./companies/triggerdotdev";
export { TriggerDotDevDarkIcon, TriggerDotDevLightIcon };

import {
  CodeSandboxDarkIcon,
  CodeSandboxLightIcon,
} from "./companies/codesandbox";
export { CodeSandboxDarkIcon, CodeSandboxLightIcon };
import { MondayIcon } from "./companies/monday";
export { MondayIcon };
import { ResendIcon } from "./companies/resend";
import { NextjsLightIcon, NextjsDarkIcon } from "./companies/nextjs";
import { ReactIcon } from "./companies/react";
export { ReactIcon };
import { VercelDarkIcon, VercelLightIcon } from "./companies/vercel";
import { VSCodeIcon } from "./companies/vscode";
export { VSCodeIcon };
export { VercelDarkIcon, VercelLightIcon };
export { NextjsLightIcon, NextjsDarkIcon };
export { ResendIcon };

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
  caldotcom: {
    light: CalDotComLightIcon,
    dark: CalDotComDarkIcon,
    default: "dark",
  },
  coda: { all: CodaIcon },
  codesandbox: {
    light: CodeSandboxLightIcon,
    dark: CodeSandboxDarkIcon,
    default: "dark",
  },
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
  linkedin: { all: LinkedInIcon },
  loops: { all: LoopsIcon },
  mailchimp: {
    light: MailchimpLightIcon,
    dark: MailchimpDarkIcon,
    default: "dark",
  },
  mailgun: { all: MailgunIcon },
  monday: { all: MondayIcon },
  mux: { light: MuxLightIcon, dark: MuxDarkIcon, default: "dark" },
  microsoftazure: { all: MicrosoftAzureIcon },
  nextjs: { light: NextjsLightIcon, dark: NextjsDarkIcon, default: "dark" },
  notion: { all: NotionIcon },
  posthog: { light: PosthogLightIcon, dark: PosthogDarkIcon, default: "dark" },
  plain: { all: PlainIcon },
  openai: { light: OpenAILightIcon, dark: OpenAIDarkIcon, default: "dark" },
  react: { all: ReactIcon },
  reddit: { all: RedditIcon },
  replicate: {
    light: ReplicateLightIcon,
    dark: ReplicateDarkIcon,
    default: "dark",
  },
  resend: { all: ResendIcon },
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
  triggerdotdev: {
    light: TriggerDotDevLightIcon,
    dark: TriggerDotDevDarkIcon,
    default: "dark",
  },
  twilio: { all: TwilioIcon },
  twitter: { all: TwitterIcon },
  vercel: { dark: VercelDarkIcon, light: VercelLightIcon, default: "dark" },
  vscode: { all: VSCodeIcon },
  whatsapp: { all: WhatsAppIcon },
  youtube: { all: YouTubeIcon },
};
