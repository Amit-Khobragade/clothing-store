import React, { useState } from "react";
import { Link } from "react-router-dom";
import { StyledFilterComponent, StyledOffersComponent } from "./Offer.styles";

const Offer = ({ redirectURL, imageURL, content, isGrouped }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <Link to={redirectURL}>
      <StyledOffersComponent isGrouped={isGrouped}>
        <img src={imageURL} onLoad={() => setIsImageLoaded(true)} />
        {!isImageLoaded && <h3>loading offer</h3>}
        {!isGrouped && <StyledFilterComponent></StyledFilterComponent>}
        <h3>{content}</h3>
      </StyledOffersComponent>
    </Link>
  )
}

export default Offer;