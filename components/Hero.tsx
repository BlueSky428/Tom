"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.png"
          alt="Tom Aoki overlooking the Seattle skyline at sunset"
          fill
          priority
          className="object-cover object-[72%_center] sm:object-[68%_center] lg:object-[62%_center]"
          sizes="100vw"
        />

        {/* Gradients — keep text readable, preserve the photo */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(5,5,5,0.88) 0%, rgba(5,5,5,0.55) 42%, rgba(5,5,5,0.12) 68%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(5,5,5,0.82) 0%, rgba(5,5,5,0.2) 35%, transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(5,5,5,0.45) 0%, transparent 28%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-end px-8 md:px-16 xl:px-24 pb-20 md:pb-28">
        <div className="max-w-[1600px] w-full">
          <motion.div
            className="max-w-xl md:max-w-2xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: EASE }}
          >
            {/* Name */}
            <h1
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "clamp(2.75rem, 6.5vw, 5rem)",
                fontWeight: 800,
                lineHeight: 0.95,
                letterSpacing: "-0.02em",
                color: "#ffffff",
                marginBottom: "1rem",
              }}
            >
              Tom Aoki
            </h1>

            {/* Roles */}
            <motion.p
              className="text-xs md:text-sm tracking-[0.22em] uppercase"
              style={{
                fontFamily: "var(--font-inter)",
                color: "rgba(255,255,255,0.72)",
                marginBottom: "1.25rem",
              }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: EASE }}
            >
              Engineer · Builder · Explorer
            </motion.p>

            {/* Divider */}
            <motion.div
              className="w-12 h-px mb-5"
              style={{ background: "rgba(255,255,255,0.22)" }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.55, ease: EASE }}
            />

            {/* Tagline */}
            <motion.p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "clamp(0.85rem, 1.2vw, 1rem)",
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.55)",
                maxWidth: "420px",
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65, ease: EASE }}
            >
              Turning ideas into impactful products across AI, blockchain, and
              beyond.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 right-10 md:right-16 flex flex-col items-center gap-3 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <span
          className="text-[9px] tracking-[0.35em] uppercase"
          style={{
            color: "rgba(255,255,255,0.35)",
            writingMode: "vertical-lr",
          }}
        >
          Scroll
        </span>
        <motion.div
          className="w-px"
          style={{ background: "rgba(255,255,255,0.3)" }}
          animate={{ height: [16, 40, 16], opacity: [0.25, 0.55, 0.25] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Bottom rule */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px z-10"
        style={{
          background: "rgba(255,255,255,0.08)",
          transformOrigin: "left",
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, delay: 0.9, ease: EASE }}
      />
    </section>
  );
}
