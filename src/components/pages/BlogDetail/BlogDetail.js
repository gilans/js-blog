/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import Link from "next/link";

import MainLayout from "components/layout/MainLayout";

import PropTypes from "prop-types";
import blogList from "utils/blog";
import styles from "./BlogDetail.module.scss";

BlogDetail.propTypes = {};

function BlogDetail() {
  return (
    <MainLayout>
      <main className={styles.blog__container}>
        <h1 className={styles.blog__title}>Blog Detail</h1>
      </main>
    </MainLayout>
  );
}

export default BlogDetail;
