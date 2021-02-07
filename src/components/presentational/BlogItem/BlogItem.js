/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import React from "react";
import Link from "next/link";

import PropTypes from "prop-types";

import styles from "./BlogItem.module.scss";

function Link({ slug, linkDescription }) {
  <Link href="/blog/[slug]" as={`${process.env.BACKEND_URL}/blog/${slug}`}>
    <a
      className={styles["blog-item__link"]}
      href="/blog/[slug]"
      as={`${process.env.BACKEND_URL}/blog/${slug}`}
    >
      {linkDescription}
    </a>
  </Link>;
}

function BlogItem(blog) {
  const { linkDescription, slug, createAt } = blog;
  return (
    <li className={styles["blog-item__container"]}>
      <Link href="/blog/[slug]" as={`${process.env.BACKEND_URL}/blog/${slug}`}>
        <a
          className={styles["blog-item__link"]}
          href="/blog/[slug]"
          as={`${process.env.BACKEND_URL}/blog/${slug}`}
        >
          {linkDescription}
        </a>
      </Link>
      <p>{createAt}</p>
    </li>
  );
}

BlogItem.propTypes = { blog: PropTypes.shape(PropTypes.object) };

export default BlogItem;
