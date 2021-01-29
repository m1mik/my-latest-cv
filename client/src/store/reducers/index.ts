import { combineReducers } from "redux";
import user from "./user";

const combined = combineReducers({
  user,
});

export default combined;
