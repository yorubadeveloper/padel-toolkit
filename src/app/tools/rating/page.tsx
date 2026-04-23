"use client";

import { useState } from "react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { ToolPageHeader } from "@/components/ui/ToolPageHeader";
import { ratingQuestions, ratingLabels } from "@/data/rating";
import { motion, AnimatePresence } from "framer-motion";
import { ChartBar, ArrowRight, ArrowsClockwise, ShareNetwork } from "@phosphor-icons/react";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast";

export default function RatingPage() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [done, setDone] = useState(false);
  const { showToast } = useToast();

  const question = ratingQuestions[currentQ];

  const handleSelect = (score: number, index: number) => {
    setSelected(index);
    setAnswers((prev) => [...prev, score]);
  };

  const next = () => {
    if (currentQ + 1 >= ratingQuestions.length) {
      setDone(true);
    } else {
      setCurrentQ((q) => q + 1);
      setSelected(null);
    }
  };

  const restart = () => {
    setCurrentQ(0);
    setAnswers([]);
    setSelected(null);
    setDone(false);
  };

  const totalScore = answers.reduce((a, b) => a + b, 0);
  const maxScore = ratingQuestions.length * 9;
  const rating = Math.max(1, Math.round((totalScore / maxScore) * 100) / 10);

  const getLabel = () => ratingLabels.find((r) => rating >= r.min && rating <= r.max) || ratingLabels[0];

  const shareResult = () => {
    const result = getLabel();
    navigator.clipboard.writeText(
      `My padel rating is ${rating}/10 (${result.label}) on the Padel Toolkit Player Rating! Try it: padeltoolkit.com/tools/rating`
    );
    showToast("Copied result to clipboard");
  };

  const progress = done ? 100 : (currentQ / ratingQuestions.length) * 100;

  return (
    <PageWrapper>
      <ToolPageHeader
        icon={<ChartBar size={24} weight="duotone" />}
        title="Player Rating"
        description="Answer 10 questions about your game and get an estimated skill level from 1.0 to 10.0."
        illustration="/animation-1.svg"
      />

      <div className="max-w-lg">
        {/* Progress */}
        <div className="flex items-center gap-3 mb-8">
          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-accent rounded-full"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
          <span className="text-xs font-semibold text-foreground/30 tabular-nums w-14 text-right">
            {done ? "Done" : `${currentQ + 1}/${ratingQuestions.length}`}
          </span>
        </div>

        <AnimatePresence mode="wait">
          {!done ? (
            <motion.div
              key={currentQ}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-[11px] font-bold text-foreground/25 uppercase tracking-widest mb-3 block">
                Question {currentQ + 1}
              </span>

              <h2 className="text-lg sm:text-xl font-bold mb-6 leading-snug">
                {question.question}
              </h2>

              <div className="space-y-2.5 mb-6">
                {question.options.map((option, i) => (
                  <motion.button
                    key={i}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleSelect(option.score, i)}
                    disabled={selected !== null}
                    className={`w-full text-left px-5 py-4 border rounded-2xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                      selected === i
                        ? "bg-accent-light border-accent/30 text-accent-dark"
                        : selected !== null
                        ? "bg-surface border-muted opacity-40"
                        : "bg-surface border-muted hover:border-accent/30 hover:bg-accent-light/20"
                    }`}
                  >
                    {option.label}
                  </motion.button>
                ))}
              </div>

              {selected !== null && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <Button onClick={next} size="lg">
                    {currentQ + 1 >= ratingQuestions.length ? "See my rating" : "Next question"}
                    <ArrowRight size={16} weight="bold" />
                  </Button>
                </motion.div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.93 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 22 }}
              className="bg-surface border border-muted rounded-2xl p-7 sm:p-9 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.15 }}
                className="w-20 h-20 rounded-2xl bg-accent-light flex items-center justify-center mx-auto mb-5"
              >
                <span className="text-3xl font-extrabold text-accent">{rating}</span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="text-foreground/30 text-sm mb-1"
              >
                out of 10.0
              </motion.p>

              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="text-xl font-bold mb-2"
              >
                {getLabel().label}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-foreground/45 leading-relaxed text-[15px] mb-7 max-w-sm mx-auto"
              >
                {getLabel().description}
              </motion.p>

              <div className="flex gap-2.5 justify-center">
                <Button variant="secondary" onClick={restart}>
                  <ArrowsClockwise size={16} />
                  Try again
                </Button>
                <Button variant="outline" onClick={shareResult}>
                  <ShareNetwork size={16} />
                  Share
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageWrapper>
  );
}
