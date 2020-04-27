import React from "react";
import { shallow, mount, render } from "enzyme";
import Blog from "./Blog";

describe("Header", () => {
  it("should create snapshot of header", () => {
    const wrapper = shallow(<Blog />);
    expect(wrapper).toMatchSnapshot();
  });
});
