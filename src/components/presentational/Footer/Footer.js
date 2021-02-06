import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import SocialMediaBar from "../SocialMediaBar";

import styles from "./Footer.module.scss";

const classnames = classNames.bind(styles);

Footer.propTypes = {};

function Footer({ className }) {
  const containerClass = classnames(className, "footer__container");
  return (
    <footer className={containerClass}>
      <SocialMediaBar
        className={styles["footer__social-media-bar"]}
        showTitles
      />
      <section className={styles["footer__copyright-container"]}>
        <p className={styles.footer__copyright}>
          Copyright 2021 por Gilberto Suárez. Todos los derechos reservados
        </p>
      </section>
    </footer>
  );
}

export default Footer;
