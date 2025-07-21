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
    imageUrl: "./images/minute-jornal.webp",
    alt: "Five Minutes of Me Journal",
    link: "https://www.amazon.com/dp/B0FGY5JMG3", 
  },
  {
    id: 2,
    title: "Daily Focus Journal for Adults with ADHD: 60-Day Guided Planner to Prioritize Tasks, Improve Focus, and Track Daily Progress",
    imageUrl: "../images/ADHD-cover.webp",
    alt: "Daily Focus Journal for Adults with ADHD",
    link: "https://www.amazon.com/dp/B0FH9MCX1H",
  },
  {
    id: 3,
    title: "The Self-Care Journal: Daily Prompts and Reflections for a Healthier, Happier You",
    imageUrl: "../images/Self-care.webp",
    alt: "Self-Care Journal",
    link: "https://www.amazon.com/dp/B0FHG24WRS",
  },
  {
    id: 4,
    title: "Manifestation Journal: Daily Manifestation Planner to Attract Abundance, Set Intentions & Create the Life You Desire",
    imageUrl: "../images/Manifestation.webp",
    alt: "Manifestation Journal",
    link: "https://www.amazon.com/dp/B0FHGXL5YF",
  },
  {
    id: 5,
    title: "2026 Monthly Planner: 12-Month Calendar with Monthly Goals, To-Do Lists, and Notes – January to December",
    imageUrl: "../images/2026.webp",
    alt: "2026 Monthly Planner",
    link: "https://www.amazon.com/dp/B0FHK6FTKV",
  },
  {
    id: 6,
    title: "Fun & Friendly Coloring Book: A Wholesome Mix of Animals, Fantasy, and Everyday Scenes to Color",
    imageUrl: "../images/coloring-book-cover.webp",
    alt: "Fun & Friendly Coloring Book",
    link: "https://www.amazon.com/dp/B0FHQTQJY1",
  },
   {
    id: 7,
    title: "Monthly Planner: Boost Focus, Manage Time & Get Things Done",
    imageUrl: "../images/Monthly-planner.webp",
    alt: "Monthly Planner",
    link: "https://www.amazon.com/dp/B0FHZJ6ZZZ",
  },
  {
    id: 8,
    title: "ALWAYS BELIVE THAT SOMETHING WONDERFUL IS ABOUT TO HAPPEN: Mindset Transformation Journal: Embrace Joy, Attract Abundance, and Trust the Journey Ahead",
    imageUrl: "../images/always-belive-blue.webp",
    alt: "Always Believe That Something Wonderful Is About to Happen",
    link: "https://www.amazon.com/dp/B0FJ6WMLHR",
  },
  {
    id: 9,
    title: "ALWAYS BELIVE THAT SOMETHING WONDERFUL IS ABOUT TO HAPPEN.: A Guided Journal for Cultivating Optimism, Achieving Goals, and Embracing a Positive Future",
    imageUrl: "../images/always-belive-gold.webp",
    alt: "Always Believe That Something Wonderful Is About to Happen",
    link: "https://www.amazon.com/dp/B0FJ7DJ5PT",
  },
  {
    id: 10,
    title: "ALWAYS BELIVE THAT SOMETHING WONDERFUL IS ABOUT TO HAPPEN.: Daily Prompts and Affirmations for Manifesting Your Dreams and Believing in Wonderful Possibilities",
    imageUrl: "../images/always-belive-grey.webp",
    alt: "Always Believe That Something Wonderful Is About to Happen",
    link: "https://www.amazon.com/dp/B0FJ6Y6MCZ",
  },
  // სხვა ბარათები...
];

export default allCards;
