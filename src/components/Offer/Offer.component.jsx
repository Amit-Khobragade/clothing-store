import React, { useState } from "react";
import { Link } from "react-router-dom";

const Offer = ({ redirectURL, imageURL, content }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <Link to={redirectURL}>
      <img src={imageURL} onLoad={() => setIsImageLoaded(true)} />
      {!isImageLoaded && <h1>loading offer</h1>}
      <h1>{content}</h1>
    </Link>
  )
}

export default Offer;