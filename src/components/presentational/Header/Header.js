import React from "react";
import PropTypes from "prop-types";
import Navbar from "components/presentational/Navbar";
import SocialMediaBar from "components/presentational/SocialMediaBar";

import styles from "./Header.module.scss";

Header.propTypes = {};

function Header(props) {
  return (
    <header className={styles.header__container}>
      <section className={styles["header__upper-section"]}>
        <div>
          <span className={styles["header__text-logo"]}>{"<GS/>"}</span>
          <span className={styles.header__text}>gilbertosuarez.com</span>{" "}
        </div>
        <SocialMediaBar />
      </section>
      <Navbar />
    </header>
  );
}

export default Header;
