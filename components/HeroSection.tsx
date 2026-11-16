"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { birthdayContent } from "@/data/birthday-content";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const scrollToNext = () => {
    const gallery = document.getElementById("gallery");
    if (gallery) {
      gallery.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-20"
      style={{ background: "linear-gradient(180deg, #FFF8F0 0%, #F7DDE5 60%, #FFF8F0 100%)" }}
    >
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-[-10%] left-[-5%] w-[55vw] h-[55vw] rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, #F7DDE5 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-10%] right-[-5%] w-[45vw] h-[45vw] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #DDA0B3 0%, transparent 70%)" }}
        />
      </motion.div>

      {["🌸", "🌷", "✨", "🌺", "💗", "⭐"].map((icon, i) => (
        <motion.span
          key={i}
          className="absolute text-2xl pointer-events-none select-none"
          style={{
            left: `${[5, 88, 10, 85, 20, 75][i]}%`,
            top: `${[20, 15, 65, 70, 42, 38][i]}%`,
            opacity: 0.35,
          }}
          animate={{ y: [-8, 8, -8], rotate: [-4, 4, -4] }}
          transition={{ duration: 4.5 + i * 0.6, repeat: Infinity, ease: "easeInOut" }}
        >
          {icon}
        </motion.span>
      ))}

      <motion.div
        style={{ opacity }}
        className="relative z-10 flex flex-col items-center text-center gap-6 max-w-2xl"
      >
        <motion.div
          className="px-5 py-1.5 rounded-full text-xs tracking-[0.2em] uppercase font-sans shadow-sm"
          style={{ background: "#F7DDE5", color: "#A85F78" }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          A little world made just for you ✨
        </motion.div>

        <motion.h1
          className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl leading-tight"
          style={{ fontFamily: "Playfair Display, serif", color: "#A85F78" }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {birthdayContent.hero.heading}
          <br />
          <span className="italic" style={{ color: "#DDA0B3" }}>
            {birthdayContent.recipientName}
          </span>
        </motion.h1>

        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="h-px w-16 bg-[#DDA0B3] opacity-60" />
          <span className="text-[#DDA0B3] text-xl">🌸</span>
          <div className="h-px w-16 bg-[#DDA0B3] opacity-60" />
        </motion.div>

        <motion.p
          className="text-lg sm:text-xl font-light text-[#8D756D]"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {birthdayContent.hero.subheading}
        </motion.p>

        <motion.div
          className="polaroid mt-4 w-[250px] sm:w-[290px] md:w-[320px] max-w-[90vw]"
          style={{ transform: "rotate(-2deg)" }}
          initial={{ opacity: 0, y: 24, rotate: -6 }}
          animate={{ opacity: 1, y: 0, rotate: -2 }}
          transition={{ delay: 0.8, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.04, rotate: 0 }}
        >
          <div
            className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-5 sm:h-6 rounded-sm opacity-80 z-10 pointer-events-none"
            style={{
              background: "repeating-linear-gradient(90deg, #F7DDE5 0px, #F7DDE5 10px, #E9B7C6 10px, #E9B7C6 20px)",
            }}
          />
          <div
            className="w-full bg-[#F7DDE5] relative flex items-center justify-center rounded-sm overflow-hidden"
            style={{ aspectRatio: "4/5", minHeight: 240 }}
          >
            <Image
              src={birthdayContent.hero.photoSrc || "/photos/1.jpg"}
              alt={birthdayContent.recipientName}
              fill
              sizes="(max-width: 640px) 250px, 320px"
              className="object-cover transition-transform duration-500 hover:scale-105"
              priority
            />
          </div>
          <p className="polaroid-caption text-base sm:text-lg mt-2.5">
            {birthdayContent.hero.photoCaption || "My favorite person 💗"}
          </p>
        </motion.div>

        <motion.p
          className="font-script text-xl sm:text-2xl text-[#DDA0B3]"
          style={{ fontFamily: "Caveat, cursive" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {birthdayContent.hero.handwrittenNote}
        </motion.p>

        <motion.button
          onClick={scrollToNext}
          className="mt-2 group flex flex-col items-center gap-1.5 text-xs sm:text-sm tracking-widest uppercase font-sans text-[#A85F78]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.6 }}
          whileHover={{ y: 3 }}
        >
          <span>{birthdayContent.hero.ctaLabel}</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="text-[#DDA0B3] text-lg"
          >
            ↓
          </motion.div>
        </motion.button>
      </motion.div>

      <motion.div
        className="absolute bottom-4 sm:bottom-5 right-4 sm:right-6 font-script text-sm text-[#DDA0B3] opacity-70"
        style={{ fontFamily: "Caveat, cursive", rotate: "3deg" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.3 }}
      >
        {birthdayContent.birthdayDate} 🎂
      </motion.div>
    </section>
  );
}
