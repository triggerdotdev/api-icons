import { ComponentType } from "react";
import { AirtableIcon } from "../apis/AirtableIcon";

type Icon = ComponentType<any>;

export const icons: Record<string, Icon> = {
  airtable: AirtableIcon,
};
