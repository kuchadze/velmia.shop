"use client";

import { useState } from "react";
import allCards from "@/dumy/data"; // Ensure alt/title included in data
import styles from "../HomePage/Homepage.module.css";

const HomeContainer = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1 className={styles.title}>
          Velmia – Premium Handmade Notebooks & Journals | Shop Online Worldwide
        </h1>
        <p className={styles.description}>
          Welcome to Velmia.shop — your destination for premium handmade
          notebooks and journals. Discover unique designs crafted with care,
          ideal for writing, gifting, or organizing your ideas. Shop online with
          secure checkout and fast international shipping.
        </p>
      </section>

      {/* Cards Section */}
      <section
        className={styles.cardsGrid}
        aria-label="Our handmade notebook collection"
      >
        {[...allCards]
          .reverse()
          .slice(0, visibleCount)
          .map((card) => (
            <a
              key={card.id}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cardLink}
            >
              <article className={styles.card} tabIndex={0}>
                <img
                  src={card.imageUrl}
                  alt={card.alt}
                  className={styles.cardImage}
                />
                <h2 className={styles.cardTitle}>{card.title}</h2>
              </article>
            </a>
          ))}
      </section>

      {/* Show More Button */}
      {visibleCount < allCards.length && (
        <button
          onClick={handleShowMore}
          className={styles.showMoreButton}
          aria-label="Show more notebooks"
        >
          Show More
        </button>
      )}
    </>
  );
};

export default HomeContainer;
