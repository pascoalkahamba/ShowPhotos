import React, { useEffect, useState } from "react";
import styles from "./AllPhotos.module.css";
import Loading from "./Loading";
import Photo from "./Photo";

const AllPhotos = () => {
  const [photos, setPhotos] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function getPhotos() {
      let json;
      let response;
      try {
        setError(null);
        setLoading(true);
        response = await fetch(
          "https://ranekapi.origamid.dev/json/api/produto"
        );
        json = await response.json();
        console.log(json);
        if (response.ok === false) throw new Error(json.message);
      } catch (err) {
        json = null;
        setError(err.message);
      } finally {
        setPhotos(json);
        setLoading(false);
      }
    }
    getPhotos();
  }, []);
  if (error) return <p>{error}</p>;
  if (loading) return <Loading />;
  if (photos)
    return (
      <section className={styles.photos}>
        {photos.map(({ id, fotos, nome }) => (
          <div key={id} className={styles.element}>
            <Photo fotos={fotos} nome={nome} />
            <p>{nome}</p>
          </div>
        ))}
      </section>
    );
  else return null;
};

export default AllPhotos;
