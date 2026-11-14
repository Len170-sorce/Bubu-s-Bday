"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { birthdayContent } from "@/data/birthday-content";

interface OpeningScreenProps {
  onOpen: () => void;
}

const FloatingPetal = ({ delay, x }: { delay: number; x: number }) => (
  <motion.div
    className="fixed pointer-events-none text-2xl z-30"
    style={{ left: `${x}%`, top: "-40px" }}
    initial={{ y: -40, opacity: 0, rotate: 0 }}
    animate={{ y: "110vh", opacity: [0, 0.8, 0.8, 0], rotate: 540 }}
    transition={{ duration: 4 + Math.random() * 2, delay, ease: "linear" }}
  >
    🌸
  </motion.div>
);

export default function OpeningScreen({ onOpen }: OpeningScreenProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [showPetals, setShowPetals] = useState(false);
  const [petals] = useState(() =>
    Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: i * 0.15,
    }))
  );

  const handleOpen = () => {
    setIsOpening(true);
    setShowPetals(true);
    setTimeout(onOpen, 2600);
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #FFF8F0 0%, #F7DDE5 50%, #FFF8F0 100%)" }}
      animate={isOpening ? { opacity: 0, scale: 1.04 } : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: isOpening ? 1.7 : 0, ease: "easeInOut" }}
    >
      {/* Background decorative flowers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {["🌸", "🌷", "✨", "💮", "🌺"].map((icon, i) => (
          <motion.span
            key={i}
            className="absolute text-3xl opacity-20"
            style={{
              left: `${[8, 85, 15, 78, 50][i]}%`,
              top: `${[10, 15, 80, 75, 5][i]}%`,
            }}
            animate={{ y: [-8, 8, -8], rotate: [-5, 5, -5] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
          >
            {icon}
          </motion.span>
        ))}
      </div>

      {/* Envelope container */}
      <div className="relative flex flex-col items-center gap-8 px-6">
        {/* Handwritten top note */}
        <motion.p
          className="font-script text-xl text-[#A85F78] text-center"
          style={{ fontFamily: "Caveat, cursive" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Something special is waiting for you… 🌸
        </motion.p>

        {/* Envelope */}
        <motion.div
          className="relative cursor-pointer select-none"
          initial={{ opacity: 0, y: 40, scale: 0.85 }}
          animate={
            isOpening
              ? { scale: 1.08, y: -10 }
              : { opacity: 1, y: 0, scale: 1 }
          }
          transition={{ duration: isOpening ? 0.5 : 0.9, ease: "easeOut", delay: isOpening ? 0 : 0.5 }}
          onClick={!isOpening ? handleOpen : undefined}
        >
          <svg
            width="280"
            height="200"
            viewBox="0 0 280 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-2xl"
          >
            {/* Envelope body */}
            <rect x="0" y="40" width="280" height="160" rx="6" fill="#FFFDF8" />
            <rect x="0" y="40" width="280" height="160" rx="6" stroke="#DDA0B3" strokeWidth="1.5" />

            {/* Bottom fold lines */}
            <line x1="0" y1="200" x2="140" y2="120" stroke="#E9B7C6" strokeWidth="1" />
            <line x1="280" y1="200" x2="140" y2="120" stroke="#E9B7C6" strokeWidth="1" />

            {/* Envelope flap — animates open */}
            <motion.path
              d="M0 40 L140 110 L280 40 L280 40 Q280 32 272 32 L8 32 Q0 32 0 40 Z"
              fill="#F7DDE5"
              stroke="#DDA0B3"
              strokeWidth="1.5"
              animate={isOpening ? { rotateX: -180, y: -60, opacity: 0 } : { rotateX: 0, y: 0, opacity: 1 }}
              style={{ transformOrigin: "140px 32px", perspective: 400 }}
              transition={{ duration: 0.7, delay: isOpening ? 0.1 : 0 }}
            />

            {/* Heart wax seal */}
            <motion.g
              animate={{ scale: isOpening ? 0 : [1, 1.08, 1] }}
              transition={{ duration: isOpening ? 0.3 : 2, repeat: isOpening ? 0 : Infinity }}
              style={{ transformOrigin: "140px 75px" }}
            >
              <circle cx="140" cy="75" r="18" fill="#A85F78" />
              <text x="140" y="81" textAnchor="middle" fontSize="16" fill="#FFF8F0">
                ♥
              </text>
            </motion.g>

            {/* Decorative ribbon lines */}
            <line x1="80" y1="145" x2="200" y2="145" stroke="#E9B7C6" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="100" y1="160" x2="180" y2="160" stroke="#E9B7C6" strokeWidth="1" strokeDasharray="4 4" />

            {/* Small text placeholder */}
            <text x="140" y="178" textAnchor="middle" fontSize="10" fill="#DDA0B3" fontFamily="Georgia, serif">
              For: Glad Marrie ♥
            </text>
          </svg>

          {/* Letter peeking out when opening */}
          {isOpening && (
            <motion.div
              className="absolute inset-x-4 bottom-6 bg-[#FFFDF8] rounded shadow-lg flex items-center justify-center py-4 border border-[#F7DDE5]"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: -30, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <span className="font-script text-[#A85F78] text-lg" style={{ fontFamily: "Caveat, cursive" }}>
                Happy Birthday, Glad Marrie! 🌸
              </span>
            </motion.div>
          )}
        </motion.div>

        {/* Open button */}
        <AnimatePresence>
          {!isOpening && (
            <motion.button
              onClick={handleOpen}
              className="relative overflow-hidden px-10 py-4 rounded-full text-[#FFFDF8] font-sans text-sm tracking-widest uppercase"
              style={{
                background: "linear-gradient(135deg, #DDA0B3 0%, #A85F78 100%)",
                boxShadow: "0 8px 32px rgba(168,95,120,0.35)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              whileHover={{ scale: 1.04, boxShadow: "0 12px 40px rgba(168,95,120,0.45)" }}
              whileTap={{ scale: 0.97 }}
            >
              {/* shimmer */}
              <span
                className="absolute inset-0 opacity-30"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 50%, transparent 100%)",
                  backgroundSize: "200% 100%",
                  animation: "shimmer 2.5s linear infinite",
                }}
              />
              <span className="relative">{birthdayContent.opening.buttonLabel}</span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Falling petals on open */}
      <AnimatePresence>
        {showPetals &&
          petals.map((p) => (
            <FloatingPetal key={p.id} x={p.x} delay={p.delay} />
          ))}
      </AnimatePresence>
    </motion.div>
  );
}
