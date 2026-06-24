"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const categories = [
  {
    era: "01",
    period: "2016 — 2018",
    title: "Systems Engineering",
    color: "#22c55e",
    colorRgb: "34, 197, 94",
    skills: [
      "C", "C++", "Linux Kernel", "Embedded Systems",
      "RTOS", "Firmware", "Hardware Interfaces", "Serial Protocols",
    ],
  },
  {
    era: "02",
    period: "2018 — 2021",
    title: "Web & SaaS",
    color: "#a855f7",
    colorRgb: "168, 85, 247",
    skills: [
      "React", "Node.js", "TypeScript", "PostgreSQL",
      "AWS", "REST APIs", "GraphQL", "Redis",
    ],
  },
  {
    era: "03",
    period: "2021 — 2023",
    title: "Blockchain & Web3",
    color: "#06b6d4",
    colorRgb: "6, 182, 212",
    skills: [
      "Solidity", "Ethereum", "Web3.js", "Smart Contracts",
      "IPFS", "DeFi", "Hardhat", "OpenZeppelin",
    ],
  },
  {
    era: "04",
    period: "2023 — Present",
    title: "Artificial Intelligence",
    color: "#3b82f6",
    colorRgb: "59, 130, 246",
    skills: [
      "LLMs", "AI Agents", "RAG", "LangChain",
      "Python", "Vector DBs", "Automation", "Prompt Engineering",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 md:py-40 px-8 md:px-16 xl:px-24 overflow-hidden"
    >
      {/* Section label */}
      <motion.div
        className="flex items-center gap-4 mb-16 md:mb-20"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
      >
        <span
          className="text-xs tracking-[0.25em] uppercase"
          style={{ color: "#3b82f6", fontFamily: "var(--font-inter)" }}
        >
          03
        </span>
        <div className="w-8 h-px" style={{ background: "rgba(59,130,246,0.4)" }} />
        <span
          className="text-xs tracking-[0.25em] uppercase"
          style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-inter)" }}
        >
          Expertise
        </span>
      </motion.div>

      {/* Heading */}
      <div className="mb-16 md:mb-20">
        <motion.h2
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "clamp(2rem, 5vw, 4.5rem)",
            fontWeight: 800,
            lineHeight: 1.05,
            color: "#ffffff",
          }}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: EASE }}
        >
          A decade of
          <br />
          going <span style={{ color: "#3b82f6" }}>deep.</span>
        </motion.h2>
        <motion.p
          className="mt-4 text-base leading-relaxed"
          style={{
            color: "rgba(161,161,170,0.65)",
            fontFamily: "var(--font-inter)",
            maxWidth: "420px",
          }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Four eras, four technology stacks — each one learned from the ground
          up, not from the surface down.
        </motion.p>
      </div>

      {/*
        2×2 skill grid using the same era color scheme as the Journey section.
        gap-px technique: parent sets the gap color, children set their own bg.
      */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          borderLeft: "1px solid rgba(255,255,255,0.05)",
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {categories.map((cat, i) => (
          <motion.div
            key={cat.era}
            className="p-8 md:p-10 relative group"
            style={{
              borderBottom: "1px solid rgba(255,255,255,0.05)",
              borderRight: "1px solid rgba(255,255,255,0.05)",
              background: "#050505",
            }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, delay: i * 0.1, ease: EASE },
              },
            }}
            whileHover={{ backgroundColor: "rgba(255,255,255,0.015)" }}
            transition={{ duration: 0.2 }}
          >
            {/* Era badge + period */}
            <div className="flex items-center justify-between mb-6">
              <span
                className="text-xs tracking-[0.2em] uppercase"
                style={{ color: cat.color, fontFamily: "var(--font-inter)" }}
              >
                Era {cat.era}
              </span>
              <span
                className="text-xs"
                style={{
                  color: "rgba(255,255,255,0.2)",
                  fontFamily: "var(--font-inter)",
                  letterSpacing: "0.02em",
                }}
              >
                {cat.period}
              </span>
            </div>

            {/* Category title */}
            <h3
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "clamp(1.1rem, 2vw, 1.6rem)",
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.2,
                marginBottom: "1.5rem",
              }}
            >
              {cat.title}
            </h3>

            {/* Accent line */}
            <div
              className="mb-6 w-8 h-px"
              style={{ background: `rgba(${cat.colorRgb}, 0.4)` }}
            />

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-2.5 py-1"
                  style={{
                    border: `1px solid rgba(${cat.colorRgb}, 0.18)`,
                    color: `rgba(${cat.colorRgb}, 0.75)`,
                    background: `rgba(${cat.colorRgb}, 0.05)`,
                    borderRadius: "2px",
                    fontFamily: "var(--font-inter)",
                    letterSpacing: "0.03em",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Decorative number */}
      <div
        className="absolute top-16 right-8 md:right-16 select-none pointer-events-none"
        style={{
          fontFamily: "var(--font-syne)",
          fontSize: "clamp(6rem, 18vw, 20rem)",
          fontWeight: 800,
          color: "rgba(255,255,255,0.018)",
          lineHeight: 1,
        }}
        aria-hidden="true"
      >
        03
      </div>
    </section>
  );
}
