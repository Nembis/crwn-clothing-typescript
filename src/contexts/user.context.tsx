import {
  FC,
  useEffect,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";
import { User } from "firebase/auth";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/firebase.utils";

interface UserContextType {
  currentUser: User | null;
  setCurrentUser: Dispatch<SetStateAction<User | null>>;
}

export const UserContext = createContext<UserContextType>({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider: FC<{}> = ({ children }) => {
  //going to update this context to sue a reducer to learn
  const [currentUser, setCurrentUser] =
    useState<UserContextType["currentUser"]>(null);
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
