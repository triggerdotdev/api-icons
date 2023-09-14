import { forwardRef } from "react";
import { SVGProps } from "../../types";

export const XDarkIcon = forwardRef<SVGSVGElement, SVGProps>((props, ref) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 240 240"
    title="X"
    {...props}
    ref={ref}
  >
    <path
      d="M0.583996 8L93.2452 131.895L0 232.627H20.9874L102.625 144.432L168.584 232.627H240L142.123 101.765L228.916 8H207.929L132.747 89.223L72 8H0.583996ZM31.4469 23.4576H64.2551L209.133 217.169H176.325L31.4469 23.4576Z"
      fill="black"
    />
  </svg>
));

export const XLightIcon = forwardRef<SVGSVGElement, SVGProps>((props, ref) => (
  <svg
    viewBox="0 0 240 240"
    xmlns="http://www.w3.org/2000/svg"
    title="X"
    {...props}
    ref={ref}
  >
    <path
      d="M0.583996 8L93.2452 131.895L0 232.627H20.9874L102.625 144.432L168.584 232.627H240L142.123 101.765L228.916 8H207.929L132.747 89.223L72 8H0.583996ZM31.4469 23.4576H64.2551L209.133 217.169H176.325L31.4469 23.4576Z"
      fill="white"
    />
  </svg>
));
