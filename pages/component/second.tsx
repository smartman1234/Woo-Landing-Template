import React, { useState } from 'react';
import styles from './first.module.scss';

const Secondpage = () => {
  return (
    <main className={styles.relative}>
      <div className={styles.bold}>
        <h2>Your eCommerce made simple</h2>
      </div>
      <article className={styles.sec}>
        <div className={styles.box1}>
          <img src="/" alt="" />
          <img src="/" alt="" />
          <img src="/" alt="" />
          <h3>All You Need to Start</h3>
          <a href="/">Ecommerce for Wordpress ›</a>
        </div>
        <div className={styles.box2}>
          <img src="/" alt="" />
          <img src="/" alt="" />
          <img src="/" alt="" />
          <h3>Customize and Extend</h3>
          <p>
            From subscriptions to gym classes to luxury cars, WooCommerce is
            fully customizable.
          </p>
          <a href="/">Browse Extensions ›</a>
        </div>
        <div className={styles.box3}>
          <img src="/" alt="" />
          <img src="/" alt="" />
          <img src="/" alt="" />
          <h3>Active Community</h3>
          <p>
            WooCommerce is one of the fastest-growing eCommerce communities.{' '}
          </p>
          <a href="/">Check our Forums ›</a>
        </div>
      </article>
    </main>
  );
};

export default Secondpage;
