export interface Rule {
  id: string;
  question: string;
  answer: string;
  category: RuleCategory;
}

export type RuleCategory = "basics" | "serve" | "scoring" | "glass" | "net" | "faults";

export const ruleCategories: { value: RuleCategory; label: string }[] = [
  { value: "basics", label: "Basics" },
  { value: "serve", label: "Serve" },
  { value: "scoring", label: "Scoring" },
  { value: "glass", label: "Glass & Walls" },
  { value: "net", label: "Net Play" },
  { value: "faults", label: "Faults" },
];

export const rules: Rule[] = [
  {
    id: "r1",
    question: "How many players are on a padel court?",
    answer: "Padel is played in doubles, so 4 players (2 per team). Singles padel exists but is rare and uses a narrower court.",
    category: "basics",
  },
  {
    id: "r2",
    question: "What are the court dimensions?",
    answer: "A padel court is 20 meters long and 10 meters wide. It's enclosed by glass walls (up to 3 meters high on the back) and metallic mesh above.",
    category: "basics",
  },
  {
    id: "r3",
    question: "Can the ball hit the walls during play?",
    answer: "Yes. After bouncing on the ground, the ball can hit any wall and remain in play. You can return it after it bounces off the glass.",
    category: "glass",
  },
  {
    id: "r4",
    question: "How does the serve work?",
    answer: "The serve is underhand. You bounce the ball and hit it at or below waist level. It must land in the diagonal service box. You get two attempts.",
    category: "serve",
  },
  {
    id: "r5",
    question: "Can the serve hit the glass after bouncing?",
    answer: "Yes, the serve can hit the side glass after bouncing in the service box and it's still valid. However, if it hits the wire mesh (fence) after bouncing, it's a fault.",
    category: "serve",
  },
  {
    id: "r6",
    question: "What scoring system does padel use?",
    answer: "Same as tennis: 15, 30, 40, game. Sets are played to 6 games with a tie-break at 6-6. Matches are best of 3 sets.",
    category: "scoring",
  },
  {
    id: "r7",
    question: "What is golden point?",
    answer: "At deuce (40-40), the receiving team chooses which side to receive, and the next point wins the game. No advantage is played. This is standard in World Padel Tour.",
    category: "scoring",
  },
  {
    id: "r8",
    question: "Can I hit the ball before it bounces (volley)?",
    answer: "Yes, you can volley the ball at any time during a rally. The only exception is the return of serve, where you must let it bounce first.",
    category: "net",
  },
  {
    id: "r9",
    question: "Can the ball go over the glass and out of the court?",
    answer: "Yes. If a smash sends the ball over the back glass, the opposing team can leave the court through the side doors and play it back in, as long as it hasn't bounced twice.",
    category: "glass",
  },
  {
    id: "r10",
    question: "What happens if the ball hits the wire fence directly (without bouncing first)?",
    answer: "If your shot hits the wire mesh/fence on the opponent's side without bouncing on the ground first, you lose the point. The fence is considered out.",
    category: "faults",
  },
  {
    id: "r11",
    question: "Can I touch the net during play?",
    answer: "No. Touching the net, the posts, or any part of the opponent's court during play results in losing the point.",
    category: "net",
  },
  {
    id: "r12",
    question: "Can I reach over the net to hit the ball?",
    answer: "Only if the ball has bounced on your side and the spin brings it back over the net to the opponent's side. In that case you may reach over (without touching the net).",
    category: "net",
  },
  {
    id: "r13",
    question: "What if the ball hits me?",
    answer: "If the ball hits any part of your body before bouncing, you lose the point. The ball must always be played with the racket.",
    category: "faults",
  },
  {
    id: "r14",
    question: "Can I hit the ball twice?",
    answer: "No. A double hit (hitting the ball twice in one stroke) is a fault and you lose the point.",
    category: "faults",
  },
  {
    id: "r15",
    question: "Where should the server stand?",
    answer: "The server must stand behind the service line on the correct side (right for first point, alternating). Both feet must be behind the line at the moment of contact.",
    category: "serve",
  },
  {
    id: "r16",
    question: "Can the ball bounce off both the back glass and the side glass?",
    answer: "Yes. The ball can hit the back glass and then the side glass (or vice versa) and is still in play, as long as it only bounced on the ground once before hitting the walls.",
    category: "glass",
  },
  {
    id: "r17",
    question: "Is there a let on serve?",
    answer: "Yes. If the serve hits the net and lands in the correct service box, it's a let and you serve again. If it hits the net and lands outside the box, it's a fault.",
    category: "serve",
  },
  {
    id: "r18",
    question: "Who chooses sides at deuce with golden point?",
    answer: "The receiving team chooses which side to receive the golden point on. This gives them a small strategic advantage.",
    category: "scoring",
  },
  {
    id: "r19",
    question: "Can I switch the racket between hands during a point?",
    answer: "Yes. You can switch the racket to your other hand during play. Some players do this to avoid backhands.",
    category: "basics",
  },
  {
    id: "r20",
    question: "What if the ball gets stuck in the wire mesh?",
    answer: "If the ball gets lodged in the fence or mesh, the point is replayed (let).",
    category: "glass",
  },
  {
    id: "r21",
    question: "Can I leave the court during a point?",
    answer: "Yes. You can exit through the side doors to retrieve a ball that has gone over the glass, as long as it hasn't bounced twice outside.",
    category: "basics",
  },
  {
    id: "r22",
    question: "How does the tie-break work?",
    answer: "At 6-6 in a set, a tie-break is played. Points are counted 1, 2, 3... First to 7 with a 2-point lead wins. Players switch serve every 2 points and switch ends every 6 points.",
    category: "scoring",
  },
  {
    id: "r23",
    question: "Can I hit the ball onto my own glass and then over the net?",
    answer: "No. The ball must go directly over the net into the opponent's side. Hitting your own walls first is a fault.",
    category: "faults",
  },
  {
    id: "r24",
    question: "Is there a time limit between points?",
    answer: "Yes. Players have 20 seconds between points and 90 seconds at changeovers. In practice, this is loosely enforced in amateur play.",
    category: "scoring",
  },
];
