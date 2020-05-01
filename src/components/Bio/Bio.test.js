import React from "react";
import { shallow, mount, render } from "enzyme";
import Bio from "./Bio";

describe("Bio", () => {
  it("should create snapshot of Bio", () => {
    const wrapper = shallow(<Bio />);
    expect(wrapper).toMatchSnapshot();
  });
});
