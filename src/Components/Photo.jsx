import React, { useState } from "react";
import { Link } from "react-router-dom";

const Photo = ({ src, title, id }) => {
  const [picture, setPicture] = useState(null);
  return (
    <div>
      <Link to={`/produto/${id}`}>
        <img src={src} title={title} />
      </Link>
    </div>
  );
};

export default Photo;
