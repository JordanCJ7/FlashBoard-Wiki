import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Article } from "@/lib/data"; // Assuming data structure defined here
import { getAllArticles } from "@/lib/data"; // Assuming data fetching function
import { Newspaper } from "lucide-react";

export default function ArticlesPage() {
  const articles = getAllArticles(); // Get all articles

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 mb-6">
        <Newspaper className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-semibold">Feature Articles</h1>
      </div>
      <p className="text-muted-foreground">
        Explore detailed information about current, upcoming, and past features
        of the Flashboard application.
      </p>

      {articles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Card key={article.slug} className="shadow-md flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl">{article.title}</CardTitle>
                <CardDescription>{article.date}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground line-clamp-4">
                  {article.summary}
                </p>
              </CardContent>
              <CardContent>
                 <Button asChild variant="outline" className="w-full">
                    <Link href={`/articles/${article.slug}`}>Read More</Link>
                  </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground py-10">
          No articles available at the moment. Check back soon!
        </p>
      )}
    </div>
  );
}
