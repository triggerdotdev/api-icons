import { forwardRef } from "react";
import { SVGProps } from "../../types";

export const SendGridIcon = forwardRef<SVGSVGElement, SVGProps>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      version="1.1"
      preserveAspectRatio="xMidYMid"
      title="SendGrid"
      {...props}
      ref={ref}
    >
      <g>
        <path
          d="M256.000405,0 L256.000405,170.666936 L170.666936,170.666936 L170.666936,255.996382 L0.00201096905,255.996382 L0.002,170.666 L0,170.666936 L0,85.3314569 L85.3334681,85.3314569 L85.3334681,0 L256.000405,0 Z"
          fill="#9DD6E3"
        ></path>
        <polygon
          fill="#3F72AB"
          points="0.00201096905 255.996382 85.3354791 255.996382 85.3354791 170.662915 0.00201096905 170.662915"
        ></polygon>
        <polygon
          fill="#00A9D1"
          points="170.666936 170.666936 256.000405 170.666936 256.000405 85.3314569 170.666936 85.3314569"
        ></polygon>
        <polygon
          fill="#00A9D1"
          points="85.3334681 85.3334679 170.666936 85.3334679 170.666936 0 85.3334681 0"
        ></polygon>
        <polygon
          fill="#2191C4"
          points="85.3334681 170.664925 170.666936 170.664925 170.666936 85.3314569 85.3334681 85.3314569"
        ></polygon>
        <polygon
          fill="#3F72AB"
          points="170.666936 85.3334679 256.000405 85.3334679 256.000405 0 170.666936 0"
        ></polygon>
      </g>
    </svg>
  )
);
