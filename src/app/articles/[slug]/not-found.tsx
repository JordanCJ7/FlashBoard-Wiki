import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

export default function ArticleNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-20rem)] text-center px-4">
      <AlertTriangle className="w-16 h-16 text-destructive mb-4" />
      <h2 className="text-2xl font-semibold mb-2">Article Not Found</h2>
      <p className="text-muted-foreground mb-6">
        Sorry, we couldn't find the article you were looking for. It might have been moved or deleted.
      </p>
      <Button asChild>
        <Link href="/articles">View All Articles</Link>
      </Button>
    </div>
  );
}
