"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth spring physics for the cursor dot
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Smooth spring for the outer ring (delayed)
  const ringSpringConfig = { damping: 35, stiffness: 200, mass: 1 };
  const ringXSpring = useSpring(cursorX, ringSpringConfig);
  const ringYSpring = useSpring(cursorY, ringSpringConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null; // Don't render on mobile
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-blue-500 rounded-full pointer-events-none z-[9999] mix-blend-screen"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-blue-500/50 rounded-full pointer-events-none z-[9998]"
        style={{
          x: ringXSpring,
          y: ringYSpring,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  );
}