import React from "react";
import PropTypes from "prop-types";

import styles from "./Navbar.module.scss";

Navbar.propTypes = {};

function Navbar(props) {
  return (
    <nav className={styles.navbar__container}>
      <ul>
        <li>Blog</li>
        <li>Categorias</li>
        <li>Sobre Mi</li>
        <li>Contacto</li>
      </ul>
    </nav>
  );
}

export default Navbar;
