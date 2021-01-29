import { User } from "../types/user";
import { Dispatch } from "redux";
import { FIND_OUT_WHO_AM_I } from "./actionTypes";

export const whoami = (data: User) => (dispatch: Dispatch): void => {
  dispatch({ type: FIND_OUT_WHO_AM_I, payload: data });
};
