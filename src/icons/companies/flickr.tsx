import { forwardRef } from "react";
import { SVGProps } from "../../types";

export const FlickrIcon = forwardRef<SVGSVGElement, SVGProps>((props, ref) => (
  <svg
    viewBox="0 0 240 240"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    title="Flickr"
    {...props}
    ref={ref}
  >
    <g>
      <path
        d="M128.659 119.998C128.659 150.917 153.587 175.988 184.335 175.988C215.077 175.988 240 150.917 240 119.998C240 89.0787 215.077 64.0127 184.335 64.0127C153.587 64.0127 128.659 89.0787 128.659 119.998Z"
        fill="#FF0084"
      />
      <path
        d="M0 119.998C0 150.917 24.9227 175.988 55.6703 175.988C86.4179 175.988 111.341 150.917 111.341 119.998C111.341 89.0787 86.4179 64.0127 55.6703 64.0127C24.9227 64.0127 0 89.0787 0 119.998Z"
        fill="#0063DC"
      />
    </g>
  </svg>
));
