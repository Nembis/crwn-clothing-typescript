import {
  FC,
  useEffect,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  useReducer,
} from "react";
import { User } from "firebase/auth";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/firebase.utils";

interface UserContextType {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
}

interface UserState {
  currentUser: User | null;
}

interface UserActions {
  type: "SET_CURRENT_USER";
  payload: {
    currentUser: UserState["currentUser"];
  };
}

const INITAL_STATE: UserContextType = {
  currentUser: null,
  setCurrentUser: () => null,
};

export const UserContext = createContext<UserContextType>(INITAL_STATE);

const userReducer = (state: UserState, action: UserActions) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_CURRENT_USER":
      return {
        ...payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

export const UserProvider: FC<{}> = ({ children }) => {
  //going to update this context to sue a reducer to learn
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITAL_STATE);

  const setCurrentUser = (user: User | null) =>
    dispatch({ type: "SET_CURRENT_USER", payload: { currentUser: user } });

  const value: UserContextType = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscript = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscript;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
