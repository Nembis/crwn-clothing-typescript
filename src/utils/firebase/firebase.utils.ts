import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  UserCredential,
  User,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDltoQK2n8tX5PbROeUyhAavF2RvhcvAdw",
  authDomain: "crwn-clothing-typescript-db.firebaseapp.com",
  projectId: "crwn-clothing-typescript-db",
  storageBucket: "crwn-clothing-typescript-db.appspot.com",
  messagingSenderId: "531681184105",
  appId: "1:531681184105:web:f533b1b613f901d50cd5f8",
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  // prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth: User) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (err) {
      console.log("Error creating the user: ", err);
    }
  }

  return userSnapshot;
};
