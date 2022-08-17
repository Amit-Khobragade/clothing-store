import { collection, getDocs, query } from "firebase/firestore";
import { store } from "auth/app/firebase";

export async function getOffers() {
  const q = query(collection(store, "offers"));
  const snapshot = await getDocs(q);
  const offers = [];
  snapshot.docs.forEach((offer) => offers.push(offer.data()));
  return offers;
}
