"use client";

import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h1 className={styles.title}>About Velmia</h1>
        <p className={styles.text}>
          Velmia is your trusted source for curated design, thoughtful content,
          and impactful digital experiences. Our mission is to blend creativity
          with functionality to craft platforms that truly resonate with users.
        </p>
        <p className={styles.text}>
          Built with care, driven by passion, and designed with the user in mind
          — Velmia is more than a name, it's an experience.
        </p>
      </div>
    </section>
  );
}
