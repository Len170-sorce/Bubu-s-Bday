"use client";

import { motion } from "framer-motion";
import { birthdayContent } from "@/data/birthday-content";

interface FinalSectionProps {
  onReplay: () => void;
}

export default function FinalSection({ onReplay }: FinalSectionProps) {
  const handleReplay = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(onReplay, 600);
  };

  return (
    <section
      id="final"
      className="relative min-h-screen flex flex-col items-center justify-center py-24 px-4 sm:px-8 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #FFF8F0 0%, #F7DDE5 50%, #FFF8F0 100%)" }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {["🌸", "🌷", "✨", "💮", "💗", "⭐"].map((icon, i) => (
          <motion.span
            key={i}
            className="absolute text-3xl opacity-15"
            style={{
              left: `${[5, 88, 15, 78, 50, 30][i]}%`,
              top: `${[10, 20, 75, 65, 5, 90][i]}%`,
            }}
            animate={{ y: [-12, 12, -12], rotate: [-6, 6, -6] }}
            transition={{ duration: 4 + i * 0.8, repeat: Infinity, ease: "easeInOut" }}
          >
            {icon}
          </motion.span>
        ))}
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center gap-8">
        {/* Scrapbook label */}
        <motion.div
          className="px-5 py-1.5 rounded-full text-xs tracking-widest uppercase font-sans"
          style={{ background: "#F7DDE5", color: "#A85F78" }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring" }}
        >
          The Last Page 📖
        </motion.div>

        {/* Final photo placeholder */}
        <motion.div
          className="polaroid"
          style={{ transform: "rotate(1.5deg)", maxWidth: 220 }}
          initial={{ opacity: 0, y: 30, rotate: 6 }}
          whileInView={{ opacity: 1, y: 0, rotate: 1.5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, type: "spring" }}
          whileHover={{ scale: 1.05, rotate: 0 }}
        >
          <div
            className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 rounded-sm opacity-70"
            style={{
              background: "repeating-linear-gradient(90deg, #DDA0B3 0px, #DDA0B3 10px, #A85F78 10px, #A85F78 20px)",
            }}
          />
          <div
            className="w-full bg-[#F7DDE5] flex items-center justify-center rounded-sm"
            style={{ aspectRatio: "4/5", minHeight: 160 }}
          >
            <div className="text-center p-4">
              <div className="text-4xl mb-2">📷</div>
              <p
                className="font-script text-xs text-[#A85F78]"
                style={{ fontFamily: "Caveat, cursive" }}
              >
                Your photo here
              </p>
            </div>
          </div>
          <p className="polaroid-caption">{birthdayContent.finalPage.photoCaption}</p>
        </motion.div>

        {/* Closing heading */}
        <motion.h2
          className="text-3xl sm:text-4xl text-[#A85F78] leading-tight"
          style={{ fontFamily: "Playfair Display, serif" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Until More Memories…
        </motion.h2>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="h-px w-12 bg-[#DDA0B3] opacity-50" />
          <span className="text-[#DDA0B3]">🌸</span>
          <div className="h-px w-12 bg-[#DDA0B3] opacity-50" />
        </div>

        {/* Closing message */}
        <motion.p
          className="text-[#8D756D] leading-8 max-w-md"
          style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.1rem" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {birthdayContent.finalPage.closingMessage}
        </motion.p>

        {/* Handwritten closing note */}
        <motion.p
          className="font-script text-2xl text-[#DDA0B3]"
          style={{ fontFamily: "Caveat, cursive" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {birthdayContent.finalPage.handwrittenNote}
        </motion.p>

        {/* Decorative flowers */}
        <motion.div
          className="text-4xl"
          animate={{ rotate: [-5, 5, -5] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          🌸🌷🌸
        </motion.div>

        {/* Replay button */}
        <motion.button
          onClick={handleReplay}
          className="relative overflow-hidden px-10 py-4 rounded-full text-[#FFFDF8] font-sans text-sm tracking-widest uppercase mt-4"
          style={{
            background: "linear-gradient(135deg, #DDA0B3 0%, #A85F78 100%)",
            boxShadow: "0 8px 32px rgba(168,95,120,0.3)",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          whileHover={{ scale: 1.05, boxShadow: "0 12px 40px rgba(168,95,120,0.45)" }}
          whileTap={{ scale: 0.97 }}
        >
          <span
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 50%, transparent 100%)",
              backgroundSize: "200% 100%",
              animation: "shimmer 2.5s linear infinite",
            }}
          />
          <span className="relative">{birthdayContent.finalPage.replayLabel}</span>
        </motion.button>

        {/* Birthday date */}
        <motion.p
          className="font-script text-sm text-[#DDA0B3] opacity-60"
          style={{ fontFamily: "Caveat, cursive" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
        >
          {birthdayContent.birthdayDate} 🎂
        </motion.p>
      </div>
    </section>
  );
}
