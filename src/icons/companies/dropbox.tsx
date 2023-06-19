import { forwardRef } from "react";
import { SVGProps } from "../../types";

export const DropBoxIcon = forwardRef<SVGSVGElement, SVGProps>((props, ref) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 240 240"
    preserveAspectRatio="xMidYMid"
    title="Dropbox"
    {...props}
    ref={ref}
  >
    <path
      d="M59.9998 17.623L0 56.1135L59.9998 94.0378L120 56.1135L59.9998 17.623ZM179.999 17.623L120 56.1135L179.999 94.0378L239.999 56.1135L179.999 17.623ZM0 132.528L59.9998 171.019L120 132.528L59.9998 94.0378L0 132.528ZM179.999 94.0378L120 132.528L179.999 171.019L239.999 132.528L179.999 94.0378ZM59.9998 183.471L120 221.962L179.999 183.471L120 145.547L59.9998 183.471Z"
      fill="#0062FF"
    />
  </svg>
));
