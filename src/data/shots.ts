export interface Shot {
  id: string;
  name: string;
  tip: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  focus: string;
}

export const shots: Shot[] = [
  {
    id: "s1",
    name: "Forehand Bandeja",
    tip: "Keep your elbow high and use a continental grip. Aim for the service box with soft slice. The goal is control, not power.",
    difficulty: "intermediate",
    focus: "Overhead control",
  },
  {
    id: "s2",
    name: "Backhand Volley",
    tip: "Step forward into the ball, keep the racket face open, and punch through with a short swing. Don't swing big from the shoulder.",
    difficulty: "beginner",
    focus: "Net play",
  },
  {
    id: "s3",
    name: "Chiquita",
    tip: "Hit a soft, dipping shot at the feet of the net player. Use backspin and keep the ball just clearing the net. Patience is key.",
    difficulty: "intermediate",
    focus: "Baseline offense",
  },
  {
    id: "s4",
    name: "Vibora",
    tip: "Add side spin with a sharp wrist snap. Aim for the ball to hit the side glass at an angle after bouncing. Disguise it like a bandeja.",
    difficulty: "advanced",
    focus: "Overhead attack",
  },
  {
    id: "s5",
    name: "Defensive Lob",
    tip: "Get under the ball with open racket face. Aim for height and depth, landing the ball near the back glass. Buy yourself time to recover position.",
    difficulty: "beginner",
    focus: "Defense",
  },
  {
    id: "s6",
    name: "Flat Smash",
    tip: "Wait for the right ball (short lob, high bounce). Point at the ball with your non-racket hand. Snap through with full extension and aim for the corners.",
    difficulty: "intermediate",
    focus: "Attacking",
  },
  {
    id: "s7",
    name: "Drop Volley",
    tip: "Absorb the ball's pace by softening your grip. Let the racket give way on contact. The ball should barely clear the net and die on the other side.",
    difficulty: "advanced",
    focus: "Touch shots",
  },
  {
    id: "s8",
    name: "Forehand Drive",
    tip: "Use topspin to keep the ball in the court. Aim low over the net and target the feet of the net player. Timing and placement beat raw power.",
    difficulty: "beginner",
    focus: "Groundstrokes",
  },
  {
    id: "s9",
    name: "Bajada",
    tip: "Let the ball come off the back glass and hit an aggressive forehand. Turn your hips and drive through. Best used when the ball sits up nicely after the bounce.",
    difficulty: "advanced",
    focus: "Glass play",
  },
  {
    id: "s10",
    name: "Serve with Side Spin",
    tip: "Brush the outside of the ball during the underhand serve. The spin will make it kick off the glass at an angle, making the return harder.",
    difficulty: "intermediate",
    focus: "Serve",
  },
  {
    id: "s11",
    name: "Backhand Slice Return",
    tip: "Open the racket face and slice under the ball. Keep it low and aim cross-court. A good slice return buys you time to move to the net.",
    difficulty: "beginner",
    focus: "Return of serve",
  },
  {
    id: "s12",
    name: "Contra-pared (Wall Shot)",
    tip: "When the ball comes off the back glass, play it back off the glass intentionally to create an unexpected angle. Works best cross-court.",
    difficulty: "advanced",
    focus: "Glass play",
  },
  {
    id: "s13",
    name: "Split-Step Volley",
    tip: "Before every volley, do a small hop (split-step) as your opponent hits. This loads your legs and lets you react in either direction. Practice the timing.",
    difficulty: "beginner",
    focus: "Footwork",
  },
  {
    id: "s14",
    name: "X3 (Por Tres) Smash",
    tip: "Hit the smash with enough power and angle that it clears the back glass entirely. Aim for the corner. Only go for it when the lob is short and high.",
    difficulty: "advanced",
    focus: "Power shots",
  },
  {
    id: "s15",
    name: "Cross-Court Lob",
    tip: "Hit the lob diagonally to make opponents cover more court. Add a bit of topspin to keep it deep. The wider the angle, the harder it is to smash.",
    difficulty: "intermediate",
    focus: "Tactical lobs",
  },
  {
    id: "s16",
    name: "Forehand Volley Punch",
    tip: "Compact swing, firm wrist, step forward. Aim deep to the opponent's feet or into the open court. No backswing needed, just a solid punch.",
    difficulty: "beginner",
    focus: "Net play",
  },
  {
    id: "s17",
    name: "Rulo",
    tip: "A forehand overhead hit with heavy topspin. The ball dips quickly after crossing the net, making it tough to return. Brush up the back of the ball fast.",
    difficulty: "advanced",
    focus: "Advanced overheads",
  },
  {
    id: "s18",
    name: "Backhand Bajada",
    tip: "Similar to a forehand bajada but off the backhand side. Turn your shoulders, let the ball drop from the glass, and drive through with a compact swing.",
    difficulty: "advanced",
    focus: "Glass play",
  },
];
