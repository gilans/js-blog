import React from "react";
import PropTypes from "prop-types";

import Header from "components/presentational/Header";
import Footer from "components/presentational/Footer";
import styles from "./MainLayout.module.scss";

MainLayout.propTypes = {};

function MainLayout({ children }) {
  return (
    <>
      <Header className={styles["main-layout__header"]} />
      <main className={styles["main-layout__container"]}>{children}</main>
      <Footer className={styles["main-layout__footer"]} />
    </>
  );
}

export default MainLayout;
