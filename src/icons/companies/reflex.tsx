import { forwardRef } from "react";
import { SVGProps } from "../../types";

export const ReflexDarkIcon = forwardRef<SVGSVGElement, SVGProps>(
  (props, ref) => (
    <svg
      viewBox="0 0 240 240"
      xmlns="http://www.w3.org/2000/svg"
      title="Reflex"
      {...props}
      ref={ref}
    >
      <path
        d="M24 240V0H216V96H168V48H72V96H168V144H72V240H24ZM168 240V144H216V240H168Z"
        fill="#110F1F"
      />
    </svg>
  )
);

export const ReflexLightIcon = forwardRef<SVGSVGElement, SVGProps>(
  (props, ref) => (
    <svg
      viewBox="0 0 240 240"
      xmlns="http://www.w3.org/2000/svg"
      title="Reflex"
      {...props}
      ref={ref}
    >
      <path
        d="M24 240V0H216V96H168V48H72V96H168V144H72V240H24ZM168 240V144H216V240H168Z"
        fill="white"
      />
    </svg>
  )
);
