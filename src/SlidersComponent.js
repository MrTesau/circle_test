import React, { useState, useEffect } from "react";
import Slider from "@material-ui/core/Slider";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
const mockData = ["off", "on", "broken", "on", "on", "on", "broken", "off"];
const useStyles = makeStyles({
  root: {
    width: 200,
    marginTop: "4rem",
    fontFamily: "cursive",
    fontSize: "0.99rem",
    color: "antiquewhite",
  },
});

const SlidersComponent = (props) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const { arc, setArc, radius, setRadius, setText, data, setData } = props;

  const arcChange = (event, newValue) => {
    setArc(newValue);
  };
  const radiusChange = (event, newValue) => {
    setRadius(newValue);
  };
  const indicatorChange = (event, newValue) => {
    let newData = [];
    for (let i = 0; i < newValue; i++) {
      newData.push(Math.random() > 0.5 ? "on" : "off");
    }
    setData(newData);
  };
  const handleChange = (e) => {
    setName(e.target.value);
  };
  useEffect(() => {
    if (name.length) {
      setText(name);
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
        <TextField
          id="standard-basic"
          label="Name Circle"
          InputLabelProps={{
            style: { color: "#fff", fontFamily: "cursive" },
          }}
          name="name"
          onChange={(e) => handleChange(e)}
        />
      </div>
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
