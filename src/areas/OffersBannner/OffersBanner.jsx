import React, { useContext, useState } from "react";
import Offer from "components/Offer/Offer";
import { OffersContext } from "context/OffersContext/OffersContext";
import { BannerController, BannerControllerBtn, BannerDisplay, OffersContainer } from "./OfferBanner.style";

const OffersBanner = () => {
  const { banners: offerBanners } = useContext(OffersContext);
  const [currPos, setCurrPos] = useState(0);

  const next = () => setCurrPos((currPos === offerBanners.length - 1 ? 0 : currPos + 1));

  return (
    <BannerDisplay>
      <OffersContainer currentPos={currPos}>
        {!offerBanners.length && <h1>Offers Loading</h1>}
        {offerBanners.map((banner, index) => (<Offer {...banner.offer} key={index} />))}
      </OffersContainer>
      <BannerController>
        {offerBanners.map((banner, index) => (
          <BannerControllerBtn key={index} isActive={currPos === index} duration={5000} onClick={() => setCurrPos(index)}>
            <div onAnimationEnd={next}></div>
          </BannerControllerBtn>
        ))}
      </BannerController>
    </BannerDisplay>
  )
}

export default OffersBanner;