import React, { useContext } from "react";
import Offer from "components/Offer/Offer";
import { OffersContext } from "context/OffersContext/OffersContext";

const OffersBanner = () => {
  const { banners: offers } = useContext(OffersContext);

  if (!offers.length) {
    return (<h1>Offers</h1>);
  }

  return (
    <div>
      {offers.map((offerObject, index) => (<Offer {...offerObject.offer} key={index} />))}
    </div>
  )
}

export default OffersBanner;