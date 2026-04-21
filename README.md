# Padel Toolkit

Simple, fun, and useful tools for padel players. Built with Next.js 15, React, TypeScript, Tailwind CSS, and Framer Motion.

## Tools

- **Americano Generator** — Generate rounds, pairings, and court assignments for 4-16 players
- **Match Scoreboard** — Track points, games, and sets with golden point and tie-break support
- **Drill Randomizer** — Get random practice drills filtered by category and difficulty
- **Side Picker** — Answer questions to find out if you're a left or right side player
- **Padel IQ Quiz** — Test your padel knowledge with 12 questions on rules and tactics
- **Excuse Generator** — Generate hilarious excuses for your on-court disasters

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Phosphor Icons
- Figtree font (via `next/font/google`)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout (font, navbar, footer, toast)
│   └── tools/
│       ├── page.tsx       # Tools index
│       ├── americano/     # Americano Generator
│       ├── scoreboard/    # Match Scoreboard
│       ├── drills/        # Drill Randomizer
│       ├── side-picker/   # Side Picker
│       ├── quiz/          # Padel IQ Quiz
│       └── excuses/       # Excuse Generator
├── components/
│   ├── layout/            # Navbar, Footer, PageWrapper
│   └── ui/                # Button, ToolCard, Toast, CopyButton
├── data/                  # Sample data (drills, quiz, excuses, side-picker)
└── lib/                   # Utility functions (americano, scoreboard logic)
```
