import { getOffers } from "auth/DB/offerDB";
import React, { useEffect, useState } from "react";
import Offer from "./Offer";

const OfferSection = () => {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    getOffers().then(value => setOffers(value));
  }, []);

  if (!offers.length) {
    return (<h1>Offers</h1>);
  }

  return (
    <div>
      {offers.map((offerObject, index) => (<Offer {...offerObject.offer} key={index} />))}
    </div>
  )
}

export default OfferSection;