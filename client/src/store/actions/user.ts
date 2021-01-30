import { User } from "../types/user";
import { Dispatch } from "redux";
import { FIND_OUT_WHO_AM_I, NULLIFY_USER } from "./actionTypes";

export const whoami = (data: User) => (dispatch: Dispatch): void => {
  dispatch({ type: FIND_OUT_WHO_AM_I, payload: data });
};

export const nullifyUser = () => (dispatch: Dispatch): void => {
  dispatch({ type: NULLIFY_USER });
};
