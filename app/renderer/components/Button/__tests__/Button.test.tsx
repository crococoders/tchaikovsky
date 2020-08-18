import "jsdom-global/register";

import React from "react";
import { shallow } from "enzyme";
import { Button } from "../Button";

describe("Unit testing Button", () => {
    it("Should use children", () => {
        const wrapper = shallow(<Button action={() => console.log("Hello")}>Hello</Button>);
        expect(wrapper.html()).toMatch('<button class="button">Hello</button>');
    });

    it("Should use props title", () => {
        const wrapper = shallow(<Button action={() => console.log("Hello")} title="Hello" />);
        expect(wrapper.html()).toMatch('<button class="button">Hello</button>');
    });

    it("Should be disabled", () => {
        const wrapper = shallow(<Button action={() => console.log("Hello")} title="Hello" disabled />);
        expect(wrapper.html()).toMatch('<button class="button" disabled="">Hello</button>');
    });
});
