export interface WarmUpExercise {
  id: string;
  name: string;
  duration: string;
  description: string;
  category: "stretch" | "activation" | "movement" | "racket";
}

export const warmUpExercises: WarmUpExercise[] = [
  // Stretches
  { id: "w1", name: "Arm Circles", duration: "30 sec", description: "Stand tall, extend arms to the sides, and make small circles. Gradually increase the circle size. Switch direction halfway.", category: "stretch" },
  { id: "w2", name: "Shoulder Cross-Body Stretch", duration: "20 sec each", description: "Pull one arm across your chest with the other hand. Hold for 20 seconds, then switch. Loosens up the shoulders for overheads.", category: "stretch" },
  { id: "w3", name: "Wrist Circles", duration: "20 sec", description: "Rotate both wrists in circles, 10 times each direction. Essential for grip and racket control.", category: "stretch" },
  { id: "w4", name: "Hip Circles", duration: "30 sec", description: "Hands on hips, make wide circles. 10 times each direction. Opens up the hip flexors for lateral movement.", category: "stretch" },
  { id: "w5", name: "Quad Stretch", duration: "20 sec each", description: "Stand on one leg, grab your ankle behind you, and pull your heel toward your glute. Hold and switch. Helps with court sprints.", category: "stretch" },
  { id: "w6", name: "Calf Raises", duration: "30 sec", description: "Stand on the balls of your feet, rise up slowly, and lower back down. 15 reps. Warms up the calves for quick stops.", category: "stretch" },
  { id: "w7", name: "Hamstring Sweep", duration: "20 sec each", description: "Step one foot forward, hinge at the hips, and reach toward your toes. Keep the front leg straight. Switch sides.", category: "stretch" },
  { id: "w8", name: "Torso Twists", duration: "30 sec", description: "Feet shoulder-width apart, arms extended. Rotate your torso left and right. 10 twists each side. Warms up the core for rotation shots.", category: "stretch" },

  // Activation
  { id: "w9", name: "High Knees", duration: "30 sec", description: "Jog in place, driving your knees up to hip height. Keep your core tight and pump your arms. Gets the heart rate up.", category: "activation" },
  { id: "w10", name: "Butt Kicks", duration: "30 sec", description: "Jog in place, kicking your heels up to your glutes. Focus on quick, light steps. Activates the hamstrings.", category: "activation" },
  { id: "w11", name: "Jumping Jacks", duration: "30 sec", description: "Classic jumping jacks. 20 reps at a moderate pace. Full body warm-up and coordination.", category: "activation" },
  { id: "w12", name: "Squat to Stand", duration: "30 sec", description: "Drop into a deep squat, place your hands on the floor, then straighten your legs while keeping hands down. Stand up and repeat.", category: "activation" },
  { id: "w13", name: "Ankle Bounces", duration: "20 sec", description: "Small, quick bounces on the balls of your feet. Barely leave the ground. Activates the calves and ankles for court movement.", category: "activation" },

  // Movement
  { id: "w14", name: "Lateral Shuffles", duration: "30 sec", description: "Shuffle side to side in a low athletic stance. Stay on the balls of your feet. 5 shuffles each direction. Mimics court movement.", category: "movement" },
  { id: "w15", name: "Split-Step Practice", duration: "30 sec", description: "Do 10 split-steps in a row. Small hop, land on both feet, ready position. This is the most important footwork move in padel.", category: "movement" },
  { id: "w16", name: "Forward-Backward Sprints", duration: "30 sec", description: "Sprint forward 3 steps, then backpedal 3 steps. Repeat. Builds the forward-backward transitions you need constantly.", category: "movement" },
  { id: "w17", name: "Cross-Step Drill", duration: "30 sec", description: "Practice the cross-step (used to retreat for lobs). Turn sideways, cross one foot over the other while moving backward. 5 each direction.", category: "movement" },
  { id: "w18", name: "Ready Position Hold", duration: "20 sec", description: "Get into your ready position: knees bent, weight forward, racket in front. Hold for 20 seconds. Build muscle memory for the stance.", category: "movement" },

  // Racket
  { id: "w19", name: "Shadow Volleys", duration: "30 sec", description: "Without a ball, practice your volley motion. Forehand, backhand, alternating. Focus on short, punchy swings. 10 each side.", category: "racket" },
  { id: "w20", name: "Shadow Bandeja", duration: "30 sec", description: "Practice the bandeja motion in the air. High elbow, continental grip, slice motion. 10 reps. Feel the movement pattern.", category: "racket" },
  { id: "w21", name: "Wall Taps", duration: "30 sec", description: "Gently tap the ball against the glass wall with your racket, alternating forehand and backhand. Builds touch and hand-eye coordination.", category: "racket" },
  { id: "w22", name: "Ball Bounce Control", duration: "30 sec", description: "Bounce the ball on your racket face, keeping it under control. Try 20 consecutive bounces. Settle your hands before the match.", category: "racket" },
];

export const categoryLabels: Record<WarmUpExercise["category"], string> = {
  stretch: "Stretch",
  activation: "Activation",
  movement: "Movement",
  racket: "Racket Work",
};
