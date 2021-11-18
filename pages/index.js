import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home = () => (
  <div className={styles.container}>
    <Head>
      <title>Tuitster</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1 className={styles.title}>Tuitster</h1>
    </main>
  </div>
);

export default Home;
