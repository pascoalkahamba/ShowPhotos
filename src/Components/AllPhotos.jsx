import React, { useEffect, useState } from "react";
import styles from "./AllPhotos.module.css";

const AllPhotos = () => {
  const [photos, setPhotos] = useState(null);
  const [loading, setLoading] = useState(null);
  useEffect(() => {
    async function getPhotos() {
      const response = await fetch(
        "https://ranekapi.origamid.dev/json/api/produto"
      );
      setLoading(true);
      const json = await response.json();
      console.log(json);
      setPhotos(json);
    }
    getPhotos();
  }, []);
  return <section className={styles.photos}></section>;
};

export default AllPhotos;
