import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Nav from './component/nav'
export default function Home() {
  return (
    <div className={styles.container}>
      <Nav/>

      <main className={styles.main}>  
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
