"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { damping: 26, stiffness: 320, mass: 0.5 });
  const springY = useSpring(mouseY, { damping: 26, stiffness: 320, mass: 0.5 });

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    if (!media.matches) return;
    setIsFinePointer(true);

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 10);
      mouseY.set(e.clientY - 10);
      if (!visible) setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [mouseX, mouseY, visible]);

  if (!isFinePointer) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999] text-base select-none"
      style={{ x: springX, y: springY }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      🌸
    </motion.div>
  );
}
