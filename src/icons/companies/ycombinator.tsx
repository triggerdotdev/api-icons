import { forwardRef } from "react";
import { SVGProps } from "../../types";

export const YCombinatorIcon = forwardRef<SVGSVGElement, SVGProps>(
  (props, ref) => (
    <svg
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      title="YCombinator"
      {...props}
      ref={ref}
    >
      <path d="M240.625 0H0V240.625H240.625V0Z" fill="#FF6600" />
      <path
        d="M88.6392 52.4912L117.755 113.148L146.87 52.4912H171.913L127.981 135.029V188.137H107.528V135.029L63.5967 52.4912H88.6392Z"
        fill="white"
      />
    </svg>
  )
);
