import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Nav from './component/nav';
import Footer from './component/footer'
import First from './component/first';
export default function Home() {
  return (
    <div className={styles.container}>
      <Nav />
<First/>
      <main className={styles.main}></main>

      <Footer />
    </div>
  );
}
