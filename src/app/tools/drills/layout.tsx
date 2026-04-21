import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drill Randomizer | Padel Toolkit",
  description:
    "Get random padel drills to keep your practice sessions fresh. Filter by skill level and focus area. 15 drills and counting.",
  openGraph: {
    title: "Drill Randomizer | Padel Toolkit",
    description:
      "Get random padel drills to keep your practice sessions fresh. Filter by skill level and focus area.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
