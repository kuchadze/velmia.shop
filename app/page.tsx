import Head from "next/head";
import styles from "./page.module.css";
import HomeContainer from "@/components/HomePage/Homepage";

export default function HomePage() {
  return (
    <>
      <Head>
        <meta
          property="og:title"
          content="Global Landing Page - Innovative Solutions Worldwide"
        />
        <title>Global Landing Page - Innovative Solutions Worldwide</title>
        <meta
          name="description"
          content="Explore our global platform offering innovative solutions, fast delivery, and premium customer service."
        />
        <meta
          property="og:description"
          content="Explore our global platform offering innovative solutions, fast delivery, and premium customer service."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://velmia.shop" />
        <meta
          property="og:image"
          content="https://velmia.shop/path-to-your-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Global Landing Page - Innovative Solutions Worldwide"
        />
        <meta
          name="twitter:description"
          content="Explore our global platform offering innovative solutions, fast delivery, and premium customer service."
        />
        <meta
          name="twitter:image"
          content="https://velmia.shop/path-to-your-image.jpg"
        />
        <link rel="icon" href="/favicon.ico" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Global Landing Page - Innovative Solutions Worldwide",
              url: "https://velmia.shop",
              description:
                "Explore our global platform offering innovative solutions, fast delivery, and premium customer service.",
              image: "../images/Velmia-horizontal-logo.webp",
            }),
          }}
        />
      </Head>

      <main className={styles.container}>
        <HomeContainer />
      </main>
    </>
  );
}
