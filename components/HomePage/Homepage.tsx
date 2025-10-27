"use client";

import { useEffect, useState } from "react";
import Head from "next/head"; // Only if you're using Next.js
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
  { label: "Self-Care Ebook", value: "ebook-self-care" },
  { label: "Coloring Book", value: "coloring-book" },
  { label: "Sport Journal", value: "sportjournal" },
  { label: "Travel Journal", value: "traveljournal" },
  { label: "Study Planner", value: "studyplanner" },
  { label: "Meal Planner", value: "mealplanner" },
  { label: "Budget Planner", value: "budgetplanner" },
];

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
            ? shuffleArray(data)
            : data.sort((a: Card, b: Card) => b.id - a.id);

        setAllCards(cardsToDisplay);
        setVisibleCount(6);
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
      <section className={styles.heroSection}>
        <h1 className={styles.title}>
          Velmia – Exquisite Handmade Notebooks & Journals Crafted for You
        </h1>
        <p className={styles.description}>
          Welcome to Velmia.shop — your destination for{" "}
          <strong>handmade journals</strong>,{" "}
          <strong>gratitude planners</strong>, and{" "}
          <strong>aesthetic notebooks</strong> crafted with care. Perfect for
          writing, planning, self-care, or gifting.
        </p>

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

      {/* Section Heading */}
      <section>
        <h2 className={styles.subTitle}>
          Browse Our Exclusive Handmade Journal Collection
        </h2>
      </section>

      {/* Loader */}
      {loading ? (
        <div className={styles.loaderContainer}>
          <div className={styles.loader}></div>
        </div>
      ) : (
        <>
          {/* Cards */}
          <section className={styles.cardsGrid}>
            {allCards.slice(0, visibleCount).map((card) => (
              <div
                key={card.id}
                rel="noopener noreferrer"
                className={styles.cardLink}
              >
                <article className={styles.card} tabIndex={0}>
                  <img
                    src={card.image}
                    alt={`Velmia ${card.title} journal preview`}
                    className={styles.cardImage}
                  />
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <a
                    href={
                      card.link.startsWith("http")
                        ? card.link
                        : `https://${card.link}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.buyButton}
                  >
                    Buy Now
                  </a>
                </article>
              </div>
            ))}
          </section>

          {/* Show More Button */}
          {visibleCount < allCards.length && (
            <button onClick={handleShowMore} className={styles.showMoreButton}>
              Show More Journals
            </button>
          )}
        </>
      )}
    </>
  );
};

export default HomeContainer;
