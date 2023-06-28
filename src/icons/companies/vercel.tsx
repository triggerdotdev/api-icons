import { forwardRef } from "react";
import { SVGProps } from "../../types";

export const VercelDarkIcon = forwardRef<SVGSVGElement, SVGProps>(
  (props, ref) => (
    <svg
      viewBox="0 0 240 240"
      xmlns="http://www.w3.org/2000/svg"
      title="Vercel"
      {...props}
      ref={ref}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M120 22.5L232.5 217.5H7.5L120 22.5Z"
        fill="black"
      />
    </svg>
  )
);

export const VercelLightIcon = forwardRef<SVGSVGElement, SVGProps>(
  (props, ref) => (
    <svg
      viewBox="0 0 240 240"
      xmlns="http://www.w3.org/2000/svg"
      title="Vercel"
      {...props}
      ref={ref}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M120 22.5L232.5 217.5H7.5L120 22.5Z"
        fill="white"
      />
    </svg>
  )
);
