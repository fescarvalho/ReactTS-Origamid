import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./main.css";
import ExeInput from "./ExeInput.tsx";
import VideoElement from "./VideoElement.tsx";
import CustomHook from "./CustomHook.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <p>------------------------------------------</p>
    <ExeInput />
    <p>------------------------------------------</p>
    <VideoElement />
    <p>------------------------------------------</p>
    <CustomHook />
  </React.StrictMode>,
);
