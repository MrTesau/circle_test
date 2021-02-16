import React from "react";
import HeadingText from "../curved-text/curvedText.js";
import IndicatorComponent from "./svg-circle-components/IndicatorComponent";
import InnerCircle from "./svg-circle-components/innerSegmentedCircle";
import "./App.css";

const CircleComponent = (props) => {
  const {
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
  } = props;

  return (
    <div
      className="circle-opacity"
      style={{
        width: `${circleDimensions}rem`,
        height: `${circleDimensions}rem`,
      }}
    >
      <InnerCircle viewBoxSize={viewBoxSize} />
      <IndicatorComponent
        indicators={data}
        setIndicators={setData}
        viewBoxSize={viewBoxSize}
        indicatorPos={indicatorPos}
      />
      <div
        className="circle-inner-segmented-svg"
        style={{
          width: `${innerCircleDimensions}rem`,
          height: `${innerCircleDimensions}rem`,
        }}
      >
        <HeadingText
          text={text}
          arc={arc}
          radius={radius}
          arcTransform={arcTransform}
        />
      </div>
    </div>
  );
};

export default CircleComponent;
