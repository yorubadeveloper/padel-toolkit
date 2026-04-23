import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "What to Wear | Padel Toolkit",
  description: "Enter your city and get padel outfit suggestions based on the current weather conditions.",
  openGraph: { title: "What to Wear | Padel Toolkit", description: "Weather-based outfit suggestions for padel." },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
