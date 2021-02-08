import React, { useState } from 'react';
import styles from '../../styles/fourth.module.scss';

const Fourthpage = () => {
  return (
    <div className={styles.fourth}>
      <div className={styles.fourthtop}>
        <div className={styles.write}>
          <h2>Trusted by Agencies & Store Owners</h2>
        </div>

        <div>
          <img src="/group 5 (1).png" className={styles.fourthimg9} />
          <img src="/group 7 1.png" className={styles.fourthimg5} />
          <img src="/ellipse 15.png" className={styles.fourthimg6} />
          <img src="/ellipse 27.png" className={styles.fourthimg7} />
          <img src="/ellipse 26.png" className={styles.fourthimg8} />
        </div>
        <div>
          <img src="/group 6.png" className={styles.fourthimg1} />
          <img src="/ellipse 29.png" className={styles.fourthimg2} />
          <img src="/ellipse 28.png" className={styles.fourthimg3} />
          <img src="/ellipse 30.png" className={styles.fourthimg4} />
        </div>
        <img src="/testim.png" className={styles.testim} />
        <img src="/Union (2).png" className={styles.arrow1} />
        <img src="/Union (1) copy.png" className={styles.arrow2} />
      </div>
      <div className={styles.last}>
        <img src="/ellipse 36.png" className={styles.mediumcircle} />
        <img src="/ellipse 32.png" className={styles.smallcircle} />
        <img src="group 13.png" className={styles.dots1} />
        <div className={styles.lastbox}>
          <h2>Supported by real people</h2>
          <p>
            Our team of Happiness Engineers works remotely from 58 countries
            providing customer support across multiple time zones.
          </p>
          <img src="/group 5.png" className={styles.circle} />
          <img src="/backdrop.png" className={styles.backdrop} />
          <img src="/image 24.png" className={styles.lastboximg} />
        </div>
        <img src="/ellipse 34.png" className={styles.dots} />
      </div>
    </div>
  );
};

export default Fourthpage;
