import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";

import { findByTestAtr } from "../../../utils";

const setup = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Headline component", () => {
  // WITH PROPS
  describe("Has props", () => {
    let wrapper;

    beforeEach(() => {
      const props = {
        header: "Test header",
        desc: "Test description",
      };

      wrapper = setup(props);
    });

    test("Should render without errors", () => {
      const component = findByTestAtr(wrapper, "headlineComponent");
      expect(component.length).toBe(1);
    });

    test("Should render a H1", () => {
      const h1 = findByTestAtr(wrapper, "header");
      expect(h1.length).toBe(1);
    });

    test("Should render a description", () => {
      const desc = findByTestAtr(wrapper, "desc");
      expect(desc.length).toBe(1);
    });
  });

  // WITHOUT PROPS
  describe("Has no props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup();
    });

    test("Should not render", () => {
      const component = findByTestAtr(wrapper, "headlineComponent");
      expect(component.length).toBe(0);
    });
  });
});
