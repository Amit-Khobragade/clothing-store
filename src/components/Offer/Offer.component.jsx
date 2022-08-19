import React, { useState } from "react";
import { Link } from "react-router-dom";

const Offer = ({ redirectURL, imageURL, content }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <Link to={redirectURL}>
      <div className="offer">
        <img src={imageURL} onLoad={() => setIsImageLoaded(true)} />
        {!isImageLoaded && <h1>loading offer</h1>}
        <div className="filter"></div>
        <h1>{content}</h1>
      </div>
    </Link>
  )
}

export default Offer;