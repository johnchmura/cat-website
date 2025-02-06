import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Next.js App</title>
        <meta name="description" content="A Next.js app with a basic navbar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.rectangle}></div>
      <div className={styles.page}>
        <main className={styles.main}>
          <h1>Welcome to My Next.js App</h1>
        </main>
      </div>
    </>
  );
}
