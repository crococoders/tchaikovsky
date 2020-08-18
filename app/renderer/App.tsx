var React = require("react");
import { Heading, Example, Button } from "./components";
import { hot as App } from "react-hot-loader/root";

export default App(
  (): JSX.Element => (
    <div>
      <h1>Your Electron Project</h1>
      <Button title="123" action={() => console.log(123)} />
    </div>
  ),
);
