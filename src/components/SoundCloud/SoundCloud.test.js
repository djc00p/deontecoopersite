import React from "react";
import { shallow, mount, render } from "enzyme";
import SoundCloud from "./SoundCloud";

it("should create snapshot of SoundCloud", () => {
  const wrapper = shallow(<SoundCloud />);
  expect(wrapper).toMatchSnapshot();
});
