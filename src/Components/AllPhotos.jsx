import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./AllPhotos.module.css";
import Head from "./Head";
import Loading from "./Loading";

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
      <section className={`${styles.photos} animeLeft container`}>
        <Head title="Produtos" />
        {photos.map(({ id, fotos, nome }) => (
          <Link className={styles.link} to={`/produto/${id}`} key={id}>
            <img src={fotos[0].src} alt={fotos[0].titulo} />
            <h1 className={styles.nome}>{nome}</h1>
          </Link>
        ))}
      </section>
    );
  else return null;
};

export default AllPhotos;
