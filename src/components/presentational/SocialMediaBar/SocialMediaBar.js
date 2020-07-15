import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import { ReactComponent as IconLinkedin } from "assets/icons/linkedin.svg";
import { ReactComponent as IconInstagram } from "assets/icons/instagram.svg";
import { ReactComponent as IconGithub } from "assets/icons/github.svg";
import { ReactComponent as IconTwitter } from "assets/icons/twitter.svg";

import styles from "./SocialMediaBar.module.scss";
const classnames = classNames.bind(styles);

function SocialMediaBar({ className, showTitles }) {
  const containerClass = classnames(
    className,
    "social-media-bar__container",
    showTitles && "social-media-bar__container--large"
  );
  const listClass = classnames(
    className,
    "social-media-bar__list",
    showTitles && "social-media-bar__list--large"
  );
  return (
    <div className={containerClass}>
      <ul className={listClass}>
        <li className={styles["social-media-bar__item"]}>
          <IconTwitter />
          {showTitles && (
            <span className={styles["social-media-bar__title"]}>twitter</span>
          )}
        </li>
        <li className={styles["social-media-bar__item"]}>
          <IconInstagram />
          {showTitles && (
            <span className={styles["social-media-bar__title"]}>instagram</span>
          )}
        </li>
        <li className={styles["social-media-bar__item"]}>
          <IconLinkedin />
          {showTitles && (
            <span className={styles["social-media-bar__title"]}>linkedin</span>
          )}
        </li>
        <li className={styles["social-media-bar__item"]}>
          <IconGithub />
          {showTitles && (
            <span className={styles["social-media-bar__title"]}>github</span>
          )}
        </li>
      </ul>
    </div>
  );
}

SocialMediaBar.defaultProps = {
  showTitles: false,
};

SocialMediaBar.propTypes = { showTitles: PropTypes.bool };

export default SocialMediaBar;
