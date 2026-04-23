import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Rule Book | Padel Toolkit",
  description: "Quick, searchable padel rules. Common questions answered clearly with no jargon.",
  openGraph: { title: "Rule Book | Padel Toolkit", description: "Quick, searchable padel rules reference." },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
