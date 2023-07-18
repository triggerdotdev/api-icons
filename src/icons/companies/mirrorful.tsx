import { forwardRef } from "react";
import { SVGProps } from "../../types";

export const MirrorfulIcon = forwardRef<SVGSVGElement, SVGProps>(
  (props, ref) => (
    <svg
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      title="Mirrorful"
      {...props}
      ref={ref}
    >
      <path
        d="M183.75 0H56.25C25.1841 0 0 25.1841 0 56.25V183.75C0 214.817 25.1841 240 56.25 240H183.75C214.817 240 240 214.817 240 183.75V56.25C240 25.1841 214.817 0 183.75 0Z"
        fill="url(#paint0_linear_4566_57464)"
      />
      <path
        d="M120 204.375C166.599 204.375 204.375 166.599 204.375 120C204.375 73.401 166.599 35.625 120 35.625C73.401 35.625 35.625 73.401 35.625 120C35.625 166.599 73.401 204.375 120 204.375Z"
        fill="url(#paint1_linear_4566_57464)"
      />
      <path
        d="M105.519 70.279L70.279 105.519C66.9838 108.814 66.9838 114.157 70.279 117.452C73.5739 120.747 78.9163 120.747 82.2113 117.452L117.452 82.2115C120.747 78.9163 120.747 73.5739 117.452 70.279C114.157 66.9838 108.814 66.9838 105.519 70.279Z"
        fill="#0ACF83"
      />
      <path
        d="M156.988 121.748L121.747 156.988C118.452 160.283 118.452 165.626 121.747 168.921C125.043 172.216 130.385 172.216 133.68 168.921L168.92 133.68C172.215 130.385 172.215 125.043 168.92 121.748C165.625 118.453 160.283 118.453 156.988 121.748Z"
        fill="#FF7262"
      />
      <path
        d="M150.022 76.1861L76.1842 150.024C72.8891 153.319 72.8891 158.661 76.1842 161.956C79.4792 165.251 84.8216 165.251 88.1167 161.956L161.954 88.1184C165.249 84.8235 165.249 79.4811 161.954 76.1861C158.659 72.8912 153.317 72.891 150.022 76.1861Z"
        fill="#A259FF"
      />

      <linearGradient
        id="paint0_linear_4566_57464"
        x1="251.001"
        y1="271.5"
        x2="-7.95719e-07"
        y2="-11"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.0743756" stopColor="#0C81B1" />
        <stop offset="0.572495" stopColor="#1ABCFE" />
        <stop offset="1" stopColor="white" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_4566_57464"
        x1="53.4999"
        y1="57.9999"
        x2="191.499"
        y2="184"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="0.459191" stopColor="white" />
        <stop offset="1" stopColor="#CCCCCC" />
      </linearGradient>
    </svg>
  )
);
