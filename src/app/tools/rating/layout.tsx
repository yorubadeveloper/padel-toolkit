import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Player Rating | Padel Toolkit",
  description: "Answer 10 questions about your padel game and get an estimated skill level from 1.0 to 10.0.",
  openGraph: { title: "Player Rating | Padel Toolkit", description: "Get your estimated padel skill rating from 1.0 to 10.0." },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
