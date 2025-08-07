import Head from "next/head";
import styles from "./page.module.css";
import HomeContainer from "@/components/HomePage/Homepage";

export default function HomePage() {
  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '782761747563898');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=782761747563898&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
        
        {/* არსებული Head ტეგები */}
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