"use client";

import { useEffect, useState } from "react";
import styles from "../HomePage/Homepage.module.css";

type Card = {
  id: number;
  title: string;
  image: string;
  alt: string;
  link: string;
};

const HomeContainer = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [allCards, setAllCards] = useState<Card[]>([]);
  console.log("All cards:", allCards);
  

  // მონაცემების ფეტჩი
  useEffect(() => {
    fetch("https://velmia-shop-back.onrender.com/images")
      .then((res) => res.json())
      .then((data) => setAllCards(data))
      .catch((err) => {
        console.error("Failed to fetch images:", err);
      });
  }, []);

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
  .sort((a, b) => b.id - a.id) // 👈 უკუღმა დალაგება: id დიდიდან პატარასკენ
  .slice(0, visibleCount)
  .map((card) =>  (
            <a
              key={card.id}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cardLink}
            >
              <article className={styles.card} tabIndex={0}>
                <img
                  src={card.image}
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
