import React from "react";
import Heading from "../curved-text/curvedText.js";
import Arrow from "../../assets/arrow";
import Magnifier from "../../assets/magnifier";
import IndicatorComponent from "./css-circle-components/IndicatorComponent";
import Circle from "./css-circle-components/circleComponent";
import "./styles/circleStyles.css";

const BgMask = [
  "#226b9c",
  "#CB4335",
  "#8E44AD",
  "#21874C",
  "#CA6F1E",
  "#4B79A1",
];

const CircleComponent = (props) => {
  const {
    text,
    arc,
    radius,
    arcTransform,
    data,
    setData,
    outerCircleOpacity,
    innerSegmentOpacity,
    backgroundTheme,
    currentBackground,
  } = props;

  return (
    <Circle
      bgColor={`rgba(255, 255, 255, ${outerCircleOpacity})`}
      circleClass={"outer-circle"}
    >
      <IndicatorComponent indicators={data} setIndicators={setData} />
      <Circle
        circleClass={"inner-circle"}
        bgImage={`linear-gradient(
    to right,${backgroundTheme[currentBackground]}
  )`}
      >
        <Circle
          bgColor={`rgba(255, 255, 255,${innerSegmentOpacity})`}
          circleClass={"inner-circle-segmented"}
        >
          <Heading
            text={text}
            arc={arc}
            radius={radius}
            arcTransform={arcTransform}
          />
          <div className="svg-arrow">
            <Arrow />
          </div>
          <div className="svg-magnifier">
            <Magnifier />
          </div>
          <div
            className="inner-horizontal-divider"
            style={{
              backgroundColor: BgMask[currentBackground],
            }}
          ></div>
          <div
            className="inner-vertical-divider"
            style={{
              backgroundColor: BgMask[currentBackground],
            }}
          ></div>
          <Circle
            circleClass={"circle-center"}
            bgColor={BgMask[currentBackground]}
          />
        </Circle>
      </Circle>
    </Circle>
  );
};

export default CircleComponent;
