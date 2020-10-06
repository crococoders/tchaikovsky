var React = require("react");
import { Heading, Example, Button, Input } from "./components";
import { hot as App } from "react-hot-loader/root";

export default App(
  (): JSX.Element => (
    <div>
      <h1>Your Electron Project</h1>
      <Button title="123" loading={false} action={() => console.log(123)} />
      <Input label="Password" type="password" />
    </div>
  ),
);
