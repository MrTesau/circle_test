import React, { useState, useEffect } from "react";
import Slider from "@material-ui/core/Slider";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
const mockData = ["off", "on", "broken", "on", "on", "on", "broken", "off"];
const useStyles = makeStyles({
  root: {
    width: 200,
    marginTop: "3rem",
    fontFamily: "cursive",
    fontSize: "0.85rem",
    color: "antiquewhite",
    letterSpacing: "1px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

const SlidersComponent = (props) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const {
    arc,
    setArc,
    radius,
    setRadius,
    setText,
    data,
    setData,
    arcTransform,
    setArcTransform,
    //viewBoxSize,
    // setViewBoxSize,
  } = props;
  // Text Arc slider
  const arcChange = (event, newValue) => {
    setArc(newValue);
  };
  // Text Radius slider
  const radiusChange = (event, newValue) => {
    setRadius(newValue);
  };
  // Text start Angle slider
  const angleChange = (event, newValue) => {
    setArcTransform(newValue);
  };
  // No. Of Indicators
  const indicatorChange = (event, newValue) => {
    let newData = [];
    for (let i = 0; i < newValue; i++) {
      newData.push(
        Math.random() > 0.66 ? "on" : Math.random() > 0.33 ? "off" : "broken"
      );
    }
    setData(newData);
  };
  const handleChange = (e) => {
    setName(e.target.value);
  };
  // Circle Name Change
  useEffect(() => {
    if (name.length) {
      setText(name);
    } else {
      setText("Circle Name");
    }
  }, [name, setText]);
  return (
    <div className={classes.root}>
      <div>Change Name Arc</div>
      <Slider value={arc} step={5} min={50} max={200} onChange={arcChange} />
      <div>Change Name Radius</div>
      <Slider
        value={radius}
        step={5}
        min={10}
        max={100}
        onChange={radiusChange}
      />
      <div>Modify Name Position Angle</div>
      <Slider
        value={arcTransform}
        step={0.1}
        min={0}
        max={10}
        onChange={angleChange}
      />
      <div>Change Number of Indicators</div>

      <Slider
        value={data.length}
        step={2}
        min={2}
        max={8}
        onChange={indicatorChange}
      />
      <div>Click Indicator to Change it's State!</div>

      <div style={{ marginTop: "1rem" }}>
        <Button
          size="small"
          variant="contained"
          color="primary"
          style={{ textTransform: "none" }}
          onClick={() => {
            setData(mockData);
            setText("Circle Name");
            setRadius(75);
            setArc(140);
            setName({});
          }}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default SlidersComponent;
// Size of Circle Slider
/*
     <div style={{ marginTop: "1rem" }}>
       <TextField
         id="standard-basic"
         label="Name Circle"
         InputLabelProps={{
           style: {
             color: "#fff",
             fontFamily: "cursive",
             fontSize: "0.85rem",
           },
         }}
         name="name"
         onChange={(e) => handleChange(e)}
       />
     </div>;

    const sizeChange = (event, newValue) => {
      setArc(newValue);
        <div>Change Circle Size</div>
   
    };
       <Slider
         value={viewBoxSize}
         step={2}
         min={2}
         max={84}
         onChange={sizeChange}
       />;
  */
