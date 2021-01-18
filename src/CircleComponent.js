import React from "react";
import Heading from "./curvedText.js";
import Arrow from "./assets/arrow";
import Magnifier from "./assets/magnifier";
import IndicatorComponent from "./IndicatorComponent";
import "./App.css";

const CircleComponent = (props) => {
  const { text, arc, radius, data, setData } = props;

  return (
    <div className="circle">
      <IndicatorComponent indicators={data} setIndicators={setData} />
      <div className="circle-inner">
        <div className="circle-inner-segmented">
          <Heading text={text} arc={arc} radius={radius} />
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
