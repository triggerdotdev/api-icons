import { forwardRef } from "react";
import { SVGProps } from "../../types";

export const SquareDarkIcon = forwardRef<SVGSVGElement, SVGProps>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 240 240"
      title="Square"
      {...props}
      ref={ref}
    >
      <g clipPath="url(#clip0_7084_453)">
        <path
          d="M68.3428 68.8789H171.66V172.196H68.3428V68.8789Z"
          fill="black"
        />
        <path
          d="M240.538 206.634V34.439C240.538 15.4459 225.092 0 206.099 0H33.9038C14.9107 0 -0.535156 15.4459 -0.535156 34.439V206.634C-0.535156 225.627 14.9107 241.073 33.9038 241.073H206.099C225.092 241.073 240.538 225.627 240.538 206.634ZM33.9038 34.439H206.099L206.133 206.634H33.9038V34.439Z"
          fill="black"
        />
      </g>
    </svg>
  )
);

export const SquareLightIcon = forwardRef<SVGSVGElement, SVGProps>(
  (props, ref) => (
    <svg
      viewBox="0 0 240 240"
      xmlns="http://www.w3.org/2000/svg"
      title="Square"
      {...props}
      ref={ref}
    >
      <g clipPath="url(#clip0_7084_38625)">
        <path d="M68.3428 68.998H171.66V172.315H68.3428V68.998Z" fill="white" />
        <path
          d="M240.538 206.753V34.5581C240.538 15.565 225.092 0.119141 206.099 0.119141H33.9038C14.9107 0.119141 -0.535156 15.565 -0.535156 34.5581V206.753C-0.535156 225.746 14.9107 241.192 33.9038 241.192H206.099C225.092 241.192 240.538 225.746 240.538 206.753ZM33.9038 34.5581H206.099L206.133 206.753H33.9038V34.5581Z"
          fill="white"
        />
      </g>
    </svg>
  )
);
