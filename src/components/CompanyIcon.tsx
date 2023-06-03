import { forwardRef } from "react";
import { IconVariant, SVGProps } from "../types";
import { icons } from "../icons";

type IconProps = SVGProps & {
  /** The name of the icon to render. */
  name: string;
  /** Will return a light or dark icon, if there is a variant. Otherwise it will return the regular one. */
  variant?: IconVariant;
};

/** Tells you if an icon existings for the name. If you want variants it will tell you if they exist */
export function hasIcon(name: string, wantVariants = false): boolean {
  if (icons[name] === undefined) {
    return false;
  }

  if (!wantVariants) return true;

  if ("all" in icons[name]) {
    return false;
  }

  return true;
}

/** Renders the specified icon
 * @param {string} name - The name of the icon to render.
 * @param {IconVariant} variant - Will return a light or dark icon, if there is a variant. Otherwise it will return the regular one.
 */
export const CompanyIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ name, variant, ...props }, ref) => {
    if (!hasIcon(name)) {
      console.error(`Icon not found: ${name}`);
      return null;
    }

    const icon = icons[name];

    //if there's no only one icon, we render it
    if ("all" in icon) {
      const All = icon.all;
      return <All {...props} ref={ref} />;
    }

    const variantToRender = variant ?? icon.default;

    switch (variantToRender) {
      case "light": {
        const Light = icon.light;
        return <Light {...props} ref={ref} />;
      }
      case "dark": {
        const Dark = icon.dark;
        return <Dark {...props} ref={ref} />;
      }
      default: {
        throw new Error(`Invalid variant ${variantToRender}`);
      }
    }
  }
);
