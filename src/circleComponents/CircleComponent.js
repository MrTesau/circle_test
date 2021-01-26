import React from "react";
import HeadingText from "./curvedText.js";
//import Arrow from "../assets/arrow";
//import Magnifier from "../assets/magnifier";
import IndicatorComponent from "./IndicatorComponent";
import InnerCircle from "./innerSegmentedCircle";

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
      className="circle"
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
