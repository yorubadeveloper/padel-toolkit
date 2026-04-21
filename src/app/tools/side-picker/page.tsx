"use client";

import { useState } from "react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { ToolPageHeader } from "@/components/ui/ToolPageHeader";
import { Button } from "@/components/ui/Button";
import { sideQuestions, sideResults } from "@/data/side-picker";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowsLeftRight,
  ArrowsClockwise,
  CheckCircle,
  ShareNetwork,
} from "@phosphor-icons/react";
import Image from "next/image";
import { useToast } from "@/components/ui/Toast";

export default function SidePickerPage() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<{ side: "left" | "right"; weight: number }[]>([]);
  const [done, setDone] = useState(false);
  const { showToast } = useToast();

  const handleAnswer = (side: "left" | "right", weight: number) => {
    const newAnswers = [...answers, { side, weight }];
    setAnswers(newAnswers);

    if (currentQ + 1 >= sideQuestions.length) {
      setDone(true);
    } else {
      setCurrentQ(currentQ + 1);
    }
  };

  const getResult = () => {
    const leftScore = answers.filter((a) => a.side === "left").reduce((s, a) => s + a.weight, 0);
    const rightScore = answers.filter((a) => a.side === "right").reduce((s, a) => s + a.weight, 0);
    return leftScore >= rightScore ? "left" as const : "right" as const;
  };

  const restart = () => {
    setCurrentQ(0);
    setAnswers([]);
    setDone(false);
  };

  const shareResult = () => {
    const side = getResult();
    const result = sideResults[side];
    navigator.clipboard.writeText(
      `I'm a ${result.title}! Take the Padel Toolkit Side Picker quiz: padeltoolkit.com/tools/side-picker`
    );
    showToast("Copied result to clipboard");
  };

  const question = sideQuestions[currentQ];
  const progress = done ? 100 : (currentQ / sideQuestions.length) * 100;

  return (
    <PageWrapper>
      <ToolPageHeader
        icon={<ArrowsLeftRight size={24} weight="duotone" />}
        title="Side Picker"
        description="Answer a few fun questions about your play style and find out which side of the court suits you best."
        illustration="/animation-4.svg"
      />

      <div className="max-w-lg">
        {/* Progress bar */}
        <div className="flex items-center gap-3 mb-8">
          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-accent rounded-full"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
          <span className="text-xs font-semibold text-foreground/30 tabular-nums w-10 text-right">
            {done ? "Done" : `${currentQ + 1}/${sideQuestions.length}`}
          </span>
        </div>

        <AnimatePresence mode="wait">
          {!done ? (
            <motion.div
              key={currentQ}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <h2 className="text-lg sm:text-xl font-bold mb-6 leading-snug">
                {question.question}
              </h2>

              <div className="space-y-3">
                {question.options.map((option, i) => (
                  <motion.button
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    onClick={() => handleAnswer(option.side, option.weight)}
                    className="w-full text-left px-5 py-4.5 bg-surface border border-muted rounded-2xl text-sm font-medium hover:border-accent/30 hover:bg-accent-light/20 hover:shadow-sm active:scale-[0.98] transition-all duration-200 cursor-pointer group"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="group-hover:text-accent transition-colors">{option.label}</span>
                      <ArrowsLeftRight size={14} className="text-foreground/15 group-hover:text-accent/40 transition-colors shrink-0" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.93 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 22 }}
            >
              {(() => {
                const side = getResult();
                const result = sideResults[side];
                return (
                  <div className="relative bg-surface border border-muted rounded-2xl p-7 sm:p-9 overflow-hidden">
                    {/* Watermark */}
                    <div className="absolute -right-4 -bottom-4 w-32 h-32 opacity-[0.05] pointer-events-none">
                      <Image src="/animation-4.svg" alt="" width={128} height={128} />
                    </div>

                    <div className="relative z-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 300, damping: 18 }}
                        className="w-16 h-16 rounded-2xl bg-accent-light flex items-center justify-center text-accent mb-5"
                      >
                        <CheckCircle size={32} weight="duotone" />
                      </motion.div>

                      <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 tracking-tight">
                        {result.title}
                      </h2>
                      <p className="text-foreground/50 leading-relaxed text-[15px] mb-6">
                        {result.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-7">
                        {result.traits.map((trait, i) => (
                          <motion.span
                            key={trait}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + i * 0.07 }}
                            className="px-3.5 py-1.5 bg-accent-light text-accent-dark rounded-xl text-[13px] font-semibold"
                          >
                            {trait}
                          </motion.span>
                        ))}
                      </div>

                      <div className="flex gap-2.5">
                        <Button variant="secondary" onClick={restart}>
                          <ArrowsClockwise size={16} />
                          Try again
                        </Button>
                        <Button variant="outline" onClick={shareResult}>
                          <ShareNetwork size={16} />
                          Share result
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageWrapper>
  );
}
