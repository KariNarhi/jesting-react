import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import RootReducer from "./reducers";

export const middleware = [ReduxThunk];

export const createStoreWithMiddleware = applyMiddleware(...middleware)(
  createStore
);

export const store = createStoreWithMiddleware(
  RootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
