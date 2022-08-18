import React from "react";
import OffersBanner from "areas/OffersBannner/OffersBanner";
import { GroupOffers } from "areas/GroupOffers/GroupOffers";

const Home = (props) => {
  return (
    <div>
      <OffersBanner />
      <GroupOffers />
    </div>
  );
};

export default Home;
