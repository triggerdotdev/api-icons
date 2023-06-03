import { forwardRef } from "react";
import { SVGProps } from "../types";
import { icons } from "./Icons";

type ApiIconProps = SVGProps & {
  name: keyof typeof icons;
};

export const ApiIcon = forwardRef<SVGSVGElement, ApiIconProps>(
  ({ name, ...props }, ref) => {
    const Icon = icons[name];
    return <Icon {...props} ref={ref} />;
  }
);
