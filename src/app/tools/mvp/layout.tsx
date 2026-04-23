import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "MVP Vote | Padel Toolkit",
  description: "Create an MVP poll after your padel session. Pass the phone around, vote, and see who wins.",
  openGraph: { title: "MVP Vote | Padel Toolkit", description: "Vote for the MVP of your padel session." },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
