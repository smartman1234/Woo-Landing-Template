import React, { useState } from 'react';
import styles from '../../styles/third.module.scss';

const Secondpage = () => {
  return (
    <main className={styles.container}>
      <div>
        <div className={styles.boldtop}>
          <div className={styles.float1}>
            <img src="/Ellipse 31.png" alt="" className={styles.bigelip} />
            <img src="/Group 7.png" alt="" className={styles.group7} />
            <img src="/Ellipse 32.png" alt="" className={styles.smallelip} />
            <img
              src="/Rectangle 236.png"
              alt=""
              className={styles.imgrightbig}
            />
          </div>
          <div className={styles.textbox1}>
            <h3 className={styles.heading1}>Develop Without Limits</h3>
            <p className={styles.writeup}>
              WooCommerce is developer friendly, too. Built with a REST API,
              WooCommerce is scalable and can integrate with virtually any
              service. Design a complex store from scratch, extend a store for a
              client, or simply add a single product to a WordPress site—your
              store, your way.
            </p>
            <button className={styles.btn}>Read the Documentation</button>
          </div>
          <img src="/union23.png" alt="" className={styles.imgleft} />
        </div>
        <div className={styles.boldbottom}>
          <div className={styles.textbox2}>
            <h3 className={styles.heading2}>Know our Global Community</h3>
            <p className={styles.writeup}>
              WooCommerce is one of the fastest-growing eCommerce communities.
              We’re proud that the helpfulness of the community and a wealth of
              online resources are frequently cited as reasons our users love
              it. There are 80+ meetups worldwide!
            </p>
            <button className={styles.btn}>Read the Documentation</button>
          </div>

          <div className={styles.float2}>
            <img src="/Ellipse 34.png" alt="" className={styles.mediumelip} />
            <img src="/Group 8.png" alt="" className={styles.group8} />
            <img
              src="/Rectangle 233.png"
              alt=""
              className={styles.imgrightbig2}
            />

            <img src="/Ellipse 33.png" alt="" className={styles.smallelip2} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Secondpage;
