/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import Link from "next/link";

import MainLayout from "components/layout/MainLayout";

import PropTypes from "prop-types";
import blogList from "utils/blog";
import BlogItem from "components/presentational/BlogItem";
import styles from "./Blog.module.scss";

Blog.propTypes = {};
const dateToDDMMYYYY = (dt) => {
  return new Date(dt).toISOString().slice(0, 10);
};

function Blog() {
  return (
    <MainLayout>
      <main className={styles.blog__container}>
        <h1 className={styles.blog__title}>Blog</h1>
        <section className={styles["blog__content-container"]}>
          <ul className={styles.blog__items}>{blogList.map(BlogItem)}</ul>
        </section>
      </main>
    </MainLayout>
  );
}

export default Blog;
