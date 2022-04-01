import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

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
