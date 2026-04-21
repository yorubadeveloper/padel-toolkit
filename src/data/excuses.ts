export interface Excuse {
  id: string;
  text: string;
  category: ExcuseCategory;
}

export type ExcuseCategory =
  | "bad-smash"
  | "glass-fail"
  | "late-arrival"
  | "conditions"
  | "partner-diplomacy"
  | "general";

export const excuseCategories: { value: ExcuseCategory; label: string }[] = [
  { value: "bad-smash", label: "Bad Smash" },
  { value: "glass-fail", label: "Glass Fail" },
  { value: "late-arrival", label: "Late Arrival" },
  { value: "conditions", label: "Blaming Conditions" },
  { value: "partner-diplomacy", label: "Partner Diplomacy" },
  { value: "general", label: "General" },
];

export const excuses: Excuse[] = [
  { id: "e1", text: "The sun was in my eyes. Both of them.", category: "conditions" },
  { id: "e2", text: "My racket is still in demo mode.", category: "general" },
  { id: "e3", text: "I was aiming for the glass. Strategically.", category: "glass-fail" },
  { id: "e4", text: "That smash was a warning shot.", category: "bad-smash" },
  { id: "e5", text: "Sorry I'm late. I was stretching. For 45 minutes.", category: "late-arrival" },
  { id: "e6", text: "My partner and I are still syncing our telepathy.", category: "partner-diplomacy" },
  { id: "e7", text: "The court was slippery. In that one specific spot. Every time.", category: "conditions" },
  { id: "e8", text: "I'm saving my good shots for the tournament.", category: "general" },
  { id: "e9", text: "I thought we were playing best of 5.", category: "general" },
  { id: "e10", text: "The ball was out. My angle was just different from the ref's.", category: "general" },
  { id: "e11", text: "That wasn't a miss, it was a lob reconnaissance mission.", category: "bad-smash" },
  { id: "e12", text: "I'm still adjusting to this altitude.", category: "conditions" },
  { id: "e13", text: "I let you win that point to keep it interesting.", category: "partner-diplomacy" },
  { id: "e14", text: "My strings are too tight. Or too loose. One of those.", category: "general" },
  { id: "e15", text: "GPS said 10 minutes. It lied.", category: "late-arrival" },
  { id: "e16", text: "I was covering your side, which is why I missed mine.", category: "partner-diplomacy" },
  { id: "e17", text: "The glass gave it a weird bounce. I've never seen physics do that.", category: "glass-fail" },
  { id: "e18", text: "I'm playing with a shoulder thing. It comes and goes.", category: "general" },
  { id: "e19", text: "My overgrip is basically a slip-and-slide right now.", category: "conditions" },
  { id: "e20", text: "I smashed it perfectly. The court just moved.", category: "bad-smash" },
  { id: "e21", text: "I didn't miss. I was testing the back glass acoustics.", category: "glass-fail" },
  { id: "e22", text: "My new shoes haven't broken in yet. Give me 3 sets.", category: "conditions" },
  { id: "e23", text: "I was watching a tutorial last night and now I'm confused.", category: "general" },
  { id: "e24", text: "I thought you had that one. Communication, right?", category: "partner-diplomacy" },
  { id: "e25", text: "Traffic was crazy. Both lanes of it.", category: "late-arrival" },
  { id: "e26", text: "That smash would have been in on a real court.", category: "bad-smash" },
  { id: "e27", text: "The glass panel is clearly not regulation standard.", category: "glass-fail" },
  { id: "e28", text: "I'm playing with a food coma handicap.", category: "late-arrival" },
  { id: "e29", text: "My backhand works great at home. Against the wall.", category: "general" },
  { id: "e30", text: "I was setting you up for the winner. You're welcome.", category: "partner-diplomacy" },
];
