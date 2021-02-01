import React, { useState } from 'react';
import styles from './first.module.scss';

const Secondpage = () => {
  return (
    <main className={styles.relative}>
      <div className={styles.inner}>
        <div className={styles.bold}>
          <h2>Your eCommerce made simple</h2>
        </div>
        <article className={styles.sec}>
          <div className={styles.box1}>
            <img
              src="/apple.png"
              alt=""
              className={styles.topside}
              width=" 50px"
            />
            <img
              src="/image 16.png"
              alt=""
              width="200px"
              className={styles.pending}
            />
            <img src="/Rectangle 223.png" alt="" className={styles.mainimg} />
            <div className={styles.content}>
              <h3 className={styles.heads}>All You Need to Start</h3>
              <a href="/">Ecommerce for Wordpress ›</a>
            </div>
          </div>
          <div className={styles.box2}>
            <img src="" alt="" />
            <img src="/Rectangle 224.png" alt="" className={styles.mainimg} />
            <img src="/" alt="" />
            <div className={styles.content}>
              <h3 className={styles.heads}>Customize and Extend</h3>
              <p className={styles.writing}>
                From subscriptions to gym classes to luxury cars, WooCommerce is
                fully customizable.
              </p>
              <a href="/">Browse Extensions ›</a>
            </div>
          </div>
          <div className={styles.box3}>
            <img src="/" alt="" />
            <img src="/Rectangle 225.png" alt="" className={styles.mainimg} />
            <img src="/" alt="" />
            <div className={styles.content}>
              <h3 className={styles.heads}>Active Community</h3>
              <p className={styles.writing}>
                WooCommerce is one of the fastest-growing eCommerce communities.{' '}
              </p>
              <a href="/">Check our Forums ›</a>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
};

export default Secondpage;
