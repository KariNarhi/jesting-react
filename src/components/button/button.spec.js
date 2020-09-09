import React from "react";
import { shallow } from "enzyme";
import { findByTestAtr, checkProps } from "../../../utils";
import SharedButton from "./index";

describe("SharedButton component", () => {
  // CHECK PROPTYPES
  describe("Checking PropTypes", () => {
    test("Should not throw warning", () => {
      const expectedProps = {
        buttonText: "example",
        emitEvent: () => {},
      };

      const propsError = checkProps(SharedButton, expectedProps);

      expect(propsError).toBeUndefined();
    });
  });

  // SHOULD RENDER WITHOUT ERRORS
  describe("Rendering", () => {
    let wrapper;

    beforeEach(() => {
      const props = {
        buttonText: "example",
        emitEvent: () => {},
      };
      wrapper = shallow(<SharedButton {...props} />);
    });

    test("Should render without errors ", () => {
      const button = findByTestAtr(wrapper, "buttonComponent");
      expect(button.length).toBe(1);
    });
  });
});
