import React, { useState } from "react";
import Slider from "@material-ui/core/Slider";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
const mockData = [
  { title: "", value: 12.5, color: "#b7c6ce" },
  { title: "", value: 12.5, color: "#b7c6ce" },
  { title: "", value: 12.5, color: "#657e94" },
  { title: "", value: 12.5, color: "#657e94" },
  { title: "", value: 12.5, color: "#c53030" },
  { title: "", value: 12.5, color: "#c53030" },
  { title: "", value: 12.5, color: "#b7c6ce" },
  { title: "", value: 12.5, color: "#b7c6ce" },
];
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
  const [name, setName] = useState({});
  const { arc, setArc, radius, setRadius, setText, data, setData } = props;
  const arcChange = (event, newValue) => {
    setArc(newValue);
  };
  const radiusChange = (event, newValue) => {
    setRadius(newValue);
  };
  const handleChange = (e) => {
    setName({ [e.target.name]: e.target.value });
    if (name.name) {
      setText(name.name);
    }
  };
  const indicatorChange = (event, newValue) => {
    let dataObj = data[0];
    let newData = [];
    for (let i = 0; i < newValue; i++) {
      let newObj = { ...dataObj };
      newObj.color = Math.random() > 0.5 ? "#b7c6ce" : "#657e94";
      newData.push(newObj);
    }
    setData(newData);
  };
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
      <div>Change Indicator Numbers</div>

      <Slider
        value={data.length}
        step={1}
        min={1}
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
