import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Padel Bingo | Padel Toolkit",
  description: "Generate a bingo card with funny things that happen during padel sessions. Screenshot and share with your group.",
  openGraph: { title: "Padel Bingo | Padel Toolkit", description: "Bingo cards for padel sessions. Share with your group chat." },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
