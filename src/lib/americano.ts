export interface AmericanoRound {
  round: number;
  matches: {
    court: number;
    team1: string[];
    team2: string[];
  }[];
}

// Fisher-Yates shuffle
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function generateAmericano(players: string[]): AmericanoRound[] {
  const n = players.length;
  const courts = n / 4;
  const totalRounds = Math.min(n - 1, 6); // Cap at 6 rounds

  const rounds: AmericanoRound[] = [];
  const usedPairings = new Set<string>();

  for (let r = 0; r < totalRounds; r++) {
    const shuffled = shuffle(players);
    const matches = [];

    for (let c = 0; c < courts; c++) {
      const group = shuffled.slice(c * 4, c * 4 + 4);
      const team1 = [group[0], group[1]];
      const team2 = [group[2], group[3]];

      const key = [...team1].sort().join(",") + "v" + [...team2].sort().join(",");
      usedPairings.add(key);

      matches.push({
        court: c + 1,
        team1,
        team2,
      });
    }

    rounds.push({ round: r + 1, matches });
  }

  return rounds;
}

export function formatAmericanoText(rounds: AmericanoRound[]): string {
  return rounds
    .map((r) => {
      const header = `--- Round ${r.round} ---`;
      const matchLines = r.matches.map(
        (m) =>
          `Court ${m.court}: ${m.team1.join(" & ")} vs ${m.team2.join(" & ")}`
      );
      return [header, ...matchLines].join("\n");
    })
    .join("\n\n");
}
