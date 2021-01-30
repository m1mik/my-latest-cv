import { AnyAction } from "redux";
import { FIND_OUT_WHO_AM_I, NULLIFY_USER } from "../actions/actionTypes";

interface UserState {
  id: string;
  name: string;
  email: string;
}

const initialState = {
  id: "",
  name: "",
  email: "",
};

const user = (
  state: UserState = initialState,
  action: AnyAction
): UserState => {
  const { type, payload } = action;

  switch (type) {
    case FIND_OUT_WHO_AM_I: {
      const { _id, name, email } = payload;
      return {
        ...state,
        id: _id,
        name,
        email,
      };
    }
    case NULLIFY_USER:
      return {
        ...state,
        id: "",
        name: "",
        email: "",
      };
    default:
      return state;
  }
};

export default user;
