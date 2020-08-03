var React = require("react");

// Usage exmaple of webpack alias (from "./components")
import { Heading, Example } from "@components";

import { hot as App } from "react-hot-loader/root";

export default App(
  (): JSX.Element => (
    <div>
      <h1>Your Electron Project</h1>
      <Heading title="Hello" />
      <Example>Element</Example>
    </div>
  ),
);
