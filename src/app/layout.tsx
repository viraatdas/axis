import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Axis - The point where your journey turns toward possibility",
  description: "A selective 8-week program for kids who lack economic opportunities to learn coding, build projects, and join a lifelong community.",
  keywords: ["coding", "education", "opportunity", "youth", "programming", "mentorship"],
  authors: [{ name: "Axis" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
