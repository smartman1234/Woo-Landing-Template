import React, { useState } from 'react';
import styles from './first.module.scss';

const FirstPage = () => {
  return (
    <main className={styles.first}>
      <div className={styles.left}>
        <h4>Building exactly the eCommerce website you want.</h4>
        <p>
          WooCommerce is a customizable, open-source eCommerce platform built on
          WordPress. Get started quickly and make your way.
        </p>
        <button className={styles.btn}>Start a New Store</button>
        <span>or</span>
        <a href="/">Customize & Extend ›</a>
      </div>
      <div className={styles.right}>
        <img
          src="/back.png"
          alt="side image"
          className={styles.back}
        />
        <img
          src="/featured-image.png"
          alt="side image"
          className={styles.top}
        />
      </div>
    </main>
  );
};

export default FirstPage;
