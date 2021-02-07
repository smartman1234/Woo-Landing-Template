import React, { useState } from 'react';
import styles from '../../styles/fourth.module.scss';

const Fourthpage = () => {
  return (
    <div className={styles.fourth}>
      <div className={styles.fourthtop}>
        <div className={styles.write}>
          <h2>Trusted by Agencies & Store Owners</h2>
          <img src="/testim.png" className={styles.testim} />
        </div>

        <div>
          <img src="/.png" className={styles.fourthimg5} />
          <img src="/imgage 24.png" className={styles.fourthimg6} />
          <img src="/imgage 24.png" className={styles.fourthimg7} />
          <img src="/imgage 24.png" className={styles.fourthimg8} />
          <img src="/imgage 24.png" className={styles.fourthimg9} />
          <img src="/imgage 24.png" className={styles.fourthimg10} />
        </div>
        <div>
          <img src="/imgage 24.png" className={styles.fourthimg1} />
          <img src="/imgage 24.png" className={styles.fourthimg2} />
          <img src="/imgage 24.png" className={styles.fourthimg3} />
          <img src="/imgage 24.png" className={styles.fourthimg4} />
        </div>
      </div>
      <div className={styles.last}>
        <img src="/imgage 24.png" className={styles.mediumcircle} />
        <img src="/imgage 24.png" className={styles.smallcircle} />
        <img src="/imgage 24.png" className={styles.dots} />
        <div className={styles.lastbox}>
          <h2>Supported by real people</h2>
          <p>
            Our team of Happiness Engineers works remotely from 58 countries
            providing customer support across multiple time zones.
          </p>
          <img src="/backdrop.png" className={styles.backdrop} />
          <img src="/image 24.png" className={styles.lastboximg} />
        </div>
        <img src="/imgage 24.png" className={styles.dots} />
        <img src="/imgage 24.png" className={styles.circle} />
      </div>
    </div>
  );
};

export default Fourthpage;
