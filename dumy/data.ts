// src/data/dummy.ts

export interface CardData {
  id: number;
  title: string;
  imageUrl: string;
  alt: string
  link: string;
}

const allCards: CardData[] = [
  {
    id: 1,
    title: "Five Minutes of Me: A Daily Guided Journal for Mindfulness, Gratitude, and Self-Care",
    imageUrl: "./images/minute-jornal.png",
    alt: "Five Minutes of Me Journal",
    link: "https://www.amazon.com/dp/B0FGY5JMG3", 
  },
  {
    id: 2,
    title: "Daily Focus Journal for Adults with ADHD: 60-Day Guided Planner to Prioritize Tasks, Improve Focus, and Track Daily Progress",
    imageUrl: "../images/ADHD-cover.png",
    alt: "Daily Focus Journal for Adults with ADHD",
    link: "https://www.amazon.com/dp/B0FH9MCX1H",
  },
  {
    id: 3,
    title: "The Self-Care Journal: Daily Prompts and Reflections for a Healthier, Happier You",
    imageUrl: "../images/Self-care.png",
    alt: "Self-Care Journal",
    link: "https://www.amazon.com/dp/B0FHG24WRS",
  },
  {
    id: 4,
    title: "Manifestation Journal: Daily Manifestation Planner to Attract Abundance, Set Intentions & Create the Life You Desire",
    imageUrl: "../images/Manifestation.png",
    alt: "Manifestation Journal",
    link: "https://www.amazon.com/dp/B0FHGXL5YF",
  },
  {
    id: 5,
    title: "2026 Monthly Planner: 12-Month Calendar with Monthly Goals, To-Do Lists, and Notes – January to December",
    imageUrl: "../images/2026.png",
    alt: "2026 Monthly Planner",
    link: "https://www.amazon.com/dp/B0FHK6FTKV",
  },
  {
    id: 6,
    title: "Fun & Friendly Coloring Book: A Wholesome Mix of Animals, Fantasy, and Everyday Scenes to Color",
    imageUrl: "../images/coloring-book-cover.png",
    alt: "Fun & Friendly Coloring Book",
    link: "https://www.amazon.com/dp/B0FHQTQJY1",
  },
   {
    id: 7,
    title: "Monthly Planner: Boost Focus, Manage Time & Get Things Done",
    imageUrl: "../images/Monthly-planner.png",
    alt: "Monthly Planner",
    link: "https://www.amazon.com/dp/B0FHZJ6ZZZ",
  },
  // სხვა ბარათები...
];

export default allCards;
