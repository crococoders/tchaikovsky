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
        return (
            <input
                className="input" />
        );
    }
}
