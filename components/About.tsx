"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-40 px-8 md:px-16 xl:px-24"
    >
      {/* Section label */}
      <motion.div
        className="flex items-center gap-4 mb-20 md:mb-28"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <span
          className="text-xs tracking-[0.25em] uppercase"
          style={{ color: "#3b82f6", fontFamily: "var(--font-inter)" }}
        >
          01
        </span>
        <div className="w-8 h-px" style={{ background: "rgba(59,130,246,0.4)" }} />
        <span
          className="text-xs tracking-[0.25em] uppercase"
          style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-inter)" }}
        >
          Origin
        </span>
      </motion.div>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
        {/* Left — pull quote */}
        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: EASE }}
        >
          <blockquote
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(2rem, 4.8vw, 4.2rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              color: "#ffffff",
            }}
          >
            <span style={{ color: "rgba(255,255,255,0.15)" }}>&ldquo;</span>
            I left Tokyo
            <br />
            at 18 with two
            <br />
            suitcases and a
            <br />
            <span style={{ color: "#3b82f6" }}>
              curiosity I still
              <br />
              can&apos;t explain.
            </span>
            <span style={{ color: "rgba(255,255,255,0.15)" }}>&rdquo;</span>
          </blockquote>

          <motion.div
            className="mt-12 flex items-center gap-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <span
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "clamp(2.5rem, 7vw, 6.5rem)",
                fontWeight: 800,
                color: "rgba(255,255,255,0.04)",
                lineHeight: 1,
              }}
            >
              2012
            </span>
            <div className="flex flex-col gap-0.5">
              <p
                className="text-sm"
                style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-inter)" }}
              >
                Arrived in Seattle
              </p>
              <p
                className="text-sm"
                style={{ color: "rgba(255,255,255,0.18)", fontFamily: "var(--font-inter)" }}
              >
                University of Washington
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right — story */}
        <motion.div
          className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg leading-[1.8] mb-6"
            style={{ color: "rgba(161,161,170,0.82)", fontFamily: "var(--font-inter)" }}
          >
            Growing up in Tokyo, I was surrounded by technology that felt alive
            — trains that arrived to the second, vending machines that
            anticipated needs, a city running like an intricate machine. That
            quiet obsession with how systems work never left me.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg leading-[1.8] mb-6"
            style={{ color: "rgba(161,161,170,0.82)", fontFamily: "var(--font-inter)" }}
          >
            Moving to Seattle at 18 was the most disorienting, exhilarating
            thing I&apos;ve ever done. New country, new language, new context for
            everything. It taught me something I couldn&apos;t have learned any other
            way: that adapting isn&apos;t a skill you have — it&apos;s one you build, over
            and over, until it becomes who you are.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg leading-[1.8] mb-10"
            style={{ color: "rgba(161,161,170,0.82)", fontFamily: "var(--font-inter)" }}
          >
            Over the last decade I&apos;ve chased every major wave in technology —
            systems, web, blockchain, AI. Not because of trends, but because I
            genuinely can&apos;t help it. Something new emerges, and I need to
            understand it from first principles. I live at the edge of what&apos;s
            coming.
          </motion.p>

          {/* Tags — flex-wrap to prevent overflow on small screens */}
          <motion.div
            variants={fadeUp}
            className="pt-5 flex flex-wrap gap-2"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            {["Tokyo → Seattle", "Engineer → Founder", "Curious → Obsessed"].map(
              (tag) => (
                <span
                  key={tag}
                  className="text-xs tracking-wide px-3 py-1.5 whitespace-nowrap"
                  style={{
                    border: "1px solid rgba(255,255,255,0.09)",
                    color: "rgba(255,255,255,0.35)",
                    borderRadius: "2px",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  {tag}
                </span>
              )
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative section number */}
      <div
        className="absolute top-20 right-8 md:right-16 select-none pointer-events-none"
        style={{
          fontFamily: "var(--font-syne)",
          fontSize: "clamp(6rem, 18vw, 20rem)",
          fontWeight: 800,
          color: "rgba(255,255,255,0.018)",
          lineHeight: 1,
        }}
        aria-hidden="true"
      >
        01
      </div>
    </section>
  );
}
