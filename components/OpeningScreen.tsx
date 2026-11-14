"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { birthdayContent } from "@/data/birthday-content";

interface OpeningScreenProps {
  onOpen: () => void;
}

export default function OpeningScreen({ onOpen }: OpeningScreenProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [showPetals, setShowPetals] = useState(false);
  const [petals] = useState(() =>
    Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: 6 + (i * 92) / 18 + (Math.sin(i) * 5),
      delay: i * 0.08,
    }))
  );

  const handleOpen = () => {
    setIsOpening(true);
    setShowPetals(true);
    setTimeout(onOpen, 2200);
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #FFF8F0 0%, #F7DDE5 50%, #FFF8F0 100%)" }}
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.03,
        transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
      }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {["🌸", "🌷", "✨", "💮", "🌺"].map((icon, i) => (
          <motion.span
            key={i}
            className="absolute text-3xl opacity-20 select-none"
            style={{
              left: `${[8, 85, 15, 78, 50][i]}%`,
              top: `${[10, 15, 80, 75, 5][i]}%`,
            }}
            animate={{ y: [-8, 8, -8], rotate: [-4, 4, -4] }}
            transition={{ duration: 4.5 + i, repeat: Infinity, ease: "easeInOut" }}
          >
            {icon}
          </motion.span>
        ))}
      </div>

      <div className="relative flex flex-col items-center gap-7 px-6 max-w-sm w-full">
        <motion.p
          className="font-script text-xl sm:text-2xl text-[#A85F78] text-center"
          style={{ fontFamily: "Caveat, cursive" }}
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {birthdayContent.opening.envelopeNote}
        </motion.p>

        <motion.div
          className="relative cursor-pointer select-none"
          initial={{ opacity: 0, y: 30, scale: 0.92 }}
          animate={
            isOpening
              ? { scale: 1.05, y: -6 }
              : { opacity: 1, y: 0, scale: 1 }
          }
          transition={{
            duration: isOpening ? 0.6 : 0.8,
            ease: [0.22, 1, 0.36, 1],
            delay: isOpening ? 0 : 0.3,
          }}
          onClick={!isOpening ? handleOpen : undefined}
          whileHover={!isOpening ? { scale: 1.03 } : {}}
          whileTap={!isOpening ? { scale: 0.98 } : {}}
        >
          <svg
            width="280"
            height="200"
            viewBox="0 0 280 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-2xl"
          >
            <rect x="0" y="40" width="280" height="160" rx="6" fill="#FFFDF8" />
            <rect x="0" y="40" width="280" height="160" rx="6" stroke="#DDA0B3" strokeWidth="1.5" />

            <line x1="0" y1="200" x2="140" y2="120" stroke="#E9B7C6" strokeWidth="1" />
            <line x1="280" y1="200" x2="140" y2="120" stroke="#E9B7C6" strokeWidth="1" />

            <motion.path
              d="M0 40 L140 110 L280 40 Q280 32 272 32 L8 32 Q0 32 0 40 Z"
              fill="#F7DDE5"
              stroke="#DDA0B3"
              strokeWidth="1.5"
              animate={isOpening ? { opacity: 0, y: -30, scaleY: 0.2 } : { opacity: 1, y: 0, scaleY: 1 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            />

            <motion.g
              animate={isOpening ? { scale: 0, opacity: 0 } : { scale: [1, 1.08, 1] }}
              transition={isOpening ? { duration: 0.3 } : { duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "140px 75px" }}
            >
              <circle cx="140" cy="75" r="18" fill="#A85F78" />
              <text x="140" y="81" textAnchor="middle" fontSize="16" fill="#FFF8F0">
                ♥
              </text>
            </motion.g>

            <line x1="80" y1="145" x2="200" y2="145" stroke="#E9B7C6" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="100" y1="160" x2="180" y2="160" stroke="#E9B7C6" strokeWidth="1" strokeDasharray="4 4" />

            <text x="140" y="178" textAnchor="middle" fontSize="11" fill="#DDA0B3" fontFamily="Georgia, serif">
              For: {birthdayContent.recipientName} ♥
            </text>
          </svg>

          {isOpening && (
            <motion.div
              className="absolute inset-x-3 bottom-5 bg-[#FFFDF8] rounded-md shadow-lg flex items-center justify-center py-4 border border-[#F7DDE5]"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: -32, opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="font-script text-[#A85F78] text-lg sm:text-xl" style={{ fontFamily: "Caveat, cursive" }}>
                Happy Birthday, {birthdayContent.recipientName}! 🌸
              </span>
            </motion.div>
          )}
        </motion.div>

        <AnimatePresence>
          {!isOpening && (
            <motion.button
              onClick={handleOpen}
              className="relative overflow-hidden px-9 py-3.5 rounded-full text-[#FFFDF8] font-sans text-xs sm:text-sm tracking-widest uppercase shadow-md"
              style={{
                background: "linear-gradient(135deg, #DDA0B3 0%, #A85F78 100%)",
                boxShadow: "0 8px 28px rgba(168,95,120,0.32)",
              }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.04, boxShadow: "0 12px 36px rgba(168,95,120,0.42)" }}
              whileTap={{ scale: 0.97 }}
            >
              <span
                className="absolute inset-0 opacity-25"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.7) 50%, transparent 100%)",
                  backgroundSize: "200% 100%",
                  animation: "shimmer 2.5s linear infinite",
                }}
              />
              <span className="relative">{birthdayContent.opening.buttonLabel}</span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {showPetals &&
          petals.map((p) => (
            <motion.div
              key={p.id}
              className="fixed pointer-events-none text-2xl z-30"
              style={{ left: `${p.x}%`, top: "-40px" }}
              initial={{ y: -40, opacity: 0, rotate: 0 }}
              animate={{
                y: "110vh",
                opacity: [0, 0.85, 0.85, 0],
                rotate: 540,
                x: [0, (p.id % 2 === 0 ? 30 : -30), 0],
              }}
              transition={{
                duration: 3.5 + (p.id % 4) * 0.4,
                delay: p.delay,
                ease: "easeOut",
              }}
            >
              🌸
            </motion.div>
          ))}
      </AnimatePresence>
    </motion.div>
  );
}
