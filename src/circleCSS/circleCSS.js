import React from "react";
import Heading from "../circleComponents/curvedText.js";
import Arrow from "../assets/arrow";
import Magnifier from "../assets/magnifier";
import IndicatorComponent from "../circleComponents/IndicatorComponent";
const BgMask = [
  "#226b9c",
  "#CB4335",
  "#8E44AD",
  "#21874C",
  "#CA6F1E",
  "#4B79A1",
];

const CircleComponent = (props) => {
  const [theme, setTheme] = React.useState("blue");
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
    <div
      className="circle-opacity"
      style={{
        backgroundColor: `rgba(255, 255, 255, ${outerCircleOpacity})`,
      }}
    >
      <IndicatorComponent indicators={data} setIndicators={setData} />
      <div
        className="circle-inner"
        style={{
          backgroundImage: `linear-gradient(
    to right,${backgroundTheme[currentBackground]}
  )`,
        }}
        /*backgroundColor: BgMask[theme], // adopts background color
        }}*/
      >
        <div
          className="circle-inner"
          style={{
            backgroundColor: `rgba(255, 255, 255, 0.01)`,
          }}
        >
          {" "}
          <div
            className="circle-inner-segmented"
            style={{
              backgroundColor: `rgba(255, 255, 255,${innerSegmentOpacity})`,
            }}
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
            <div
              className="circle-center"
              style={{
                backgroundColor: BgMask[currentBackground],
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircleComponent;
