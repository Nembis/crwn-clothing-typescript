import { User } from "firebase/auth";

export interface UserState {
  currentUser: User | null;
}

export interface UserActions {
  type: USER_ACTION_TYPE.SET_CURRENT_USER;
  payload: User | null;
}

export enum USER_ACTION_TYPE {
  SET_CURRENT_USER = "SET_CURRENT_USER",
}
