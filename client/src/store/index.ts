import { createStore, applyMiddleware } from "redux";
import combinerReducer from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  combinerReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
