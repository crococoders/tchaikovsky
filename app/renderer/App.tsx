var React = require("react");
import "./../../static/index.scss";
import { Heading, Example } from "./component";
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
