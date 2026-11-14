"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { birthdayContent } from "@/data/birthday-content";

interface HeartParticle {
  id: number;
  x: number;
  y: number;
  emoji: string;
}

export default function DuduBear() {
  const [currentMessage, setCurrentMessage] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isBouncing, setIsBouncing] = useState<boolean>(false);
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);
  const [particles, setParticles] = useState<HeartParticle[]>([]);
  const hideTimerRef = useRef<NodeJS.Timeout | null>(null);

  const messages = birthdayContent.duduMessages || [
    "I love you! ❤️",
    "Happy Birthday, my love! 🎂",
    "Hello, pretty girl! 🌸",
    "You're so special! ✨",
    "Sending you hugs! 🤗",
    "You make me smile! 😊",
    "I miss you! 🥺",
    "You're my favorite person! 💖",
    "You are so loved! 💕",
    "Mwah! 💗",
    "Have a beautiful day! 🌷",
    "Just a little reminder that I love you! 💌",
  ];

  const handleBearClick = () => {
    setHasInteracted(true);

    // Select random message avoiding immediate repeats
    const pool = messages.filter((m) => m !== currentMessage);
    const nextMessage = pool[Math.floor(Math.random() * pool.length)] || messages[0];
    setCurrentMessage(nextMessage);

    // Trigger bounce animation
    setIsBouncing(true);
    setTimeout(() => setIsBouncing(false), 500);

    // Show speech cloud & reset auto-hide timer (3.8 seconds)
    setIsVisible(true);
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
    }
    hideTimerRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 3800);

    // Burst a few floating mini-hearts
    const burstEmojis = ["💗", "🌸", "✨", "💕", "❤️"];
    const newParticles: HeartParticle[] = Array.from({ length: 3 }, (_, i) => ({
      id: Date.now() + i,
      x: (Math.random() - 0.5) * 40,
      y: -10 - Math.random() * 20,
      emoji: burstEmojis[Math.floor(Math.random() * burstEmojis.length)],
    }));
    setParticles((prev) => [...prev.slice(-6), ...newParticles]);
  };

  // Clean up floating particles
  useEffect(() => {
    if (particles.length === 0) return;
    const timer = setTimeout(() => {
      setParticles([]);
    }, 1800);
    return () => clearTimeout(timer);
  }, [particles]);

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, []);

  return (
    <div
      className="fixed bottom-14 sm:bottom-16 md:bottom-20 right-3 sm:right-6 md:right-8 z-40 select-none flex flex-col items-end"
      aria-label="Interactive Dudu Bear companion"
    >
      {/* Speech Cloud / Bubble */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key={currentMessage}
            className="relative mb-2 sm:mb-3 pointer-events-none max-w-[210px] sm:max-w-[260px] md:max-w-[290px]"
            initial={{ opacity: 0, scale: 0.65, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.75, y: -12 }}
            transition={{
              type: "spring",
              damping: 18,
              stiffness: 240,
            }}
          >
            {/* Scrapbook Cloud Container */}
            <div
              className="relative rounded-[24px] rounded-br-[6px] px-4 py-3 sm:px-5 sm:py-3.5 shadow-xl border border-[#F7DDE5]"
              style={{
                background: "linear-gradient(135deg, #FFFDF8 0%, #FFF8F0 60%, #F7DDE5 100%)",
                boxShadow:
                  "0 12px 32px rgba(168, 95, 120, 0.22), 0 2px 8px rgba(0, 0, 0, 0.04)",
              }}
            >
              {/* Cloud scallop bubbles decoration */}
              <div
                className="absolute -top-1.5 left-4 w-4 h-4 rounded-full bg-[#FFFDF8] opacity-80 pointer-events-none"
                style={{ borderTop: "1px solid #F7DDE5" }}
              />
              <div
                className="absolute -top-2.5 left-10 w-6 h-6 rounded-full bg-[#FFFDF8] opacity-80 pointer-events-none"
                style={{ borderTop: "1px solid #F7DDE5" }}
              />

              {/* Message text */}
              <p
                className="font-script text-[#A85F78] text-base sm:text-lg md:text-xl text-center leading-snug font-medium"
                style={{ fontFamily: "Caveat, cursive" }}
              >
                {currentMessage}
              </p>

              {/* Speech bubble tail pointing towards Dudu Bear */}
              <div
                className="absolute -bottom-2 right-5 w-4 h-4 rotate-45"
                style={{
                  background: "#F7DDE5",
                  borderRight: "1px solid #E9B7C6",
                  borderBottom: "1px solid #E9B7C6",
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bursting mini-particles */}
      <AnimatePresence>
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className="absolute pointer-events-none text-base sm:text-lg z-50"
            style={{ right: 35 + p.x, bottom: 65 }}
            initial={{ opacity: 1, y: 0, scale: 0.6 }}
            animate={{
              opacity: 0,
              y: p.y - 45,
              scale: [0.6, 1.2, 0.9],
              rotate: (Math.random() - 0.5) * 40,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          >
            {p.emoji}
          </motion.span>
        ))}
      </AnimatePresence>

      {/* Initial gentle hint before first tap */}
      {!hasInteracted && !isVisible && (
        <motion.div
          className="mb-1 mr-2 px-2.5 py-1 rounded-full text-xs font-script text-[#A85F78] border border-[#E9B7C6] shadow-sm pointer-events-none"
          style={{
            background: "rgba(255, 253, 248, 0.95)",
            fontFamily: "Caveat, cursive",
          }}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: [0.7, 1, 0.7], y: [0, -3, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          tap me! 🐾
        </motion.div>
      )}

      {/* Dudu Bear Button */}
      <motion.button
        onClick={handleBearClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleBearClick();
          }
        }}
        className="relative group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A85F78] rounded-full p-1 transition-transform"
        aria-label="Click Dudu Bear for a sweet message"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        animate={
          isBouncing
            ? {
                y: [0, -16, 2, -6, 0],
                scale: [1, 1.2, 0.94, 1.05, 1],
                rotate: [0, -6, 6, -3, 0],
              }
            : {
                y: [-3, 3, -3],
                rotate: [-1.5, 1.5, -1.5],
              }
        }
        transition={
          isBouncing
            ? { duration: 0.55, ease: "easeInOut" }
            : { duration: 4.5, repeat: Infinity, ease: "easeInOut" }
        }
      >
        {/* Soft radial glow behind Dudu Bear */}
        <div
          className="absolute inset-0 rounded-full blur-md opacity-40 group-hover:opacity-70 transition-opacity"
          style={{ background: "radial-gradient(circle, #F7DDE5 20%, transparent 70%)" }}
        />

        {/* Dudu Bear Image */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 drop-shadow-lg">
          <Image
            src="/dudubear.png"
            alt="Dudu Bear"
            fill
            sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 112px"
            className="object-contain pointer-events-none select-none"
            priority
          />
        </div>
      </motion.button>
    </div>
  );
}
