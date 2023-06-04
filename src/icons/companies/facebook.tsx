import { forwardRef } from "react";
import { SVGProps } from "../../types";

export const FacebookIcon = forwardRef<SVGSVGElement, SVGProps>(
  (props, ref) => (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      title="Facebook"
      {...props}
      ref={ref}
    >
      <g clipPath="url(#clip0_3_47)">
        <path
          d="M41.75 99.5C18 95.25 0 74.75 0 50C0 22.5 22.5 0 50 0C77.5 0 100 22.5 100 50C100 74.75 82 95.25 58.25 99.5L55.5 97.25H44.5L41.75 99.5Z"
          fill="url(#paint0_linear_3_47)"
        />
        <path
          d="M69.5 64L71.75 50H58.5V40.25C58.5 36.25 60 33.25 66 33.25H72.5V20.5C69 20 65 19.5 61.5 19.5C50 19.5 42 26.5 42 39V50H29.5V64H42V99.25C44.75 99.75 47.5 100 50.25 100C53 100 55.75 99.75 58.5 99.25V64H69.5Z"
          fill="white"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_3_47"
          x1="50.0025"
          y1="96.5223"
          x2="50.0025"
          y2="-0.0184194"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0062E0" />
          <stop offset="1" stopColor="#19AFFF" />
        </linearGradient>
        <clipPath id="clip0_3_47">
          <rect width="100" height="100" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
);
