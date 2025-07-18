import Head from "next/head";
import styles from "./page.module.css";
import HomeContainer from "@/components/HomePage/Homepage";


export default function HomePage() {
  

  return (
    <>
      <Head>
        <title>Global Landing Page - Innovative Solutions Worldwide</title>
        <meta
          name="description"
          content="Explore our global platform offering innovative solutions, fast delivery, and premium customer service."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <meta name="p:domain_verify" content="66cea5ae5e9b52c325a007d740799c71"/>
        <meta
          name="keywords"
          content="global services, innovative solutions, fast delivery, premium customer service, landing page"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.container}>
       <HomeContainer />
      </main>
    </>
  );
}
