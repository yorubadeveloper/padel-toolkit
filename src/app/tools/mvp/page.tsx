"use client";

import { useState, useCallback } from "react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { ToolPageHeader } from "@/components/ui/ToolPageHeader";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Plus, X, ShareNetwork, Crown, ArrowsClockwise } from "@phosphor-icons/react";
import { useToast } from "@/components/ui/Toast";

export default function MVPPage() {
  const [names, setNames] = useState<string[]>(["", "", "", ""]);
  const [votes, setVotes] = useState<Record<string, number> | null>(null);
  const [hasVoted, setHasVoted] = useState(false);
  const { showToast } = useToast();

  const addPlayer = () => {
    if (names.length >= 12) return;
    setNames((prev) => [...prev, ""]);
  };

  const removePlayer = (index: number) => {
    if (names.length <= 2) return;
    setNames((prev) => prev.filter((_, i) => i !== index));
  };

  const updateName = (index: number, value: string) => {
    setNames((prev) => prev.map((n, i) => (i === index ? value : n)));
  };

  const startVoting = () => {
    const filled = names.map((n) => n.trim()).filter(Boolean);
    if (filled.length < 2) return;
    const initial: Record<string, number> = {};
    filled.forEach((name) => {
      initial[name] = 0;
    });
    setVotes(initial);
    setHasVoted(false);
  };

  const castVote = (name: string) => {
    if (hasVoted || !votes) return;
    setVotes((prev) => ({ ...prev!, [name]: (prev![name] || 0) + 1 }));
    setHasVoted(true);
  };

  const reset = () => {
    setVotes(null);
    setHasVoted(false);
    setNames(["", "", "", ""]);
  };

  const shareResults = useCallback(() => {
    if (!votes) return;
    const sorted = Object.entries(votes).sort((a, b) => b[1] - a[1]);
    const lines = sorted.map(([name, count], i) => `${i + 1}. ${name}: ${count} vote${count !== 1 ? "s" : ""}`);
    navigator.clipboard.writeText(`MVP Vote Results\n\n${lines.join("\n")}\n\nVote at padeltoolkit.com/tools/mvp`);
    showToast("Results copied to clipboard");
  }, [votes, showToast]);

  const filledCount = names.filter((n) => n.trim()).length;
  const sortedVotes = votes
    ? Object.entries(votes).sort((a, b) => b[1] - a[1])
    : [];
  const maxVotes = sortedVotes.length > 0 ? sortedVotes[0][1] : 0;

  return (
    <PageWrapper>
      <ToolPageHeader
        icon={<Trophy size={24} weight="duotone" />}
        title="MVP Vote"
        description="Add player names, then pass the phone around and let everyone vote for the MVP. Simple, fun, no sign-up needed."
        illustration="/animation-2.svg"
      />

      {!votes ? (
        <div className="max-w-md">
          <label className="text-xs font-semibold text-foreground/35 uppercase tracking-widest mb-3 block">
            Players
          </label>
          <div className="space-y-2 mb-4">
            {names.map((name, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
                className="flex gap-2"
              >
                <div className="relative flex-1">
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
                {names.length > 2 && (
                  <button
                    onClick={() => removePlayer(i)}
                    className="px-3 text-foreground/20 hover:text-red-400 transition-colors cursor-pointer"
                  >
                    <X size={16} />
                  </button>
                )}
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {names.length < 12 && (
              <Button variant="ghost" size="sm" onClick={addPlayer}>
                <Plus size={16} />
                Add player
              </Button>
            )}
            <Button onClick={startVoting} size="lg" disabled={filledCount < 2}>
              <Trophy size={18} />
              Start voting
            </Button>
          </div>
        </div>
      ) : (
        <div className="max-w-md">
          <AnimatePresence mode="wait">
            {!hasVoted ? (
              <motion.div
                key="vote"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
              >
                <h2 className="text-lg font-bold mb-2">Who was the MVP?</h2>
                <p className="text-sm text-foreground/40 mb-6">Tap the player you think played the best.</p>
                <div className="space-y-2">
                  {Object.keys(votes).map((name, i) => (
                    <motion.button
                      key={name}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => castVote(name)}
                      className="w-full text-left px-5 py-4 bg-surface border border-muted rounded-2xl text-sm font-semibold hover:border-accent/30 hover:bg-accent-light/20 active:scale-[0.98] transition-all duration-200 cursor-pointer"
                    >
                      {name}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center gap-2.5 mb-6">
                  <Crown size={20} weight="fill" className="text-accent" />
                  <h2 className="text-lg font-bold">Results</h2>
                </div>

                <div className="space-y-3 mb-6">
                  {sortedVotes.map(([name, count], i) => (
                    <motion.div
                      key={name}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="bg-surface border border-muted rounded-xl p-4 flex items-center gap-4"
                    >
                      <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${
                        i === 0 && count > 0
                          ? "bg-accent-light text-accent"
                          : "bg-muted text-foreground/30"
                      }`}>
                        {i + 1}
                      </span>
                      <span className="font-semibold text-sm flex-1">{name}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-accent rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: maxVotes > 0 ? `${(count / maxVotes) * 100}%` : "0%" }}
                            transition={{ delay: i * 0.08 + 0.3, duration: 0.5 }}
                          />
                        </div>
                        <span className="text-xs font-bold text-foreground/30 w-4 text-right tabular-nums">{count}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <p className="text-xs text-foreground/25 mb-5">
                  Pass the phone to the next person and tap "Next vote" to keep going.
                </p>

                <div className="flex flex-wrap gap-2">
                  <Button variant="primary" onClick={() => setHasVoted(false)}>
                    Next vote
                  </Button>
                  <Button variant="outline" onClick={shareResults}>
                    <ShareNetwork size={16} />
                    Share
                  </Button>
                  <Button variant="ghost" onClick={reset}>
                    <ArrowsClockwise size={16} />
                    Reset
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </PageWrapper>
  );
}
