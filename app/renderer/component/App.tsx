var React = require('react');
import { hot } from "react-hot-loader/root";
import { Heading } from './Heading/Heading';

export default hot((): JSX.Element =>
  (
    <div>
      <h1>
        Your Electron Project
      </h1>
    </div>
  ));