import styles from "./Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Image
            src="/images/Velmia-horizontal.png"
            alt="Velmia Logo"
            className={styles.logo}
          />
          <div className={styles.taglineContainer}>
            <p className={styles.tagline}>
              Velmia – Curated Premium Journals & Notebooks with Easy Purchase
              Links
            </p>
          </div>
        </div>

        <nav className={styles.socials}>
          <a
            href="https://www.facebook.com/velmia.shop"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className={styles.socialLink}
          >
            {/* Facebook SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#4267B2"
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M22.675 0h-21.35C.595 0 0 .593 0 1.326v21.348C0 23.406.595 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.466.099 2.798.143v3.24l-1.92.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.59l-.467 3.622h-3.123V24h6.116c.73 0 1.324-.594 1.324-1.326V1.326C24 .593 23.405 0 22.675 0z" />
            </svg>
            <span>Facebook</span>
          </a>
          {/* შეგიძლია დაამატო სხვა სოციალური ქსელებიც აქ */}
        </nav>

        <p className={styles.copy}>
          &copy; {new Date().getFullYear()} Velmia. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
