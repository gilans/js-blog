/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";

import MainLayout from "components/layout/MainLayout";

import PropTypes from "prop-types";

import styles from "./About.module.scss";

About.propTypes = {};

function About() {
  return (
    <MainLayout>
      <main className={styles.about__container}>
        <h1 className={styles.about__title}>Sobre mi</h1>
        <section className={styles["about__content-container"]}>
          <p className={styles.about__content}>
            Mi nombre es <strong>Gilberto Suárez</strong>. Nací en Venezuela.
            Estudié Ingeniería en Sistemas, actualmente me encuentro trabajando
            como Ingeniero de Software, especificamente desarrollando
            aplicaciones con las herramientas basadas en{" "}
            <strong>Javascript (NodeJS, ReactJS, NextJS, ReactNative</strong>,
            entre otras).
          </p>
          <p className={styles.about__content}>
            Soy un apasionado por las nuevas tecnologías relacionadas con el
            desarrollo de software, y cada dia busco nuevas cosas que aprender,
            por esta razón tomé la decisión de crear este blog para compartir
            ese conocimiento que me encuentro en el inmenso océano que es el
            internet.
          </p>
          <p className={styles["about__image-container"]}>
            <img
              className={styles.about__image}
              src="static/images/about-desktop.png"
              alt="about"
            />
          </p>
        </section>
      </main>
    </MainLayout>
  );
}

export default About;
