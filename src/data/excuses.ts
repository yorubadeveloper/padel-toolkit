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
  // Conditions
  { id: "e1", text: "The sun was in my eyes. Both of them.", category: "conditions" },
  { id: "e7", text: "The court was slippery. In that one specific spot. Every time.", category: "conditions" },
  { id: "e12", text: "I'm still adjusting to this altitude.", category: "conditions" },
  { id: "e19", text: "My overgrip is basically a slip-and-slide right now.", category: "conditions" },
  { id: "e22", text: "My new shoes haven't broken in yet. Give me 3 sets.", category: "conditions" },
  { id: "e31", text: "There was a weird shadow on the court. Threw off my depth perception.", category: "conditions" },
  { id: "e32", text: "The lights are flickering. You can't see it, but I can.", category: "conditions" },
  { id: "e33", text: "This court plays way faster than what I'm used to.", category: "conditions" },
  { id: "e34", text: "The wind picked up right as I swung. You didn't feel it?", category: "conditions" },
  { id: "e35", text: "The net is definitely higher on my side.", category: "conditions" },
  { id: "e36", text: "I can't play in these temperatures. I'm built for indoor courts.", category: "conditions" },

  // Bad Smash
  { id: "e4", text: "That smash was a warning shot.", category: "bad-smash" },
  { id: "e11", text: "That wasn't a miss, it was a lob reconnaissance mission.", category: "bad-smash" },
  { id: "e20", text: "I smashed it perfectly. The court just moved.", category: "bad-smash" },
  { id: "e26", text: "That smash would have been in on a real court.", category: "bad-smash" },
  { id: "e37", text: "I'm working on a new smash technique. It's a process.", category: "bad-smash" },
  { id: "e38", text: "That was meant to go off the glass and confuse everyone. Mission accomplished.", category: "bad-smash" },
  { id: "e39", text: "I hit that at 90% power. At 100% it would've been in.", category: "bad-smash" },
  { id: "e40", text: "The ball was wet. That's why the smash went sideways.", category: "bad-smash" },
  { id: "e41", text: "My timing was off by one millisecond. Barely counts as a miss.", category: "bad-smash" },
  { id: "e42", text: "I was going for the por tres. Very advanced shot. You wouldn't understand.", category: "bad-smash" },

  // Glass Fail
  { id: "e3", text: "I was aiming for the glass. Strategically.", category: "glass-fail" },
  { id: "e17", text: "The glass gave it a weird bounce. I've never seen physics do that.", category: "glass-fail" },
  { id: "e21", text: "I didn't miss. I was testing the back glass acoustics.", category: "glass-fail" },
  { id: "e27", text: "The glass panel is clearly not regulation standard.", category: "glass-fail" },
  { id: "e43", text: "That bounce off the glass broke at least two laws of physics.", category: "glass-fail" },
  { id: "e44", text: "The glass was dirty. Changed the spin completely.", category: "glass-fail" },
  { id: "e45", text: "I've played on 50 courts and that glass is the weirdest I've ever seen.", category: "glass-fail" },
  { id: "e46", text: "The ball hit the frame of the glass, not the glass itself. Totally different bounce.", category: "glass-fail" },

  // Late Arrival
  { id: "e5", text: "Sorry I'm late. I was stretching. For 45 minutes.", category: "late-arrival" },
  { id: "e15", text: "GPS said 10 minutes. It lied.", category: "late-arrival" },
  { id: "e25", text: "Traffic was crazy. Both lanes of it.", category: "late-arrival" },
  { id: "e28", text: "I'm playing with a food coma handicap.", category: "late-arrival" },
  { id: "e47", text: "I couldn't find my racket. It was in my hand.", category: "late-arrival" },
  { id: "e48", text: "I was early. For tomorrow's booking.", category: "late-arrival" },
  { id: "e49", text: "Parking was a nightmare. I circled the lot three times.", category: "late-arrival" },
  { id: "e50", text: "My watch was on the wrong time zone. Somehow.", category: "late-arrival" },
  { id: "e51", text: "I had to go back home for my wristband. It's my lucky one.", category: "late-arrival" },

  // Partner Diplomacy
  { id: "e6", text: "My partner and I are still syncing our telepathy.", category: "partner-diplomacy" },
  { id: "e13", text: "I let you win that point to keep it interesting.", category: "partner-diplomacy" },
  { id: "e16", text: "I was covering your side, which is why I missed mine.", category: "partner-diplomacy" },
  { id: "e24", text: "I thought you had that one. Communication, right?", category: "partner-diplomacy" },
  { id: "e30", text: "I was setting you up for the winner. You're welcome.", category: "partner-diplomacy" },
  { id: "e52", text: "We need a few more sessions together. Chemistry takes time.", category: "partner-diplomacy" },
  { id: "e53", text: "I called 'yours' in my head. Does that not count?", category: "partner-diplomacy" },
  { id: "e54", text: "I was playing conservatively so you could shine.", category: "partner-diplomacy" },
  { id: "e55", text: "We're playing a different strategy. You just can't tell yet.", category: "partner-diplomacy" },
  { id: "e56", text: "I gave you the easy ball and you still missed it. Just saying.", category: "partner-diplomacy" },
  { id: "e57", text: "I was trying not to get in your way. That's teamwork.", category: "partner-diplomacy" },

  // General
  { id: "e2", text: "My racket is still in demo mode.", category: "general" },
  { id: "e8", text: "I'm saving my good shots for the tournament.", category: "general" },
  { id: "e9", text: "I thought we were playing best of 5.", category: "general" },
  { id: "e10", text: "The ball was out. My angle was just different from the ref's.", category: "general" },
  { id: "e14", text: "My strings are too tight. Or too loose. One of those.", category: "general" },
  { id: "e18", text: "I'm playing with a shoulder thing. It comes and goes.", category: "general" },
  { id: "e23", text: "I was watching a tutorial last night and now I'm confused.", category: "general" },
  { id: "e29", text: "My backhand works great at home. Against the wall.", category: "general" },
  { id: "e58", text: "I haven't played in two weeks. My muscle memory is in sleep mode.", category: "general" },
  { id: "e59", text: "I'm still warming up. That was basically my warm-up set.", category: "general" },
  { id: "e60", text: "I played three hours yesterday. My legs are cooked.", category: "general" },
  { id: "e61", text: "I'm experimenting with a continental grip today. It's not going well.", category: "general" },
  { id: "e62", text: "I perform way better in practice.", category: "general" },
  { id: "e63", text: "I'm more of a singles player, honestly.", category: "general" },
  { id: "e64", text: "These balls are way too bouncy. Or not bouncy enough. Hard to say.", category: "general" },
  { id: "e65", text: "I had coffee too late. Or not enough coffee. One of those.", category: "general" },
  { id: "e66", text: "I need at least one set to find my rhythm. Maybe two.", category: "general" },
  { id: "e67", text: "That was clearly out. From where I was standing.", category: "general" },
  { id: "e68", text: "I was told there would be snacks between sets.", category: "general" },
];
