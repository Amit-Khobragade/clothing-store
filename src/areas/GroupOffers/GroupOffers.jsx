import React, { useContext } from "react";
import OfferSlider from "components/OfferSlider/OfferSlider.component";
import { OffersContext } from "context/OffersContext/OffersContext";
import StyledOfferGroup from "./GroupOffers.styles";

const GroupOffers = () => {
  const { groups: offerGroups } = useContext(OffersContext);

  return (
    <>
      {!offerGroups.length && <h3>Offers loading</h3>}
      {offerGroups.map((group, index) => (
        <StyledOfferGroup key={index}>
          <h3>{group.title}</h3>
          <OfferSlider offerGroup={group} />
        </StyledOfferGroup>
      )
      )}
    </>
  )
}

export default GroupOffers;