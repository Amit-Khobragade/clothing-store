import React, { useContext } from "react";
import Offer from "components/Offer/Offer";
import { OffersContext } from "context/OffersContext/OffersContext";
import StyledOffersBanner from "./OfferBanner.style";

const OffersBanner = () => {
  const { banners: offerBanners } = useContext(OffersContext);

  return (
    <StyledOffersBanner>
      {!offerBanners.length && <h1>Offers Loading</h1>}
      {offerBanners.map((banner, index) => (<Offer {...banner.offer} key={index} />))}
    </StyledOffersBanner>
  )
}

export default OffersBanner;