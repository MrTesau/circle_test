import React, { useState } from "react";
import CircleComponent from "./CircleComponent";
import "./App.css";
import SlidersComponent from "./SlidersComponent";

function App() {
  const [text, setText] = useState("Circle Name");
  const [arc, setArc] = useState(140);
  const [radius, setRadius] = useState(75);
  const [data, setData] = useState([
    { title: "", value: 12.5, color: "#b7c6ce" },
    { title: "", value: 12.5, color: "#b7c6ce" },
    { title: "", value: 12.5, color: "#657e94" },
    { title: "", value: 12.5, color: "#657e94" },
    { title: "", value: 12.5, color: "#c53030" },
    { title: "", value: 12.5, color: "#c53030" },
    { title: "", value: 12.5, color: "#b7c6ce" },
    { title: "", value: 12.5, color: "#b7c6ce" },
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
}

export default App;
