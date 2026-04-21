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
    question: "What is a bandeja?",
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
    question: "What is a 'vibora' in padel?",
    options: [
      "A type of serve with spin",
      "An aggressive overhead with side spin",
      "A low volley shot",
      "A defensive lob",
    ],
    correctIndex: 1,
    explanation:
      "The vibora is an aggressive overhead shot with side spin that bounces into the glass at an angle, making it hard to return.",
  },
  {
    id: 10,
    question: "You're receiving serve. Where should you stand?",
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
    question: "When should you hit a hard flat drive in padel?",
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
  {
    id: 13,
    question: "Can the ball hit the metal fence (top of the glass) during a rally?",
    options: [
      "Yes, it's always in play",
      "No, the point is lost immediately",
      "Only if it bounces on the ground first",
      "Only on the server's side",
    ],
    correctIndex: 1,
    explanation:
      "If the ball hits the metal fence (the wire mesh above the glass) on your side after bouncing, the point is lost. The fence is out of play.",
  },
  {
    id: 14,
    question: "What is a 'por tres' shot?",
    options: [
      "A shot hit with three bounces",
      "A smash that goes over the back glass out of the court",
      "A serve that hits three walls",
      "A trick shot involving three players",
    ],
    correctIndex: 1,
    explanation:
      "A 'por tres' (or 'por 3') is when a smash is so powerful it goes over the back glass and out of the cage. The receiving team can run outside to retrieve it.",
  },
  {
    id: 15,
    question: "In which country was padel invented?",
    options: [
      "Spain",
      "Argentina",
      "Mexico",
      "Brazil",
    ],
    correctIndex: 2,
    explanation:
      "Padel was invented by Enrique Corcuera in Acapulco, Mexico, in 1969. It later gained massive popularity in Argentina and Spain.",
  },
  {
    id: 16,
    question: "Your partner is pulled wide to return a ball. What should you do?",
    options: [
      "Stay on your side and wait",
      "Move toward the center to cover the open court",
      "Rush the net immediately",
      "Move back to the glass",
    ],
    correctIndex: 1,
    explanation:
      "When your partner is pulled wide, you shift toward the center to close the gap. Good teams move as a unit and always cover the open space.",
  },
  {
    id: 17,
    question: "What is the 'bajada' in padel?",
    options: [
      "A low slice return",
      "An aggressive shot hit after the ball bounces off the back glass, typically a powerful forehand",
      "A type of defensive lob",
      "A drop shot from the baseline",
    ],
    correctIndex: 1,
    explanation:
      "The bajada is an attacking shot played off the back glass. You let the ball bounce off the glass and hit it aggressively, usually as a way to pressure opponents.",
  },
  {
    id: 18,
    question: "Which side of the court is typically played by the more defensive player?",
    options: [
      "The right (forehand) side",
      "The left (backhand) side",
      "It doesn't matter",
      "The side closest to the door",
    ],
    correctIndex: 0,
    explanation:
      "The right side (drive side) is typically played by the more consistent, defensive player. The left side (revs side) is for the more aggressive player who hits strong backhands.",
  },
  {
    id: 19,
    question: "Can a player reach over the net to hit the ball?",
    options: [
      "Yes, anytime",
      "No, never",
      "Only if the ball has bounced on your side first and spins back over the net",
      "Only during a tie-break",
    ],
    correctIndex: 2,
    explanation:
      "You can reach over the net only if the ball has bounced on your side and the spin brings it back over to the opponent's side. Otherwise, reaching over the net is a fault.",
  },
  {
    id: 20,
    question: "What should you focus on when hitting a return of serve?",
    options: [
      "Hitting it as hard as possible",
      "Getting the ball low and at the feet of the net player",
      "Always lobbing",
      "Aiming for the side glass",
    ],
    correctIndex: 1,
    explanation:
      "The best return strategy is to keep the ball low, ideally at the feet of the net player, to make their volley difficult and give you time to advance.",
  },
  {
    id: 21,
    question: "How many sets are typically played in a competitive padel match?",
    options: [
      "Best of 1",
      "Best of 3",
      "Best of 5",
      "It varies by tournament",
    ],
    correctIndex: 1,
    explanation:
      "Standard competitive padel matches are best of 3 sets. Each set is played to 6 games with a tie-break at 6-6.",
  },
  {
    id: 22,
    question: "What is the 'T' area in padel, and why is it important?",
    options: [
      "The area where the service lines intersect, the strongest serving position",
      "The center of the net, the ideal volley position",
      "The back corner of the court",
      "The area right behind the service line, ideal for returns",
    ],
    correctIndex: 1,
    explanation:
      "The 'T' refers to the center of the net area. Standing near the T gives you the best coverage for volleys, as you can reach both sides effectively.",
  },
  {
    id: 23,
    question: "During a serve, can the ball hit the side glass after bouncing in the service box?",
    options: [
      "Yes, and it's a valid serve",
      "No, that counts as a fault",
      "Only on the second serve",
      "Only in a tie-break",
    ],
    correctIndex: 0,
    explanation:
      "A serve is valid as long as it bounces in the correct service box first. After that, it can hit the side glass and is still in play.",
  },
  {
    id: 24,
    question: "What happens if the ball hits you directly (your body or clothing) during a rally?",
    options: [
      "The rally continues",
      "You win the point",
      "You lose the point",
      "It's a let and the point is replayed",
    ],
    correctIndex: 2,
    explanation:
      "If the ball hits your body or clothing before bouncing, you lose the point. The ball must always be played with the racket.",
  },
  {
    id: 25,
    question: "What is the main advantage of the net position in padel?",
    options: [
      "You can hit harder from there",
      "You cut off angles and put pressure on opponents with volleys",
      "The ball bounces higher near the net",
      "You're closer to the side glass for trick shots",
    ],
    correctIndex: 1,
    explanation:
      "The net position is dominant because you cut off passing angles, intercept balls early, and force opponents into difficult defensive shots.",
  },
];

export const quizResults = [
  { min: 0, max: 6, label: "Padel Newbie", description: "You're just getting started, and honestly that's the best part. Hit the courts and come back to try again." },
  { min: 7, max: 12, label: "Court Curious", description: "You've got the basics down but there's a lot more to discover. Keep playing, keep watching, it'll click." },
  { min: 13, max: 18, label: "Rally Regular", description: "You clearly know your way around a padel court. Solid reads, good instincts. Keep it up." },
  { min: 19, max: 23, label: "Net Ninja", description: "Okay, you really know your stuff. Your opponents should probably be worried." },
  { min: 24, max: 25, label: "Padel Professor", description: "Perfect or near-perfect. You live and breathe this sport. Take a bow." },
];
