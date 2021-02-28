import React, { useState } from 'react';
import styles from './footer.module.scss';

interface FooterLink {
  title: string;
  href: string;
}
interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: 'WHO WE ARE',
    links: [
      { title: 'About MNTN', href: '/' },
      { title: 'About', href: '/' },
      { title: 'Team', href: '/' },
      { title: 'Write For Us', href: '/' },
    ],
  },
  {
    title: 'Woocommerce',
    links: [
      { title: 'Payments', href: '/' },
      { title: 'Marketing', href: '/' },
      { title: 'Shipping', href: '/' },
      { title: 'Extension Store', href: '/' },
      { title: 'eCommerce blog', href: '/' },
      { title: 'Ideas board ', href: '/' },
      { title: 'Mobile App ', href: '/' },
      { title: 'Style Guide ', href: '/' },
      { title: 'Email Newsletter', href: '/' },
    ],
  },
  {
    title: 'OTHER PRODUCTS',
    links: [
      { title: 'Storefront', href: '/' },
      { title: 'WooSlider ', href: '/' },
      { title: 'Sensei', href: '/' },
      { title: 'Sensei Extensions', href: '/' },
    ],
  },
  {
    title: 'SUPPORT',
    links: [
      { title: 'Customizations ', href: '/' },
      { title: 'Support Policy', href: '/' },
      { title: 'Contact', href: '/' },
      { title: 'COVID-19 Resources ', href: '/' },
      { title: 'Privacy Notice for', href: '/' },
      { title: 'California Users<', href: '/' },
      { title: 'Mobile App ', href: '/' },
      { title: 'Style Guide ', href: '/' },
      { title: 'Email Newsletter', href: '/' },
    ],
  },
  {
    title: 'WE RECOMMEND',
    links: [
      { title: 'Hosting Solutions ', href: '/' },
      { title: 'Pre-sales FAQ', href: '/' },
      { title: ' Success Stories', href: '/' },
      { title: ' Design Feedback Group ', href: '/' },
    ],
    
  },
];

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
            <p>
              30 day <b>money back guarantee</b>
            </p>
          </div>
          <div className={styles.inner}>
            <img src="/Union.png" alt="auto" />
            <p>
              <b>Support </b>teams across the world
            </p>
          </div>
          <div className={styles.inner}>
            <img src="/Union2.png" alt="auto" />
            <p>
              <b>Safe & Secure</b> online payment
            </p>
          </div>
        </div>
        <div className={styles.second}>
          <img src="/LOGO2.png" />
        </div>

        <div className={styles.Third}>
          {footerSections.map(({ title, links }) => (
            <section key={title} className={styles.text}>
              <h3>{title}</h3>
              <ul>
                {links.map((link) => (
                  <li key={link.title}>
                    <a href={link.href} className={styles.list}>
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
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
