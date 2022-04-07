import { User } from "firebase/auth";
import { UserActions, USER_ACTION_TYPE } from "./user.types";

export const setCurrentUser = (user: User | null): UserActions => ({
  type: USER_ACTION_TYPE.SET_CURRENT_USER,
  payload: user,
});
