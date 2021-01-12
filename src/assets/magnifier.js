import React from "react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="26"
      height="25"
      viewBox="0 0 26 25"
    >
      <defs>
        <path
          id="magnifier-b"
          d="M42.612 107.492l3.388 2.73L43.182 113l-2.772-3.338 2.202-2.17zM32.975 94c3.853 0 6.975 3.077 6.975 6.872a6.766 6.766 0 01-1.05 3.628l2.162 1.743-1.92 1.892-1.668-2.01a7.01 7.01 0 01-4.499 1.62c-3.852 0-6.975-3.077-6.975-6.873C26 97.077 29.123 94 32.975 94zm0 1.964c-2.751 0-4.982 2.197-4.982 4.908 0 2.711 2.23 4.91 4.982 4.91 2.752 0 4.983-2.199 4.983-4.91 0-2.71-2.231-4.908-4.983-4.908z"
        ></path>
        <filter
          id="magnifier-a"
          width="150%"
          height="152.6%"
          x="-20%"
          y="-21.1%"
          filterUnits="objectBoundingBox"
        >
          <feOffset
            dx="1"
            dy="1"
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          ></feOffset>
          <feGaussianBlur
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
            stdDeviation="1.5"
          ></feGaussianBlur>
          <feColorMatrix
            in="shadowBlurOuter1"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          ></feColorMatrix>
        </filter>
      </defs>
      <g fill="none" fillRule="evenodd" transform="translate(-24 -92)">
        <use
          fill="#000"
          filter="url(#magnifier-a)"
          xlinkHref="#magnifier-b"
        ></use>
        <use fill="#FFF" xlinkHref="#magnifier-b"></use>
      </g>
    </svg>
  );
}

export default Icon;
