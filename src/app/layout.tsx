import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ToastProvider } from "@/components/ui/Toast";

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figtree",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Padel Toolkit | Simple tools for padel players",
  description:
    "Fun, simple padel tools you can use right away. Generate Americano tournaments, track scores, discover drills, and more.",
  keywords: ["padel", "tools", "americano", "scoreboard", "drills", "quiz"],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://padeltoolkit.com"),
  openGraph: {
    title: "Padel Toolkit | Simple tools for padel players",
    description:
      "Fun, instant padel tools. Americano generator, scoreboard, drills, quizzes, and more.",
    siteName: "Padel Toolkit",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${figtree.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  name: "Padel Toolkit",
                  url: "https://padeltoolkit.com",
                  description:
                    "Fun, simple padel tools you can use right away. Generate Americano tournaments, track scores, discover drills, and more.",
                },
                {
                  "@type": "WebApplication",
                  name: "Padel Toolkit",
                  url: "https://padeltoolkit.com",
                  applicationCategory: "SportsApplication",
                  operatingSystem: "Any",
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "USD",
                  },
                },
              ],
            }),
          }}
        />
        <ToastProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
