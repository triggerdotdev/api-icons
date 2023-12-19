import { forwardRef } from "react";
import { SVGProps } from "../../types";

export const DigitalOceanIcon = forwardRef<SVGSVGElement, SVGProps>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 240 240"
      preserveAspectRatio="xMidYMid"
      title="Digital Ocean"
      {...props}
      ref={ref}
    >
      <path
        d="M120.002 240V193.531C169.326 193.531 207.45 144.708 188.627 92.86C181.649 73.6591 166.335 58.3369 147.127 51.367C95.281 32.5514 46.4844 70.6768 46.4761 119.986L46.4677 120.003H0C0 41.423 75.9132 -19.7568 158.243 5.95328C194.223 17.1789 222.814 45.7709 234.047 81.7517C259.757 164.093 198.57 240 120.002 240Z"
        fill="#0069FF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M120.108 193.646H73.7744V147.32L73.7828 147.311H120.1L120.108 147.32V193.646Z"
        fill="#0069FF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M73.7647 229.245H38.1705L38.1621 229.237V193.641H73.7731V229.237L73.7647 229.245Z"
        fill="#0069FF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38.1899 193.646H8.35074L8.33398 193.638V163.815L8.35074 163.79H38.1732L38.1899 163.798V193.646Z"
        fill="#0069FF"
      />
    </svg>
  )
);
