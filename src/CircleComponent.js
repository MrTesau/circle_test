import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import Heading from "./curvedText.js";
import Arrow from "./assets/arrow";
import Magnifier from "./assets/magnifier";

const CircleComponent = (props) => {
  const { text, arc, radius, data, setData } = props;

  return (
    <div className="circle">
      <div style={{ position: "absolute" }}>
        <PieChart
          data={data}
          lineWidth={10}
          paddingAngle={2}
          radius={45}
          startAngle={0}
          onClick={(e, segmentIndex) => {
            let previousData = [...data];
            previousData[segmentIndex].color =
              previousData[segmentIndex].color === "#c53030"
                ? "#657e94"
                : previousData[segmentIndex].color === "#657e94"
                ? "#b7c6ce"
                : "#c53030";
            return setData(previousData);
          }}
        />
      </div>
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
