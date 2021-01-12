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
          id="visit-arrow-b"
          d="M104 94c5.523 0 10 4.477 10 10s-4.477 10-10 10c-4.477 0-8.267-2.942-9.542-7l2.124.001A8.003 8.003 0 00112 104a8 8 0 00-15.418-3h-2.124c1.274-4.057 5.064-7 9.542-7zm5 10l-9 5 2-3-12-1a1 1 0 110-2l12-1-2-3 9 5z"
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
      <g fill="none" fillRule="evenodd" transform="rotate(-45 -51.433 169.347)">
        <use
          fill="#000"
          filter="url(#visit-arrow-a)"
          xlinkHref="#visit-arrow-b"
        ></use>
        <use fill="#FFF" xlinkHref="#visit-arrow-b"></use>
      </g>
    </svg>
  );
}

export default Icon;
