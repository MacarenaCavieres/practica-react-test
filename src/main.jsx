import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";

import { FirstApp } from "./FirstApp";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* <App /> */}
        <FirstApp title="Este es el titulo" subtitle={432} />
    </React.StrictMode>
);
