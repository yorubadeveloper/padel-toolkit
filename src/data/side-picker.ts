export interface SideQuestion {
  id: number;
  question: string;
  options: { label: string; side: "left" | "right"; weight: number }[];
}

export const sideQuestions: SideQuestion[] = [
  {
    id: 1,
    question: "When a high ball comes, what's your instinct?",
    options: [
      { label: "Hunt it down and smash it", side: "left", weight: 2 },
      { label: "Position myself and play a controlled bandeja", side: "right", weight: 2 },
    ],
  },
  {
    id: 2,
    question: "How would you describe your backhand?",
    options: [
      { label: "It's solid and I rely on it a lot", side: "right", weight: 2 },
      { label: "I prefer running around it for a forehand", side: "left", weight: 2 },
    ],
  },
  {
    id: 3,
    question: "Pick a playing style:",
    options: [
      { label: "Aggressive and dominant", side: "left", weight: 1 },
      { label: "Consistent and strategic", side: "right", weight: 1 },
    ],
  },
  {
    id: 4,
    question: "Your partner hits a short ball. You...",
    options: [
      { label: "Rush in and finish the point", side: "left", weight: 1 },
      { label: "Cover the middle and wait for the right moment", side: "right", weight: 1 },
    ],
  },
  {
    id: 5,
    question: "Where do you feel most comfortable?",
    options: [
      { label: "Close to the glass, reading bounces", side: "right", weight: 2 },
      { label: "Floating in the middle, looking for overheads", side: "left", weight: 2 },
    ],
  },
  {
    id: 6,
    question: "How do you handle pressure points?",
    options: [
      { label: "I go for a big shot to end it", side: "left", weight: 1 },
      { label: "I play smart and wait for the error", side: "right", weight: 1 },
    ],
  },
  {
    id: 7,
    question: "Which shot do you enjoy most?",
    options: [
      { label: "A clean smash winner", side: "left", weight: 1 },
      { label: "A perfect chiquita that drops dead", side: "right", weight: 1 },
    ],
  },
];

export const sideResults = {
  left: {
    title: "Left Side Attacker",
    description:
      "You belong on the left side, hunting overheads and finishing points. You're the hammer of the team. Aggressive, decisive, and always looking for the kill shot. Your forehand covers the middle, and when a lob goes up, everyone knows what's coming.",
    traits: ["Aggressive overhead game", "Strong forehand", "Point finisher", "Net dominator"],
  },
  right: {
    title: "Right Side Controller",
    description:
      "You're a right-side control player. Steady, smart, and reliable. You read the game beautifully, your backhand is a weapon, and you set up points for your partner to finish. You're the architect. Every great team needs one.",
    traits: ["Solid backhand", "Great positioning", "Patient playmaker", "Glass reader"],
  },
};
