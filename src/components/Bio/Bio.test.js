import React from "react";
import { shallow, mount, render } from "enzyme";
import Bio from "./Bio";

describe("Header", () => {
  it("should create snapshot of header", () => {
    const wrapper = shallow(<Bio />);
    expect(wrapper).toMatchSnapshot();
  });
});
