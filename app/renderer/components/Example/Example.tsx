import * as React from "react";
import "./Example.scss";

type ExampleProps = {
  content?: string;
  children?: React.ReactNode;
};

export const Example: React.SFC<ExampleProps> = (props) => {
  return (
    <div>
      <div className="example-title">Title</div>
      <div className="example-content">Title</div>
      <div className="example-element">Title</div>
    </div>
  );
};
