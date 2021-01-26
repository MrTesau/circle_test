import React, { useState } from "react";
import CircleComponent from "./circleComponents/CircleComponent";
import CssCircle from "./circleCSS/circleCSS";
import SlidersComponent from "./circleComponents/SlidersComponent";
import "./App.css";

const App = () => {
  // Size Dimensions:
  const [viewBoxSize, setViewBoxSize] = useState(42);
  const [circleDimensions, setCircleDimension] = useState(14.75);
  const [innerCircleDimensions, setInnerCircleDimensions] = useState(10);
  const [indicatorPos, setIndicatorPos] = useState(17);

  // Text and Arc settings:
  const [text, setText] = useState("Circle Name");
  const [arc, setArc] = useState(140);
  const [arcTransform, setArcTransform] = useState(2.1);
  const [radius, setRadius] = useState(75);
  // Indicator data:
  const [data, setData] = useState([
    "off",
    "on",
    "broken",
    "on",
    "on",
    "on",
    "broken",
    "off",
  ]);

  React.useEffect(() => {
    // Scale outer CSS dimension to SVG viewBox
    let newCircle = 14.75 * (1 / (viewBoxSize / 42));
    let newInnerCircle = 10 * (1 / (viewBoxSize / 42));
    let newIndicatorPos = 17 * (1 / (viewBoxSize / 42));
    // StateUpdates
    setIndicatorPos(newIndicatorPos);
    setInnerCircleDimensions(newInnerCircle);
    setCircleDimension(newCircle);
  }, [viewBoxSize]);

  const circleProps = {
    text,
    arc,
    radius,
    data,
    setData,
    arcTransform,
    viewBoxSize,
    circleDimensions,
    innerCircleDimensions,
    indicatorPos,
  };
  const sliderProps = {
    text,
    setText,
    arc,
    setArc,
    radius,
    setRadius,
    data,
    setData,
    arcTransform,
    setArcTransform,
    viewBoxSize,
    setViewBoxSize,
  };

  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            margin: "1rem",
            fontFamily: "cursive",
            fontSize: "0.85rem",
            color: "antiquewhite",
          }}
        >
          Full SVG Circle
        </div>
        <CircleComponent {...circleProps} />

        <SlidersComponent {...sliderProps} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          marginLeft: "5rem",
          color: "antiquewhite",
        }}
      >
        <div
          style={{ margin: "1rem", fontFamily: "cursive", fontSize: "0.85rem" }}
        >
          CSS Styled Circle
        </div>
        <CssCircle {...circleProps} />
      </div>
    </div>
  );
};

export default App;
