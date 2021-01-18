import React, { useState } from "react";
import CircleComponent from "./CircleComponent";
import "./App.css";
import SlidersComponent from "./SlidersComponent";

const App = () => {
  const [text, setText] = useState("Circle Name");
  const [arc, setArc] = useState(140);
  const [radius, setRadius] = useState(75);
  const [data, setData] = useState([
    "off",
    "on",
    "broken",
    "on",
    "on",
    "on",
    "broken",
    "off",
  ]);
  const circleProps = {
    text,
    arc,
    radius,
    data,
    setData,
  };
  const sliderProps = {
    text,
    setText,
    arc,
    setArc,
    radius,
    setRadius,
    data,
    setData,
  };

  return (
    <div className="container">
      <CircleComponent {...circleProps} />
      <SlidersComponent {...sliderProps} />
    </div>
  );
};

export default App;
