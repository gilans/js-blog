/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";

import MainLayout from "components/layout/MainLayout";

import PropTypes from "prop-types";

import styles from "./Home.module.scss";

Home.propTypes = {};

function Home() {
  return (
    <MainLayout>
      <main className={styles.home__container}>
        <h1 className={styles.home__title}>Desarrollo de Software</h1>
        <section className={styles["home__content-container"]}>
          <p className={styles.home__content}>
            Mi nombre es <strong>Gilberto Suárez</strong>. soy un apasionado por
            las nuevas tecnologías y en especial todo lo relacionado con el
            desarrollo de software, tengo mucha experiencia y conocimientos pero
            cada dia despierto como si fuera mi primer día y trato de aprender
            algo nuevo.
          </p>
          <p className={styles["home__image-container"]}>
            <img
              className={styles.home__image}
              src="static/images/screen-with-code.jpg"
              alt="about"
            />
          </p>
          <p className={styles.home__content}>
            En este sitio web encontraras información actualizada sobre temas
            relacionados con el desarrollo web, en especial con{" "}
            <strong>Javascript</strong> y todo su ecosistema de herramientas.
          </p>
        </section>
      </main>
    </MainLayout>
  );
}

export default Home;
