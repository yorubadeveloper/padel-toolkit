"use client";

import { useState, useCallback, useRef } from "react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { ToolPageHeader } from "@/components/ui/ToolPageHeader";
import { shots, Shot } from "@/data/shots";
import { motion, AnimatePresence } from "framer-motion";
import { Target, Shuffle, Sparkle } from "@phosphor-icons/react";

const difficultyConfig = {
  beginner: { color: "bg-emerald-100 text-emerald-700", label: "Beginner" },
  intermediate: { color: "bg-amber-100 text-amber-700", label: "Intermediate" },
  advanced: { color: "bg-rose-100 text-rose-700", label: "Advanced" },
};

export default function ShotOfTheDayPage() {
  const [currentShot, setCurrentShot] = useState<Shot | null>(null);
  const [isShuffling, setIsShuffling] = useState(false);
  const [displayKey, setDisplayKey] = useState(0);
  const lastIdRef = useRef<string | null>(null);

  const generate = useCallback(() => {
    setIsShuffling(true);
    setTimeout(() => {
      let pick = shots[Math.floor(Math.random() * shots.length)];
      if (shots.length > 1) {
        while (pick.id === lastIdRef.current) {
          pick = shots[Math.floor(Math.random() * shots.length)];
        }
      }
      lastIdRef.current = pick.id;
      setCurrentShot(pick);
      setDisplayKey((k) => k + 1);
      setIsShuffling(false);
    }, 300);
  }, []);

  return (
    <PageWrapper>
      <ToolPageHeader
        icon={<Target size={24} weight="duotone" />}
        title="Shot of the Day"
        description="Get one random padel shot to focus on today, with a quick tip on how to practice it."
        illustration="/animation-3.svg"
      />

      <div className="max-w-lg">
        <div className="flex items-center gap-3 mb-8">
          <button
            onClick={generate}
            disabled={isShuffling}
            className="bg-accent text-white px-7 py-3.5 rounded-2xl font-semibold text-[15px] hover:bg-accent-dark active:scale-[0.97] transition-all duration-200 shadow-sm shadow-accent/20 hover:shadow-md inline-flex items-center gap-2.5 cursor-pointer disabled:opacity-70"
          >
            <Shuffle size={18} className={isShuffling ? "animate-spin" : ""} />
            {currentShot ? "Another shot" : "Get today's shot"}
          </button>
          <span className="text-xs font-medium text-foreground/25">
            {shots.length} shots
          </span>
        </div>

        <AnimatePresence mode="wait">
          {!currentShot && !isShuffling && (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              className="bg-surface border border-dashed border-muted-dark/40 rounded-2xl p-12 text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4">
                <Target size={24} className="text-foreground/25" />
              </div>
              <p className="text-sm text-foreground/35 font-medium mb-1">No shot yet</p>
              <p className="text-xs text-foreground/25">Hit the button to get your focus shot for today.</p>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {currentShot && !isShuffling && (
            <motion.div
              key={displayKey}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.97, transition: { duration: 0.15 } }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-surface border border-muted rounded-2xl p-7 sm:p-9"
            >
              <div className="flex items-start justify-between mb-4 gap-4">
                <div className="flex items-center gap-2.5">
                  <Sparkle size={18} weight="fill" className="text-accent" />
                  <h2 className="text-xl sm:text-2xl font-bold">{currentShot.name}</h2>
                </div>
                <span
                  className={`px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider shrink-0 ${
                    difficultyConfig[currentShot.difficulty].color
                  }`}
                >
                  {difficultyConfig[currentShot.difficulty].label}
                </span>
              </div>

              <p className="text-foreground/55 leading-relaxed text-[15px] mb-6">
                {currentShot.tip}
              </p>

              <div className="flex items-center gap-1.5 text-[13px] font-medium text-foreground/40 bg-muted/70 px-3 py-1.5 rounded-lg w-fit">
                <Target size={15} />
                {currentShot.focus}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageWrapper>
  );
}
