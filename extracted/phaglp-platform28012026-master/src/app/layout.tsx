import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/navigation/nav";
import { ThemeProvider } from '@/components/theme-provider';
import { Footer } from "@/components/sections/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "PHAGLP - Philosophical Education Platform",
  description: "Discover wisdom through philosophy. Join thousands of learners exploring ancient wisdom, modern ethics, and critical thinking.",
  keywords: ["philosophy", "education", "wisdom", "ethics", "critical thinking", "courses", "learning"],
  authors: [{ name: "PHAGLP Team" }],
  openGraph: {
    title: "PHAGLP - Philosophical Education Platform",
    description: "Discover wisdom through philosophy. Join thousands of learners exploring ancient wisdom, modern ethics, and critical thinking.",
    type: "website",
    locale: "en_US",
    url: "https://phaglp.com",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PHAGLP - Philosophical Education Platform",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider defaultTheme="system" storageKey="phaglp-theme">
          <div className="min-h-screen flex flex-col">
            <Nav />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
