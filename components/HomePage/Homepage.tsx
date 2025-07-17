"use client";

import { useState } from "react";
import allCards from "@/dumy/data"; // Adjust the import path as necessary
import styles from "../HomePage/Homepage.module.css";

const HomeContainer = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <>
      {/* Header section */}
      <section className={styles.heroSection}>
        <img src="./images/Velmia-horizontal.png" alt="Company Logo" className={styles.logo} />
        <h1 className={styles.title}>Velmia – Discover Premium Journals & Notebooks with Easy Purchase Links</h1>
        <p className={styles.description}>
          Welcome to Velmia.shop! Explore a curated collection of high-quality journals and notebooks. Find your perfect product with direct, easy purchase links and enjoy fast shipping worldwide.
        </p>
      </section>

      {/* Cards section */}
      <section className={styles.cardsGrid} aria-label="Our services and features">
        {allCards.slice(0, visibleCount).map((card) => (
          <a
            key={card.id}
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cardLink}
          >
            <article className={styles.card} tabIndex={0}>
              <img src={card.imageUrl} alt={card.title} className={styles.cardImage} />
              <h2 className={styles.cardTitle}>{card.title}</h2>
            </article>
          </a>
        ))}
      </section>

      {/* Show More button */}
      {visibleCount < allCards.length && (
        <button
          onClick={handleShowMore}
          className={styles.showMoreButton}
          aria-label="Show more cards"
        >
          Show More
        </button>
      )}
    </>
  );
};

export default HomeContainer;
