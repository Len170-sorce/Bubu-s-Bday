"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Only enable on non-touch devices
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasFinePointer) return;
    setIsMobile(false);

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  if (isMobile) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999] text-base select-none"
      style={{ left: pos.x - 10, top: pos.y - 10 }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.5 }}
      transition={{ duration: 0.15 }}
    >
      🌸
    </motion.div>
  );
}
