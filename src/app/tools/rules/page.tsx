"use client";

import { useState, useMemo } from "react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { ToolPageHeader } from "@/components/ui/ToolPageHeader";
import { rules, ruleCategories, RuleCategory } from "@/data/rules";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, MagnifyingGlass, CaretDown } from "@phosphor-icons/react";

export default function RulesPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<RuleCategory | "all">("all");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return rules.filter((r) => {
      if (selectedCategory !== "all" && r.category !== selectedCategory) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        return r.question.toLowerCase().includes(q) || r.answer.toLowerCase().includes(q);
      }
      return true;
    });
  }, [search, selectedCategory]);

  return (
    <PageWrapper>
      <ToolPageHeader
        icon={<BookOpen size={24} weight="duotone" />}
        title="Rule Book"
        description="Quick answers to common padel rules. Search for what you need or browse by category."
        illustration="/animation-5.svg"
      />

      {/* Search */}
      <div className="mb-5">
        <div className="relative max-w-md">
          <MagnifyingGlass size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-foreground/25" />
          <input
            type="text"
            placeholder="Search rules..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-surface border border-muted rounded-xl text-sm focus:outline-none transition-all placeholder:text-foreground/25"
          />
        </div>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {[{ value: "all" as const, label: "All" }, ...ruleCategories].map((cat) => (
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

      {/* Rules list */}
      <div className="space-y-2">
        {filtered.length === 0 && (
          <div className="bg-surface border border-dashed border-muted-dark/40 rounded-2xl p-10 text-center">
            <p className="text-sm text-foreground/35 font-medium">No rules match your search.</p>
            <p className="text-xs text-foreground/25 mt-1">Try different keywords or clear the filter.</p>
          </div>
        )}
        {filtered.map((rule, i) => (
          <motion.div
            key={rule.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.02 }}
          >
            <button
              onClick={() => setOpenId(openId === rule.id ? null : rule.id)}
              className="w-full text-left bg-surface border border-muted rounded-xl px-5 py-4 hover:border-accent/20 transition-all duration-200 cursor-pointer group"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-semibold text-sm leading-snug">{rule.question}</span>
                <CaretDown
                  size={16}
                  weight="bold"
                  className={`text-foreground/25 shrink-0 transition-transform duration-200 ${
                    openId === rule.id ? "rotate-180" : ""
                  }`}
                />
              </div>
            </button>
            <AnimatePresence>
              {openId === rule.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-5 py-4 text-sm text-foreground/55 leading-relaxed border-x border-b border-muted rounded-b-xl -mt-1 bg-surface/50">
                    {rule.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <p className="text-xs text-foreground/25 mt-6">{filtered.length} rule{filtered.length !== 1 ? "s" : ""} shown</p>
    </PageWrapper>
  );
}
