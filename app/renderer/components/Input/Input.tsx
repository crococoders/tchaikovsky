import * as React from "react";
import "./Input.scss";

type InputProps = {
  title?: string;
  disabled?: boolean;
  action: Function;
  children?: React.ReactNode;
};

type InputState = {};

export class Input extends React.Component<InputProps, InputState> {
  state: InputState = {};

  render() {
    const { type, placeholder, label } = this.props;

    return (
      <div className="input-form-group">
        <label htmlFor="input">Name</label>
        <input type="password" name="input" className="input" placeholder="Type your login" />
      </div>
    );
  }
}
