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

const categories = [
  { label: "All Journals", value: "all" },
  { label: "Notebook", value: "notebook" },
  { label: "Self Care Journal", value: "selfcare" },
  { label: "Monthly Planner", value: "monthly-planner" },
  { label: "Coloring Book", value: "coloring-book" },
  { label: "sport journal", value: "sportjournal" },
];

// Utility function to shuffle array
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

const HomeContainer = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [allCards, setAllCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    setLoading(true);
    const endpoint =
      selectedCategory === "all"
        ? "https://velmia-shop-back.onrender.com/images"
        : `https://velmia-shop-back.onrender.com/images/${selectedCategory}`;

    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        const cardsToDisplay =
          selectedCategory === "all"
            ? shuffleArray(data) // shuffle randomly
            : data.sort((a: Card, b: Card) => b.id - a.id); // sort descending by ID

        setAllCards(cardsToDisplay);
        setVisibleCount(6); // Reset visible count on filter change
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch images:", err);
        setLoading(false);
      });
  }, [selectedCategory]);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1 className={styles.title}>
          Velmia – Exquisite Handmade Notebooks & Journals Crafted for You
        </h1>
        <p className={styles.description}>
          Welcome to Velmia.shop — your premier destination for exquisite
          handmade notebooks and journals. Explore uniquely crafted designs made
          with passion, perfect for writing, gifting, or organizing your
          thoughts.
        </p>

        {/* Dropdown */}
        <div className={styles.filterContainer}>
          <label htmlFor="categorySelect" className={styles.filterLabel}>
            Filter by Category:
          </label>
          <select
            id="categorySelect"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className={styles.dropdown}
          >
            {categories.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>
      </section>

      {/* Loading Spinner */}
      {loading ? (
        <div className={styles.loaderContainer}>
          <div className={styles.loader}></div>
        </div>
      ) : (
        <>
          {/* Cards */}
          <section className={styles.cardsGrid}>
            {allCards.slice(0, visibleCount).map((card) => (
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
            <button onClick={handleShowMore} className={styles.showMoreButton}>
              Show More
            </button>
          )}
        </>
      )}
    </>
  );
};

export default HomeContainer;
