"use client";

import { useState, useCallback } from "react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { ToolPageHeader } from "@/components/ui/ToolPageHeader";
import { CopyButton } from "@/components/ui/CopyButton";
import { excuses, excuseCategories, Excuse, ExcuseCategory } from "@/data/excuses";
import { motion, AnimatePresence } from "framer-motion";
import { SmileyWink, Shuffle, Quotes } from "@phosphor-icons/react";
import Image from "next/image";

export default function ExcusesPage() {
  const [selectedCategory, setSelectedCategory] = useState<ExcuseCategory | "all">("all");
  const [currentExcuse, setCurrentExcuse] = useState<Excuse | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinKey, setSpinKey] = useState(0);

  const getFiltered = useCallback(() => {
    if (selectedCategory === "all") return excuses;
    return excuses.filter((e) => e.category === selectedCategory);
  }, [selectedCategory]);

  const generate = () => {
    const filtered = getFiltered();
    if (filtered.length === 0) return;

    setIsSpinning(true);
    setSpinKey((k) => k + 1);
    let count = 0;
    const interval = setInterval(() => {
      const random = filtered[Math.floor(Math.random() * filtered.length)];
      setCurrentExcuse(random);
      count++;
      if (count > 8) {
        clearInterval(interval);
        setIsSpinning(false);
      }
    }, 80);
  };

  const catLabel = (value: ExcuseCategory) =>
    excuseCategories.find((c) => c.value === value)?.label || "";

  return (
    <PageWrapper>
      <ToolPageHeader
        icon={<SmileyWink size={24} weight="duotone" />}
        title="Excuse Generator"
        description="Lost a point? Shanked a smash? Arrived late again? We've got the perfect excuse for every on-court disaster."
        illustration="/animation-6.svg"
      />

      {/* Category filter */}
      <div className="mb-8">
        <label className="text-xs font-semibold text-foreground/35 uppercase tracking-widest mb-2.5 block">
          Excuse type
        </label>
        <div className="flex flex-wrap gap-2">
          {[{ value: "all" as const, label: "All excuses" }, ...excuseCategories].map((cat) => (
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

      {/* Generate button */}
      <div className="flex items-center gap-3 mb-8">
        <button
          onClick={generate}
          className="bg-accent text-white px-7 py-3.5 rounded-2xl font-semibold text-[15px] hover:bg-accent-dark active:scale-[0.97] transition-all duration-200 shadow-sm shadow-accent/20 hover:shadow-md inline-flex items-center gap-2.5 cursor-pointer"
        >
          <Shuffle size={18} className={isSpinning ? "animate-spin" : ""} />
          {currentExcuse ? "Another excuse" : "Generate excuse"}
        </button>
        <span className="text-xs font-medium text-foreground/25">
          {getFiltered().length} excuses loaded
        </span>
      </div>

      {/* Empty state */}
      {!currentExcuse && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-surface border border-dashed border-muted-dark/40 rounded-2xl p-12 text-center"
        >
          <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4">
            <SmileyWink size={24} className="text-foreground/25" />
          </div>
          <p className="text-sm text-foreground/35 font-medium mb-1">
            No excuse yet
          </p>
          <p className="text-xs text-foreground/25">
            Hit the button. You know you need one.
          </p>
        </motion.div>
      )}

      {/* Result */}
      <AnimatePresence mode="wait">
        {currentExcuse && (
          <motion.div
            key={`${currentExcuse.id}-${spinKey}`}
            initial={{ opacity: 0, scale: 0.88, rotateX: -8 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="relative bg-surface border border-muted rounded-2xl p-8 sm:p-10 max-w-lg overflow-hidden"
          >
            {/* Watermark */}
            <div className="absolute -right-4 -bottom-4 w-28 h-28 opacity-[0.04] pointer-events-none">
              <Image src="/animation-6.svg" alt="" width={112} height={112} />
            </div>

            <div className="relative z-10">
              <Quotes size={28} weight="fill" className="text-accent/20 mb-4" />

              <p className="text-xl sm:text-2xl font-bold leading-snug mb-6">
                {currentExcuse.text}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-foreground/25 uppercase tracking-widest">
                  {catLabel(currentExcuse.category)}
                </span>
                <CopyButton text={currentExcuse.text} label="Copy" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
}
