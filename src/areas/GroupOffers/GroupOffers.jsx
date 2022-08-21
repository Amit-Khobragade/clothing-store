import React, { useContext } from "react";
import { OfferSlider } from "components/OfferSlider/OfferSlider.component";
import { OffersContext } from "context/OffersContext/OffersContext";
import StyledOfferGroups from "./GroupOffers.styles";

const GroupOffers = () => {
  const { groups: offerGroups } = useContext(OffersContext);
  if (!offerGroups.length) {
    return <h1>Offer Groups loading...</h1>
  }

  return (
    <StyledOfferGroups>
      {offerGroups.map((OfferGroup, index) => <OfferSlider key={index} offerGroup={OfferGroup} />)}
    </StyledOfferGroups>
  )
}
export default GroupOffers;