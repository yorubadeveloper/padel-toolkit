"use client";

import { useState, useEffect } from "react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { ToolPageHeader } from "@/components/ui/ToolPageHeader";
import { Button } from "@/components/ui/Button";
import {
  createMatch,
  scorePoint,
  getPointLabel,
  switchSides,
  MatchState,
} from "@/lib/scoreboard";
import { motion, AnimatePresence } from "framer-motion";
import {
  CourtBasketball,
  ArrowsClockwise,
  ArrowsLeftRight,
  Trophy,
  Circle,
} from "@phosphor-icons/react";

const LS_KEY = "padel-toolkit-match";

export default function ScoreboardPage() {
  const [match, setMatch] = useState<MatchState | null>(null);
  const [team1Name, setTeam1Name] = useState("Team 1");
  const [team2Name, setTeam2Name] = useState("Team 2");
  const [goldenPoint, setGoldenPoint] = useState(true);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(LS_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setMatch(parsed);
        setTeam1Name(parsed.players.team1);
        setTeam2Name(parsed.players.team2);
        setStarted(true);
      } catch { /* ignore */ }
    }
  }, []);

  useEffect(() => {
    if (match) localStorage.setItem(LS_KEY, JSON.stringify(match));
  }, [match]);

  const startMatch = () => {
    const m = createMatch(team1Name || "Team 1", team2Name || "Team 2", goldenPoint);
    setMatch(m);
    setStarted(true);
  };

  const handleScore = (team: 0 | 1) => {
    if (!match) return;
    setMatch(scorePoint(match, team));
  };

  const handleSwitch = () => {
    if (!match) return;
    setMatch(switchSides(match));
  };

  const handleReset = () => {
    localStorage.removeItem(LS_KEY);
    setMatch(null);
    setStarted(false);
    setTeam1Name("Team 1");
    setTeam2Name("Team 2");
  };

  return (
    <PageWrapper>
      <ToolPageHeader
        icon={<CourtBasketball size={24} weight="duotone" />}
        title="Match Scoreboard"
        description="Track points, games, and sets with a clean scoreboard. Supports golden point and tie-breaks."
        illustration="/animation-2.svg"
      />

      {!started ? (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-surface border border-muted rounded-2xl p-6 sm:p-8 max-w-md"
        >
          <h2 className="font-bold text-lg mb-5">New Match</h2>
          <div className="space-y-3 mb-5">
            <div>
              <label className="text-xs font-semibold text-foreground/35 uppercase tracking-widest mb-1.5 block">
                Team 1
              </label>
              <input
                type="text"
                placeholder="e.g. Alex & Jordan"
                value={team1Name}
                onChange={(e) => setTeam1Name(e.target.value)}
                className="w-full px-4 py-3 bg-background border border-muted rounded-xl text-sm focus:outline-none transition-all placeholder:text-foreground/25"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-foreground/35 uppercase tracking-widest mb-1.5 block">
                Team 2
              </label>
              <input
                type="text"
                placeholder="e.g. Sam & Riley"
                value={team2Name}
                onChange={(e) => setTeam2Name(e.target.value)}
                className="w-full px-4 py-3 bg-background border border-muted rounded-xl text-sm focus:outline-none transition-all placeholder:text-foreground/25"
              />
            </div>
          </div>

          <label className="flex items-center gap-3 text-sm mb-6 cursor-pointer select-none group">
            <div className="relative">
              <input
                type="checkbox"
                checked={goldenPoint}
                onChange={(e) => setGoldenPoint(e.target.checked)}
                className="w-5 h-5 rounded-md accent-accent cursor-pointer"
              />
            </div>
            <div>
              <span className="font-medium">Golden point</span>
              <span className="text-foreground/35 ml-1.5 text-xs">(no advantage at deuce)</span>
            </div>
          </label>

          <Button onClick={startMatch} size="lg" className="w-full">
            <CourtBasketball size={20} />
            Start Match
          </Button>
        </motion.div>
      ) : match ? (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6 max-w-lg"
        >
          {/* Match over banner */}
          <AnimatePresence>
            {match.matchOver && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-accent-light border border-accent/20 rounded-2xl p-6 text-center"
              >
                <Trophy size={32} weight="duotone" className="text-accent mx-auto mb-2" />
                <p className="text-lg font-bold text-accent-dark">
                  {match.winner === 0 ? match.players.team1 : match.players.team2} wins!
                </p>
                <p className="text-sm text-accent-dark/60 mt-1">
                  {match.sets[0]}-{match.sets[1]} in sets
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Scoreboard */}
          <div className="bg-surface border border-muted rounded-2xl overflow-hidden shadow-sm">
            {/* Header */}
            <div className="grid grid-cols-[1fr_48px_48px_60px] sm:grid-cols-[1fr_72px_72px_88px] items-center px-3 sm:px-5 py-3 bg-foreground/[0.02] border-b border-muted">
              <span className="text-[11px] font-bold text-foreground/30 uppercase tracking-widest">Team</span>
              <span className="text-[11px] font-bold text-foreground/30 uppercase tracking-widest text-center">Sets</span>
              <span className="text-[11px] font-bold text-foreground/30 uppercase tracking-widest text-center">Games</span>
              <span className="text-[11px] font-bold text-foreground/30 uppercase tracking-widest text-center">Pts</span>
            </div>

            {([0, 1] as const).map((team) => (
              <motion.div
                key={team}
                layout
                className={`grid grid-cols-[1fr_48px_48px_60px] sm:grid-cols-[1fr_72px_72px_88px] items-center px-3 sm:px-5 py-5 border-t border-muted/60 transition-colors ${
                  match.serving === team ? "bg-accent/[0.04]" : ""
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  {match.serving === team ? (
                    <Circle size={8} weight="fill" className="text-accent shrink-0 animate-pulse-glow rounded-full" />
                  ) : (
                    <Circle size={8} className="text-transparent shrink-0" />
                  )}
                  <span className="font-bold text-sm sm:text-base truncate min-w-0">
                    {team === 0 ? match.players.team1 : match.players.team2}
                  </span>
                </div>
                <span className="text-center font-bold text-lg text-foreground/70">{match.sets[team]}</span>
                <span className="text-center font-bold text-lg text-foreground/70">{match.games[team]}</span>
                <motion.span
                  key={`${team}-${match.points[team]}`}
                  initial={{ scale: 1.3, color: "#2D8B4E" }}
                  animate={{ scale: 1, color: "#2D8B4E" }}
                  className="text-center font-extrabold text-2xl"
                >
                  {getPointLabel(match, team)}
                </motion.span>
              </motion.div>
            ))}
          </div>

          {/* Completed sets */}
          {match.completedSets.length > 0 && (
            <div className="flex gap-2 flex-wrap">
              {match.completedSets.map((set, i) => (
                <span key={i} className="text-xs font-semibold text-foreground/35 bg-muted px-3 py-1.5 rounded-lg">
                  Set {i + 1}: {set[0]}-{set[1]}
                </span>
              ))}
            </div>
          )}

          {match.tiebreak && (
            <div className="flex items-center gap-2 text-sm text-accent font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Tie-break
            </div>
          )}

          {/* Score buttons */}
          {!match.matchOver && (
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => handleScore(0)}
                className="bg-accent text-white py-7 rounded-2xl font-bold text-sm sm:text-base hover:bg-accent-dark active:scale-[0.97] transition-all duration-200 shadow-sm shadow-accent/15 cursor-pointer truncate px-3"
              >
                + {match.players.team1}
              </button>
              <button
                onClick={() => handleScore(1)}
                className="bg-foreground text-background py-7 rounded-2xl font-bold text-sm sm:text-base hover:bg-foreground/80 active:scale-[0.97] transition-all duration-200 shadow-sm cursor-pointer truncate px-3"
              >
                + {match.players.team2}
              </button>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-2 flex-wrap">
            <Button variant="ghost" size="sm" onClick={handleSwitch}>
              <ArrowsLeftRight size={16} />
              Switch Sides
            </Button>
            <Button variant="ghost" size="sm" onClick={handleReset}>
              <ArrowsClockwise size={16} />
              New Match
            </Button>
          </div>
        </motion.div>
      ) : null}
    </PageWrapper>
  );
}
