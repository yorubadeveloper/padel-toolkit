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
    id: "d10",
    name: "Bandeja to Víbora Transition",
    category: "bandeja",
    difficulty: "advanced",
    duration: "12 min",
    description:
      "Start with a bandeja, and on the next overhead, hit a víbora. Alternate between the two. Focus on arm position and wrist snap differences.",
    players: "2",
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
    id: "d15",
    name: "Chiquita Master",
    category: "volley",
    difficulty: "advanced",
    duration: "10 min",
    description:
      "From the baseline, practice soft dipping shots (chiquitas) at the feet of the net player. Focus on keeping the ball low over the net with backspin.",
    players: "2",
  },
];
