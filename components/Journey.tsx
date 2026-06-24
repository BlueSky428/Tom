"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const eras = [
  {
    index: "01",
    period: "2016 — 2018",
    title: "Systems",
    subtitle: "The foundation.",
    company: "NorthPeak Embedded",
    role: "Firmware & Systems Engineer",
    color: "#22c55e",
    colorRgb: "34, 197, 94",
    description:
      "Before you can tell machines what to do, you have to understand how they think. Two years writing firmware, embedded C, and Linux internals — learning that every abstraction has a cost, and understanding those costs is a superpower.",
    tech: ["C", "C++", "Linux", "Embedded", "RTOS", "Hardware"],
    philosophy:
      "Learn the fundamentals deeply enough that everything built on top becomes intuitive.",
    label: "Firmware & Systems Engineering",
  },
  {
    index: "02",
    period: "2018 — 2021",
    title: "Web",
    subtitle: "The canvas.",
    company: "Cascade Systems",
    role: "Full Stack Software Engineer",
    color: "#a855f7",
    colorRgb: "168, 85, 247",
    description:
      "The web was the first technology that made me feel like I was building for everyone, not just engineers. Three years building SaaS products — shipping features users loved, learning what actually matters at scale, and discovering the power of simplifying the complex.",
    tech: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS", "REST APIs"],
    philosophy: "The best interface is one people don't have to think about.",
    label: "Full-Stack & SaaS Development",
  },
  {
    index: "03",
    period: "2021 — 2023",
    title: "Blockchain",
    subtitle: "The frontier.",
    company: "Atlas Digital",
    role: "Senior Blockchain & Full Stack Engineer",
    color: "#06b6d4",
    colorRgb: "6, 182, 212",
    description:
      "Most people saw speculation. I saw a new programming model — one where trust was encoded in math rather than institutions. Two years building on Ethereum, writing Solidity, and working on distributed systems that needed to be correct the first time because there's no rollback.",
    tech: ["Solidity", "Ethereum", "Web3.js", "Smart Contracts", "IPFS", "DeFi"],
    philosophy:
      "The most interesting technology is always the kind that's too early.",
    label: "Blockchain & Distributed Systems",
  },
  {
    index: "04",
    period: "2023 — Present",
    title: "AI",
    subtitle: "The shift.",
    company: "NovaScale Labs",
    role: "Principal AI Engineer",
    color: "#3b82f6",
    colorRgb: "59, 130, 246",
    description:
      "This isn't just another technology wave. AI is the platform shift of our generation — the kind that changes what software means, what engineers do, and what's possible to build. Building AI agents, automating knowledge workflows, and designing systems that learn.",
    tech: ["LLMs", "AI Agents", "RAG", "LangChain", "Python", "Automation"],
    philosophy: "We're not writing software anymore. We're teaching it to think.",
    label: "AI Engineering & Automation",
  },
];

function EraPanel({ era, isActive }: { era: (typeof eras)[0]; isActive: boolean }) {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          key={era.index}
          className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 xl:px-24"
          // Cross-fade only — no y movement, avoids the "nothing visible" gap from mode="wait"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start max-w-[1600px]">
            {/* Left */}
            <div className="lg:col-span-7 min-w-0">
              <motion.div
                className="flex items-center gap-4 mb-6"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <span
                  className="text-xs tracking-[0.25em] uppercase tabular-nums"
                  style={{ color: era.color, fontFamily: "var(--font-inter)" }}
                >
                  Chapter {era.index}
                </span>
                <div
                  className="w-8 h-px"
                  style={{ background: `rgba(${era.colorRgb}, 0.4)` }}
                />
                <span
                  className="text-xs tracking-[0.25em] uppercase"
                  style={{
                    color: "rgba(255,255,255,0.3)",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  {era.label}
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.15 }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontSize: "clamp(2.5rem, 7.5vw, 6.5rem)",
                    fontWeight: 800,
                    lineHeight: 0.92,
                    color: "#ffffff",
                    maxWidth: "100%",
                  }}
                >
                  {era.title}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontSize: "clamp(0.95rem, 2.2vw, 1.8rem)",
                    fontWeight: 500,
                    color: `rgba(${era.colorRgb}, 0.65)`,
                    letterSpacing: "0.02em",
                    marginTop: "0.2em",
                  }}
                >
                  {era.subtitle}
                </div>
              </motion.div>

              {/* Company credential card */}
              <motion.div
                key={`company-${era.index}`}
                className="mt-5 mb-1"
                style={{
                  paddingLeft: "1rem",
                  borderLeft: `2px solid rgba(${era.colorRgb}, 0.38)`,
                }}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.22 }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontSize: "clamp(0.95rem, 1.8vw, 1.25rem)",
                    fontWeight: 700,
                    color: "#ffffff",
                    lineHeight: 1.2,
                    marginBottom: "0.25rem",
                  }}
                >
                  {era.company}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "clamp(0.7rem, 1.1vw, 0.8rem)",
                    color: `rgba(${era.colorRgb}, 0.72)`,
                    letterSpacing: "0.02em",
                  }}
                >
                  {era.role}&nbsp;&nbsp;·&nbsp;&nbsp;{era.period}
                </p>
              </motion.div>

              <motion.p
                className="mt-5 text-base leading-relaxed"
                style={{
                  color: "rgba(161,161,170,0.8)",
                  fontFamily: "var(--font-inter)",
                  maxWidth: "520px",
                  lineHeight: 1.75,
                }}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.28 }}
              >
                {era.description}
              </motion.p>

              <motion.div
                className="mt-8 pt-5 flex items-start gap-3"
                style={{ borderTop: `1px solid rgba(${era.colorRgb}, 0.15)` }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.35 }}
              >
                <span
                  style={{
                    color: `rgba(${era.colorRgb}, 0.55)`,
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.65rem",
                    marginTop: "0.1em",
                    letterSpacing: "0.1em",
                  }}
                >
                  ///
                </span>
                <p
                  className="text-sm italic leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.32)", fontFamily: "var(--font-inter)" }}
                >
                  {era.philosophy}
                </p>
              </motion.div>
            </div>

            {/* Right — tech stack */}
            <div className="lg:col-span-4 lg:col-start-9 lg:pt-28">
              <motion.div
                className="flex flex-wrap gap-2"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.28 }}
              >
                {era.tech.map((t, i) => (
                  <motion.span
                    key={t}
                    className="px-3 py-1.5 text-sm"
                    style={{
                      border: `1px solid rgba(${era.colorRgb}, 0.22)`,
                      color: `rgba(${era.colorRgb}, 0.8)`,
                      borderRadius: "3px",
                      background: `rgba(${era.colorRgb}, 0.05)`,
                      fontFamily: "var(--font-inter)",
                      letterSpacing: "0.03em",
                    }}
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.35, delay: 0.35 + i * 0.055 }}
                  >
                    {t}
                  </motion.span>
                ))}
              </motion.div>

              {/* Watermark number */}
              <div
                className="mt-6 select-none pointer-events-none"
                style={{
                  fontFamily: "var(--font-syne)",
                  fontSize: "clamp(4rem, 13vw, 15rem)",
                  fontWeight: 800,
                  lineHeight: 1,
                  color: `rgba(${era.colorRgb}, 0.045)`,
                }}
              >
                {era.index}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeEra, setActiveEra] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 500vh total → 400vh scrollable → each era = 100vh of scroll
  const fadeIn = useTransform(scrollYProgress, [0, 0.04], [0, 1]);

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      setActiveEra(Math.min(3, Math.floor(v * 4)));
    });
  }, [scrollYProgress]);

  // Scroll to a specific era when a dot is clicked
  const handleDotClick = useCallback(
    (i: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const scrollable = containerRef.current.offsetHeight - window.innerHeight;
      window.scrollTo({ top: sectionTop + (i / 4) * scrollable + 1, behavior: "smooth" });
    },
    []
  );

  const currentEra = eras[activeEra];
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="journey" ref={containerRef} style={{ height: "500vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Left era accent bar — CSS transition handles color change cleanly */}
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-[3px] z-20"
          style={{
            background: currentEra.color,
            opacity: fadeIn,
            transition: "background 0.65s ease",
          }}
        />

        {/* Section label */}
        <motion.div
          className="absolute top-8 left-10 md:left-[4.5rem] xl:left-[6rem] flex items-center gap-4 z-20"
          style={{ opacity: fadeIn }}
        >
          <span
            className="text-xs tracking-[0.25em] uppercase"
            style={{ color: "#3b82f6", fontFamily: "var(--font-inter)" }}
          >
            02
          </span>
          <div className="w-8 h-px" style={{ background: "rgba(59,130,246,0.4)" }} />
          <span
            className="text-xs tracking-[0.25em] uppercase"
            style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-inter)" }}
          >
            Career
          </span>
        </motion.div>

        {/* Education credential — persists across all eras */}
        <motion.div
          className="absolute bottom-10 left-10 md:left-[4.5rem] xl:left-[6rem] z-20 hidden md:block"
          style={{ opacity: fadeIn }}
        >
          <div
            style={{
              borderLeft: "2px solid rgba(255,255,255,0.08)",
              paddingLeft: "0.875rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.2)",
                marginBottom: "0.25rem",
              }}
            >
              Education
            </p>
            <p
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "0.8rem",
                fontWeight: 700,
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.2,
              }}
            >
              University of Washington
            </p>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.7rem",
                color: "rgba(255,255,255,0.22)",
                marginTop: "0.15rem",
              }}
            >
              BS Computer Science · 2016
            </p>
          </div>
        </motion.div>

        {/* Era dots — now clickable with proper scroll targets */}
        <motion.div
          className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20"
          style={{ opacity: fadeIn }}
        >
          {eras.map((era, i) => (
            <button
              key={era.index}
              onClick={() => handleDotClick(i)}
              aria-label={`Jump to ${era.title} era`}
              className="w-1.5 h-1.5 rounded-full cursor-pointer"
              style={{
                background:
                  i === activeEra ? currentEra.color : "rgba(255,255,255,0.2)",
                transform: i === activeEra ? "scale(1.8)" : "scale(1)",
                transition: "all 0.4s ease",
                border: "none",
                padding: 0,
              }}
            />
          ))}
        </motion.div>

        {/* Ambient tint */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 80% 50%, rgba(${currentEra.colorRgb}, 0.04) 0%, transparent 60%)`,
            transition: "background 0.65s ease",
          }}
        />

        {/* Era panels */}
        <div className="relative h-full z-10">
          {eras.map((era, i) => (
            <EraPanel key={era.index} era={era} isActive={i === activeEra} />
          ))}
        </div>

        {/* Progress bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] z-20"
          style={{
            width: progressWidth,
            background: currentEra.color,
            transition: "background 0.65s ease",
          }}
        />
      </div>
    </section>
  );
}
