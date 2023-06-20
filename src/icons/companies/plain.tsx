import { forwardRef } from "react";
import { SVGProps } from "../../types";

export const PlainIcon = forwardRef<SVGSVGElement, SVGProps>((props, ref) => (
  <svg
    viewBox="0 0 240 240"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    title="Plain"
    {...props}
    ref={ref}
  >
    <path d="M240 0H0V240H240V0Z" fill="black" />
    <path d="M388.56 -76.0801H-93.5996V346.56H388.56V-76.0801Z" fill="black" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M156.019 188.378H188.4V156.854H156.019V188.378Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M121.927 74.4536V116.636V117.043H121.511L78.1801 117.044H77.7625V116.636V74.4536V74.0473H78.1801H121.511H121.927V74.4536ZM115.218 52.0167C114.91 51.9553 114.53 51.9056 114.152 51.8588C114.066 51.8502 113.985 51.8324 113.901 51.8252C112.767 51.6966 111.326 51.6265 109.549 51.6104C109.477 51.6104 109.406 51.6001 109.334 51.6001C109.3 51.6001 109.265 51.6044 109.231 51.6044C109.124 51.6044 109.042 51.6001 108.933 51.6001H51.5996V188.4H77.7625V139.431V139.01H78.195H107.373C108.028 139.04 108.672 139.107 109.334 139.107C134.155 139.107 154.277 119.517 154.277 95.354C154.277 73.1351 137.253 54.8279 115.218 52.0167Z"
      fill="white"
    />
  </svg>
));
