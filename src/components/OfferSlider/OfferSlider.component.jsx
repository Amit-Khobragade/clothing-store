import React from "react";
import Offer from "components/Offer/Offer.component";
import { StyledOfferSection, StyledOfferSlider } from "./OfferSlider.styles";

export const OfferSlider = ({ offerGroup }) => {

  return (
    <StyledOfferSection>
      <h1>{offerGroup.title}</h1>
      <StyledOfferSlider>
        {offerGroup.offers.map((offerElement, index) => (<Offer key={index} {...offerElement} />))}
      </StyledOfferSlider>
    </StyledOfferSection>
  )
}