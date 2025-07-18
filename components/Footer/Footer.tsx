import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <img
            src="/images/Velmia-horizontal.png"
            alt="Velmia Logo"
            className={styles.logo}
          />
          <div className={styles.taglineContainer}>
            <p className={styles.tagline}>
              Velmia – Curated Premium Journals & Notebooks with Easy Purchase Links
            </p>
          </div>
        </div>

        <nav className={styles.socials}>
          {/* Facebook */}
          <a
            href="https://www.facebook.com/velmia.shop"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className={styles.socialLink}
          >
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

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/velmia-shop/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={styles.socialLink}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#0077B5"
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M20.447 20.452H17.21v-5.569c0-1.328-.025-3.037-1.851-3.037-1.851 0-2.135 1.445-2.135 2.939v5.667H9.084V9h3.105v1.561h.045c.433-.82 1.491-1.685 3.069-1.685 3.283 0 3.888 2.16 3.888 4.971v6.605zM5.337 7.433c-.997 0-1.807-.811-1.807-1.81s.81-1.808 1.807-1.808c.997 0 1.807.81 1.807 1.808s-.81 1.81-1.807 1.81zM6.789 20.452H3.886V9h2.903v11.452zM22.225 0H1.771C.792 0 0 .77 0 1.723v20.555C0 23.23.792 24 1.771 24h20.451C23.2 24 24 23.23 24 22.278V1.723C24 .77 23.2 0 22.225 0z" />
            </svg>
            <span>LinkedIn</span>
          </a>

          {/* Pinterest */}
          <a
            href="https://www.pinterest.com/velmiashop/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pinterest"
            className={styles.socialLink}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#E60023"
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.022 3.135 9.304 7.594 11.01-.105-.935-.2-2.371.042-3.393.218-.922 1.404-5.875 1.404-5.875s-.358-.715-.358-1.771c0-1.659.962-2.9 2.161-2.9 1.019 0 1.51.764 1.51 1.68 0 1.023-.654 2.552-.99 3.973-.281 1.193.596 2.165 1.767 2.165 2.121 0 3.758-2.237 3.758-5.447 0-2.837-2.041-4.819-4.955-4.819-3.376 0-5.356 2.523-5.356 5.137 0 1.022.393 2.12.884 2.716a.357.357 0 01.082.345c-.09.379-.293 1.193-.333 1.36-.053.214-.172.26-.399.157-1.485-.688-2.412-2.858-2.412-4.604 0-3.749 2.724-7.193 7.862-7.193 4.121 0 7.321 2.942 7.321 6.872 0 4.109-2.59 7.423-6.195 7.423-1.209 0-2.345-.628-2.733-1.37l-.742 2.825c-.269 1.035-1 2.33-1.49 3.117 1.124.349 2.312.539 3.548.539 6.627 0 12-5.373 12-12S18.627 0 12 0z" />
            </svg>
            <span>Pinterest</span>
          </a>
        </nav>

        <p className={styles.copy}>
          &copy; {new Date().getFullYear()} Velmia. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
