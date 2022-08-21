import React from "react";
import Offer from "components/Offer/Offer.component";
import StyledOfferSlider from "./OfferSlider.styles";

const OfferSlider = ({ offerGroup }) => {
  return (
    <StyledOfferSlider>
      {offerGroup.offers.map((offerElement, index) => (<Offer key={index} isGrouped={true} {...offerElement} />))}
    </StyledOfferSlider>
  )
}

export default OfferSlider;