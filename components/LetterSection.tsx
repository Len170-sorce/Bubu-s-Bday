"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { birthdayContent } from "@/data/birthday-content";

export default function LetterSection() {
  const [opened, setOpened] = useState(false);

  return (
    <section
      id="letter"
      className="relative py-24 px-4 sm:px-8 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #FFF8F0 0%, #F7DDE5 40%, #FFF8F0 100%)" }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {["🌸", "💮", "🌷"].map((icon, i) => (
          <motion.span
            key={i}
            className="absolute text-4xl opacity-10"
            style={{ left: `${[8, 85, 48][i]}%`, top: `${[15, 60, 80][i]}%` }}
            animate={{ y: [-10, 10, -10], rotate: [-5, 5, -5] }}
            transition={{ duration: 5 + i * 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            {icon}
          </motion.span>
        ))}
      </div>

      {/* Section header */}
      <motion.div
        className="text-center mb-12 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span
          className="font-script text-5xl text-[#DDA0B3] block mb-3"
          style={{ fontFamily: "Caveat, cursive" }}
        >
          A Letter
        </span>
        <h2
          className="text-3xl sm:text-4xl text-[#A85F78]"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Written Just For You
        </h2>
        <div className="flex items-center justify-center gap-3 mt-4">
          <div className="h-px w-12 bg-[#DDA0B3] opacity-50" />
          <span className="text-[#DDA0B3]">✉️</span>
          <div className="h-px w-12 bg-[#DDA0B3] opacity-50" />
        </div>
      </motion.div>

      {/* Envelope / Letter container */}
      <div className="relative z-10 max-w-lg mx-auto">
        {!opened ? (
          /* Sealed envelope */
          <motion.div
            className="relative cursor-pointer mx-auto"
            style={{ maxWidth: 340 }}
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            onClick={() => setOpened(true)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg
              width="100%"
              viewBox="0 0 320 220"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-xl"
            >
              {/* Envelope body */}
              <rect x="0" y="40" width="320" height="180" rx="8" fill="#FFFDF8" />
              <rect x="0" y="40" width="320" height="180" rx="8" stroke="#DDA0B3" strokeWidth="1.5" />

              {/* Envelope flap */}
              <path
                d="M0 40 L160 130 L320 40 Q320 28 308 28 L12 28 Q0 28 0 40 Z"
                fill="#F7DDE5"
                stroke="#DDA0B3"
                strokeWidth="1.5"
              />
              {/* V fold line inside flap */}
              <line x1="0" y1="40" x2="160" y2="130" stroke="#E9B7C6" strokeWidth="0.8" strokeDasharray="4 3" />
              <line x1="320" y1="40" x2="160" y2="130" stroke="#E9B7C6" strokeWidth="0.8" strokeDasharray="4 3" />

              {/* Bottom fold lines */}
              <line x1="0" y1="220" x2="160" y2="140" stroke="#E9B7C6" strokeWidth="0.8" />
              <line x1="320" y1="220" x2="160" y2="140" stroke="#E9B7C6" strokeWidth="0.8" />

              {/* Wax seal */}
              <circle cx="160" cy="88" r="22" fill="#A85F78" />
              <circle cx="160" cy="88" r="18" fill="none" stroke="#DDA0B3" strokeWidth="1" />
              <text x="160" y="94" textAnchor="middle" fontSize="18" fill="#FFFDF8">
                ♥
              </text>

              {/* "To:" label */}
              <text x="160" y="175" textAnchor="middle" fontSize="12" fill="#DDA0B3" fontFamily="Georgia, serif" fontStyle="italic">
                To: Glad Marrie
              </text>
              <text x="160" y="192" textAnchor="middle" fontSize="10" fill="#E9B7C6" fontFamily="Georgia, serif">
                with love ♥
              </text>
            </svg>

            {/* Open hint */}
            <motion.p
              className="text-center font-script text-[#DDA0B3] mt-4 text-lg"
              style={{ fontFamily: "Caveat, cursive" }}
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Tap to open your letter 💌
            </motion.p>
          </motion.div>
        ) : (
          /* Opened letter */
          <motion.div
            className="relative mx-auto"
            initial={{ opacity: 0, y: -30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            {/* Paper sheet */}
            <div
              className="relative rounded-sm p-7 sm:p-10 shadow-2xl paper-texture"
              style={{
                background: "#FFFDF8",
                border: "1px solid #E9B7C6",
                boxShadow:
                  "0 20px 60px rgba(168,95,120,0.15), 0 4px 16px rgba(0,0,0,0.06)",
              }}
            >
              {/* Top wax seal decoration */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center text-xl"
                style={{ background: "#A85F78" }}>
                <span className="text-[#FFFDF8]">♥</span>
              </div>

              {/* Faint ruled lines */}
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute left-10 right-10 h-px opacity-10"
                  style={{ top: `${80 + i * 32}px`, background: "#DDA0B3" }}
                />
              ))}

              {/* Salutation */}
              <motion.h3
                className="font-script text-2xl text-[#A85F78] mb-6 text-center relative z-10"
                style={{ fontFamily: "Caveat, cursive" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {birthdayContent.letter.salutation}
              </motion.h3>

              {/* Letter body */}
              {birthdayContent.letter.paragraphs.map((para, i) => (
                <motion.p
                  key={i}
                  className="text-[#8D756D] leading-8 mb-5 relative z-10"
                  style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.1rem" }}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.25 }}
                >
                  {para}
                </motion.p>
              ))}

              {/* Closing */}
              <motion.div
                className="mt-8 text-right relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <p
                  className="text-[#8D756D]"
                  style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.05rem" }}
                >
                  {birthdayContent.letter.closing}
                </p>
                <p
                  className="font-script text-2xl text-[#A85F78] mt-1"
                  style={{ fontFamily: "Caveat, cursive" }}
                >
                  {birthdayContent.letter.signature}
                </p>
              </motion.div>

              {/* Floral corner decoration */}
              <div className="absolute bottom-4 left-4 text-2xl opacity-20">🌸</div>
              <div className="absolute top-8 right-4 text-xl opacity-20">🌷</div>
            </div>

            {/* Re-seal button */}
            <motion.button
              className="mt-6 mx-auto block font-script text-[#DDA0B3] text-sm"
              style={{ fontFamily: "Caveat, cursive" }}
              onClick={() => setOpened(false)}
              whileHover={{ scale: 1.05 }}
            >
              ← close the letter
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
