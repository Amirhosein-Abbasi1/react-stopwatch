import React from "react";
import { createRoot } from "react-dom/client";
import Title from "./title";

const App = () => {

    return (
        <>
        <Title />
        </>
    )
};

createRoot(document.getElementById("root")).render(<App />);
