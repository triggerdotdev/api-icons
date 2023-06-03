import { forwardRef } from "react";
import { SVGProps } from "../types";
import { icons } from "../apis";

type ApiIconProps = SVGProps & {
  name: string;
};

export function hasIcon(name: string): boolean {
  return icons[name] !== undefined;
}

export const ApiIcon = forwardRef<SVGSVGElement, ApiIconProps>(
  ({ name, ...props }, ref) => {
    if (!hasIcon(name)) {
      console.error(`Icon not found: ${name}`);
      return null;
    }

    const Icon = icons[name];
    return <Icon {...props} ref={ref} />;
  }
);
