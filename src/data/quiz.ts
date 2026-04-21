export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "After serving in padel, what should you do next?",
    options: [
      "Stay at the baseline and wait",
      "Move to the net position",
      "Run to the center of the court",
      "Move to the back glass",
    ],
    correctIndex: 1,
    explanation:
      "In padel, the serving team should move to the net after serving to gain the dominant position.",
  },
  {
    id: 2,
    question:
      "When both opponents are at the net, what is the best shot to play?",
    options: [
      "A hard drive at their bodies",
      "A lob over their heads",
      "A chiquita at their feet",
      "Both B and C are good options",
    ],
    correctIndex: 3,
    explanation:
      "Both lobs and chiquitas are effective tools to move opponents away from their dominant net position.",
  },
  {
    id: 3,
    question:
      "In padel, the ball bounces off the back glass. What should you do?",
    options: [
      "Hit it before it bounces off the glass",
      "Let it bounce off the glass and play it after",
      "Call a let",
      "The point is over",
    ],
    correctIndex: 1,
    explanation:
      "Balls that hit the glass after bouncing are still in play. Let the ball come off the glass and return it.",
  },
  {
    id: 4,
    question:
      "What is a bandeja?",
    options: [
      "A type of serve",
      "A defensive overhead shot with slice",
      "A volley at the net",
      "A wall shot",
    ],
    correctIndex: 1,
    explanation:
      "The bandeja is a defensive overhead shot hit with slice and control, used to maintain net position.",
  },
  {
    id: 5,
    question: "When should you switch sides with your partner?",
    options: [
      "Never, always stay on your side",
      "When the ball pulls you to the other side and your partner covers for you",
      "Every other point",
      "Only during tie-breaks",
    ],
    correctIndex: 1,
    explanation:
      "You should switch when the ball pulls you out of position. Your partner fills the gap, and you recover to the open side.",
  },
  {
    id: 6,
    question: "What does 'golden point' mean in padel?",
    options: [
      "A point worth double",
      "The match-deciding point at 40-all (no advantage)",
      "A point scored off a smash",
      "The first point of each game",
    ],
    correctIndex: 1,
    explanation:
      "Golden point means that at deuce (40-all), the next point wins the game. No advantage is played.",
  },
  {
    id: 7,
    question: "What is the ideal position for the serving team?",
    options: [
      "Both at the baseline",
      "One at the net, one at the baseline",
      "Both at the net",
      "One at the net, one at mid-court",
    ],
    correctIndex: 2,
    explanation:
      "The ideal position is both players at the net. This is the attacking position in padel.",
  },
  {
    id: 8,
    question:
      "Your opponent hits a lob. You're at the net. What should you do?",
    options: [
      "Let your partner take it",
      "Turn and run back, let it bounce, and play off the glass",
      "Jump and smash it from any position",
      "It depends on the quality of the lob",
    ],
    correctIndex: 3,
    explanation:
      "If the lob is short, smash it. If it's deep and over your head, turn and recover. Reading the lob quality is key.",
  },
  {
    id: 9,
    question: "What is a 'víbora' in padel?",
    options: [
      "A type of serve with spin",
      "An aggressive overhead with side spin",
      "A low volley shot",
      "A defensive lob",
    ],
    correctIndex: 1,
    explanation:
      "The víbora is an aggressive overhead shot with side spin that bounces into the glass at an angle, making it hard to return.",
  },
  {
    id: 10,
    question:
      "You're receiving serve. Where should you stand?",
    options: [
      "Right on the service line",
      "At the net",
      "Behind the service line, near the back wall",
      "In the middle of the court",
    ],
    correctIndex: 2,
    explanation:
      "The receiver stands behind the service line. This gives time to read the serve and play a quality return.",
  },
  {
    id: 11,
    question:
      "When should you hit a hard flat drive in padel?",
    options: [
      "As often as possible to overpower opponents",
      "When opponents are out of position or you have a clear opening",
      "Never, padel is all about soft shots",
      "Only on the forehand side",
    ],
    correctIndex: 1,
    explanation:
      "Hard drives are effective when opponents are out of position, but overusing them gives the ball back fast from the glass.",
  },
  {
    id: 12,
    question: "What is the correct padel serve technique?",
    options: [
      "Overhand like tennis",
      "Underhand, with the ball bouncing below waist height",
      "Sidearm throw",
      "Any technique you prefer",
    ],
    correctIndex: 1,
    explanation:
      "In padel, the serve must be underhand. The ball must bounce on the ground and be struck at or below waist level.",
  },
];

export const quizResults = [
  { min: 0, max: 3, label: "Padel Newbie", description: "You're just getting started, and honestly that's the best part. Hit the courts and come back to try again." },
  { min: 4, max: 6, label: "Court Curious", description: "You've got the basics down but there's a lot more to discover. Keep playing, keep watching, it'll click." },
  { min: 7, max: 9, label: "Rally Regular", description: "You clearly know your way around a padel court. Solid reads, good instincts. Keep it up." },
  { min: 10, max: 11, label: "Net Ninja", description: "Okay, you really know your stuff. Your opponents should probably be worried." },
  { min: 12, max: 12, label: "Padel Professor", description: "Perfect score. You live and breathe this sport. Take a bow." },
];
