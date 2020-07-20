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
            <a
              className={styles.navbar__link}
              href="/about"
              as={`${process.env.BACKEND_URL}/about`}
            >
              Sobre Mi
            </a>
          </Link>
        </li>
        <li>
          <Link href="/contact" as={`${process.env.BACKEND_URL}/about`}>
            <a
              className={styles.navbar__link}
              href="/contact"
              as={`${process.env.BACKEND_URL}/contact`}
            >
              Contacto
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
