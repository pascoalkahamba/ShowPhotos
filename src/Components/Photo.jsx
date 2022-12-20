import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Photos.module.css";

const Photo = ({ nome, id }) => {
  const [pictures, setPicture] = useState(null);
  useEffect(() => {
    async function getPictures() {
      const response = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${nome}`
      );
      const json = await response.json();
      setPicture(json);
    }
    getPictures();
  }, []);
  console.log(pictures);
  return <div></div>;
};

export default Photo;
