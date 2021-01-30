import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Nav from './component/nav';
import Footer from './component/footer'
import First from './component/first';
import Second from './component/second';
import Third from './component/third';
export default function Home() {
  return (
    <div className={styles.container}>
      <Nav />
      <First />
      <Second />
      <Third/>
      <main className={styles.main}></main>

      <Footer />
    </div>
  );
}
