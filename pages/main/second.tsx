import React, { useState } from 'react';
import styles from '../../styles/first.module.scss';

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
              <p className={styles.writing}>
                Add WooCommerce plugin to any WordPress site and set up a new
                store in minutes.
              </p>
              <a href="/">Ecommerce for Wordpress ›</a>
            </div>
          </div>
          <div className={styles.box2}>
            <img src="" alt="" />
            <img src="/Rectangle 224.png" alt="" className={styles.mainimg} />
            <img src="/image 17.png" alt="" className={styles.topright} />
            <img src="/image 18.png" alt="" className={styles.img3} />
            <img src="/image 19.png" alt="" className={styles.img2} />
            <img src="/image 20.png" alt="" className={styles.img5} />
            <img src="/image 22.png" alt="" className={styles.img4} />
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
            <img src="/Rectangle 225.png" alt="" className={styles.mainimg} />
            <img src="/" alt="" />
            <img src="/Rectangle 226.png" alt="" className={styles.leftimg} />
            <img src="/Rectangle 227.png" alt="" className={styles.topimg} />
            <img
              src="/Rectangle 228.png"
              alt=""
              className={styles.outsideimg}
            />
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
