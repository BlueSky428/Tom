"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const moments = [
  {
    src: "/images/life/winter.png",
    alt: "Tom overlooking snowy mountains from a wooden deck",
    title: "Mountain air",
    caption: "Cold mornings, clear thoughts.",
    position: "50% 15%",
  },
  {
    src: "/images/life/car.png",
    alt: "Tom on a late-night drive",
    title: "Road trips",
    caption: "No plan. Just drive.",
    position: "55% center",
  },
  {
    src: "/images/life/dinner.png",
    alt: "Tom at a rooftop café overlooking the city at night",
    title: "City nights",
    caption: "Tea, rooftops, and long conversations.",
    position: "50% 20%",
  },
  {
    src: "/images/life/train.png",
    alt: "Tom leaning against a vintage train at golden hour",
    title: "Train platforms",
    caption: "Between cities, between ideas.",
    position: "50% 25%",
  },
  {
    src: "/images/life/museum.png",
    alt: "Tom in a black-and-white art gallery",
    title: "Galleries",
    caption: "Slow afternoons with good art.",
    position: "50% 20%",
  },
  {
    src: "/images/life/watch.png",
    alt: "Tom adjusting his watch in a dimly lit room",
    title: "Quiet hours",
    caption: "Late nights, early thoughts.",
    position: "50% 25%",
  },
  {
    src: "/images/life/outdoors.png",
    alt: "Tom outdoors with earphones in bright daylight",
    title: "Out in the open",
    caption: "Music on. World off.",
    position: "50% 12%",
  },
];

function PhotoCard({
  moment,
  index,
}: {
  moment: (typeof moments)[0];
  index: number;
}) {
  return (
    <motion.figure
      className="group"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.65, delay: index * 0.05, ease: EASE }}
    >
      {/* Portrait frame — fixed 3:4, no cropping chaos */}
      <div
        className="relative aspect-[3/4] overflow-hidden mb-4"
        style={{ background: "rgba(255,255,255,0.03)" }}
      >
        <Image
          src={moment.src}
          alt={moment.alt}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          style={{ objectPosition: moment.position }}
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        />
      </div>

      {/* Caption below image — always readable */}
      <figcaption>
        <div className="flex items-baseline gap-3 mb-1.5">
          <span
            className="text-[10px] tracking-[0.2em] tabular-nums"
            style={{
              fontFamily: "var(--font-inter)",
              color: "rgba(59,130,246,0.7)",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "0.95rem",
              fontWeight: 700,
              color: "rgba(255,255,255,0.88)",
              lineHeight: 1.2,
            }}
          >
            {moment.title}
          </h3>
        </div>
        <p
          className="text-xs leading-relaxed pl-[1.65rem]"
          style={{
            fontFamily: "var(--font-inter)",
            color: "rgba(161,161,170,0.5)",
          }}
        >
          {moment.caption}
        </p>
      </figcaption>
    </motion.figure>
  );
}

export default function FreeTime() {
  const rowOne = moments.slice(0, 4);
  const rowTwo = moments.slice(4);

  return (
    <section id="life" className="relative pt-10 md:pt-12 pb-24 md:pb-32 px-8 md:px-16 xl:px-24">
      {/* Section label */}
      <motion.div
        className="flex items-center gap-4 mb-12 md:mb-16"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
      >
        <span
          className="text-xs tracking-[0.25em] uppercase"
          style={{ color: "#3b82f6", fontFamily: "var(--font-inter)" }}
        >
          05
        </span>
        <div className="w-8 h-px" style={{ background: "rgba(59,130,246,0.4)" }} />
        <span
          className="text-xs tracking-[0.25em] uppercase"
          style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-inter)" }}
        >
          Life
        </span>
      </motion.div>

      {/* Heading */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 md:mb-16 items-end max-w-[1600px]">
        <motion.h2
          className="lg:col-span-7"
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 800,
            lineHeight: 1.08,
            color: "#ffffff",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          Off the{" "}
          <span style={{ color: "#3b82f6" }}>clock.</span>
        </motion.h2>

        <motion.p
          className="lg:col-span-4 lg:col-start-9"
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "0.88rem",
            lineHeight: 1.75,
            color: "rgba(161,161,170,0.5)",
          }}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.12 }}
        >
          Not every side of me fits on a résumé — travel, stillness,
          cities, and the open road.
        </motion.p>
      </div>

      {/* Row 1 — four portraits */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-5 md:gap-y-12 max-w-[1600px] mb-10 md:mb-12">
        {rowOne.map((moment, i) => (
          <PhotoCard key={moment.src} moment={moment} index={i} />
        ))}
      </div>

      {/* Row 2 — three portraits, centered on desktop */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-5 md:gap-y-12 max-w-[900px] lg:mx-auto">
        {rowTwo.map((moment, i) => (
          <div
            key={moment.src}
            className={
              i === 2
                ? "col-span-2 flex justify-center lg:col-span-1 lg:justify-stretch"
                : undefined
            }
          >
            <div className="w-full max-w-[280px] sm:max-w-none">
              <PhotoCard moment={moment} index={i + 4} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
