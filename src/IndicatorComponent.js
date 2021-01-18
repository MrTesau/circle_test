import x from "./assets/x.png";

const IndicatorComponent = (props) => {
  const { indicators, setIndicators } = props;
  const indicatorLength = 100 / indicators.length - 0.6;

  const FindMiddleAngle = (i) => {
    let offset = i === 0 ? 24.7 : 100 - indicatorLength * i + 24.7 - i * 0.6;
    let realOffset = offset / 25;
    //const angle = (this.dataPercentage(dataVal) * 360) / 2 + angleOffset
    let offsetAngleDegrees = -(90 * realOffset);
    let angle = ((indicatorLength / 100) * 360) / 2 + offsetAngleDegrees;
    return angle * (Math.PI / 180);
  };

  return (
    <div style={{ position: "absolute", width: "17rem", height: "17rem" }}>
      <svg width="100%" height="100%" viewBox="0 0 42 42">
        <circle
          cx="21"
          cy="21"
          fill="transparent"
          r="15.91549430918954"
          stroke="rgba(132, 171, 190, 1)"
        ></circle>
        {indicators.map((indicator, i) => {
          return (
            <>
              <circle
                pointerEvents="stroke" // Make sure correct circle triggers events
                className="svg-indicator"
                cx="21"
                cy="21"
                r="15.91549430918954"
                fill="transparent"
                stroke={
                  indicator === "on"
                    ? "#b7c6ce"
                    : indicator === "off"
                    ? "#657e94"
                    : "#c53030"
                }
                strokeWidth="2"
                strokeDasharray={`${indicatorLength} ${100 - indicatorLength}`} // length, length of gap
                strokeDashoffset={
                  i === 0
                    ? "24.7"
                    : `${100 - indicatorLength * i + 24.7 - i * 0.6}`
                }
                onClick={() => {
                  let indicatorArr = [...indicators];
                  indicatorArr[i] =
                    indicatorArr[i] === "on"
                      ? "off"
                      : indicatorArr[i] === "off"
                      ? "broken"
                      : "on";
                  setIndicators(indicatorArr);
                }}
              ></circle>
              {indicator === "broken" ? (
                <image
                  href={x}
                  height="4.5"
                  width="4.5"
                  // Inaccurate solution to centering icon
                  x={`${
                    15.91549430918954 * Math.cos(FindMiddleAngle(i)) + 18.9
                  }`}
                  y={`${
                    15.91549430918954 * Math.sin(FindMiddleAngle(i)) + 18.5
                  }`}
                />
              ) : (
                ""
              )}
            </>
          );
        })}
      </svg>
    </div>
  );
};

export default IndicatorComponent;
