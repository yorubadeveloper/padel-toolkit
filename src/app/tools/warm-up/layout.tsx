import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Warm-Up Routine | Padel Toolkit",
  description: "Get a randomized 5-minute warm-up routine for padel. Stretches, activation, movement, and racket drills.",
  openGraph: { title: "Warm-Up Routine | Padel Toolkit", description: "Randomized 5-minute warm-up routines for padel." },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
