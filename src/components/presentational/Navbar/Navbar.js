import React from "react";
import Link from "next/link";

import PropTypes from "prop-types";

import styles from "./Navbar.module.scss";

Navbar.propTypes = {};

function Navbar(props) {
  return (
    <nav className={styles.navbar__container}>
      <ul>
        <li>Blog</li>
        <li>Categorias</li>
        <li>
          <Link href="/about" as={`${process.env.BACKEND_URL}/about`}>
            <a href="/about" as={`${process.env.BACKEND_URL}/about`}>
              Sobre Mi
            </a>
          </Link>
        </li>
        <li>Contacto</li>
      </ul>
    </nav>
  );
}

export default Navbar;
