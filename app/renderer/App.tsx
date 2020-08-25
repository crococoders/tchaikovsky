var React = require("react");

// Usage exmaple of webpack alias (from "./components")
import { Heading, Example, Slider } from "@components";

import { hot as App } from "react-hot-loader/root";

export default App(
  (): JSX.Element => (
    <div>
      <h1>Your Electron Project</h1>
      <Heading title="Hello" />
      <Example>Element</Example>
      <Slider value="80" max="300" />
    </div>
  ),
);
