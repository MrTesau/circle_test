import React from "react";
import Heading from "../circleComponents/curvedText.js";
import Arrow from "../assets/arrow";
import Magnifier from "../assets/magnifier";
import IndicatorComponent from "../circleComponents/IndicatorComponent";

const CircleComponent = (props) => {
  const { text, arc, radius, arcTransform, data, setData } = props;
  return (
    <div
      className="circle"
      style={{
        width: "14.75rem",
        height: "14.75rem",
      }}
    >
      <IndicatorComponent indicators={data} setIndicators={setData} />
      <div className="circle-inner">
        <div className="circle-inner-segmented">
          <Heading
            text={text}
            arc={arc}
            radius={radius}
            arcTransform={arcTransform}
          />
          <div className="circle-center"></div>
          <div className="svg-arrow">
            <Arrow />
          </div>
          <div className="svg-magnifier">
            <Magnifier />
          </div>
          <div className="inner-horizontal-divider"></div>
          <div className="inner-vertical-divider"></div>
        </div>
      </div>
    </div>
  );
};

export default CircleComponent;
