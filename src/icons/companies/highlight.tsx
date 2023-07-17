import { forwardRef } from "react";
import { SVGProps } from "../../types";

export const HighlightIcon = forwardRef<SVGSVGElement, SVGProps>(
  (props, ref) => (
    <svg
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      title="Highlight"
      {...props}
      ref={ref}
    >
      <path
        d="M120 240C186.274 240 240 186.274 240 120C240 53.7258 186.274 0 120 0C53.7258 0 0 53.7258 0 120C0 186.274 53.7258 240 120 240Z"
        fill="#6C37F4"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M82.5 67.5C74.2157 67.5 67.5 74.2155 67.5 82.5V157.5C67.5 165.784 74.2157 172.5 82.5 172.5H127.5L90 67.5H82.5ZM112.5 67.5L150 172.5H157.5C165.784 172.5 172.5 165.784 172.5 157.5V82.5C172.5 74.2155 165.784 67.5 157.5 67.5H112.5Z"
        fill="white"
      />
    </svg>
  )
);
