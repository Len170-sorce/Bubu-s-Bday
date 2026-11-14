"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    restDelta: 0.001,
  });

  const indicatorY = useTransform(smoothProgress, [0, 1], [0, 100]);

  return (
    <div
      className="fixed right-3 sm:right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-1 select-none pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="w-px rounded-full relative overflow-hidden"
        style={{ height: 100, background: "rgba(221,160,179,0.2)" }}
      >
        <motion.div
          className="absolute top-0 left-0 w-full rounded-full origin-top"
          style={{
            scaleY: smoothProgress,
            height: "100%",
            background: "linear-gradient(180deg, #DDA0B3, #A85F78)",
          }}
        />
      </div>

      <motion.div
        className="text-base"
        style={{
          color: "#A85F78",
          position: "absolute",
          top: 0,
          right: -1,
          y: indicatorY,
          translateY: "-50%",
        }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        🌸
      </motion.div>
    </div>
  );
}
