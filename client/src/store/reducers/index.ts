import { combineReducers } from "redux";
import user from "./user";
import todo from "./todo";

const combined = combineReducers({
  user,
  todo,
});

export default combined;
