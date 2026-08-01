import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

import Title from "./title";
import Timer from "./timer";

const App = () => {
  return (
    <>
      <Title />
      <Timer />
    </>
  );
};

createRoot(document.getElementById("root")).render(<App />);
