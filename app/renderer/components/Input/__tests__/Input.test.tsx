import "jsdom-global/register";

import React from "react";
import { shallow } from "enzyme";
import { Input } from "../Input";

describe("Unit testing Input", () => {
    it("First test", () => {
        const wrapper = shallow(<Input action={() => console.log("Hello")} />);
        expect(wrapper.html()).toMatch('<input class="input"/>');
    });
});
