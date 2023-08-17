import { forwardRef } from "react";
import { SVGProps } from "../../types";

export const AtlassianIcon = forwardRef<SVGSVGElement, SVGProps>(
  (props, ref) => (
    <svg
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      title="Atlassian"
      {...props}
      ref={ref}
    >
      <g clipPath="url(#clip0_5074_41506)">
        <path
          d="M71.2218 110.835C67.6327 107.001 62.0403 107.218 59.601 112.097L0.743465 229.814C-0.347685 231.995 -0.231467 234.586 1.0506 236.661C2.33268 238.735 4.59772 239.998 7.0366 239.998H89.0041C91.6871 240.06 94.1546 238.535 95.2985 236.107C112.973 199.564 102.265 144.002 71.2218 110.835Z"
          fill="url(#paint0_linear_5074_41506)"
        />
        <path
          d="M114.413 3.76875C81.493 55.9261 83.6649 113.692 105.348 157.06L144.872 236.108C146.064 238.491 148.5 239.997 151.165 239.997H233.131C235.57 239.997 237.835 238.734 239.117 236.66C240.399 234.585 240.516 231.994 239.424 229.813C239.424 229.813 129.155 9.24264 126.381 3.72397C123.901 -1.2165 117.601 -1.28367 114.413 3.76875Z"
          fill="#2681FF"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_5074_41506"
          x1="10348.8"
          y1="2191.12"
          x2="2096.92"
          y2="11055.1"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0052CC" />
          <stop offset="0.923" stopColor="#2684FF" />
        </linearGradient>
        <clipPath id="clip0_5074_41506">
          <rect width="240" height="240" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
);
