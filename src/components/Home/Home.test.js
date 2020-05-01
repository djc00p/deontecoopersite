import React from "react";
import { shallow, mount, render } from "enzyme";
import Home from "./Home";

describe("Home", () => {
  it("should create snapshot of Home", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
});
