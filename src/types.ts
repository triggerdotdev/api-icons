import { ComponentType } from "react";

export type SVGProps = React.HTMLProps<SVGSVGElement>;
export type IconComponent = ComponentType<any>;
export type IconVariant = "light" | "dark";
export type Icon =
  | {
      all: IconComponent;
    }
  | {
      light: IconComponent;
      dark: IconComponent;
      default: IconVariant;
    };

export type IconSet = Record<string, Icon>;
