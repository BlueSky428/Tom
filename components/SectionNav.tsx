"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const SCROLL_OFFSET = 24;

const sections = [
  { id: "top", label: "Home" },
  { id: "about", label: "About" },
  { id: "journey", label: "Career" },
  { id: "skills", label: "Skills" },
  { id: "philosophy", label: "Philosophy" },
  { id: "life", label: "Life" },
];

function getScrollBehavior(): ScrollBehavior {
  if (typeof window === "undefined") return "smooth";
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "auto"
    : "smooth";
}

export default function SectionNav() {
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToId = useCallback((id: string) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: getScrollBehavior() });
      window.history.replaceState(null, "", window.location.pathname);
      return;
    }

    const target = document.getElementById(id);
    if (!target) return;

    const top =
      target.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;

    window.scrollTo({
      top: Math.max(0, top),
      behavior: getScrollBehavior(),
    });
    window.history.replaceState(null, "", `#${id}`);
  }, []);

  const goToIndex = useCallback(
    (index: number) => {
      const next = Math.max(0, Math.min(sections.length - 1, index));
      scrollToId(sections[next].id);
    },
    [scrollToId]
  );

  const scrollPage = useCallback((direction: 1 | -1) => {
    window.scrollBy({
      top: direction * window.innerHeight * 0.85,
      behavior: getScrollBehavior(),
    });
  }, []);

  // Track active section while scrolling
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.35;

      let current = 0;
      sections.forEach((section, i) => {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop <= y) current = i;
      });

      setActiveIndex(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;

      switch (e.key) {
        case "ArrowDown":
        case "PageDown":
          e.preventDefault();
          if (e.shiftKey && e.key === "PageDown") {
            scrollPage(1);
          } else {
            goToIndex(activeIndex + 1);
          }
          break;
        case "ArrowUp":
        case "PageUp":
          e.preventDefault();
          if (e.shiftKey && e.key === "PageUp") {
            scrollPage(-1);
          } else {
            goToIndex(activeIndex - 1);
          }
          break;
        case "Home":
          e.preventDefault();
          goToIndex(0);
          break;
        case "End":
          e.preventDefault();
          goToIndex(sections.length - 1);
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, goToIndex, scrollPage]);

  return (
    <>
      {/* Skip link — keyboard & screen readers */}
      <a
        href="#about"
        className="sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:w-auto focus:h-auto focus:m-0 focus:overflow-visible focus:clip-auto focus:whitespace-normal focus:rounded focus:text-sm focus:outline-none"
        style={{
          fontFamily: "var(--font-inter)",
          background: "#3b82f6",
          color: "#ffffff",
        }}
        onClick={(e) => {
          e.preventDefault();
          scrollToId("about");
        }}
      >
        Skip to content
      </a>

      {/* Section dots — right edge */}
      <nav
        aria-label="Page sections"
        className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-[90] hidden sm:flex flex-col gap-3"
      >
        {sections.map((section, i) => (
          <button
            key={section.id}
            type="button"
            aria-label={`Go to ${section.label}`}
            aria-current={i === activeIndex ? "true" : undefined}
            title={section.label}
            className="group relative flex items-center justify-end gap-2 cursor-pointer"
            onClick={() => goToIndex(i)}
          >
            <span
              className="opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity text-[10px] tracking-wide whitespace-nowrap pointer-events-none"
              style={{
                fontFamily: "var(--font-inter)",
                color: "rgba(255,255,255,0.55)",
              }}
            >
              {section.label}
            </span>
            <span
              className="rounded-full transition-all duration-300"
              style={{
                width: i === activeIndex ? "8px" : "5px",
                height: i === activeIndex ? "8px" : "5px",
                background:
                  i === activeIndex ? "#3b82f6" : "rgba(255,255,255,0.25)",
              }}
            />
          </button>
        ))}
      </nav>

      {/* Bottom controls — prev / page scroll / next */}
      <motion.div
        className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[90] flex items-center gap-1.5 px-2 py-1.5 rounded-full"
        style={{
          background: "rgba(5,5,5,0.82)",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(16px)",
        }}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
        role="toolbar"
        aria-label="Page navigation"
      >
        <button
          type="button"
          className="px-3 py-1.5 text-xs rounded-full text-white/50 hover:text-white hover:bg-white/5 transition-colors cursor-pointer disabled:opacity-25 disabled:cursor-not-allowed"
          style={{ fontFamily: "var(--font-inter)" }}
          disabled={activeIndex === 0}
          aria-label="Previous section"
          onClick={() => goToIndex(activeIndex - 1)}
        >
          ← Prev
        </button>

        <button
          type="button"
          className="px-3 py-1.5 text-xs rounded-full text-white/40 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          style={{ fontFamily: "var(--font-inter)" }}
          aria-label="Scroll down one screen"
          onClick={() => scrollPage(1)}
        >
          ↓
        </button>

        <span
          className="px-2 text-[10px] tracking-wide tabular-nums min-w-[4.5rem] text-center"
          style={{
            fontFamily: "var(--font-inter)",
            color: "rgba(255,255,255,0.35)",
          }}
          aria-live="polite"
        >
          {sections[activeIndex].label}
        </span>

        <button
          type="button"
          className="px-3 py-1.5 text-xs rounded-full text-white/40 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          style={{ fontFamily: "var(--font-inter)" }}
          aria-label="Scroll up one screen"
          onClick={() => scrollPage(-1)}
        >
          ↑
        </button>

        <button
          type="button"
          className="px-3 py-1.5 text-xs rounded-full text-white/50 hover:text-white hover:bg-white/5 transition-colors cursor-pointer disabled:opacity-25 disabled:cursor-not-allowed"
          style={{ fontFamily: "var(--font-inter)" }}
          disabled={activeIndex === sections.length - 1}
          aria-label="Next section"
          onClick={() => goToIndex(activeIndex + 1)}
        >
          Next →
        </button>
      </motion.div>
    </>
  );
}
