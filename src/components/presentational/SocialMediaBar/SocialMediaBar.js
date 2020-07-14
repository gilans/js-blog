import React from "react";
import PropTypes from "prop-types";

import { ReactComponent as IconLinkedin } from "assets/icons/linkedin.svg";
import { ReactComponent as IconInstagram } from "assets/icons/instagram.svg";
import { ReactComponent as IconGithub } from "assets/icons/github.svg";
import { ReactComponent as IconTwitter } from "assets/icons/twitter.svg";

import styles from "./SocialMediaBar.module.scss";

SocialMediaBar.propTypes = {};

function SocialMediaBar(props) {
  return (
    <ul className={styles["social-media-bar__list"]}>
      <li className={styles["social-media-bar__icon"]}>
        <IconLinkedin />
      </li>
      <li className={styles["social-media-bar__icon"]}>
        <IconInstagram />
      </li>
      <li className={styles["social-media-bar__icon"]}>
        <IconTwitter />
      </li>
      <li className={styles["social-media-bar__icon"]}>
        <IconGithub />
      </li>
    </ul>
  );
}

export default SocialMediaBar;
