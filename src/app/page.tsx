import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, History, Newspaper, ArrowRight } from "lucide-react";
import type { Article } from "@/lib/data"; // Assuming data structure defined here
import { getRecentArticles } from "@/lib/data"; // Assuming data fetching function

export default function Home() {
  const recentArticles = getRecentArticles(3); // Get 3 most recent articles

  return (
    <div className="space-y-12">
      {/* Application Overview Section */}
      <section aria-labelledby="overview-title">
        <Card className="shadow-md">
          <CardHeader>
            <div className="flex items-center gap-3">
              <History className="h-6 w-6 text-primary" />
              <CardTitle id="overview-title" className="text-2xl font-semibold">
                Flashboard: History & Evolution
              </CardTitle>
            </div>
            <CardDescription>
              Discover the journey of the Flashboard application.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Flashboard started as a simple idea to streamline internal
              communication and quickly grew into a comprehensive platform.
              Learn about our milestones, challenges, and the vision that drives
              us forward.
            </p>
            <p>
              From its initial prototype in [Year] to the latest version,
              Flashboard has consistently adapted to meet the evolving needs of
              our users. Explore the key moments that shaped the application
              into what it is today.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Featured Articles Teaser Section */}
      <section aria-labelledby="featured-articles-title">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Newspaper className="h-6 w-6 text-primary" />
            <h2 id="featured-articles-title" className="text-2xl font-semibold">
              Latest Feature Articles
            </h2>
          </div>
          <Button variant="link" asChild>
            <Link href="/articles" className="text-accent">
              View All Articles <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentArticles.map((article) => (
            <Card key={article.slug} className="shadow-md flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl">{article.title}</CardTitle>
                <CardDescription>{article.date}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground line-clamp-3">
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
      </section>

      {/* Admin Contact Section */}
      <section aria-labelledby="admin-contact-title">
        <Card className="shadow-md bg-secondary">
          <CardHeader>
            <CardTitle id="admin-contact-title" className="text-2xl font-semibold">
              Admin Contact Information
            </CardTitle>
            <CardDescription>
              Get in touch with the Flashboard administrators for inquiries or
              feedback.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-accent" />
              <div>
                <p className="font-medium">Email:</p>
                <a
                  href="mailto:admin@flashboard.example.com"
                  className="text-accent hover:underline"
                >
                  admin@flashboard.example.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-accent" />
              <div>
                <p className="font-medium">Phone:</p>
                <a
                  href="tel:+1234567890"
                  className="text-accent hover:underline"
                >
                  +1 (234) 567-890
                </a>
              </div>
            </div>
            <p className="text-sm text-muted-foreground pt-2">
              We aim to respond to all inquiries within 2 business days.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
