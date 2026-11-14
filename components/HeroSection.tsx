"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { birthdayContent } from "@/data/birthday-content";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const scrollToNext = () => {
    const gallery = document.getElementById("gallery");
    if (gallery) gallery.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-20"
      style={{ background: "linear-gradient(180deg, #FFF8F0 0%, #F7DDE5 60%, #FFF8F0 100%)" }}
    >
      {/* Parallax background blobs */}
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-10%] left-[-5%] w-[55vw] h-[55vw] rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, #F7DDE5 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-10%] right-[-5%] w-[45vw] h-[45vw] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #DDA0B3 0%, transparent 70%)" }}
        />
      </motion.div>

      {/* Floating decorative elements */}
      {["🌸", "🌷", "✨", "🌺", "💗", "⭐"].map((icon, i) => (
        <motion.span
          key={i}
          className="absolute text-2xl pointer-events-none select-none"
          style={{
            left: `${[5, 88, 10, 85, 20, 75][i]}%`,
            top: `${[20, 15, 65, 70, 42, 38][i]}%`,
            opacity: 0.35,
          }}
          animate={{ y: [-10, 10, -10], rotate: [-6, 6, -6] }}
          transition={{ duration: 4 + i * 0.7, repeat: Infinity, ease: "easeInOut" }}
        >
          {icon}
        </motion.span>
      ))}

      <motion.div
        style={{ opacity }}
        className="relative z-10 flex flex-col items-center text-center gap-6 max-w-2xl"
      >
        {/* Scrapbook label sticker */}
        <motion.div
          className="px-5 py-1.5 rounded-full text-xs tracking-[0.2em] uppercase font-sans"
          style={{ background: "#F7DDE5", color: "#A85F78" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
        >
          A little world made just for you ✨
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl leading-tight"
          style={{ fontFamily: "Playfair Display, serif", color: "#A85F78" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
        >
          {birthdayContent.hero.heading}
          <br />
          <span
            className="italic"
            style={{ color: "#DDA0B3" }}
          >
            {birthdayContent.recipientName}
          </span>
        </motion.h1>

        {/* Decorative divider */}
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          <div className="h-px w-16 bg-[#DDA0B3] opacity-60" />
          <span className="text-[#DDA0B3] text-xl">🌸</span>
          <div className="h-px w-16 bg-[#DDA0B3] opacity-60" />
        </motion.div>

        {/* Subheading */}
        <motion.p
          className="text-lg sm:text-xl font-light text-[#8D756D]"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {birthdayContent.hero.subheading}
        </motion.p>

        {/* Photo placeholder card */}
        <motion.div
          className="polaroid mt-4"
          style={{ transform: "rotate(-2deg)", maxWidth: 220 }}
          initial={{ opacity: 0, y: 30, rotate: -8 }}
          animate={{ opacity: 1, y: 0, rotate: -2 }}
          transition={{ delay: 1, duration: 0.8, type: "spring" }}
          whileHover={{ scale: 1.05, rotate: 0 }}
        >
          {/* Washi tape decoration */}
          <div
            className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 rounded-sm opacity-80"
            style={{
              background: "repeating-linear-gradient(90deg, #F7DDE5 0px, #F7DDE5 10px, #E9B7C6 10px, #E9B7C6 20px)",
            }}
          />
          <div
            className="w-full bg-[#F7DDE5] flex items-center justify-center rounded-sm overflow-hidden"
            style={{ aspectRatio: "4/5", minHeight: 160 }}
          >
            <div className="text-center p-4">
              <div className="text-4xl mb-2">📷</div>
              <p className="font-script text-sm text-[#A85F78]" style={{ fontFamily: "Caveat, cursive" }}>
                Your photo here
              </p>
            </div>
          </div>
          <p className="polaroid-caption">My favorite person 💗</p>
        </motion.div>

        {/* Handwritten note */}
        <motion.p
          className="font-script text-xl text-[#DDA0B3]"
          style={{ fontFamily: "Caveat, cursive" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {birthdayContent.hero.handwrittenNote}
        </motion.p>

        {/* CTA button */}
        <motion.button
          onClick={scrollToNext}
          className="mt-2 group flex flex-col items-center gap-2 text-sm tracking-widest uppercase font-sans text-[#A85F78]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          whileHover={{ y: 4 }}
        >
          <span>{birthdayContent.hero.ctaLabel}</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            className="text-[#DDA0B3] text-xl"
          >
            ↓
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Birthday date badge */}
      <motion.div
        className="absolute bottom-8 right-6 font-script text-sm text-[#DDA0B3] opacity-70"
        style={{ fontFamily: "Caveat, cursive", rotate: "3deg" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.6 }}
      >
        {birthdayContent.birthdayDate} 🎂
      </motion.div>
    </section>
  );
}
