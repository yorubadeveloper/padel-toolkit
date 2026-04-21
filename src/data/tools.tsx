import {
  UsersThree,
  CourtBasketball,
  Barbell,
  ArrowsLeftRight,
  Brain,
  SmileyWink,
} from "@phosphor-icons/react/dist/ssr";

export const tools = [
  {
    href: "/tools/americano",
    icon: <UsersThree size={22} weight="duotone" />,
    title: "Americano Generator",
    description: "Throw in your player names and get randomized rounds, pairings, and court assignments.",
    illustration: "/animation-1.svg",
  },
  {
    href: "/tools/scoreboard",
    icon: <CourtBasketball size={22} weight="duotone" />,
    title: "Match Scoreboard",
    description: "Keep score during your match. Points, games, sets, golden point, all of it.",
    illustration: "/animation-2.svg",
  },
  {
    href: "/tools/drills",
    icon: <Barbell size={22} weight="duotone" />,
    title: "Drill Randomizer",
    description: "Not sure what to practice? Get a random drill based on what you want to work on.",
    illustration: "/animation-3.svg",
  },
  {
    href: "/tools/side-picker",
    icon: <ArrowsLeftRight size={22} weight="duotone" />,
    title: "Side Picker",
    description: "A quick quiz to figure out if you're more of a left-side attacker or right-side controller.",
    illustration: "/animation-4.svg",
  },
  {
    href: "/tools/quiz",
    icon: <Brain size={22} weight="duotone" />,
    title: "Padel IQ Quiz",
    description: "Think you know padel? 12 questions on rules, tactics, and positioning. Let's find out.",
    illustration: "/animation-5.svg",
  },
  {
    href: "/tools/excuses",
    icon: <SmileyWink size={22} weight="duotone" />,
    title: "Excuse Generator",
    description: "Shanked a smash? Late to the court? We have the perfect excuse ready for you.",
    illustration: "/animation-6.svg",
  },
];
