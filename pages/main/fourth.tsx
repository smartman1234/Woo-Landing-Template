import React, { useState } from 'react';
import styles from '../../styles/fourth.module.scss';

const Fourthpage = () => {
  return (
    <div className={styles.fourth}>
      <div className={styles.fourthtop}>
       
        <h2>Trusted by Agencies & Store Owners</h2>
        <h2>Trusted by Agencies & Store Owners</h2>
        <img src="/imgage 24.png" />
        <div>
          <img src="/imgage 24.png" className={styles.fourthimg5} />
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
        <img src="/imgage 24.png" />
        <img src="/imgage 24.png" />
        <img src="/imgage 24.png" />
        <div className={styles.lastbox}>
          <h2>Supported by real people</h2>
          <p>
            Our team of Happiness Engineers works remotely from 58 countries
            providing customer support across multiple time zones.
          </p>
          <img src="/imgage 24.png" />
        </div>
        <img src="/imgage 24.png" />
        <img src="/imgage 24.png" />
      </div>
    </div>
  );
};

export default Fourthpage;
