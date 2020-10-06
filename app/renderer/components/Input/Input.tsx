import * as React from "react";
import "./Input.scss";
import { IconContext } from "react-icons";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

type InputProps = {
  title?: string;
  label?: string;
  type: string;
  disabled?: boolean;
  action?: Function;
  children?: string;
  placeholder?: string;
};

type InputState = {
  isPasswordVisible: boolean;
  type: string;
};

export class Input extends React.Component<InputProps, InputState> {
  state: InputState = {
    isPasswordVisible: false,
    type: this.props.type,
  };

  handePasswordVisibility = (): void => {
    const newType = this.state.type === "password" ? "text" : "password";
    this.setState({ isPasswordVisible: !this.state.isPasswordVisible, type: newType });
  };

  render() {
    const { label, disabled, children, placeholder } = this.props;
    const { type, isPasswordVisible } = this.state;

    return (
      <div className="input-form-group">
        <label htmlFor="input">{label}</label>
        <input
          type={type}
          name="input"
          disabled={disabled}
          className="input"
          placeholder={placeholder ? placeholder : children}
          style={type === "password" ? { paddingRight: "40px" } : {}}
        />
        {this.props.type === "password" && (
          <IconContext.Provider value={{ className: "input-password-eye", size: "1.5rem" }}>
            <button className="input-password-eye_btn" onClick={this.handePasswordVisibility}>
              {isPasswordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
          </IconContext.Provider>
        )}
      </div>
    );
  }
}
