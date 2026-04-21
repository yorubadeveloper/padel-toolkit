import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Side Picker | Padel Toolkit",
  description:
    "Find out which side of the padel court suits your playstyle. Answer a few quick questions and get a personalized recommendation.",
  openGraph: {
    title: "Side Picker | Padel Toolkit",
    description:
      "Find out which side of the padel court suits your playstyle with a quick quiz.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
