import { forwardRef } from "react";
import { SVGProps } from "../../types";

export const PagerDutyIcon = forwardRef<SVGSVGElement, SVGProps>(
  (props, ref) => (
    <svg
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      title="PagerDuty"
      {...props}
      ref={ref}
    >
      <path
        d="M169.35 11.8C150.55 1.64 137.39 0 106.53 0H37V145.5H106.26C133.69 145.5 154.26 143.86 172.36 131.8C192.11 118.77 202.4 96.96 202.4 71.73C202.4 44.57 189.78 22.78 169.35 11.8ZM114.35 115.06H72.25V31.13L112.02 30.86C148.22 30.58 166.32 43.2 166.32 72.14C166.32 103.27 143.84 115.06 114.35 115.06ZM37 176.1H72.25V240H37V176.1Z"
        fill="#14C24A"
      />
    </svg>
  )
);
