export interface Drill {
  id: string;
  name: string;
  category: DrillCategory;
  difficulty: "beginner" | "intermediate" | "advanced";
  duration: string;
  description: string;
  players: string;
}

export type DrillCategory =
  | "defense"
  | "volley"
  | "bandeja"
  | "smash"
  | "positioning"
  | "serve"
  | "lob";

export const drillCategories: { value: DrillCategory; label: string }[] = [
  { value: "defense", label: "Defense" },
  { value: "volley", label: "Volley" },
  { value: "bandeja", label: "Bandeja" },
  { value: "smash", label: "Smash" },
  { value: "positioning", label: "Positioning" },
  { value: "serve", label: "Serve" },
  { value: "lob", label: "Lob" },
];

export const drills: Drill[] = [
  // Defense
  {
    id: "d1",
    name: "Wall Rally Survival",
    category: "defense",
    difficulty: "beginner",
    duration: "10 min",
    description:
      "Stand about 3 meters from the back glass. Your partner feeds balls into the glass and you return every single one. It's all about footwork and reading the bounce.",
    players: "2",
  },
  {
    id: "d8",
    name: "Glass Defense Marathon",
    category: "defense",
    difficulty: "advanced",
    duration: "15 min",
    description:
      "All four players play points. The defending pair has to stay back and return everything off the glass. The only way they can win is by forcing errors. No attacking allowed.",
    players: "4",
  },
  {
    id: "d16",
    name: "Side Glass Recovery",
    category: "defense",
    difficulty: "intermediate",
    duration: "10 min",
    description:
      "Your partner hits balls into the side glass from the net. You read the angle and return them down the line or cross-court. Focus on fast feet and early preparation.",
    players: "2",
  },
  {
    id: "d17",
    name: "Double Glass Scramble",
    category: "defense",
    difficulty: "advanced",
    duration: "12 min",
    description:
      "Practice returns off balls that hit the back glass then the side glass (or vice versa). Your partner feeds awkward angles and you figure out the bounce pattern.",
    players: "2",
  },
  {
    id: "d18",
    name: "Low Ball Defense",
    category: "defense",
    difficulty: "beginner",
    duration: "8 min",
    description:
      "Partner feeds low, fast balls at your feet from the net position. Focus on getting under the ball with soft hands and lifting it back over the net with control.",
    players: "2",
  },

  // Volley
  {
    id: "d2",
    name: "Volley-Volley Rapid Fire",
    category: "volley",
    difficulty: "intermediate",
    duration: "8 min",
    description:
      "Both players at the net. Volley back and forth as fast as possible without letting the ball bounce. Keep the ball low and controlled.",
    players: "2",
  },
  {
    id: "d9",
    name: "Volley Drop Touch",
    category: "volley",
    difficulty: "beginner",
    duration: "8 min",
    description:
      "Practice soft drop volleys from the net position. The ball should barely clear the net and die in the service box. Focus on soft hands and touch.",
    players: "2",
  },
  {
    id: "d15",
    name: "Chiquita Master",
    category: "volley",
    difficulty: "advanced",
    duration: "10 min",
    description:
      "From the baseline, practice soft dipping shots (chiquitas) at the feet of the net player. Focus on keeping the ball low over the net with backspin.",
    players: "2",
  },
  {
    id: "d19",
    name: "Deep Volley Control",
    category: "volley",
    difficulty: "intermediate",
    duration: "10 min",
    description:
      "Both players at the net. Try to push each other back with deep volleys aimed at the baseline. The goal is accuracy and depth, not power.",
    players: "2",
  },
  {
    id: "d20",
    name: "Reflex Volley Drill",
    category: "volley",
    difficulty: "advanced",
    duration: "8 min",
    description:
      "Stand 2 meters apart at the net. Hit rapid volleys back and forth. No power, just reaction speed and compact racket work. Count your longest rally.",
    players: "2",
  },

  // Bandeja
  {
    id: "d3",
    name: "Bandeja Consistency Drill",
    category: "bandeja",
    difficulty: "intermediate",
    duration: "12 min",
    description:
      "One player lobs continuously. The other practices the bandeja, aiming to land the ball in the service box with slice. Rotate after 10 shots.",
    players: "2",
  },
  {
    id: "d10",
    name: "Bandeja to Vibora Transition",
    category: "bandeja",
    difficulty: "advanced",
    duration: "12 min",
    description:
      "Start with a bandeja, and on the next overhead, hit a vibora. Alternate between the two. Focus on arm position and wrist snap differences.",
    players: "2",
  },
  {
    id: "d21",
    name: "Bandeja Placement Targets",
    category: "bandeja",
    difficulty: "beginner",
    duration: "10 min",
    description:
      "Place two cones in the service box (one middle, one wide). Practice hitting bandejas that land near each target. Track your accuracy out of 20 attempts.",
    players: "2",
  },
  {
    id: "d22",
    name: "Moving Bandeja",
    category: "bandeja",
    difficulty: "advanced",
    duration: "12 min",
    description:
      "Your partner feeds lobs to different sides. Practice hitting the bandeja while moving laterally. Focus on maintaining balance and controlled contact despite the movement.",
    players: "2",
  },

  // Smash
  {
    id: "d4",
    name: "Smash and Recover",
    category: "smash",
    difficulty: "advanced",
    duration: "10 min",
    description:
      "Feed high lobs. Smash aggressively, then immediately sprint back to the baseline for a defensive return. Focus on transitioning from attack to defense.",
    players: "2 to 4",
  },
  {
    id: "d11",
    name: "Smash Target Practice",
    category: "smash",
    difficulty: "intermediate",
    duration: "10 min",
    description:
      "Set up cones in different zones. Feed lobs and aim your smash at specific targets. Score points for accuracy. Move the targets each round.",
    players: "2",
  },
  {
    id: "d23",
    name: "Power vs. Placement Smash",
    category: "smash",
    difficulty: "intermediate",
    duration: "10 min",
    description:
      "Alternate between hitting a full-power smash and a controlled placement smash on consecutive lobs. Learn when to go for the kill and when to stay smart.",
    players: "2",
  },
  {
    id: "d24",
    name: "Overhead Footwork Ladder",
    category: "smash",
    difficulty: "beginner",
    duration: "8 min",
    description:
      "Partner feeds lobs of varying depths. Focus only on your footwork to get in position. Hit the smash after you're set. The goal is feet first, then racket.",
    players: "2",
  },

  // Positioning
  {
    id: "d5",
    name: "Diamond Positioning",
    category: "positioning",
    difficulty: "beginner",
    duration: "15 min",
    description:
      "Play points where you focus only on moving together as a team. When one goes forward, both go. When one goes back, both go. No individual heroics.",
    players: "4",
  },
  {
    id: "d12",
    name: "Net Approach Drill",
    category: "positioning",
    difficulty: "intermediate",
    duration: "12 min",
    description:
      "Play points starting from the baseline. Your only goal is to approach the net together safely. Practice the split-step and ready position at the net.",
    players: "4",
  },
  {
    id: "d25",
    name: "Mirror Movement",
    category: "positioning",
    difficulty: "beginner",
    duration: "10 min",
    description:
      "Without a ball, one partner moves and the other mirrors them. Move forward, back, and laterally together. Build the habit of staying connected as a unit.",
    players: "2",
  },
  {
    id: "d26",
    name: "Switch and Recover",
    category: "positioning",
    difficulty: "advanced",
    duration: "15 min",
    description:
      "Play points where switching sides is encouraged. When one player is pulled wide, the other covers the empty side, then both recover to their original positions.",
    players: "4",
  },

  // Serve
  {
    id: "d6",
    name: "Serve Placement Challenge",
    category: "serve",
    difficulty: "beginner",
    duration: "10 min",
    description:
      "Place 4 targets in the service box. Aim for each target 5 times. Track your hit rate. Focus on consistent toss and soft placement.",
    players: "1",
  },
  {
    id: "d13",
    name: "Serve and First Volley",
    category: "serve",
    difficulty: "intermediate",
    duration: "10 min",
    description:
      "Serve and immediately move forward for the first volley. Your partner feeds the return. Focus on the transition from serve to net position.",
    players: "2 to 3",
  },
  {
    id: "d27",
    name: "Spin Serve Workshop",
    category: "serve",
    difficulty: "intermediate",
    duration: "10 min",
    description:
      "Practice serving with side spin and kick. Aim to make the ball bounce away from the receiver after hitting the glass. Count how many quality spin serves you land out of 20.",
    players: "1",
  },
  {
    id: "d28",
    name: "Serve Under Pressure",
    category: "serve",
    difficulty: "advanced",
    duration: "10 min",
    description:
      "Simulate match pressure. You have two serves. If you double fault, your partner gets the point. Play a full game on serve. Focus on a reliable second serve.",
    players: "2",
  },

  // Lob
  {
    id: "d7",
    name: "Lob Under Pressure",
    category: "lob",
    difficulty: "intermediate",
    duration: "10 min",
    description:
      "One pair at the net attacks aggressively. The back pair can only lob. Focus on height, depth, and pushing opponents off the net position.",
    players: "4",
  },
  {
    id: "d14",
    name: "Cross-Court Lob Rally",
    category: "lob",
    difficulty: "advanced",
    duration: "10 min",
    description:
      "Both players rally only with lobs, cross-court. Focus on depth, height control, and making the opponent run. First to miss loses the point.",
    players: "2",
  },
  {
    id: "d29",
    name: "Lob Depth Control",
    category: "lob",
    difficulty: "beginner",
    duration: "10 min",
    description:
      "Practice hitting lobs that land within 1 meter of the back glass. Place a rope or marker as a target zone. Count how many you land in the zone out of 20.",
    players: "2",
  },
  {
    id: "d30",
    name: "Defensive Lob to Counter-Attack",
    category: "lob",
    difficulty: "advanced",
    duration: "12 min",
    description:
      "Start on defense at the back. Hit a quality lob to push opponents back, then both rush the net to take the dominant position. Focus on the timing of when to move forward.",
    players: "4",
  },
];
