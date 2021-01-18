import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import Heading from "./curvedText.js";
import Arrow from "./assets/arrow";
import Magnifier from "./assets/magnifier";
import IndicatorComponent from "./IndicatorComponent";
import "./App.css";

const CircleComponent = (props) => {
  const [color, setColor] = React.useState("black");

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

/*
    {/*
        <circle
          r="5"
          cx="10"
          cy="10"
          fill="red"
          stroke={color}
          strokeWidth="1"
          // size, gap
          strokeDasharray="1 31.42"
          //  size = circumference / number of indicators
          transform="rotate(-90) translate(-20)"
          // Add a mask circle over at the end to allow only click on borders
          onClick={() => setColor("red")}
        />

        <circle
          // dash offset = gaps and multiple circles
          r="5"
          cx="10"
          cy="10"
          fill="red"
          stroke="black"
          strokeWidth="1"
          // size, gap
          strokeDasharray="1 31.42"
          //  size = circumference / number of indicators
          transform="rotate(-90) translate(-30)"
        />
       

        */
