import React from "react";
import { shallow, mount, render } from "enzyme";
import Projects from "./Projects";

describe("Projects", () => {
  it("should create snapshot of Projects", () => {
    const wrapper = shallow(<Projects />);
    expect(wrapper).toMatchSnapshot();
  });
});
