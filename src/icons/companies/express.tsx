import { forwardRef } from "react";
import { SVGProps } from "../../types";

export const ExpressDarkIcon = forwardRef<SVGSVGElement, SVGProps>(
  (props, ref) => (
    <svg
      viewBox="0 0 240 240"
      xmlns="http://www.w3.org/2000/svg"
      title="Next.js"
      {...props}
      ref={ref}
    >
      <path
        d="M5.30323 209.022H130.442L126.747 214.325H0V25H125.686V30.3032H5.30323V113.034H118.527V118.337H5.30323V209.022Z"
        fill="black"
      />
      <path
        d="M228.863 78.0323H235.227L185.377 143.792L240 214.325H233.371L181.93 147.77L130.754 214.325H124.39L178.748 143.792L129.163 78.0323H136.057L181.93 139.815L228.863 78.0323Z"
        fill="black"
      />
    </svg>
  )
);

export const ExpressLightIcon = forwardRef<SVGSVGElement, SVGProps>(
  (props, ref) => (
    <svg
      viewBox="0 0 240 240"
      xmlns="http://www.w3.org/2000/svg"
      title="Next.js"
      {...props}
      ref={ref}
    >
      <path
        d="M5.30323 209.022H130.442L126.747 214.325H0V25H125.686V30.3032H5.30323V113.034H118.527V118.337H5.30323V209.022Z"
        fill="white"
      />
      <path
        d="M228.863 78.0323H235.227L185.377 143.792L240 214.325H233.371L181.93 147.77L130.754 214.325H124.39L178.748 143.792L129.163 78.0323H136.057L181.93 139.815L228.863 78.0323Z"
        fill="white"
      />
    </svg>
  )
);
