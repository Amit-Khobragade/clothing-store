import { getOffers } from "auth/DB/offerDB"
import React, { createContext, useEffect, useState } from "react"

export const OffersContext = createContext({
  groups: [],
  banners: []
});

export function OffersContextProvider(props) {
  const [offers, setOffers] = useState({
    groups: [],
    banners: []
  });

  useEffect(() => {
    getOffers().then((offerArray) => {
      const offersObject = {
        groups: [],
        banners: []
      };
      offerArray.forEach(offer => (offer.isGrouped ? offersObject.groups : offersObject.banners).push(offer));
      setOffers(offersObject);
    })
  }, []);

  return (
    <OffersContext.Provider value={offers} {...props} />
  )
}