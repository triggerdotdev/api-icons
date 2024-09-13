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
      <defs>
        <linearGradient id="supabase-gradient1" gradientTransform="rotate(45)">
          <stop offset="0%" stopColor="#249361" />
          <stop offset="100%" stopColor="#3ECF8E" />
        </linearGradient>
        <linearGradient id="supabase-gradient2" gradientTransform="rotate(45)">
          <stop offset="0%" stopColor="#000000" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M139.546 236.013C133.414 243.734 120.983 239.503 120.835 229.645L118.675 85.4478H215.633C233.194 85.4478 242.989 105.732 232.069 119.485L139.546 236.013Z"
        fill="url(#supabase-gradient1)"
      />
      <path
        d="M139.546 236.013C133.414 243.734 120.983 239.503 120.835 229.645L118.675 85.4478H215.633C233.194 85.4478 242.989 105.732 232.069 119.485L139.546 236.013Z"
        fill="url(#supabase-gradient2)"
        fillOpacity="0.2"
      />
      <path
        d="M100.114 3.98779C106.245 -3.73415 118.677 0.49692 118.824 10.3559L119.771 154.552H24.0265C6.46435 154.552 -3.3304 134.269 7.59028 120.515L100.114 3.98779Z"
        fill="#3ECF8E"
      />
    </svg>
  )
);
