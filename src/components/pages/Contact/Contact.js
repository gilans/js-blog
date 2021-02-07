/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";

import MainLayout from "components/layout/MainLayout";

import PropTypes from "prop-types";

import { emailAddress, socialMediaUrl } from "utils/constants";
import styles from "./Contact.module.scss";

Contact.propTypes = {};

function Contact() {
  return (
    <MainLayout>
      <main className={styles.contact__container}>
        <h1 className={styles.contact__title}>Contacto</h1>
        <section className={styles["contact__content-container"]}>
          <p className={styles.contact__content}>
            Me encanta ayuda y si tienes alguna consulta o tienes algún problema
            relacionado con el desarrollo de software no dudes en contactarme a
            través de mi{" "}
            <a href={`mailto:${emailAddress}`}>correo electronico</a>.
          </p>
          <p className={styles["contact__image-container"]}>
            <img
              className={styles.contact__image}
              src="static/images/funny-apps.jpg"
              alt="Contact"
            />
          </p>
          <p className={styles.contact__content}>
            También puedes seguirme en mis redes sociales como{" "}
            <a href={socialMediaUrl.twitter}>Twitter</a>,{" "}
            <a href={socialMediaUrl.instagram}>Instagram</a> y{" "}
            <a href={socialMediaUrl.linkedin}>Linkedin</a>.
          </p>
          <p className={styles.contact__content}>
            Regularmente agrego nuevos proyectos en mi repositorio de{" "}
            <a href={socialMediaUrl.github}>github</a>, los cuales puedes
            descargar y usar en tus desarrollos.
          </p>
        </section>
      </main>
    </MainLayout>
  );
}

export default Contact;
