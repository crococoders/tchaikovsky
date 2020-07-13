import "jsdom-global/register";

import React from "react";
import { shallow } from "enzyme";
import { Heading } from "../Heading";

import renderer from "react-test-renderer";

describe("Unit testing Heading", () => {
  it("Should use children", () => {
    const wrapper = shallow(<Heading>Hello Jest!</Heading>);
    expect(wrapper.html()).toMatch('<h1 class="heading-title">Hello Jest!</h1>');
  });

  it("Should use props", () => {
    const wrapper = shallow(<Heading title="Hello Jest!" />);
    expect(wrapper.html()).toMatch('<h1 class="heading-title">Hello Jest!</h1>');
  });

  it("Should check if state is 1", () => {
    const wrapper = shallow(<Heading title="Hello Jest!" />);
    wrapper.find("h1").simulate("click");
    expect(wrapper.state("counter")).toEqual(1);
  });
});

describe("Snapshot testing Heading", () => {
  it("Should renders correctly", () => {
    const tree = renderer.create(<Heading title="Hello Jest1!" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
