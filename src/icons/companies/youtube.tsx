import { forwardRef } from "react";
import { SVGProps } from "../../types";

export const YouTubeIcon = forwardRef<SVGSVGElement, SVGProps>((props, ref) => (
  <svg
    viewBox="0 0 240 240"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    title="YouTube"
    {...props}
    ref={ref}
  >
    <g clip-path="url(#clip0_4024_58293)">
      <path
        d="M235.002 62.2364C232.236 51.9039 224.116 43.784 213.783 41.0181C195.054 36 120 36 120 36C120 36 44.9457 36 26.2364 41.0181C15.9039 43.784 7.784 51.9039 5.01811 62.2364C0 80.9457 0 120.004 0 120.004C0 120.004 0 159.062 5.01811 177.771C7.784 188.104 15.9039 196.224 26.2364 198.99C44.9457 204.008 120 204.008 120 204.008C120 204.008 195.054 204.008 213.764 198.99C224.096 196.224 232.216 188.104 234.982 177.771C240 159.062 240 120.004 240 120.004C240 120.004 240 80.9457 234.982 62.2364H235.002Z"
        fill="#FF0000"
      />
      <path
        d="M95.9951 156L158.366 120.004L95.9951 84.0078V156Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_4024_58293">
        <rect
          width="240"
          height="168.008"
          fill="white"
          transform="translate(0 36)"
        />
      </clipPath>
    </defs>
  </svg>
));
