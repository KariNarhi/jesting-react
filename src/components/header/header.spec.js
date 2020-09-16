import React from "react";
import { shallow } from "enzyme";
import Header from "./index";
import { findByTestAtr } from "../../../utils";

const setup = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header component", () => {
  let component;

  beforeEach(() => {
    component = setup();
  });

  test("Should render without errors ", () => {
    const wrapper = findByTestAtr(component, "headerComponent");
    expect(wrapper.length).toBe(1);
  });

  test("Should render a logo", () => {
    const logo = findByTestAtr(component, "logoIMG");
    expect(logo.length).toBe(1);
  });
});
