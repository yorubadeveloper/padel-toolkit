"use client";

import { useState, useCallback, useRef } from "react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { ToolPageHeader } from "@/components/ui/ToolPageHeader";
import { Button } from "@/components/ui/Button";
import { drills, drillCategories, Drill, DrillCategory } from "@/data/drills";
import { motion, AnimatePresence } from "framer-motion";
import {
  Barbell,
  Shuffle,
  Timer,
  Users,
  Lightning,
  Sparkle,
} from "@phosphor-icons/react";
import Image from "next/image";

const difficulties = ["beginner", "intermediate", "advanced"] as const;

const difficultyConfig = {
  beginner: { color: "bg-emerald-100 text-emerald-700", label: "Beginner" },
  intermediate: { color: "bg-amber-100 text-amber-700", label: "Intermediate" },
  advanced: { color: "bg-rose-100 text-rose-700", label: "Advanced" },
};

export default function DrillsPage() {
  const [selectedCategory, setSelectedCategory] = useState<DrillCategory | "all">("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState<typeof difficulties[number] | "all">("all");
  const [currentDrill, setCurrentDrill] = useState<Drill | null>(null);
  const [isShuffling, setIsShuffling] = useState(false);
  const [displayKey, setDisplayKey] = useState(0);
  const lastIdRef = useRef<string | null>(null);

  const getFilteredDrills = useCallback(() => {
    return drills.filter((d) => {
      if (selectedCategory !== "all" && d.category !== selectedCategory) return false;
      if (selectedDifficulty !== "all" && d.difficulty !== selectedDifficulty) return false;
      return true;
    });
  }, [selectedCategory, selectedDifficulty]);

  const randomize = useCallback(() => {
    const filtered = getFilteredDrills();
    if (filtered.length === 0) return;

    setIsShuffling(true);

    setTimeout(() => {
      let pick = filtered[Math.floor(Math.random() * filtered.length)];
      if (filtered.length > 1) {
        while (pick.id === lastIdRef.current) {
          pick = filtered[Math.floor(Math.random() * filtered.length)];
        }
      }
      lastIdRef.current = pick.id;
      setCurrentDrill(pick);
      setDisplayKey((k) => k + 1);
      setIsShuffling(false);
    }, 300);
  }, [getFilteredDrills]);

  const filtered = getFilteredDrills();

  return (
    <PageWrapper>
      <ToolPageHeader
        icon={<Barbell size={24} weight="duotone" />}
        title="Drill Randomizer"
        description="Get a random padel drill to level up your game. Filter by what you want to work on and let the magic happen."
        illustration="/animation-3.svg"
      />

      {/* Filters */}
      <div className="space-y-5 mb-8">
        <div>
          <label className="text-xs font-semibold text-foreground/35 uppercase tracking-widest mb-2.5 block">
            Category
          </label>
          <div className="flex flex-wrap gap-2">
            {[{ value: "all" as const, label: "All" }, ...drillCategories].map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-3.5 py-2 rounded-xl text-[13px] font-semibold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat.value
                    ? "bg-accent text-white shadow-sm shadow-accent/20"
                    : "bg-muted text-foreground/45 hover:text-foreground hover:bg-muted-dark/50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-xs font-semibold text-foreground/35 uppercase tracking-widest mb-2.5 block">
            Difficulty
          </label>
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedDifficulty("all")}
              className={`px-3.5 py-2 rounded-xl text-[13px] font-semibold transition-all duration-200 cursor-pointer ${
                selectedDifficulty === "all"
                  ? "bg-accent text-white shadow-sm shadow-accent/20"
                  : "bg-muted text-foreground/45 hover:text-foreground"
              }`}
            >
              All
            </button>
            {difficulties.map((d) => (
              <button
                key={d}
                onClick={() => setSelectedDifficulty(d)}
                className={`px-3.5 py-2 rounded-xl text-[13px] font-semibold transition-all duration-200 capitalize cursor-pointer ${
                  selectedDifficulty === d
                    ? "bg-accent text-white shadow-sm shadow-accent/20"
                    : "bg-muted text-foreground/45 hover:text-foreground"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Randomize button */}
      <div className="flex items-center gap-3 mb-8">
        <Button onClick={randomize} size="lg" disabled={filtered.length === 0 || isShuffling}>
          <Shuffle size={18} className={isShuffling ? "animate-spin" : ""} />
          {currentDrill ? "Another drill" : "Randomize"}
        </Button>
        <span className="text-xs font-medium text-foreground/25">
          {filtered.length} drill{filtered.length !== 1 ? "s" : ""} available
        </span>
      </div>

      {filtered.length === 0 && (
        <div className="bg-surface border border-dashed border-muted-dark/40 rounded-2xl p-10 text-center">
          <p className="text-sm text-foreground/35 font-medium">
            No drills match your filters.
          </p>
          <p className="text-xs text-foreground/25 mt-1">Try adjusting them.</p>
        </div>
      )}

      {/* Current drill */}
      <AnimatePresence mode="wait">
        {currentDrill && !isShuffling && (
          <motion.div
            key={displayKey}
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97, transition: { duration: 0.15 } }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative bg-surface border border-muted rounded-2xl p-7 sm:p-9 overflow-hidden"
          >
            {/* Watermark illustration */}
            <div className="absolute -right-4 -bottom-4 w-28 h-28 opacity-[0.05] pointer-events-none">
              <Image src="/animation-3.svg" alt="" width={112} height={112} />
            </div>

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-5 gap-4">
                <div className="flex items-center gap-2.5">
                  <Sparkle size={18} weight="fill" className="text-accent" />
                  <h2 className="text-xl sm:text-2xl font-bold">{currentDrill.name}</h2>
                </div>
                <span
                  className={`px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider shrink-0 ${
                    difficultyConfig[currentDrill.difficulty].color
                  }`}
                >
                  {difficultyConfig[currentDrill.difficulty].label}
                </span>
              </div>

              <p className="text-foreground/55 leading-relaxed text-[15px] mb-7">
                {currentDrill.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  { icon: <Timer size={15} />, text: currentDrill.duration },
                  { icon: <Users size={15} />, text: `${currentDrill.players} players` },
                  {
                    icon: <Lightning size={15} />,
                    text: drillCategories.find((c) => c.value === currentDrill.category)?.label || "",
                  },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-1.5 text-[13px] font-medium text-foreground/40 bg-muted/70 px-3 py-1.5 rounded-lg"
                  >
                    {item.icon}
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
}
