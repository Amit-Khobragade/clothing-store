// ! CONTAINS FIREBASE APP AND FIRESTORE INSTANCE PLEASE CREATE AN
// ! FIREBASE API KEY BEFORE RUNNING THE APP
// ! THE FULL APP WITH THIS FILE WOULD BE PROVIDED IN THE PRODUCTION
// ! BUILD OF THIS APP
import { store } from "auth/app/firebase";
import { doc } from "firebase/firestore";

export class UserDoc {
  constructor({ id, phone, name, email, profile }) {
    this.id = id;
    this.phone = phone;
    this.name = name;
    this.email = email;
    this.profile = profile;
  }
}

const userConverter = {
  toFirestore: (user) => {
    if (user instanceof UserDoc) {
      return { ...user };
    }
    return {
      id: user.uid,
      phone: user.phoneNumber,
      name: user.displayName,
      email: user.email,
      profile: user.photoURL,
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new UserDoc(data);
  },
};

const users = (uid) => doc(store, "users", uid).withConverter(userConverter);

export async function getOrCreateUserDoc(user) {
  let userdoc = null;
  if (!(userdoc = await getUser(user))) {
    await setUser(user);
    userdoc = getUser(user);
  }
  return userdoc;
}

export async function getUser(user) {
  const docSnapshot = await getDoc(users(user.uid));
  if (docSnapshot.exists()) {
    return docSnapshot.data();
  }
}

export async function setUser(user) {
  await setDoc(users(user.uid), user);
}
