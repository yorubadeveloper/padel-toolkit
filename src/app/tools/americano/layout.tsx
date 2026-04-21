import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Americano Generator | Padel Toolkit",
  description:
    "Generate fair Americano padel tournament brackets instantly. Enter player names, pick a format, and get balanced rounds with automatic partner rotation.",
  openGraph: {
    title: "Americano Generator | Padel Toolkit",
    description:
      "Generate fair Americano padel tournament brackets instantly. Balanced rounds with automatic partner rotation.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
