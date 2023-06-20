import { forwardRef } from "react";
import { SVGProps } from "../../types";

export const ClickUpIcon = forwardRef<SVGSVGElement, SVGProps>((props, ref) => (
  <svg
    viewBox="0 0 240 240"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    title="ClickUp"
    {...props}
    ref={ref}
  >
    <path
      d="M240 120C240 53.7258 186.274 0 120 0C53.7258 0 0 53.7258 0 120C0 186.274 53.7258 240 120 240C186.274 240 240 186.274 240 120Z"
      fill="white"
    />
    <path
      d="M240 120C240 53.7258 186.274 0 120 0C53.7258 0 0 53.7258 0 120C0 186.274 53.7258 240 120 240C186.274 240 240 186.274 240 120Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M49.6875 164.571L75.643 144.69C89.4263 162.686 104.064 170.978 120.374 170.978C136.595 170.978 150.829 162.78 163.995 144.928L190.308 164.333C171.325 190.072 147.709 203.672 120.374 203.672C93.1294 203.672 69.2942 190.168 49.6875 164.571Z"
      fill="url(#paint0_linear_4117_57329)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M120.286 78.1589L74.089 117.966L52.7471 93.1981L120.378 34.9219L187.482 93.2436L166.035 117.921L120.286 78.1589Z"
      fill="url(#paint1_linear_4117_57329)"
    />

    <linearGradient
      id="paint0_linear_4117_57329"
      x1="49.6875"
      y1="184.802"
      x2="190.309"
      y2="184.802"
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor="#8930FD" />
      <stop offset="1" stopColor="#49CCF9" />
    </linearGradient>
    <linearGradient
      id="paint1_linear_4117_57329"
      x1="52.7471"
      y1="91.3968"
      x2="187.482"
      y2="91.3968"
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor="#FF02F0" />
      <stop offset="1" stopColor="#FFC800" />
    </linearGradient>
  </svg>
));
