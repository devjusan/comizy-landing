"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const [enabled] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(hover: hover)").matches,
  );
  const x = useMotionValue(-300);
  const y = useMotionValue(-300);
  const sx = useSpring(x, { stiffness: 140, damping: 20, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 140, damping: 20, mass: 0.3 });

  useEffect(() => {
    if (!enabled) return;
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX - 100);
      y.set(e.clientY - 100);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      style={{ x: sx, y: sy }}
      className="fixed top-0 left-0 w-50 h-50 rounded-full bg-brand-400/15 blur-3xl pointer-events-none z-5"
      aria-hidden
    />
  );
}
