import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Excuse Generator | Padel Toolkit",
  description:
    "Lost a padel match? Generate a perfectly crafted excuse to send to your group chat. 30 excuses and counting.",
  openGraph: {
    title: "Excuse Generator | Padel Toolkit",
    description:
      "Lost a padel match? Generate a perfectly crafted excuse for your group chat.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
