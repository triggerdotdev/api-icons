import { forwardRef } from "react";
import { SVGProps } from "../types";

export const AsanaIcon = forwardRef<SVGSVGElement, SVGProps>((props, ref) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    ref={ref}
  >
    <path
      d="M78.2522 52.6834C66.2399 52.6834 56.5037 62.42 56.5037 74.4312C56.5037 86.4432 66.2399 96.1805 78.2522 96.1805C90.2631 96.1805 100 86.4432 100 74.4312C100 62.42 90.2631 52.6834 78.2522 52.6834ZM21.7482 52.685C9.73733 52.685 0 62.42 0 74.4323C0 86.4432 9.73733 96.1805 21.7482 96.1805C33.7597 96.1805 43.4974 86.4432 43.4974 74.4323C43.4974 62.42 33.7597 52.685 21.7482 52.685ZM71.7476 25.4978C71.7476 37.509 62.0114 47.2478 50.0006 47.2478C37.9886 47.2478 28.252 37.509 28.252 25.4978C28.252 13.4873 37.9886 3.75 50.0006 3.75C62.0114 3.75 71.7476 13.4873 71.7476 25.4978Z"
      fill="url(#paint0_radial_1_2)"
    />
    <defs>
      <radialGradient
        id="paint0_radial_1_2"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(5000 5055.28) scale(6626.33 6124.75)"
      >
        <stop stopColor="#FFB900" />
        <stop offset="0.6" stopColor="#F95D8F" />
        <stop offset="0.9991" stopColor="#F95353" />
      </radialGradient>
    </defs>
  </svg>
));
