import * as React from "react";
import "./Heading.scss";

type HeadingProps = {
  title?: string;
  children?: React.ReactNode;
};

type HeadingState = {
  counter: number;
};

export class Heading extends React.Component<HeadingProps, HeadingState> {
  state: HeadingState = {
    counter: 0,
  };

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <h1 className="heading-title" onClick={this.handleClick}>
        {this.props.title ? this.props.title : this.props.children}
      </h1>
    );
  }
}
