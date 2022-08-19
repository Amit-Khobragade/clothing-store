import React, { useContext } from "react";
import Offer from "components/Offer/Offer";
import { OffersContext } from "context/OffersContext/OffersContext";
import StyledOffersBanner from "./OfferBanner.style";

const OffersBanner = () => {
  const { banners: offers } = useContext(OffersContext);

  if (!offers.length) {
    return (<h1>Offers</h1>);
  }

  return (
    <StyledOffersBanner>
      {offers.map((offerObject, index) => (<Offer {...offerObject.offer} key={index} />))}
    </StyledOffersBanner>
  )
}

export default OffersBanner;