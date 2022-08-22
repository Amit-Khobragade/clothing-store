import React, { createRef, useEffect, useState } from "react";
import Offer from "components/Offer/Offer.component";
import { SliderButton, StyledSliderComponent } from "./OfferSlider.styles";

const OfferSlider = ({ offerGroup }) => {
  const scrollLength = 1000;
  const slider = createRef();
  const [isInactive, setIsInactive] = useState({ left: true });

  const scrollController = ({ target }) => {
    if (target.scrollLeft === 0) setIsInactive({ left: true });
    else if (target.scrollWidth - target.scrollLeft === target.clientWidth) setIsInactive({ right: true });
    else setIsInactive(null);
  }


  const left = () => slider.current.scrollLeft -= scrollLength;
  const right = () => slider.current.scrollLeft += scrollLength;

  return (
    <div style={{ position: "relative" }}>
      <SliderButton prev onClick={left} inactive={!!isInactive?.left}>
        {'‹'}
      </SliderButton>
      <StyledSliderComponent ref={slider} onScroll={scrollController}>
        {offerGroup.offers.map((offerElement, index) => (<Offer key={index} isGrouped={true} {...offerElement} />))}
      </StyledSliderComponent>
      <SliderButton next onClick={right} inactive={!!isInactive?.right}>
        {'›'}
      </SliderButton>
    </div>
  )
}

export default OfferSlider;