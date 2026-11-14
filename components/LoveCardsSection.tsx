"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { birthdayContent } from "@/data/birthday-content";

function FlipCard({ reason }: { reason: (typeof birthdayContent.loveReasons)[0] }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      className="relative cursor-pointer select-none"
      style={{ perspective: 1000, minHeight: 160 }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => setFlipped(!flipped)}
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.98 }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setFlipped(!flipped);
        }
      }}
      aria-label={`Love note: ${reason.front}`}
    >
      <motion.div
        className="relative w-full h-44 sm:h-40"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.65, ease: [0.25, 1, 0.5, 1] }}
      >
        <div
          className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center gap-2 p-4 text-center"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            background: "linear-gradient(135deg, #F7DDE5 0%, #FFFDF8 100%)",
            border: "1px solid #E9B7C6",
            boxShadow: "0 6px 22px rgba(168,95,120,0.1)",
          }}
        >
          <div className="absolute top-2.5 right-3 text-[#DDA0B3] text-sm opacity-60">📎</div>
          <span className="text-3xl">{reason.emoji}</span>
          <p
            className="font-script text-lg sm:text-xl text-[#A85F78]"
            style={{ fontFamily: "Caveat, cursive" }}
          >
            {reason.front}
          </p>
          <p className="text-[11px] text-[#DDA0B3] font-sans tracking-widest uppercase">tap to reveal</p>
        </div>

        <div
          className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center gap-2.5 p-5 text-center"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: "linear-gradient(135deg, #DDA0B3 0%, #A85F78 100%)",
            boxShadow: "0 8px 26px rgba(168,95,120,0.25)",
          }}
        >
          <span className="text-2xl">💗</span>
          <p
            className="font-script text-base sm:text-lg text-[#FFFDF8] leading-relaxed"
            style={{ fontFamily: "Caveat, cursive" }}
          >
            {reason.back}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function LoveCardsSection() {
  return (
    <section
      id="love-notes"
      className="relative py-20 sm:py-24 px-4 sm:px-8 overflow-hidden"
      style={{ background: "#FFFDF8" }}
    >
      <div className="torn-top w-full" />

      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #F7DDE5, transparent)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-56 h-56 rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #DDA0B3, transparent)" }}
        />
      </div>

      <motion.div
        className="text-center mb-12 sm:mb-14 relative z-10"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <span
          className="font-script text-4xl sm:text-5xl text-[#DDA0B3] block mb-2 sm:mb-3"
          style={{ fontFamily: "Caveat, cursive" }}
        >
          Little Things
        </span>
        <h2
          className="text-2xl sm:text-3xl md:text-4xl text-[#A85F78]"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          I Love About You
        </h2>
        <div className="flex items-center justify-center gap-3 mt-4">
          <div className="h-px w-12 bg-[#DDA0B3] opacity-50" />
          <span className="text-[#DDA0B3]">💗</span>
          <div className="h-px w-12 bg-[#DDA0B3] opacity-50" />
        </div>
        <p
          className="mt-3 text-[#8D756D] text-sm font-sans"
          style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.05rem" }}
        >
          Tap each card to reveal a little note
        </p>
      </motion.div>

      <div className="relative z-10 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        {birthdayContent.loveReasons.map((reason, i) => (
          <motion.div
            key={reason.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <FlipCard reason={reason} />
          </motion.div>
        ))}
      </div>

      <motion.p
        className="font-script text-xl sm:text-2xl text-[#DDA0B3] text-center mt-10 sm:mt-12"
        style={{ fontFamily: "Caveat, cursive" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        …and so many more reasons I could never fit on a card 🌸
      </motion.p>

      <div className="torn-bottom w-full" />
    </section>
  );
}
