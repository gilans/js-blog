import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import {
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./SocialMediaBar.module.scss";
import SocialMediaItem from "../SocialMediaItem";

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
          <SocialMediaItem
            icon={faTwitter}
            showTitles={showTitles}
            href="https://twitter.com/suarezgilberto"
            target="_blank"
          >
            twitter
          </SocialMediaItem>
        </li>
        <li className={styles["social-media-bar__item"]}>
          <SocialMediaItem
            icon={faInstagram}
            showTitles={showTitles}
            href="https://www.instagram.com/gilbertosuarez1066"
            target="_blank"
          >
            instagram
          </SocialMediaItem>
        </li>
        <li className={styles["social-media-bar__item"]}>
          <SocialMediaItem
            icon={faLinkedin}
            showTitles={showTitles}
            href="https://www.linkedin.com/in/gilberto-suarez-1745a7a1"
            target="_blank"
          >
            linkedin
          </SocialMediaItem>
        </li>
        <li className={styles["social-media-bar__item"]}>
          <SocialMediaItem
            icon={faGithub}
            showTitles={showTitles}
            href="https://github.com/gilans"
            target="_blank"
          >
            github
          </SocialMediaItem>
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
