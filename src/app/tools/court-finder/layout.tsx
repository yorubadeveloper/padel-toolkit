import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Court Finder | Padel Toolkit",
  description: "Find padel courts near you. Enter your city and get directions via Google Maps.",
  openGraph: { title: "Court Finder | Padel Toolkit", description: "Find padel courts near you with Google Maps." },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
