import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Padel IQ Quiz | Padel Toolkit",
  description:
    "Test your padel knowledge with 25 questions covering rules, strategy, and history. See how you stack up.",
  openGraph: {
    title: "Padel IQ Quiz | Padel Toolkit",
    description:
      "Test your padel knowledge with 25 questions on rules, strategy, and history.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
