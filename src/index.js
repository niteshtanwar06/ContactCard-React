import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
const myElement = <App />;
var Root = createRoot(document.getElementById("root"));

Root.render(myElement);
