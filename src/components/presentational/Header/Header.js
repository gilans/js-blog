import React from "react";
import Link from "next/link";

import PropTypes from "prop-types";
import classNames from "classnames/bind";

import Navbar from "components/presentational/Navbar";
import SocialMediaBar from "components/presentational/SocialMediaBar";

import styles from "./Header.module.scss";

const classnames = classNames.bind(styles);

Header.propTypes = {};

function Header({ className }) {
  const containerClass = classnames(className, "header__container");
  return (
    <header className={containerClass}>
      <section className={styles["header__upper-section"]}>
        <Link href="/" as={`${process.env.BACKEND_URL}/`}>
          <a
            className={styles.header__title}
            href="/"
            as={`${process.env.BACKEND_URL}/`}
          >
            <span className={styles["header__text-logo"]}>{"<GS/>"}</span>
            <span className={styles.header__text}>gilbertosuarez.com</span>{" "}
          </a>
        </Link>
        <SocialMediaBar className={styles["header__social-media-bar"]} />
      </section>
      <Navbar />
    </header>
  );
}

export default Header;
