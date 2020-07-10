var React = require("react");
import { hot as App } from "react-hot-loader/root";
import { Heading } from "./Heading/Heading";

export default App(
  (): JSX.Element => (
    <div>
      <h1>Your Electron Project</h1>
      <div className="title--bold_48">Title bold 48</div>
    </div>
  ),
);
