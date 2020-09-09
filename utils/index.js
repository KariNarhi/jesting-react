import checkPropTypes from "check-prop-types";
import { applyMiddleware, createStore } from "redux";
import RootReducer from "../src/reducers";
import { middleware } from "../src/createStore";

export const findByTestAtr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

export const checkProps = (component, expectedProps) => {
  const propsErrors = checkPropTypes(
    component.propTypes,
    expectedProps,
    "props",
    component.name
  );
  return propsErrors;
};

export const testStore = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
  return createStoreWithMiddleware(RootReducer, initialState);
};
