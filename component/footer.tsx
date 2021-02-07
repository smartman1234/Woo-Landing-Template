import React, { useState } from 'react';
import styles from '../styles/footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topfooter}>
        <div>
          <p className={styles.topfooterp}>
            WooCommerce - the most customizable eCommerce platform for building
            your online business.
          </p>
        </div>

        <div>
          <button className={styles.topbtn}>GET STARTED</button>
        </div>
      </div>
      <main className={styles.main}>
        <div className={styles.first}>
          <div className={styles.inner}>
            <img src="/Vector.png" alt="auto" />
            <p> 30 day money back guarantee</p>
          </div>
          <div className={styles.inner}>
            <img src="/Union.png" alt="auto" />
            <p> Support teams across the world</p>
          </div>
          <div className={styles.inner}>
            <img src="/Union2.png" alt="auto" />
            <p> Safe & Secure online payment</p>
          </div>
        </div>
        <div className={styles.second}>
          <img src="/LOGO2.png" />
        </div>

        <div className={styles.Third}>
          <div className={styles.text}>
            <h3>WHO WE ARE</h3>
            <p>About </p>
            <p> Team</p>
            <p>Work With Us</p>
          </div>
          <div className={styles.text}>
            <h3>Woocommerce</h3>
            <p>Features </p>
            <p>Payments</p>
            <p>Marketing</p>
            <p>Shipping</p>
            <p>Extension Store</p>
            <p>eCommerce blog</p>
            <p>Development blog</p>
            <p>Ideas board </p>
            <p>Mobile App </p>
            <p>Style Guide </p>
            <p> Email Newsletter</p>
          </div>

          <div className={styles.text}>
            <h3>OTHER PRODUCTS</h3>
            <p>Storefront </p>
            <p>WooSlider </p>
            <p>Sensei </p>
            <p>Sensei Extensions</p>
          </div>
          <div className={styles.text}>
            <h3>SUPPORT</h3>
            <p> Documentation</p>
            <p> Customizations </p>
            <p>Support Policy</p>
            <p> Contact </p>
            <p>COVID-19 Resources </p>
            <p>Privacy Notice for </p>
            <p>California Users</p>
          </div>
          <div className={styles.text}>
            <h3>WE RECOMMEND</h3>
            <p>WooExperts</p>
            <p>Hosting Solutions</p>
            <p>Pre-sales FAQ</p>
            <p> Success Stories</p>
            <p> Design Feedback Group</p>
          </div>
        </div>
      </main>
      <div className={styles.bottom}>
        <div className={styles.social}>
          <img src="/twitter.png" alt="auto" />
          <img src="/facebook.png" alt="auto" />
          <img src="/wifi.png" alt="auto" />
          <img src="/insta.png" alt="auto" />
        </div>
        <div className={styles.copy}>
          <a>
            COPYRIGHT WOOCOMMERCE 2020 -{' '}
            <span className={styles.span}> TERMS & CONDITIONS</span>
            <span className={styles.span2}> PRIVACY POLICY</span>
          </a>
        </div>
        <div className={styles.imgbottom}>
          <img src="/image 25.png" alt="auto" />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
