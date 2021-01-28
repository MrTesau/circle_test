import React, { useState } from "react";
//import CircleComponent from "./circleComponents/CircleComponent";
import CssCircle from "./circleCSS/circleCSS";
//import SlidersComponent from "./circleComponents/SlidersComponent";
import OpacitySliders from "./circleCSS/OpacitySliders";
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
    "off",
    "broken",
    "broken",
    "on",
    "on",
    "broken",
    "broken",
  ]);
  // Opacity and Background Settings:
  const [backgroundTheme, setBackgroundTheme] = useState([
    ["#216f9c,#24749e,#3e87b4,#327fad,#24749e,#24749e,#226b9c"],
    ["#CB4335, #CD5C5C"],
    ["#8E44AD,#8F45AE"],
    ["#21874C, #20864B"],
    ["#CA6F1E,#CD711F"],
    ["#283E51, #4B79A1"],
  ]);
  const [currentBackground, setCurrentBackground] = useState(0);
  const [innerSegmentOpacity, setInnerSegmentOpacity] = useState(0.25);
  const [outerCircleOpacity, setOuterCircleOpacity] = useState(0.37);

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
    outerCircleOpacity,
    innerSegmentOpacity,
    backgroundTheme,
    currentBackground,
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
    <div
      className="container"
      style={{
        backgroundImage: `linear-gradient(
    to right,${backgroundTheme[currentBackground]}
  )`,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          //marginLeft: "5rem",
          color: "antiquewhite",
        }}
      >
        <CssCircle {...circleProps} />
        <OpacitySliders
          outerCircleOpacity={outerCircleOpacity}
          setOuterCircleOpacity={setOuterCircleOpacity}
          innerSegmentOpacity={innerSegmentOpacity}
          setInnerSegmentOpacity={setInnerSegmentOpacity}
          currentBackgound={currentBackground}
          setCurrentBackground={setCurrentBackground}
        />
      </div>
    </div>
  );
};

export default App;

/* Code that Needs to be Re-Introduced:
  /*
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
        {/* <SlidersComponent {...sliderProps} />
      </div>



       <div
          style={{ margin: "1rem", fontFamily: "cursive", fontSize: "0.85rem" }}
        >
          CSS Styled Circle
        </div>



 


     */
