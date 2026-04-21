import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Match Scoreboard | Padel Toolkit",
  description:
    "Track your padel match scores live. Simple, clean scoreboard for sets and games. Works on any device, no app needed.",
  openGraph: {
    title: "Match Scoreboard | Padel Toolkit",
    description:
      "Track your padel match scores live. Simple scoreboard for sets and games.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
