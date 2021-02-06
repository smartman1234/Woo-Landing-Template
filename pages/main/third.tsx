import React, { useState } from 'react';
import styles from '../../styles/third.module.scss';

const Secondpage = () => {
  return (
    <main className={styles.container}>
      <div className={styles.boldtop}>
        <div>
          <img src="/" alt="" className={styles.imgright} />
          <img src="/" alt="" className={styles.imgright} />
          <img src="/" alt="" className={styles.imgright} />
          <img src="/" alt="" className={styles.imgleft} />
        </div>
        <div>
          <h3>Develop Without Limits</h3>
          <p>
            WooCommerce is developer friendly, too. Built with a REST API,
            WooCommerce is scalable and can integrate with virtually any
            service. Design a complex store from scratch, extend a store for a
            client, or simply add a single product to a WordPress site—your
            store, your way.
          </p>
          <button>Read the Documentation</button>
        </div>
      </div>
      <div className={styles.boldbottom}>
        <div>
          <h3>Know our Global Community</h3>
          <p>
            WooCommerce is one of the fastest-growing eCommerce communities.
            We’re proud that the helpfulness of the community and a wealth of
            online resources are frequently cited as reasons our users love it.
            There are 80+ meetups worldwide!
          </p>
          <button>Read the Documentation</button>
        </div>

        <div>
          <img src="/" alt="" className={styles.imgright} />
          <img src="/" alt="" className={styles.imgright} />
          <img src="/" alt="" className={styles.imgright} />
          <img src="/" alt="" className={styles.imgright} />
        </div>
      </div>
    </main>
  );
};

export default Secondpage;
