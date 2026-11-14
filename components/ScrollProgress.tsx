"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? scrolled / total : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-1 select-none pointer-events-none"
      aria-hidden="true"
    >
      {/* Track line */}
      <div
        className="w-px rounded-full relative overflow-hidden"
        style={{ height: 100, background: "rgba(221,160,179,0.2)" }}
      >
        {/* Filled track */}
        <motion.div
          className="absolute top-0 left-0 w-full rounded-full"
          style={{
            height: `${progress * 100}%`,
            background: "linear-gradient(180deg, #DDA0B3, #A85F78)",
          }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Heart indicator */}
      <motion.div
        className="text-base"
        style={{
          color: "#A85F78",
          position: "absolute",
          top: `calc(${progress * 100}px)`,
          right: 0,
          transform: "translate(2px, -50%)",
        }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        🌸
      </motion.div>
    </div>
  );
}
