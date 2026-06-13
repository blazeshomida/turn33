export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  image: string;
  type: "website" | "article";
}

export const siteConfig = {
  name: "Turn33",
  title: "Turn33 — Cube Timer and Solve Tracker",
  description:
    "Time your solves, track your sessions, and review your averages as you practice speedcubing.",
  url: "https://turn33.vercel.app",
  image: "/og-image.png",
  type: "website",
} satisfies SiteConfig;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
