import React from "react";

import PropTypes from "prop-types";
import classNames from "classnames/bind";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./SocialMediaItem.module.scss";

const classnames = classNames.bind(styles);

function SocialMediaItem({ icon, showTitles, children, href, target = "" }) {
  return (
    <a
      className={styles["social-media-item__container"]}
      href={href}
      target={target}
    >
      <FontAwesomeIcon icon={icon} />

      {showTitles && (
        <span className={styles["social-media-item__title"]}>{children}</span>
      )}
    </a>
  );
}

SocialMediaItem.defaultProps = {
  showTitles: false,
};

SocialMediaItem.propTypes = { showTitles: PropTypes.bool };

export default SocialMediaItem;
