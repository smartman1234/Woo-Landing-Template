import React, { useState } from 'react';
import styles from './nav.module.scss';

const Navbar = () => {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.header}>
          <div className={styles.brand}>
            <img src="/LOGO.png" alt="Logo" />
          </div>
          <ul className={styles.menu}>
            <li className={styles.link}>
              <a href="/">Sell</a>
            </li>
            <li className={styles.link}>
              <a href="/">Marketplace</a>
            </li>
            <li className={styles.link}>
              <a href="/">Community</a>
            </li>
            <li className={styles.link}>
              <a href="/">Develop</a>
            </li>
            <li className={styles.link}>
              <a href="/">Resources</a>
            </li>
          </ul>
        </div>

        <div className={styles.side}>
          <a href="/">Login</a>
          <button className={styles.btn}>
            <span>Get started</span>
          </button>
          <a href="/">
            <img src="/icon.png" className={styles.search} />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
