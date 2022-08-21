import React, { useContext } from "react";
import OfferSlider from "components/OfferSlider/OfferSlider.component";
import { OffersContext } from "context/OffersContext/OffersContext";
import StyledOfferGroup from "./GroupOffers.styles";

const GroupOffers = () => {
  const { groups: offerGroups } = useContext(OffersContext);

  return (
    <>
      {!offerGroups.length && <h1>Offers loading</h1>}
      {offerGroups.map((group, index) => (
        <StyledOfferGroup key={index}>
          <h1>{group.title}</h1>
          <OfferSlider offerGroup={group} />
        </StyledOfferGroup>
      )
      )}
    </>
  )
}

export default GroupOffers;