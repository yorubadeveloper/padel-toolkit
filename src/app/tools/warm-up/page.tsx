"use client";

import { useState, useCallback } from "react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { ToolPageHeader } from "@/components/ui/ToolPageHeader";
import { warmUpExercises, categoryLabels, WarmUpExercise } from "@/data/warm-up";
import { motion } from "framer-motion";
import { PersonSimpleRun, Shuffle, Timer, ArrowsClockwise } from "@phosphor-icons/react";

function generateRoutine(count: number = 6): WarmUpExercise[] {
  const categories: WarmUpExercise["category"][] = ["stretch", "activation", "movement", "racket"];
  const routine: WarmUpExercise[] = [];

  // Ensure at least one from each category
  for (const cat of categories) {
    const pool = warmUpExercises.filter((e) => e.category === cat);
    const pick = pool[Math.floor(Math.random() * pool.length)];
    routine.push(pick);
  }

  // Fill remaining spots randomly (avoiding duplicates)
  const remaining = warmUpExercises.filter((e) => !routine.find((r) => r.id === e.id));
  const shuffled = remaining.sort(() => Math.random() - 0.5);
  for (let i = 0; i < count - 4 && i < shuffled.length; i++) {
    routine.push(shuffled[i]);
  }

  // Shuffle order but keep stretches first, racket last
  const stretches = routine.filter((e) => e.category === "stretch");
  const middle = routine.filter((e) => e.category === "activation" || e.category === "movement");
  const racket = routine.filter((e) => e.category === "racket");

  return [...stretches, ...middle.sort(() => Math.random() - 0.5), ...racket];
}

const categoryColors: Record<WarmUpExercise["category"], string> = {
  stretch: "bg-blue-100 text-blue-700",
  activation: "bg-amber-100 text-amber-700",
  movement: "bg-emerald-100 text-emerald-700",
  racket: "bg-purple-100 text-purple-700",
};

export default function WarmUpPage() {
  const [routine, setRoutine] = useState<WarmUpExercise[] | null>(null);
  const [displayKey, setDisplayKey] = useState(0);

  const generate = useCallback(() => {
    setRoutine(generateRoutine(7));
    setDisplayKey((k) => k + 1);
  }, []);

  return (
    <PageWrapper>
      <ToolPageHeader
        icon={<PersonSimpleRun size={24} weight="duotone" />}
        title="Warm-Up Routine"
        description="Get a randomized 5-minute warm-up routine before your next match. Stretches, activation, movement, and racket work."
        illustration="/animation-6.svg"
      />

      <div className="flex items-center gap-3 mb-8">
        <button
          onClick={generate}
          className="bg-accent text-white px-7 py-3.5 rounded-2xl font-semibold text-[15px] hover:bg-accent-dark active:scale-[0.97] transition-all duration-200 shadow-sm shadow-accent/20 hover:shadow-md inline-flex items-center gap-2.5 cursor-pointer"
        >
          {routine ? <ArrowsClockwise size={18} /> : <Shuffle size={18} />}
          {routine ? "New routine" : "Generate routine"}
        </button>
      </div>

      {!routine && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-surface border border-dashed border-muted-dark/40 rounded-2xl p-12 text-center"
        >
          <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4">
            <PersonSimpleRun size={24} className="text-foreground/25" />
          </div>
          <p className="text-sm text-foreground/35 font-medium mb-1">No routine yet</p>
          <p className="text-xs text-foreground/25">Generate one and get warmed up before your match.</p>
        </motion.div>
      )}

      {routine && (
        <motion.div
          key={displayKey}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="space-y-3 max-w-xl"
        >
          {routine.map((exercise, i) => (
            <motion.div
              key={exercise.id}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.06 }}
              className="bg-surface border border-muted rounded-xl p-5 flex gap-4"
            >
              <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-xs font-bold text-foreground/30">{i + 1}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3 mb-1.5">
                  <h3 className="font-bold text-sm">{exercise.name}</h3>
                  <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider shrink-0 ${categoryColors[exercise.category]}`}>
                    {categoryLabels[exercise.category]}
                  </span>
                </div>
                <p className="text-[13px] text-foreground/45 leading-relaxed mb-2">{exercise.description}</p>
                <div className="flex items-center gap-1.5 text-[12px] font-medium text-foreground/30">
                  <Timer size={13} />
                  {exercise.duration}
                </div>
              </div>
            </motion.div>
          ))}

          <div className="pt-3 text-xs text-foreground/25">
            Total: ~5 minutes. Adjust timing based on how you feel.
          </div>
        </motion.div>
      )}
    </PageWrapper>
  );
}
