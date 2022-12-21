import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <NavLink to="/">Produtos</NavLink>
      <NavLink to="/contato">Contato</NavLink>
    </div>
  );
};

export default Header;
