export interface RatingQuestion {
  id: string;
  question: string;
  options: { label: string; score: number }[];
}

export const ratingQuestions: RatingQuestion[] = [
  {
    id: "rq1",
    question: "How consistent is your serve?",
    options: [
      { label: "I double fault regularly", score: 1 },
      { label: "I get most serves in, but without much control", score: 3 },
      { label: "I can place it consistently and add some spin", score: 6 },
      { label: "I vary speed, spin, and placement with confidence", score: 9 },
    ],
  },
  {
    id: "rq2",
    question: "How comfortable are you at the net?",
    options: [
      { label: "I avoid the net whenever possible", score: 1 },
      { label: "I can volley basic balls but get nervous under pressure", score: 3 },
      { label: "I'm solid at the net and can direct volleys with purpose", score: 6 },
      { label: "I dominate the net, read plays early, and finish points cleanly", score: 9 },
    ],
  },
  {
    id: "rq3",
    question: "How do you handle balls off the back glass?",
    options: [
      { label: "I usually let them go or miss the timing", score: 1 },
      { label: "I can return simple bounces but struggle with tricky angles", score: 3 },
      { label: "I read most glass bounces and return them effectively", score: 6 },
      { label: "I play off the glass naturally, including double bounces and bajadas", score: 9 },
    ],
  },
  {
    id: "rq4",
    question: "How is your overhead game (bandeja, vibora, smash)?",
    options: [
      { label: "I panic when the ball goes over my head", score: 1 },
      { label: "I can hit a basic bandeja but lack variety", score: 3 },
      { label: "I have a reliable bandeja and can hit viboras when set up", score: 6 },
      { label: "I mix bandeja, vibora, and smash depending on the situation", score: 9 },
    ],
  },
  {
    id: "rq5",
    question: "How well do you move with your partner?",
    options: [
      { label: "We kind of do our own thing", score: 1 },
      { label: "We try to move together but often leave gaps", score: 3 },
      { label: "We move as a unit most of the time and communicate well", score: 6 },
      { label: "We anticipate each other's movements and cover the court seamlessly", score: 9 },
    ],
  },
  {
    id: "rq6",
    question: "How would you rate your lobbing?",
    options: [
      { label: "My lobs are usually too short or too long", score: 1 },
      { label: "I can lob to buy time but lack precision", score: 3 },
      { label: "I use lobs tactically to move opponents off the net", score: 6 },
      { label: "My lobs are deep, well-placed, and a real weapon in my game", score: 9 },
    ],
  },
  {
    id: "rq7",
    question: "How do you handle pressure points?",
    options: [
      { label: "I tend to rush or make unforced errors", score: 1 },
      { label: "I get a bit tight but can usually hold it together", score: 3 },
      { label: "I stay calm and stick to my game plan", score: 6 },
      { label: "I thrive under pressure and play my best on big points", score: 9 },
    ],
  },
  {
    id: "rq8",
    question: "How good is your court positioning?",
    options: [
      { label: "I'm usually in the wrong spot", score: 1 },
      { label: "I know the basics but forget to adjust during rallies", score: 3 },
      { label: "I position well and transition between net and baseline smoothly", score: 6 },
      { label: "I read the game early and always seem to be in the right place", score: 9 },
    ],
  },
  {
    id: "rq9",
    question: "How often do you play?",
    options: [
      { label: "Once a month or less", score: 1 },
      { label: "Once a week", score: 3 },
      { label: "2 to 3 times a week", score: 6 },
      { label: "4+ times a week", score: 9 },
    ],
  },
  {
    id: "rq10",
    question: "How is your return of serve?",
    options: [
      { label: "I just try to get it back over the net", score: 1 },
      { label: "I return consistently but without much direction", score: 3 },
      { label: "I target specific areas and keep the ball low", score: 6 },
      { label: "I use my return to set up the next shot and apply pressure", score: 9 },
    ],
  },
];

export const ratingLabels = [
  { min: 1.0, max: 2.5, label: "Beginner", description: "You're just getting started. Focus on fundamentals and getting comfortable with the court. The more you play, the faster you'll improve." },
  { min: 2.6, max: 4.5, label: "Developing", description: "You know the basics and are building your game. Work on consistency and court positioning. You're at the stage where regular play makes a huge difference." },
  { min: 4.6, max: 6.5, label: "Intermediate", description: "You have a solid all-around game. You understand tactics and can execute most shots. Refining your weak spots will take you to the next level." },
  { min: 6.6, max: 8.0, label: "Advanced", description: "You're a strong player with good variety and court sense. You can compete at a high level. Fine-tuning strategy and specialty shots will keep you improving." },
  { min: 8.1, max: 10.0, label: "Elite", description: "You're playing at an elite level. Your game is well-rounded, your instincts are sharp, and your opponents should be nervous." },
];
