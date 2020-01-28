import React from "react";
import { shallow, mount, render } from "enzyme";
import Home from "./Home";

describe("Home", () => {
  it("should render withour throwing an error", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.contains(<div className="home-page" />));
  });
});
