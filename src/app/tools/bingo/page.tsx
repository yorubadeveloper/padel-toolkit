"use client";

import { useState, useCallback } from "react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { ToolPageHeader } from "@/components/ui/ToolPageHeader";
import { bingoItems } from "@/data/bingo";
import { motion } from "framer-motion";
import { GridFour, Shuffle, ShareNetwork } from "@phosphor-icons/react";
import { useToast } from "@/components/ui/Toast";

function generateCard(): string[] {
  const shuffled = [...bingoItems].sort(() => Math.random() - 0.5);
  const items = shuffled.slice(0, 24);
  // Insert "FREE" in the center (index 12)
  items.splice(12, 0, "FREE SPACE");
  return items;
}

export default function BingoPage() {
  const [card, setCard] = useState<string[] | null>(null);
  const [checked, setChecked] = useState<Set<number>>(new Set([12])); // FREE is always checked
  const [displayKey, setDisplayKey] = useState(0);
  const { showToast } = useToast();

  const generate = useCallback(() => {
    setCard(generateCard());
    setChecked(new Set([12]));
    setDisplayKey((k) => k + 1);
  }, []);

  const toggleCell = (index: number) => {
    if (index === 12) return; // Can't uncheck FREE
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const shareCard = () => {
    if (!card) return;
    const text = card.map((item, i) => (checked.has(i) ? `[x] ${item}` : `[ ] ${item}`)).join("\n");
    navigator.clipboard.writeText(`Padel Bingo!\n\n${text}\n\nPlay at padeltoolkit.com/tools/bingo`);
    showToast("Bingo card copied to clipboard");
  };

  const checkedCount = checked.size;
  const hasBingo = checkForBingo(checked);

  return (
    <PageWrapper>
      <ToolPageHeader
        icon={<GridFour size={24} weight="duotone" />}
        title="Padel Bingo"
        description="Generate a bingo card with things that happen during every padel session. Tap to mark them off as they happen."
        illustration="/animation-1.svg"
      />

      <div className="flex flex-wrap items-center gap-3 mb-8">
        <button
          onClick={generate}
          className="bg-accent text-white px-7 py-3.5 rounded-2xl font-semibold text-[15px] hover:bg-accent-dark active:scale-[0.97] transition-all duration-200 shadow-sm shadow-accent/20 hover:shadow-md inline-flex items-center gap-2.5 cursor-pointer"
        >
          <Shuffle size={18} />
          {card ? "New card" : "Generate card"}
        </button>
        {card && (
          <button
            onClick={shareCard}
            className="border border-muted text-foreground/60 px-5 py-3.5 rounded-2xl font-semibold text-[15px] hover:border-accent/30 hover:text-accent transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
          >
            <ShareNetwork size={18} />
            Share
          </button>
        )}
      </div>

      {!card && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-surface border border-dashed border-muted-dark/40 rounded-2xl p-12 text-center"
        >
          <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4">
            <GridFour size={24} className="text-foreground/25" />
          </div>
          <p className="text-sm text-foreground/35 font-medium mb-1">No card yet</p>
          <p className="text-xs text-foreground/25">Generate a bingo card and bring it to your next session.</p>
        </motion.div>
      )}

      {card && (
        <motion.div
          key={displayKey}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {hasBingo && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-accent-light border border-accent/20 rounded-2xl p-4 text-center mb-5"
            >
              <p className="text-lg font-bold text-accent-dark">BINGO!</p>
              <p className="text-sm text-accent-dark/60">You got a full line. Well played.</p>
            </motion.div>
          )}

          <div className="grid grid-cols-5 gap-1.5 sm:gap-2 max-w-2xl">
            {card.map((item, i) => {
              const isChecked = checked.has(i);
              const isFree = i === 12;
              return (
                <motion.button
                  key={`${displayKey}-${i}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.015 }}
                  onClick={() => toggleCell(i)}
                  className={`aspect-square p-1.5 sm:p-2.5 rounded-xl text-[10px] sm:text-[11px] font-medium leading-tight flex items-center justify-center text-center transition-all duration-200 cursor-pointer border ${
                    isFree
                      ? "bg-accent text-white border-accent"
                      : isChecked
                      ? "bg-accent-light text-accent-dark border-accent/30 scale-[0.96]"
                      : "bg-surface border-muted hover:border-accent/20 text-foreground/60"
                  }`}
                >
                  {item}
                </motion.button>
              );
            })}
          </div>

          <p className="text-xs text-foreground/25 mt-4">
            {checkedCount} / 25 checked
          </p>
        </motion.div>
      )}
    </PageWrapper>
  );
}

function checkForBingo(checked: Set<number>): boolean {
  // Rows
  for (let row = 0; row < 5; row++) {
    const start = row * 5;
    if ([0, 1, 2, 3, 4].every((col) => checked.has(start + col))) return true;
  }
  // Columns
  for (let col = 0; col < 5; col++) {
    if ([0, 1, 2, 3, 4].every((row) => checked.has(row * 5 + col))) return true;
  }
  // Diagonals
  if ([0, 6, 12, 18, 24].every((i) => checked.has(i))) return true;
  if ([4, 8, 12, 16, 20].every((i) => checked.has(i))) return true;
  return false;
}
