import { forwardRef } from "react";
import { SVGProps } from "../../types";

export const InstabugIcon = forwardRef<SVGSVGElement, SVGProps>(
  (props, ref) => (
    <svg
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      title="Instabug"
      {...props}
      ref={ref}
    >
      <path
        d="M31.0817 135.405L103.241 44H72.1593L0 135.405H31.0817Z"
        fill="#6E99E4"
      />
      <path
        d="M62.5109 135.405L134.62 44H103.24L31.0811 135.405H62.5109Z"
        fill="#4872DD"
      />
      <path
        d="M164.511 121.928L226.028 44H134.623L62.5137 135.405H136.762C147.603 135.405 157.848 130.432 164.561 121.928H164.511Z"
        fill="#3649AB"
      />
      <path
        d="M187.435 105.415L168.189 130.231C161.475 138.884 151.131 143.956 140.19 143.956H118.209L76.4854 196.82H148.396C160.68 196.82 172.316 191.201 179.925 181.553L240 105.465H187.435V105.415Z"
        fill="#1F1E6A"
      />
      <path
        d="M86.8275 143.909L45.0537 196.872H76.4338L118.208 143.909H86.8275Z"
        fill="#4774DE"
      />
      <path
        d="M55.7474 143.909L13.9238 196.872H45.0553L86.8291 143.909H55.7474Z"
        fill="#719DEA"
      />
    </svg>
  )
);
