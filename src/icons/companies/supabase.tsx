import { forwardRef } from "react";
import { SVGProps } from "../../types";

export const SupabaseIcon = forwardRef<SVGSVGElement, SVGProps>(
  (props, ref) => (
    <svg
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      title="Supabase"
      {...props}
      ref={ref}
    >
      <path
        d="M139.546 236.013C133.414 243.734 120.983 239.503 120.835 229.645L118.675 85.4478H215.633C233.194 85.4478 242.989 105.732 232.069 119.485L139.546 236.013Z"
        fill="url(#paint0_linear_4117_57400)"
      />
      <path
        d="M139.546 236.013C133.414 243.734 120.983 239.503 120.835 229.645L118.675 85.4478H215.633C233.194 85.4478 242.989 105.732 232.069 119.485L139.546 236.013Z"
        fill="url(#paint1_linear_4117_57400)"
        fillOpacity="0.2"
      />
      <path
        d="M100.114 3.98779C106.245 -3.73415 118.677 0.49692 118.824 10.3559L119.771 154.552H24.0265C6.46435 154.552 -3.3304 134.269 7.59028 120.515L100.114 3.98779Z"
        fill="#3ECF8E"
      />
      <defs>
        <linearGradient
          id="paint0_linear_4117_57400"
          x1="118.675"
          y1="117.42"
          x2="204.848"
          y2="153.561"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#249361" />
          <stop offset="1" stopColor="#3ECF8E" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_4117_57400"
          x1="80.4704"
          y1="65.1111"
          x2="119.77"
          y2="139.09"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
);
