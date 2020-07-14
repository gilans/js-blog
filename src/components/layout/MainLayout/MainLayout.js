import React from "react";
import PropTypes from "prop-types";

import Header from "components/presentational/Header";
import Footer from "components/presentational/Footer";
import styles from "./MainLayout.module.scss";

MainLayout.propTypes = {};

function MainLayout({ children }) {
  return (
    <main className={styles["main-layout__container"]}>
      <Header />
      {children}
      <Footer />
    </main>
  );
}

export default MainLayout;
