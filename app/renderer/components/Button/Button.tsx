import * as React from "react";
import "./Button.scss";

type ButtonProps = {
    title?: string;
    disabled?: boolean;
    action: Function;
    children?: React.ReactNode;
};

type ButtonState = {};

export class Button extends React.Component<ButtonProps, ButtonState> {
    state: ButtonState = {};


    render() {
        return (
            <button
                className="button"
                onClick={this.props.action}
                disabled={this.props.disabled}>
                {this.props.title ? this.props.title : this.props.children}
            </button>
        );
    }
}
