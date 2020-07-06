import * as React from 'react';

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
      <h1 onClick={this.handleClick}>
        {this.props.title ? this.props.title : this.props.children}
      </h1>
    );
  }
}
