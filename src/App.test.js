import React from "react";
import App from "./App";
import SharedButton from "./components/button";
import { shallow } from "enzyme";
import { findByTestAtr, testStore } from "../utils";

const setup = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

describe("App component", () => {
  let wrapper;

  beforeEach(() => {
    const initialState = {
      posts: [
        {
          title: "test title 1",
          body: "test body 1",
        },
        {
          title: "test title 2",
          body: "test body 2",
        },
        {
          title: "test title 3",
          body: "test body 3",
        },
      ],
    };
    wrapper = setup(initialState);
  });

  test("Should render without errors", () => {
    const component = findByTestAtr(wrapper, "appComponent");
    expect(component.length).toBe(1);
  });
});
