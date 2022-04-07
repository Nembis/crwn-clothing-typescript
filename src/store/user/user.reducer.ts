import { USER_ACTION_TYPE, UserActions, UserState } from "./user.types";

const INITIAL_STATE: UserState = {
  currentUser: null,
};

export const userReducer = (
  state: UserState = INITIAL_STATE,
  action: UserActions
): UserState => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPE.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      return state;
  }
};
