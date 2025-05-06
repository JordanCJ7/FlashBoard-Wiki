import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticleBySlug, getAllArticles } from "@/lib/data"; // Assuming data fetching functions
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// Generate static paths for all articles at build time
export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

// Define metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  if (!article) {
    return { title: "Article Not Found" };
  }
  return {
    title: `${article.title} | Flashboard Central`,
    description: article.summary,
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound(); // Show 404 if article doesn't exist
  }

  return (
    <article className="space-y-8 max-w-3xl mx-auto">
      <Button variant="outline" size="sm" asChild className="mb-4">
        <Link href="/articles">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Articles
        </Link>
      </Button>

      <header className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          {article.title}
        </h1>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{article.date}</span>
          </div>
          {article.category && (
            <Badge variant="secondary">{article.category}</Badge>
          )}
        </div>
      </header>

      <Separator />

      {/* Article Content Section */}
      {/* Replace this with your actual article content rendering (e.g., from Markdown) */}
      <div className="prose prose-lg dark:prose-invert max-w-none space-y-4">
         <p>{article.summary}</p>
         {/* Placeholder for full article content */}
         <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
         </p>
         <p>
            Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec vel ligula ac nisl auctor pellentesque.
         </p>
         {/* End Placeholder */}
      </div>
    </article>
  );
}
