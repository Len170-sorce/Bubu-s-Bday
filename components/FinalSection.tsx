"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { birthdayContent } from "@/data/birthday-content";

interface FinalSectionProps {
  onReplay: () => void;
}

export default function FinalSection({ onReplay }: FinalSectionProps) {
  const handleReplay = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(onReplay, 650);
  };

  return (
    <section
      id="final"
      className="relative min-h-screen flex flex-col items-center justify-center py-20 sm:py-24 px-4 sm:px-8 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #FFF8F0 0%, #F7DDE5 50%, #FFF8F0 100%)" }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {["🌸", "🌷", "✨", "💮", "💗", "⭐"].map((icon, i) => (
          <motion.span
            key={i}
            className="absolute text-3xl opacity-15 select-none"
            style={{
              left: `${[5, 88, 15, 78, 50, 30][i]}%`,
              top: `${[10, 20, 75, 65, 5, 90][i]}%`,
            }}
            animate={{ y: [-10, 10, -10], rotate: [-4, 4, -4] }}
            transition={{ duration: 4.5 + i * 0.7, repeat: Infinity, ease: "easeInOut" }}
          >
            {icon}
          </motion.span>
        ))}
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center gap-7 sm:gap-8">
        <motion.div
          className="px-5 py-1.5 rounded-full text-xs tracking-widest uppercase font-sans shadow-sm"
          style={{ background: "#F7DDE5", color: "#A85F78" }}
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          The Last Page 📖
        </motion.div>

        <motion.div
          className="polaroid w-[260px] sm:w-[300px] max-w-[85vw]"
          style={{ transform: "rotate(1.5deg)" }}
          initial={{ opacity: 0, y: 24, rotate: 4 }}
          whileInView={{ opacity: 1, y: 0, rotate: 1.5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.05, rotate: 0 }}
        >
          <div
            className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 rounded-sm opacity-70 pointer-events-none"
            style={{
              background: "repeating-linear-gradient(90deg, #DDA0B3 0px, #DDA0B3 10px, #A85F78 10px, #A85F78 20px)",
            }}
          />
          <div
            className="relative w-full bg-[#F7DDE5] rounded-sm overflow-hidden"
            style={{ aspectRatio: "4/5", minHeight: 160 }}
          >
            <Image
              src={birthdayContent.finalPage.photoSrc}
              alt={birthdayContent.finalPage.photoCaption}
              fill
              sizes="(max-width: 640px) 85vw, 300px"
              className="object-cover"
            />
          </div>
          <p className="polaroid-caption">{birthdayContent.finalPage.photoCaption}</p>
        </motion.div>

        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl text-[#A85F78] leading-tight font-medium"
          style={{ fontFamily: "Playfair Display, serif" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Until More Memories…
        </motion.h2>

        <div className="flex items-center gap-3">
          <div className="h-px w-12 bg-[#DDA0B3] opacity-50" />
          <span className="text-[#DDA0B3]">🌸</span>
          <div className="h-px w-12 bg-[#DDA0B3] opacity-50" />
        </div>

        <motion.p
          className="text-[#8D756D] leading-8 max-w-md text-base"
          style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.12rem" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {birthdayContent.finalPage.closingMessage}
        </motion.p>

        <motion.p
          className="font-script text-2xl sm:text-3xl text-[#DDA0B3]"
          style={{ fontFamily: "Caveat, cursive" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {birthdayContent.finalPage.handwrittenNote}
        </motion.p>

        <motion.div
          className="text-3xl sm:text-4xl select-none"
          animate={{ rotate: [-4, 4, -4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          🌸🌷🌸
        </motion.div>

        <motion.button
          onClick={handleReplay}
          className="relative overflow-hidden px-9 py-3.5 rounded-full text-[#FFFDF8] font-sans text-xs sm:text-sm tracking-widest uppercase mt-2 shadow-md"
          style={{
            background: "linear-gradient(135deg, #DDA0B3 0%, #A85F78 100%)",
            boxShadow: "0 8px 30px rgba(168,95,120,0.3)",
          }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.04, boxShadow: "0 12px 38px rgba(168,95,120,0.42)" }}
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
          <span className="relative">{birthdayContent.finalPage.replayLabel}</span>
        </motion.button>

        <motion.p
          className="font-script text-sm text-[#DDA0B3] opacity-65"
          style={{ fontFamily: "Caveat, cursive" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.65 }}
          viewport={{ once: true }}
          transition={{ delay: 0.65 }}
        >
          {birthdayContent.birthdayDate} 🎂
        </motion.p>
      </div>
    </section>
  );
}
