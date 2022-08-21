import { collection, getDocs, query } from "firebase/firestore";
import { store } from "auth/app/firebase";

export const getSections = async () => {
  const q = query(collection(store, "sections"));
  const snapshot = await getDocs(q);
  const sections = {};

  // populating the sections
  snapshot.docs.forEach((section) => {
    const data = section.data();
    sections[data.faction] = data.contents;
  });

  return sections;
};
