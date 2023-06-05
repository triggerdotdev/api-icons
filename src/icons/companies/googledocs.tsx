import { forwardRef } from "react";
import { SVGProps } from "../../types";

export const GoogleDocsIcon = forwardRef<SVGSVGElement, SVGProps>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="3 3 26 26"
      preserveAspectRatio="xMidYMid"
      title="Google Docs"
      {...props}
      ref={ref}
    >
      <path
        d="M19.5,3.5v6h-7v13h-6V5.5a2.0059,2.0059,0,0,1,2-2Z"
        fill="#ffba00"
      />
      <polygon fill="#ea4335" points="19.5 3.5 19.5 9.5 25.5 9.5 19.5 3.5" />
      <rect fill="#4285f4" height="14" width="6" x="19.5" y="9.5" />
      <rect
        fill="#00ac47"
        height="7"
        transform="translate(41.5 9.5) rotate(90)"
        width="6"
        x="13"
        y="22"
      />
      <path
        d="M21.5,22.5h4a0,0,0,0,1,0,0v6a0,0,0,0,1,0,0h-6a0,0,0,0,1,0,0v-4A2,2,0,0,1,21.5,22.5Z"
        fill="#0066da"
        transform="translate(45 51) rotate(180)"
      />
      <path
        d="M6.5,22.5h6a0,0,0,0,1,0,0v6a0,0,0,0,1,0,0h-4a2,2,0,0,1-2-2v-4A0,0,0,0,1,6.5,22.5Z"
        fill="#188038"
      />
    </svg>
  )
);
