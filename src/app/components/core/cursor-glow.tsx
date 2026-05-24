"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-300);
  const y = useMotionValue(-300);
  const sx = useSpring(x, { stiffness: 140, damping: 20, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 140, damping: 20, mass: 0.3 });

  useEffect(() => {
    const supportsHover = window.matchMedia("(hover: hover)").matches;
    if (!supportsHover) return;
    setEnabled(true);
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX - 100);
      y.set(e.clientY - 100);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      style={{ x: sx, y: sy }}
      className="fixed top-0 left-0 w-[200px] h-[200px] rounded-full bg-brand-400/10 blur-3xl pointer-events-none z-[5]"
      aria-hidden
    />
  );
}
