import React from "react";
import Arrow from "../assets/arrow";
import Magnifier from "../assets/magnifier";

const IndicatorComponent = (props) => {
  const { viewBoxSize } = props;
  return (
    <div style={{ position: "absolute", width: "14.5rem", height: "14.5rem" }}>
      <div
        style={{
          position: "absolute",
          top: "62%",
          left: "62%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Arrow />
      </div>
      <div
        style={{
          position: "absolute",
          top: "62%",
          left: "29%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Magnifier />
      </div>
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${viewBoxSize ? viewBoxSize : 42} ${
          viewBoxSize ? viewBoxSize : 42
        }`}
        className="section"
      >
        {/* Top half Circle */}
        <circle
          cx="21"
          cy="21"
          fill="rgba(42, 118, 162, 1)"
          r="15.91549430918954"
        ></circle>
        <circle
          r="5"
          cx="21"
          cy="21"
          fill="transparent"
          stroke="rgba(100, 155, 187, 0.9)"
          strokeWidth="18.91549430918954"
          strokeDasharray="calc(50 * 31.42 / 100) calc(50 * 31.42 / 100)"
          strokeDashoffset="15.75"
        />
        {/* half Circle Bottom Right */}
        <circle
          r="5"
          cx="21"
          cy="21"
          fill="transparent"
          stroke="rgba(100, 155, 187, 0.9)"
          strokeWidth="18.91549430918954"
          strokeDasharray="calc(25 * 31.42 / 100) calc(75 * 31.42 / 100)"
          strokeDashoffset="0.05"
        />

        <circle
          className="section"
          r="5"
          cx="21"
          cy="21"
          fill="transparent"
          stroke="rgba(100, 155, 187, 0.9)"
          strokeWidth="18.91549430918954"
          strokeDasharray="calc(25 * 31.42 / 100) calc(75 * 31.42 / 100)"
          strokeDashoffset="23.60"
        />

        {/* vertical divider */}
        <rect
          x="20.5"
          y="21"
          width="1"
          height={15.91549430918954}
          fill="rgba(42, 118, 162, 0.9)"
        />
        {/*
        {/* horizontal divider */}
        <rect
          x={`${21 - 15.91549430918954}`}
          y="20.5"
          width={15.91549430918954 * 2}
          height="1"
          fill="rgba(42, 118, 162, 0.9)"
        />
        {/* Middle Circle */}
        <circle
          cx="21"
          cy="21"
          fill="rgba(42, 118, 162, 1)"
          r={`${15.91549430918954 / 3}`}
        ></circle>
      </svg>
    </div>
  );
};

export default IndicatorComponent;
