"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Floating decoration particles
const DECORATIONS = [
  { icon: "🌸", size: "text-xl", floatClass: "float-a" },
  { icon: "🌷", size: "text-lg", floatClass: "float-b" },
  { icon: "✨", size: "text-sm", floatClass: "sparkle-anim" },
  { icon: "💗", size: "text-base", floatClass: "float-c" },
  { icon: "🌺", size: "text-xl", floatClass: "float-b" },
  { icon: "⭐", size: "text-sm", floatClass: "sparkle-anim" },
  { icon: "💮", size: "text-lg", floatClass: "float-a" },
  { icon: "🌸", size: "text-base", floatClass: "float-c" },
  { icon: "✨", size: "text-xs", floatClass: "sparkle-anim" },
  { icon: "💗", size: "text-sm", floatClass: "float-b" },
  { icon: "🌷", size: "text-xl", floatClass: "float-a" },
  { icon: "⭐", size: "text-base", floatClass: "float-c" },
];

interface FloatItem {
  id: number;
  icon: string;
  size: string;
  floatClass: string;
  left: number;
  top: number;
  delay: number;
  opacity: number;
}

export default function FloatingDecorations() {
  const [items, setItems] = useState<FloatItem[]>([]);

  useEffect(() => {
    setItems(
      DECORATIONS.map((d, i) => ({
        id: i,
        ...d,
        left: 2 + Math.random() * 96,
        top: 2 + Math.random() * 96,
        delay: Math.random() * -8,
        opacity: 0.08 + Math.random() * 0.14,
      }))
    );
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {items.map((item) => (
        <div
          key={item.id}
          className={`absolute select-none ${item.size} ${item.floatClass}`}
          style={{
            left: `${item.left}%`,
            top: `${item.top}%`,
            opacity: item.opacity,
            animationDelay: `${item.delay}s`,
          }}
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
}
