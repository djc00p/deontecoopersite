import React from "react";
import { shallow, mount, render } from "enzyme";
import App from "./App";

describe("App", () => {
  it("should render without throwing an error", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<main className="My-Site" />));
  });

  it("should contain a header", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<header className="My-Site-header" />));
  });
});
