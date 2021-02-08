import Head from 'next/head';
import styles from '../styles/Home.module.css';


import First from './main/first';
import Second from './main/second';
import Third from './main/third';
import Fourth from './main/fourth';
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
