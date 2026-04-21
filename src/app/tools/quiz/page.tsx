"use client";

import { useState } from "react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { ToolPageHeader } from "@/components/ui/ToolPageHeader";
import { Button } from "@/components/ui/Button";
import { quizQuestions, quizResults } from "@/data/quiz";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  ArrowsClockwise,
  Trophy,
  CheckCircle,
  XCircle,
  ArrowRight,
  ShareNetwork,
  Confetti,
} from "@phosphor-icons/react";
import Image from "next/image";
import { useToast } from "@/components/ui/Toast";

export default function QuizPage() {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [done, setDone] = useState(false);
  const { showToast } = useToast();

  const question = quizQuestions[currentQ];

  const handleSelect = (index: number) => {
    if (selected !== null) return;
    setSelected(index);
    setShowExplanation(true);
    if (index === question.correctIndex) setScore((s) => s + 1);
  };

  const nextQuestion = () => {
    if (currentQ + 1 >= quizQuestions.length) {
      setDone(true);
    } else {
      setCurrentQ(currentQ + 1);
      setSelected(null);
      setShowExplanation(false);
    }
  };

  const restart = () => {
    setCurrentQ(0);
    setScore(0);
    setSelected(null);
    setShowExplanation(false);
    setDone(false);
  };

  const getResultLabel = () => {
    return quizResults.find((r) => score >= r.min && score <= r.max) || quizResults[0];
  };

  const shareResult = () => {
    const result = getResultLabel();
    navigator.clipboard.writeText(
      `I scored ${score}/${quizQuestions.length} on the Padel IQ Quiz and got "${result.label}"! Try it: padeltoolkit.com/tools/quiz`
    );
    showToast("Copied result to clipboard");
  };

  const progress = done ? 100 : (currentQ / quizQuestions.length) * 100;

  return (
    <PageWrapper>
      <ToolPageHeader
        icon={<Brain size={24} weight="duotone" />}
        title="Padel IQ Quiz"
        description={`${quizQuestions.length} questions about rules, positioning, and tactics. How much do you really know?`}
        illustration="/animation-5.svg"
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
            {done ? `${score}/${quizQuestions.length}` : `${currentQ + 1}/${quizQuestions.length}`}
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
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[11px] font-bold text-foreground/25 uppercase tracking-widest">
                  Question {currentQ + 1}
                </span>
                {selected !== null && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                      selected === question.correctIndex
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-rose-100 text-rose-700"
                    }`}
                  >
                    {selected === question.correctIndex ? "Correct" : "Wrong"}
                  </motion.span>
                )}
              </div>

              <h2 className="text-lg sm:text-xl font-bold mb-6 leading-snug">
                {question.question}
              </h2>

              <div className="space-y-2.5 mb-6">
                {question.options.map((option, i) => {
                  let style =
                    "bg-surface border-muted hover:border-accent/30 hover:bg-accent-light/20 cursor-pointer";
                  if (selected !== null) {
                    if (i === question.correctIndex) {
                      style = "bg-emerald-50 border-emerald-300";
                    } else if (i === selected && i !== question.correctIndex) {
                      style = "bg-rose-50 border-rose-300";
                    } else {
                      style = "bg-surface border-muted opacity-40";
                    }
                  }

                  return (
                    <motion.button
                      key={i}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => handleSelect(i)}
                      disabled={selected !== null}
                      className={`w-full text-left px-5 py-4 border rounded-2xl text-sm font-medium transition-all duration-200 flex items-center gap-3 ${style}`}
                    >
                      <span className="w-6 h-6 rounded-lg bg-muted/70 flex items-center justify-center text-[11px] font-bold text-foreground/30 shrink-0">
                        {String.fromCharCode(65 + i)}
                      </span>
                      <span className="flex-1">{option}</span>
                      {selected !== null && i === question.correctIndex && (
                        <CheckCircle size={20} weight="fill" className="text-emerald-600 shrink-0" />
                      )}
                      {selected === i && i !== question.correctIndex && (
                        <XCircle size={20} weight="fill" className="text-rose-500 shrink-0" />
                      )}
                    </motion.button>
                  );
                })}
              </div>

              <AnimatePresence>
                {showExplanation && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    className="bg-muted/50 rounded-2xl p-5 mb-6 border border-muted/60"
                  >
                    <p className="text-[13px] text-foreground/55 leading-relaxed">
                      {question.explanation}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {selected !== null && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <Button onClick={nextQuestion} size="lg">
                    {currentQ + 1 >= quizQuestions.length ? "See results" : "Next question"}
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
              className="relative bg-surface border border-muted rounded-2xl p-7 sm:p-9 text-center overflow-hidden"
            >
              {/* Watermark */}
              <div className="absolute -right-4 -bottom-4 w-32 h-32 opacity-[0.05] pointer-events-none">
                <Image src="/animation-5.svg" alt="" width={128} height={128} />
              </div>

              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.15 }}
                  className="w-16 h-16 rounded-2xl bg-accent-light flex items-center justify-center text-accent mx-auto mb-5"
                >
                  {score >= 22 ? (
                    <Confetti size={32} weight="duotone" />
                  ) : (
                    <Trophy size={32} weight="duotone" />
                  )}
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="text-5xl font-extrabold text-accent mb-1 tabular-nums"
                >
                  {score}/{quizQuestions.length}
                </motion.p>

                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.35 }}
                  className="text-xl font-bold mb-2"
                >
                  {getResultLabel().label}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-foreground/45 leading-relaxed text-[15px] mb-7 max-w-sm mx-auto"
                >
                  {getResultLabel().description}
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
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageWrapper>
  );
}
