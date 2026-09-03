import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

import Title from "./title";
import Timer from "./timer";

const App = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.body.classList.toggle("light-theme", theme === "light");
  }, [theme]);

  return (
    <>
      <Title theme={theme} toggleTheme={toggleTheme} />
      <Timer />
    </>
  );
};

createRoot(document.getElementById("root")).render(<App />);
