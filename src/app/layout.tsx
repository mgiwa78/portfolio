import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Spotlight from "@/components/Spotlight";
import ThemeToggle from "@/components/ThemeToggle";
import "./globals.css";

const description =
  "Senior full-stack engineer and Founder & CTO at SmartEdu. SaaS, mobile apps, marketplaces, and payments infrastructure in TypeScript, React Native, Node.js, Go, Rust, and C#.";

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
    { media: "(prefers-color-scheme: light)", color: "#fdfdfe" },
    { media: "(prefers-color-scheme: dark)", color: "#01010d" },
  ],
};

// Runs before first paint so there is no flash of the wrong theme. A saved choice wins;
// otherwise follow the system setting, including live changes to it.
const themeScript = `(function(){try{var d=document.documentElement,m=matchMedia("(prefers-color-scheme: dark)");function s(){var t=localStorage.getItem("theme");d.dataset.theme=t==="light"||t==="dark"?t:m.matches?"dark":"light"}s();m.addEventListener("change",s)}catch(e){}})()`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Spotlight />
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
