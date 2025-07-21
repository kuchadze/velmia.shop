"use client";

import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h1 className={styles.title}>About Velmia</h1>
        <p className={styles.text}>
          Velmia is your trusted source for curated design, thoughtful content,
          and impactful digital experiences. Its mission is to blend creativity
          with functionality — built with care, driven by passion, and designed
          with the user in mind.
        </p>

        <h2 className={styles.subtitle}>Why Choose Velmia?</h2>
        <p className={styles.text}>
          Velmia offers a curated selection of premium, handmade notebooks and
          journals designed for writers, creators, and dreamers. Each piece is
          made with attention to detail and high-quality materials. Whether
          you're journaling daily, sketching ideas, or looking for a thoughtful
          gift, Velmia notebooks bring beauty and purpose to your writing
          journey. Enjoy fast worldwide shipping and a seamless online shopping
          experience.
        </p>
      </div>
    </section>
  );
}
