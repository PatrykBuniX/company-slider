import type { NextPage } from "next";
import Head from "next/head";
import { CompanySlider } from "../components/CompanySlider/CompanySlider";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>CompanySlider</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.heading}>Company Slider</h1>
        <p className={styles.text}>
          Highly inspired by <a href="https://nextjs.org/">nextjs.org</a> page.
        </p>
        <CompanySlider />
      </main>
    </div>
  );
};

export default Home;
