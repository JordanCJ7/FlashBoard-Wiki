export interface Article {
  slug: string;
  title: string;
  date: string; // Format: YYYY-MM-DD
  category?: "Current" | "Upcoming" | "Past";
  summary: string;
  // Add full content property if rendering from Markdown/CMS later
  // content: string;
}

// Dummy Data - Replace with actual data source (CMS, Markdown files, Database)
const articles: Article[] = [
  {
    slug: "new-dashboard-layout",
    title: "Introducing the New Dashboard Layout",
    date: "2024-07-15",
    category: "Current",
    summary:
      "Explore the redesigned dashboard offering improved navigation and customization options for a more intuitive user experience.",
  },
  {
    slug: "upcoming-integration-feature",
    title: "Upcoming: Third-Party App Integrations",
    date: "2024-06-28",
    category: "Upcoming",
    summary:
      "Get ready for seamless integration with your favorite productivity tools. Learn more about the upcoming features and supported apps.",
  },
  {
    slug: "advanced-reporting-launch",
    title: "Advanced Reporting Tools Now Live",
    date: "2024-05-10",
    category: "Current",
    summary:
      "Dive deeper into your data with our newly launched advanced reporting features, providing more granular insights and visualization options.",
  },
  {
    slug: "mobile-app-enhancements",
    title: "Enhancements to the Flashboard Mobile App",
    date: "2024-04-01",
    category: "Current",
    summary:
      "Discover the latest improvements to our mobile app, including offline access and push notifications for important updates.",
  },
   {
    slug: "legacy-feature-retirement",
    title: "Retirement of Legacy Feature X",
    date: "2023-12-01",
    category: "Past",
    summary:
      "Learn about the retirement of Legacy Feature X and the transition plan to newer, more robust alternatives within Flashboard.",
  },
];

// Sort articles by date, newest first
const sortedArticles = articles.sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

/**
 * Fetches all articles, sorted by date descending.
 * @returns {Article[]} An array of all articles.
 */
export function getAllArticles(): Article[] {
  // In a real app, this would fetch from a data source
  return sortedArticles;
}

/**
 * Fetches a specific number of the most recent articles.
 * @param {number} count The number of recent articles to fetch.
 * @returns {Article[]} An array of the most recent articles.
 */
export function getRecentArticles(count: number): Article[] {
  return sortedArticles.slice(0, count);
}

/**
 * Fetches a single article by its slug.
 * @param {string} slug The slug of the article to fetch.
 * @returns {Article | undefined} The article object if found, otherwise undefined.
 */
export function getArticleBySlug(slug: string): Article | undefined {
  return sortedArticles.find((article) => article.slug === slug);
}
