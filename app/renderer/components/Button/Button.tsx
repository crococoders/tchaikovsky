import * as React from "react";
import "./Button.scss";

type ButtonProps = {
    title?: string;
    disabled?: boolean;
    action: (event: React.MouseEvent<HTMLElement>) => void;
    children?: React.ReactNode;
    loading?: boolean;
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
                {this.props.loading ?
                    (
                        <div className="loading">
                        </div>
                    )
                    : this.props.title ? this.props.title : this.props.children}
            </button>
        );
    }
}
