"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { birthdayContent } from "@/data/birthday-content";

export default function LetterSection() {
  const [opened, setOpened] = useState(false);

  return (
    <section
      id="letter"
      className="relative py-20 sm:py-24 px-4 sm:px-6 md:px-8 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #FFF8F0 0%, #F7DDE5 40%, #FFF8F0 100%)" }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {["🌸", "💮", "🌷"].map((icon, i) => (
          <motion.span
            key={i}
            className="absolute text-3xl sm:text-4xl opacity-10 select-none"
            style={{ left: `${[8, 85, 48][i]}%`, top: `${[15, 60, 80][i]}%` }}
            animate={{ y: [-10, 10, -10], rotate: [-4, 4, -4] }}
            transition={{ duration: 5 + i * 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            {icon}
          </motion.span>
        ))}
      </div>

      <motion.div
        className="text-center mb-10 sm:mb-14 relative z-10 px-2"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <span
          className="font-script text-4xl sm:text-5xl text-[#DDA0B3] block mb-2 sm:mb-3"
          style={{ fontFamily: "Caveat, cursive" }}
        >
          A Letter
        </span>
        <h2
          className="text-2xl sm:text-3xl md:text-4xl text-[#A85F78]"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Written Just For You
        </h2>
        <div className="flex items-center justify-center gap-3 mt-4">
          <div className="h-px w-10 sm:w-12 bg-[#DDA0B3] opacity-50" />
          <span className="text-[#DDA0B3]">✉️</span>
          <div className="h-px w-10 sm:w-12 bg-[#DDA0B3] opacity-50" />
        </div>
      </motion.div>

      <div className="relative z-10 max-w-lg md:max-w-2xl mx-auto w-full">
        {!opened ? (
          <motion.div
            className="relative cursor-pointer mx-auto px-2 max-w-[340px] sm:max-w-[380px]"
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setOpened(true)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setOpened(true);
              }
            }}
            aria-label="Open your birthday letter"
          >
            <svg
              width="100%"
              viewBox="0 0 320 220"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-xl w-full h-auto"
            >
              <rect x="0" y="40" width="320" height="180" rx="8" fill="#FFFDF8" />
              <rect x="0" y="40" width="320" height="180" rx="8" stroke="#DDA0B3" strokeWidth="1.5" />

              <path
                d="M0 40 L160 130 L320 40 Q320 28 308 28 L12 28 Q0 28 0 40 Z"
                fill="#F7DDE5"
                stroke="#DDA0B3"
                strokeWidth="1.5"
              />
              <line x1="0" y1="40" x2="160" y2="130" stroke="#E9B7C6" strokeWidth="0.8" strokeDasharray="4 3" />
              <line x1="320" y1="40" x2="160" y2="130" stroke="#E9B7C6" strokeWidth="0.8" strokeDasharray="4 3" />

              <line x1="0" y1="220" x2="160" y2="140" stroke="#E9B7C6" strokeWidth="0.8" />
              <line x1="320" y1="220" x2="160" y2="140" stroke="#E9B7C6" strokeWidth="0.8" />

              <circle cx="160" cy="88" r="22" fill="#A85F78" />
              <circle cx="160" cy="88" r="18" fill="none" stroke="#DDA0B3" strokeWidth="1" />
              <text x="160" y="94" textAnchor="middle" fontSize="18" fill="#FFFDF8">
                ♥
              </text>

              <text x="160" y="175" textAnchor="middle" fontSize="13" fill="#DDA0B3" fontFamily="Georgia, serif" fontStyle="italic">
                To: {birthdayContent.recipientName}
              </text>
              <text x="160" y="194" textAnchor="middle" fontSize="10" fill="#E9B7C6" fontFamily="Georgia, serif">
                with all my love ♥
              </text>
            </svg>

            <motion.p
              className="text-center font-script text-[#DDA0B3] mt-4 text-lg sm:text-xl"
              style={{ fontFamily: "Caveat, cursive" }}
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            >
              Tap to open your letter 💌
            </motion.p>
          </motion.div>
        ) : (
          <motion.div
            className="relative mx-auto w-full"
            initial={{ opacity: 0, y: -16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="relative rounded-2xl p-6 sm:p-8 md:p-12 shadow-2xl paper-texture"
              style={{
                background: "#FFFDF8",
                backgroundImage:
                  "repeating-linear-gradient(transparent, transparent 31px, rgba(221, 160, 179, 0.12) 31px, rgba(221, 160, 179, 0.12) 32px)",
                backgroundPosition: "0 88px",
                border: "1px solid #E9B7C6",
                boxShadow:
                  "0 20px 60px rgba(168,95,120,0.15), 0 4px 16px rgba(0,0,0,0.06)",
              }}
            >
              <div
                className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-md z-20"
                style={{ background: "#A85F78" }}
              >
                <span className="text-[#FFFDF8]">♥</span>
              </div>

              <motion.h3
                className="font-script text-2xl sm:text-3xl text-[#A85F78] mb-6 sm:mb-8 text-center relative z-10 px-2 leading-relaxed"
                style={{ fontFamily: "Caveat, cursive" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
              >
                {birthdayContent.letter.salutation}
              </motion.h3>

              <div className="space-y-4 sm:space-y-5 relative z-10">
                {birthdayContent.letter.paragraphs.map((para, i) => (
                  <motion.p
                    key={i}
                    className="text-[#8D756D] leading-7 sm:leading-8 md:leading-9 text-base sm:text-lg md:text-[1.125rem]"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {para}
                  </motion.p>
                ))}
              </div>

              <motion.div
                className="mt-8 sm:mt-10 text-right relative z-10 pr-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <p
                  className="text-[#8D756D] text-base sm:text-lg"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  {birthdayContent.letter.closing}
                </p>
                <p
                  className="font-script text-2xl sm:text-3xl text-[#A85F78] mt-1"
                  style={{ fontFamily: "Caveat, cursive" }}
                >
                  {birthdayContent.letter.signature}
                </p>
              </motion.div>

              <div className="absolute bottom-4 left-4 text-2xl sm:text-3xl opacity-20 pointer-events-none select-none">
                🌸
              </div>
              <div className="absolute top-6 right-4 sm:right-6 text-xl sm:text-2xl opacity-20 pointer-events-none select-none">
                🌷
              </div>
            </div>

            <motion.button
              className="mt-6 mx-auto flex items-center justify-center gap-1.5 px-4 py-2 rounded-full border border-[#DDA0B3]/40 bg-[#FFF8F0] hover:bg-[#F7DDE5]/40 transition-colors font-script text-[#A85F78] text-base sm:text-lg shadow-sm"
              style={{ fontFamily: "Caveat, cursive" }}
              onClick={() => setOpened(false)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>←</span>
              <span>close the letter</span>
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
