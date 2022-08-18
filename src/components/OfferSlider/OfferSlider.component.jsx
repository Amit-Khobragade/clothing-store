import React from "react";
import Offer from "components/Offer/Offer.component";

export const OfferSlider = ({ offerGroup }) => {

  return (
    <div>
      <h1>{offerGroup.title}</h1>
      <div>
        {offerGroup.offers.map((offerElement, index) => (<Offer key={index} {...offerElement} />))}
      </div>
    </div>
  )
}