"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const quotes = [
  {
    text: "Technology changes.",
    emphasis: "Curiosity doesn't.",
    sub: "Every shift I've made — systems to web, web to blockchain, blockchain to AI — started with the same feeling: something new is happening and I need to understand it.",
  },
  {
    text: "The best opportunities",
    emphasis: "appear before they're obvious.",
    sub: "When everyone can see it, most of the value is already priced in. I'm interested in what's uncomfortable, unproven, and misunderstood.",
  },
  {
    text: "Build first.",
    emphasis: "Understand by doing.",
    sub: "You don't think your way into clarity. You build your way into it. Every major insight I've had started with shipping something.",
  },
];

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative pt-24 md:pt-32 pb-0"
    >
      {/* Subtle radial bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 80%, rgba(59,130,246,0.04), transparent 55%)",
        }}
      />

      <div className="px-8 md:px-16 xl:px-24">
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
            04
          </span>
          <div className="w-8 h-px" style={{ background: "rgba(59,130,246,0.4)" }} />
          <span
            className="text-xs tracking-[0.25em] uppercase"
            style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-inter)" }}
          >
            Philosophy
          </span>
        </motion.div>
      </div>

      {/* Quote rows */}
      <div>
        {quotes.map((quote, i) => {
          const isLast = i === quotes.length - 1;

          return (
            <motion.div
              key={i}
              className={`px-8 md:px-16 xl:px-24 ${
                isLast ? "pt-14 md:pt-16 pb-12 md:pb-14" : "py-12 md:py-16"
              }`}
              style={{
                borderTop: "1px solid rgba(255,255,255,0.05)",
                borderBottom: isLast ? "1px solid rgba(255,255,255,0.05)" : "none",
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-[1600px]">
                {/* Headline */}
                <div className="lg:col-span-8">
                  <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.95, ease: EASE }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-syne)",
                        fontSize: "clamp(2rem, 5.5vw, 5.5rem)",
                        fontWeight: 800,
                        color: "rgba(255,255,255,0.25)",
                        lineHeight: 1.05,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {quote.text}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-syne)",
                        fontSize: "clamp(2rem, 5.5vw, 5.5rem)",
                        fontWeight: 800,
                        color: "#ffffff",
                        lineHeight: 1.05,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {quote.emphasis}
                    </p>
                  </motion.div>
                </div>

                {/* Sub copy */}
                <motion.div
                  className="lg:col-span-3 lg:col-start-10 lg:pt-2"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.8, delay: 0.25 }}
                >
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: "rgba(161,161,170,0.55)",
                      fontFamily: "var(--font-inter)",
                      lineHeight: 1.75,
                    }}
                  >
                    {quote.sub}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
