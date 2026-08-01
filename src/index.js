import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

import Title from "./title";

const App = () => {
  return (
    <>
      <Title />
    </>
  );
};

createRoot(document.getElementById("root")).render(<App />);
