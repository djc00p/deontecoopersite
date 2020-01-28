import React from "react";
import { shallow, mount, render } from "enzyme";
import Header from "./Header";

describe("Header", () => {
  it("should create snapshot of header", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
