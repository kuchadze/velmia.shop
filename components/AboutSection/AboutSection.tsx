"use client";

import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section className={styles.about} aria-labelledby="about-velmia-title">
      <div className={styles.container}>
        {/* მთავარი სათაური SEO-სთვის */}
        <h1 id="about-velmia-title" className={styles.title}>
          About Velmia – Handmade Journals & Journaling Experiences
        </h1>

        {/* დეტალური აღწერა საკვანძო სიტყვებით */}
        <p className={styles.text}>
          Velmia is your trusted destination for thoughtfully designed, premium
          <strong> handmade notebooks</strong>, <strong>journals</strong>, and
          <strong> planners</strong>. Each piece combines creativity, style, and
          function, crafted to inspire your writing, self-reflection, and daily
          planning. Whether you're journaling, planning, or giving a meaningful
          gift, Velmia notebooks make every page a moment of joy.
        </p>

        <h2 className={styles.subtitle}>Why Choose Velmia?</h2>
        <p className={styles.text}>
          Our curated selection emphasizes high-quality materials, elegant
          design, and attention to detail. Velmia notebooks and journals
          encourage personal growth, mindfulness, and creative exploration.
          Perfect for writers, dreamers, and creators alike, each product helps
          transform everyday journaling into an inspiring, purposeful
          experience. Fast worldwide shipping ensures your favorite journals
          reach you quickly.
        </p>

        {/* სოციალური ლინკები – aria-label დამატებული */}
        <nav
          className={styles.socials}
          aria-label="Velmia social media links"
          role="navigation"
        >
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

          {/* Instagram */}
          <a
            href="https://www.instagram.com/velmia.shop/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className={styles.socialLink}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#E4405F"
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.403a4.92 4.92 0 0 1 1.675 1.09 4.92 4.92 0 0 1 1.09 1.675c.163.46.347 1.26.403 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.403 2.43a4.92 4.92 0 0 1-1.09 1.675 4.92 4.92 0 0 1-1.675 1.09c-.46.163-1.26.347-2.43.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.403a4.902 4.902 0 0 1-2.765-2.765c-.163-.46-.347-1.26-.403-2.43-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.056-1.17.24-1.97.403-2.43a4.902 4.902 0 0 1 2.765-2.765c.46-.163 1.26-.347 2.43-.403 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.333.013 7.053.072 5.773.131 4.726.346 3.85.725a7.044 7.044 0 0 0-2.548 1.662A7.044 7.044 0 0 0 .725 4.935C.346 5.812.131 6.859.072 8.139.013 9.419 0 9.827 0 13.087s.013 3.668.072 4.948c.059 1.28.274 2.327.653 3.204a7.044 7.044 0 0 0 1.662 2.548 7.044 7.044 0 0 0 2.548 1.662c.877.379 1.924.594 3.204.653 1.28.059 1.688.072 4.948.072s3.668-.013 4.948-.072c1.28-.059 2.327-.274 3.204-.653a7.044 7.044 0 0 0 2.548-1.662 7.044 7.044 0 0 0 1.662-2.548c.379-.877.594-1.924.653-3.204.059-1.28.072-1.688.072-4.948s-.013-3.668-.072-4.948c-.059-1.28-.274-2.327-.653-3.204a7.044 7.044 0 0 0-1.662-2.548A7.044 7.044 0 0 0 20.15.725c-.877-.379-1.924-.594-3.204-.653C15.667.013 15.259 0 12 0zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
            </svg>
            <span>Instagram</span>
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
      </div>
    </section>
  );
}
