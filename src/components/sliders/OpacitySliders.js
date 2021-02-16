import React, { useState, useEffect } from "react";
import Slider from "@material-ui/core/Slider";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

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
  const {
    outerCircleOpacity,
    setOuterCircleOpacity,
    innerSegmentOpacity,
    setInnerSegmentOpacity,
    currentBackground,
    setCurrentBackground,
  } = props;

  // Outer Circle Opacity
  const OuterCircleChange = (event, newValue) => {
    setOuterCircleOpacity(newValue);
  };
  const InnerSegmentChange = (event, newValue) => {
    setInnerSegmentOpacity(newValue);
  };
  const backgroundChange = (event, newValue) => {
    setCurrentBackground(newValue);
  };
  return (
    <div className={classes.root}>
      <div>Background Slider</div>
      <Slider
        value={currentBackground}
        step={1}
        min={0}
        max={5}
        onChange={backgroundChange}
      />
      <div>Outer Circle Opacity</div>
      <Slider
        value={outerCircleOpacity}
        step={0.01}
        min={0}
        max={1}
        onChange={OuterCircleChange}
      />
      <div>Inner Segment Opacity</div>
      <Slider
        value={innerSegmentOpacity}
        step={0.005}
        min={0.05}
        max={1}
        onChange={InnerSegmentChange}
      />
      <div style={{ marginTop: "1rem" }}>
        <Button
          size="small"
          variant="contained"
          color="primary"
          style={{ textTransform: "none" }}
          onClick={() => {
            setOuterCircleOpacity(0.37);
            setInnerSegmentOpacity(0.25);
            setCurrentBackground(0);
          }}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default SlidersComponent;
