import React from "react";
import OffersBanner from "areas/OffersBannner/OffersBanner";
import { GroupOffers } from "areas/GroupOffers/GroupOffers";

const Home = (props) => {
  return (
    <main>
      <OffersBanner />
      <GroupOffers />
    </main>
  );
};

export default Home;
