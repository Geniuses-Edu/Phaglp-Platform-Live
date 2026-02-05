import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';

export const metadata: Metadata = {
  title: 'Moe Page',
  description: 'Welcome to the Moe Page',
};

export default function MoePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-end mb-8">
          <ThemeToggle />
        </div>

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Moe Page
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your custom page content goes here
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-card border border-border rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-card-foreground mb-4">
              Section 1
            </h2>
            <p className="text-muted-foreground mb-4">
              Add your first section content here.
            </p>
            <Button>Learn More</Button>
          </div>

          <div className="bg-card border border-border rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-card-foreground mb-4">
              Section 2
            </h2>
            <p className="text-muted-foreground mb-4">
              Add your second section content here.
            </p>
            <Button variant="outline">Get Started</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
