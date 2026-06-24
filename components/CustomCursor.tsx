"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { stiffness: 200, damping: 30, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 30, mass: 0.5 });

  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      const style = window.getComputedStyle(target);
      setIsPointer(style.cursor === "pointer");
    };

    const addHoverListeners = () => {
      const elements = document.querySelectorAll("a, button, [data-hover]");
      elements.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovering(true));
        el.addEventListener("mouseleave", () => setIsHovering(false));
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    addHoverListeners();

    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Dot */}
      <motion.div
        style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        animate={{ scale: isHovering ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      >
        <div className="w-2 h-2 rounded-full bg-white" />
      </motion.div>

      {/* Ring */}
      <motion.div
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-white/40"
        animate={{
          width: isHovering ? 56 : isPointer ? 40 : 32,
          height: isHovering ? 56 : isPointer ? 40 : 32,
          borderColor: isHovering
            ? "rgba(59, 130, 246, 0.8)"
            : "rgba(255,255,255,0.4)",
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      />
    </>
  );
}
