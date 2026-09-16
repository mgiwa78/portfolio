import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
  title: "Giwa Muhammad | Software Engineer",
  description:
    "Senior software engineer who designs and ships production systems end to end: multi-tenant SaaS, payments and escrow, realtime infrastructure, and the platforms underneath them.",
  keywords: [
    "Software Engineer",
    "Systems Architect",
    "Full Stack Engineer",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
