import Head from 'next/head';
import styles from '../styles/Home.module.css';

import First from '../component/first/first';
import Second from '../component/first/second';
import Third from '../component/third/third';
import Fourth from '../component/Fourth/fourth';
export default function Home() {
  return (
    <div className={styles.container}>
      <First />
      <Second />
      <Third />
      <Fourth/>
    </div>
  );
}
