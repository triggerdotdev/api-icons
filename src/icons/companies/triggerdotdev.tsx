import { forwardRef } from "react";
import { SVGProps } from "../../types";

export const TriggerDotDevDarkIcon = forwardRef<SVGSVGElement, SVGProps>(
  (props, ref) => (
    <svg
      viewBox="0 0 240 240"
      xmlns="http://www.w3.org/2000/svg"
      title="Trigger.dev"
      fill="#222326"
      {...props}
      ref={ref}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M71.5793 99.8656L120 16L240 223.849H0L48.4207 139.981L82.6726 159.756L68.5064 184.294H171.494L120 95.1068L105.834 119.644L71.5793 99.8656Z"
        fill="#0F172A"
      />
    </svg>
  )
);

export const TriggerDotDevLightIcon = forwardRef<SVGSVGElement, SVGProps>(
  (props, ref) => (
    <svg
      viewBox="0 0 240 240"
      xmlns="http://www.w3.org/2000/svg"
      title="Trigger.dev"
      fill="#fff"
      {...props}
      ref={ref}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M71.5793 99.8656L120 16L240 223.849H0L48.4207 139.981L82.6726 159.756L68.5064 184.294H171.494L120 95.1068L105.834 119.644L71.5793 99.8656Z"
        fill="url(#paint0_linear_4134_57437)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_4134_57437"
          x1="194.317"
          y1="223.849"
          x2="192.077"
          y2="77.1143"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#41FF54" />
          <stop offset="1" stop-color="#E7FF52" />
        </linearGradient>
      </defs>
    </svg>
  )
);
