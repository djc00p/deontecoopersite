import React from "react";
import { shallow, mount, render } from "enzyme";
import Projects from "./Projects";

describe("Projects", () => {
  it("should render withour throwing an error", () => {
    const wrapper = shallow(<Projects />);
    expect(wrapper.contains(<div className="home-page" />));
  });
});
