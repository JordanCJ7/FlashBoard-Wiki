export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-secondary">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
        © {currentYear} Flashboard Central. All rights reserved.
      </div>
    </footer>
  );
}
