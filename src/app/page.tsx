"use client";

import { ToolCard } from "@/components/ui/ToolCard";
import { tools } from "@/data/tools";
import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden hero-glow grain">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-16 sm:pt-28 pb-16 sm:pb-24">
          <div className="flex flex-col sm:flex-row items-center gap-10 sm:gap-16">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex-1 text-center sm:text-left"
            >

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-5">
                Padel{" "}
                <span className="text-accent">Toolkit</span>
              </h1>

              <p className="text-lg sm:text-xl text-foreground/45 leading-relaxed mb-8 max-w-md mx-auto sm:mx-0">
                Simple, fun tools for padel players. Generate tournaments, track scores, discover drills, and more. All instant, all free.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
                <Link
                  href="/tools"
                  className="inline-flex items-center justify-center gap-2 bg-accent text-white px-7 py-3.5 rounded-2xl font-semibold text-[15px] hover:bg-accent-dark shadow-sm shadow-accent/20 hover:shadow-md hover:shadow-accent/25 transition-all duration-300 active:scale-[0.97]"
                >
                  Explore tools
                  <ArrowRight size={18} weight="bold" />
                </Link>
                <Link
                  href="#tools"
                  className="inline-flex items-center justify-center gap-2 border border-muted text-foreground/60 px-7 py-3.5 rounded-2xl font-semibold text-[15px] hover:border-accent/30 hover:text-accent hover:bg-accent-light/30 transition-all duration-300"
                >
                  See what&apos;s inside
                </Link>
              </div>
            </motion.div>

            {/* Hero illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="shrink-0 relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-accent/8 rounded-full blur-3xl scale-110" />
                <Image
                  src="/animation-3.svg"
                  alt="Padel illustration"
                  width={340}
                  height={340}
                  className="relative w-56 sm:w-72 lg:w-[22rem] xl:w-[26rem] h-auto animate-float-slow"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative blobs */}
        <div className="absolute top-20 left-[-100px] w-64 h-64 bg-accent/[0.04] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-[-80px] w-72 h-72 bg-accent/[0.03] rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Tool Grid */}
      <section id="tools" className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
              The tools
            </h2>
            <p className="text-foreground/40 text-[15px] max-w-md">
              Pick one and get going. Everything runs right here in your browser.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {tools.map((tool, i) => (
              <ToolCard key={tool.href} {...tool} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-muted">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-md mx-auto"
          >
            <Image
              src="/logo.png"
              alt="Padel Toolkit"
              width={48}
              height={48}
              className="w-12 h-12 rounded-xl mx-auto mb-5 opacity-80"
            />
            <h2 className="text-xl font-bold mb-2">Ready to play?</h2>
            <p className="text-foreground/40 text-sm mb-6 leading-relaxed">
              Everything works in your browser. No accounts, no installs. Just padel stuff.
            </p>
            <Link
              href="/tools"
              className="inline-flex items-center justify-center gap-2 bg-accent text-white px-6 py-3 rounded-2xl font-semibold text-sm hover:bg-accent-dark shadow-sm shadow-accent/20 transition-all duration-300 active:scale-[0.97]"
            >
              Get started
              <ArrowRight size={16} weight="bold" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
