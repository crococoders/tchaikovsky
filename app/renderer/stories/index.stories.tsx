import React from "react";
import App from "../App";
import { Slider } from "../components/Slider/Slider";

export default { title: "Test components" };

export const app = () => <App></App>;

export const slider_component = () => <Slider value="80" max="300"></Slider>;
