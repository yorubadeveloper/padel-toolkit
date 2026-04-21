"use client";

import { useState } from "react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { ToolPageHeader } from "@/components/ui/ToolPageHeader";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/ui/CopyButton";
import { generateAmericano, formatAmericanoText, AmericanoRound } from "@/lib/americano";
import { motion, AnimatePresence } from "framer-motion";
import { UsersThree, Shuffle, ArrowsClockwise, Users, Trophy } from "@phosphor-icons/react";

export default function AmericanoPage() {
  const [names, setNames] = useState<string[]>(["", "", "", ""]);
  const [rounds, setRounds] = useState<AmericanoRound[] | null>(null);
  const [error, setError] = useState("");

  const playerCounts = [4, 8, 12, 16];

  const setPlayerCount = (count: number) => {
    const newNames = Array(count).fill("").map((_, i) => names[i] || "");
    setNames(newNames);
    setRounds(null);
    setError("");
  };

  const updateName = (index: number, value: string) => {
    const updated = [...names];
    updated[index] = value;
    setNames(updated);
  };

  const handleGenerate = () => {
    const filled = names.map((n) => n.trim()).filter(Boolean);
    if (filled.length !== names.length) {
      setError("Please fill in all player names.");
      return;
    }
    if (new Set(filled).size !== filled.length) {
      setError("Player names must be unique.");
      return;
    }
    setError("");
    setRounds(generateAmericano(filled));
  };

  const filledCount = names.filter((n) => n.trim()).length;

  return (
    <PageWrapper>
      <ToolPageHeader
        icon={<UsersThree size={24} weight="duotone" />}
        title="Americano Generator"
        description="Enter player names, pick the group size, and generate randomized rounds with pairings and court assignments."
        illustration="/animation-1.svg"
      />

      {/* Player count selector */}
      <div className="mb-6">
        <label className="text-xs font-semibold text-foreground/35 uppercase tracking-widest mb-3 block">
          Number of players
        </label>
        <div className="flex gap-2">
          {playerCounts.map((count) => (
            <button
              key={count}
              onClick={() => setPlayerCount(count)}
              className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                names.length === count
                  ? "bg-accent text-white shadow-sm shadow-accent/20"
                  : "bg-muted text-foreground/50 hover:text-foreground hover:bg-muted-dark/50"
              }`}
            >
              {count}
            </button>
          ))}
        </div>
      </div>

      {/* Name inputs */}
      <div className="grid sm:grid-cols-2 gap-3 mb-2">
        {names.map((name, i) => (
          <motion.div
            key={`${names.length}-${i}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.025 }}
          >
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-foreground/20 w-5">
                {i + 1}
              </span>
              <input
                type="text"
                placeholder={`Player ${i + 1}`}
                value={name}
                onChange={(e) => updateName(i, e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-surface border border-muted rounded-xl text-sm focus:outline-none transition-all placeholder:text-foreground/25"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Progress indicator */}
      <div className="flex items-center gap-2 mb-6 mt-1">
        <div className="flex-1 h-1 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-accent rounded-full"
            animate={{ width: `${(filledCount / names.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <span className="text-xs font-medium text-foreground/30">
          {filledCount}/{names.length}
        </span>
      </div>

      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-red-500 text-sm mb-4 font-medium"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>

      <div className="flex flex-wrap gap-3 mb-10">
        <Button onClick={handleGenerate} size="lg" disabled={filledCount < names.length}>
          <Shuffle size={18} />
          Generate Rounds
        </Button>
        {rounds && (
          <Button variant="outline" size="lg" onClick={handleGenerate}>
            <ArrowsClockwise size={18} />
            Regenerate
          </Button>
        )}
      </div>

      {/* Empty state */}
      {!rounds && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-surface border border-dashed border-muted-dark/40 rounded-2xl p-10 text-center"
        >
          <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4">
            <Users size={24} className="text-foreground/25" />
          </div>
          <p className="text-sm text-foreground/35 font-medium mb-1">
            No schedule yet
          </p>
          <p className="text-xs text-foreground/25">
            Fill in all player names and hit generate.
          </p>
        </motion.div>
      )}

      {/* Results */}
      <AnimatePresence>
        {rounds && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Trophy size={20} weight="duotone" className="text-accent" />
                <h2 className="text-lg font-bold">Schedule</h2>
                <span className="text-xs font-medium text-foreground/30 bg-muted px-2.5 py-1 rounded-lg">
                  {rounds.length} rounds
                </span>
              </div>
              <CopyButton text={formatAmericanoText(rounds)} label="Copy all" />
            </div>

            {rounds.map((round, ri) => (
              <motion.div
                key={round.round}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: ri * 0.08 }}
                className="bg-surface border border-muted rounded-2xl overflow-hidden"
              >
                <div className="px-5 py-3 bg-muted/40 border-b border-muted">
                  <h3 className="font-bold text-xs text-foreground/35 uppercase tracking-widest">
                    Round {round.round}
                  </h3>
                </div>
                <div className="divide-y divide-muted/60">
                  {round.matches.map((match) => (
                    <div
                      key={match.court}
                      className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 px-4 sm:px-5 py-3.5 sm:py-4"
                    >
                      <span className="text-[11px] font-bold text-foreground/20 uppercase tracking-wider shrink-0">
                        Court {match.court}
                      </span>
                      <div className="flex-1 flex items-center justify-center gap-2 sm:gap-4 text-sm min-w-0">
                        <span className="font-semibold text-right flex-1 truncate">
                          {match.team1.join(" & ")}
                        </span>
                        <span className="text-[11px] font-bold text-accent bg-accent-light px-2 py-0.5 rounded-md shrink-0">
                          VS
                        </span>
                        <span className="font-semibold text-left flex-1 truncate">
                          {match.team2.join(" & ")}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
}
