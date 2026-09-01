import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Likith Chilakalapadi Prabhu | AI/ML Engineer",
  description:
    "AI/ML Engineer focused on Generative AI, Agentic AI, RAG, LLM evaluation, inference optimization, and production AI systems.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
