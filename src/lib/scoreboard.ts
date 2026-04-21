export interface MatchState {
  players: { team1: string; team2: string };
  points: [number, number];
  games: [number, number];
  sets: [number, number];
  completedSets: [number, number][];
  serving: 0 | 1;
  goldenPoint: boolean;
  tiebreak: boolean;
  isDeuce: boolean;
  matchOver: boolean;
  winner: number | null;
}

const POINT_LABELS = ["0", "15", "30", "40"];

export function createMatch(team1: string, team2: string, goldenPoint: boolean): MatchState {
  return {
    players: { team1, team2 },
    points: [0, 0],
    games: [0, 0],
    sets: [0, 0],
    completedSets: [],
    serving: 0,
    goldenPoint,
    tiebreak: false,
    isDeuce: false,
    matchOver: false,
    winner: null,
  };
}

export function getPointLabel(state: MatchState, team: 0 | 1): string {
  if (state.tiebreak) return String(state.points[team]);
  if (state.points[0] >= 3 && state.points[1] >= 3) {
    if (state.goldenPoint) return "GP";
    if (state.points[0] === state.points[1]) return "40";
    return state.points[team] > state.points[1 - team] ? "AD" : "40";
  }
  return POINT_LABELS[Math.min(state.points[team], 3)];
}

export function scorePoint(state: MatchState, team: 0 | 1): MatchState {
  if (state.matchOver) return state;
  const next = JSON.parse(JSON.stringify(state)) as MatchState;
  next.points[team]++;

  if (next.tiebreak) {
    // Win tiebreak at 7 with 2 point lead
    if (next.points[team] >= 7 && next.points[team] - next.points[1 - team] >= 2) {
      return winGame(next, team);
    }
    // Switch serve every 2 points
    const totalPoints = next.points[0] + next.points[1];
    if (totalPoints % 2 === 1) {
      next.serving = next.serving === 0 ? 1 : 0;
    }
    return next;
  }

  // Regular game logic
  if (next.points[team] >= 4) {
    if (next.goldenPoint && next.points[0] >= 3 && next.points[1] >= 3) {
      return winGame(next, team);
    }
    if (next.points[team] - next.points[1 - team] >= 2) {
      return winGame(next, team);
    }
  }

  return next;
}

function winGame(state: MatchState, team: 0 | 1): MatchState {
  const next = { ...state };
  next.points = [0, 0];
  next.games = [...state.games] as [number, number];
  next.games[team]++;
  next.tiebreak = false;

  // Switch serve
  next.serving = next.serving === 0 ? 1 : 0;

  // Check for set win (6 games with 2 game lead, or tiebreak win)
  if (next.games[team] >= 6 && next.games[team] - next.games[1 - team] >= 2) {
    return winSet(next, team);
  }

  // Tiebreak at 6-6
  if (next.games[0] === 6 && next.games[1] === 6) {
    next.tiebreak = true;
  }

  return next;
}

function winSet(state: MatchState, team: 0 | 1): MatchState {
  const next = { ...state };
  next.completedSets = [...state.completedSets, [...state.games] as [number, number]];
  next.completedSets[next.completedSets.length - 1][team]++;
  next.sets = [...state.sets] as [number, number];
  next.sets[team]++;
  next.games = [0, 0];

  // Match won at 2 sets
  if (next.sets[team] >= 2) {
    next.matchOver = true;
    next.winner = team;
  }

  return next;
}

export function switchSides(state: MatchState): MatchState {
  return {
    ...state,
    players: { team1: state.players.team2, team2: state.players.team1 },
    points: [state.points[1], state.points[0]],
    games: [state.games[1], state.games[0]],
    sets: [state.sets[1], state.sets[0]],
    completedSets: state.completedSets.map((s) => [s[1], s[0]] as [number, number]),
    serving: state.serving === 0 ? 1 : 0,
  };
}
