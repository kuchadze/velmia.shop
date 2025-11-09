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
  { label: "All Journals & eBooks", value: "all" },
  { label: "Self-Care Journals", value: "selfcare" },
  { label: "Self-Help eBooks", value: "ebook-self-care" },
  { label: "Shadow Work Journals", value: "shadow-work" },
  { label: "ADHD & Productivity Planners", value: "adhd-planner" },
  { label: "Gratitude Journals", value: "gratitude" },
  { label: "Mindset & Motivation", value: "mindset" },
  { label: "Budget & Finance Planners", value: "budgetplanner" },
  { label: "Hobby Journals", value: "notebook" },
  { label: "Travel Journals", value: "traveljournal" },
  { label: "Study & Student Planners", value: "studyplanner" },
  { label: "Coloring & Relaxation Books", value: "coloring-book" },
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
          Digital Self-Help Journals & eBooks for Mindset, Productivity & Inner Growth
        </h1>

        <p className={styles.description}>
          Explore premium self-growth journals, shadow work workbooks, 
          ADHD & productivity planners, and mindset eBooks designed to help you 
          build better habits, improve emotional well-being, and unlock your potential.  
          View previews and instantly access them via <strong>Gumroad</strong> or <strong>Amazon KDP</strong>.
        </p>

        <div className={styles.filterContainer}>
          <label htmlFor="categorySelect" className={styles.filterLabel}>
            Find Your Perfect Journal or eBook:
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
              <div key={card.id} className={styles.cardLink}>
                <article className={styles.card} tabIndex={0}>
                  <img
                    src={card.image}
                    alt={`Preview of ${card.title} digital journal or self-help eBook`}
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
                    View / Download
                  </a>
                </article>
              </div>
            ))}
          </section>

          {/* Show More Button */}
          {visibleCount < allCards.length && (
  <button onClick={handleShowMore} className={styles.showMoreButton}>
    ✨ Discover More Journals & eBooks ✨
  </button>
)}
</>
)}

      {/* Extra SEO Text Block (Hidden visually, good for indexing) */}
      <section className="seo-text" style={{ opacity: 0, height: 0 }}>
  Digital self-help journals, mindset eBooks, shadow work guides, ADHD planners,
  productivity trackers, emotional healing workbooks, gratitude journaling PDFs,
  printable and digital personal growth tools for instant download via Gumroad and Amazon KDP.
  Empower your healing, clarity, and growth journey with beautifully designed guided journals
  for self-reflection, habit building, manifestation, and mindful transformation.
</section>
    </>
  );
};

export default HomeContainer;
