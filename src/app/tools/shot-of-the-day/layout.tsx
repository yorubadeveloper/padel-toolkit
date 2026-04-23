import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Shot of the Day | Padel Toolkit",
  description: "Get one random padel shot to practice today with a quick tip on technique and focus.",
  openGraph: { title: "Shot of the Day | Padel Toolkit", description: "One random padel shot to focus on today." },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
