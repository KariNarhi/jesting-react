import React from "react";
import { shallow } from "enzyme";
import { findByTestAtr, checkProps } from "../../../utils";
import ListItem from "./index";

describe("ListItem component", () => {
  // CHECK PROPTYPES
  describe("Checking PropTypes", () => {
    test("Should not throw warning", () => {
      const expectedProps = {
        title: "example 1",
        desc: "example 2",
      };

      const propsError = checkProps(ListItem, expectedProps);

      expect(propsError).toBeUndefined();
    });
  });

  // SHOULD RENDER WITHOUT ERRORS
  describe("Renders", () => {
    let wrapper;

    beforeEach(() => {
      const props = {
        title: "example 1",
        desc: "example 2",
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    test("Should render without errors ", () => {
      const item = findByTestAtr(wrapper, "listItemComponent");
      expect(item.length).toBe(1);
    });

    test("Should render a title ", () => {
      const title = findByTestAtr(wrapper, "componentTitle");
      expect(title.length).toBe(1);
    });
    test("Should render a description ", () => {
      const desc = findByTestAtr(wrapper, "componentDesc");
      expect(desc.length).toBe(1);
    });
  });

  describe("Should not render", () => {
    let wrapper;

    beforeEach(() => {
      const props = {
        desc: "example 2",
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    test("Component does not render", () => {
      const component = findByTestAtr(wrapper, "listItemComponent");
      expect(component.length).toBe(0);
    });
  });
});
