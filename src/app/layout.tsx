import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const description =
  "Senior full-stack engineer and Founder & CTO at SmartEdu. SaaS, marketplaces, and payments infrastructure in TypeScript, Node.js, and Go.";

export const metadata: Metadata = {
  metadataBase: new URL("https://mgiwa.vercel.app"),
  title: {
    default: "Giwa Muhammad",
    template: "%s | Giwa Muhammad",
  },
  description,
  openGraph: {
    title: "Giwa Muhammad",
    description,
    url: "https://mgiwa.vercel.app",
    siteName: "Giwa Muhammad",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Giwa Muhammad",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0c0e" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
