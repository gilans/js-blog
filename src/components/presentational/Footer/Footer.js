import React from "react";
import PropTypes from "prop-types";

import styles from "./Footer.module.scss";

Footer.propTypes = {};

function Footer(props) {
  return (
    <footer className={styles.footer__container}>
      <p className={styles.footer__attributions}>
        Iconos diseñados por{" "}
        <a
          href="https://www.flaticon.es/autores/pixel-perfect"
          title="Pixel perfect"
        >
          Pixel perfect
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.es/" title="Flaticon">
          {" "}
          www.flaticon.es
        </a>
      </p>
      <p className={styles.footer__attributions}>
        Iconos diseñados por{" "}
        <a href="https://icon54.com/" title="Pixel perfect">
          Pixel perfect
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.es/" title="Flaticon">
          www.flaticon.es
        </a>
      </p>
      <section className={styles["footer__copyright-container"]}>
        <p className={styles.footer__copyright}>
          Copyright 2020 por Gilberto Suárez. Todos los derechos reservados
        </p>
      </section>
    </footer>
  );
}

export default Footer;
