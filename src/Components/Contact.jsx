import React from "react";
import styles from "./Contact.module.css";
import picture from "../picture/photo.jpg";
import Head from "./Head";

const Contact = () => {
  return (
    <div className={`${styles.contact} animeLeft`}>
      <Head title="Contato" />
      <div className={styles.picture}>
        <img src={picture} alt="photo of the contact" />
      </div>
      <div className={styles.data}>
        <p>Entre em Contato</p>
        <ul className={styles.itens}>
          <li>pascoal@ndondi.com</li>
          <li>88888-8888</li>
          <li>Rua Poli, 777</li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
