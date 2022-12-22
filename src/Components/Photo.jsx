import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import styles from "./Photos.module.css";

const Photo = () => {
  const [pictures, setPicture] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    async function getPictures() {
      let response, json;
      try {
        setError(true);
        setLoading(true);
        response = await fetch(
          `https://ranekapi.origamid.dev/json/api/produto/${id}`
        );
        json = await response.json();
        if (response.ok === false) throw new Error(json.message);
      } catch (err) {
        json = null;
        setError(err.message);
      } finally {
        setPicture(json);
        setLoading(false);
      }
    }
    getPictures();
  }, [id]);
  console.log(pictures);
  if (error) return <p>{error}</p>;
  if (loading) return <Loading />;
  if (pictures)
    return (
      <div className={`${styles.picture} container animeLeft`}>
        <div className={styles.img}>
          {pictures.fotos.map((photo) => (
            <img src={photo.src} title={photo.titulo} key={photo.titulo} />
          ))}
        </div>
        <div className={styles.data}>
          <h1>{pictures.nome}</h1>
          <p className={styles.preco}>{pictures.preco}</p>
          <p className={styles.descricao}>{pictures.descricao}</p>
        </div>
      </div>
    );
  else return null;
};

export default Photo;
