import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { getOrCreateUserDoc, getUser, setUser, UserDoc } from "auth/DB/userDB";

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

export function getCurrentUser() {
  const user = auth.currentUser;
  return (
    user &&
    new UserDoc({
      id: user.uid,
      phone: user.phoneNumber,
      name: user.displayName,
      email: user.email,
      profile: user.photoURL,
    })
  );
}

export async function signInWithGoogle() {
  const { user } = await signInWithPopup(auth, googleProvider);
  return await getOrCreateUserDoc(user);
}

export async function signInWithEmailAndPass({ email, password }) {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  const userdoc = await getUser(user);
  if (!userdoc) {
    throw new Error("user does not exists");
  }
  return userdoc;
}

export async function signUpWithEmailAndPass({
  email,
  password,
  displayName,
  phoneNumber,
}) {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  await setUser({ ...user, displayName, phoneNumber });
  const userdoc = await getUser(user);
  return userdoc;
}

export function signOutUser() {
  signOut(auth);
}
