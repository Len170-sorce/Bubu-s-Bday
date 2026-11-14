"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { birthdayContent } from "@/data/birthday-content";

function MobileTimelineEntry({
  entry,
  index,
}: {
  entry: (typeof birthdayContent.timeline)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="relative pl-8 mb-10">
      <motion.div
        className="absolute left-0 top-6 w-8 h-8 rounded-full border-2 border-[#DDA0B3] bg-[#FFF8F0] flex items-center justify-center"
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ type: "spring", delay: 0.1 }}
      >
        <div className="w-2.5 h-2.5 rounded-full bg-[#DDA0B3]" />
      </motion.div>
      <motion.div
        className="glass-card rounded-2xl p-5"
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="text-xl">{entry.emoji}</span>
        <span
          className="font-script text-sm text-[#DDA0B3] block mt-1"
          style={{ fontFamily: "Caveat, cursive" }}
        >
          {entry.date}
        </span>
        <h3
          className="text-lg text-[#A85F78] mt-1 mb-2"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          {entry.title}
        </h3>
        <p
          className="text-[#8D756D] text-sm leading-relaxed"
          style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1rem" }}
        >
          {entry.description}
        </p>
      </motion.div>
    </div>
  );
}

function DesktopTimelineEntry({
  entry,
  index,
}: {
  entry: (typeof birthdayContent.timeline)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex gap-8 items-start ${isLeft ? "flex-row" : "flex-row-reverse"} mb-14`}
    >
      {/* Content card */}
      <motion.div
        className="flex-1 glass-card rounded-2xl p-6 relative"
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
      >
        {/* Washi tape */}
        <div
          className="absolute -top-2.5 left-6 h-5 w-14 rounded-sm opacity-70"
          style={{
            background:
              "repeating-linear-gradient(90deg, #F7DDE5 0px, #F7DDE5 8px, #E9B7C6 8px, #E9B7C6 16px)",
            rotate: "-1deg",
          }}
        />
        <div className="flex items-start gap-3 flex-wrap">
          <span className="text-2xl">{entry.emoji}</span>
          <div className="flex-1 min-w-0">
            <span
              className="font-script text-sm text-[#DDA0B3] block mb-0.5"
              style={{ fontFamily: "Caveat, cursive" }}
            >
              {entry.date}
            </span>
            <h3
              className="text-xl text-[#A85F78] mb-2 leading-snug"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {entry.title}
            </h3>
            <p
              className="text-[#8D756D] leading-relaxed"
              style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.05rem" }}
            >
              {entry.description}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Center dot */}
      <motion.div
        className="relative z-10 flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#DDA0B3] bg-[#FFF8F0] mt-6"
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
      >
        <div className="w-3 h-3 rounded-full bg-[#DDA0B3]" />
      </motion.div>

      {/* Spacer */}
      <div className="flex-1" />
    </div>
  );
}

export default function TimelineSection() {
  return (
    <section
      id="timeline"
      className="relative py-24 px-4 sm:px-8 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #FFF8F0 0%, #F7DDE5 50%, #FFF8F0 100%)" }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {(["🌸", "🌷", "✨"] as const).map((icon, i) => (
          <motion.span
            key={i}
            className="absolute text-3xl opacity-10"
            style={{ left: `${[5, 90, 50][i]}%`, top: `${[10, 30, 70][i]}%` }}
            animate={{ y: [-12, 12, -12] }}
            transition={{ duration: 5 + i * 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            {icon}
          </motion.span>
        ))}
      </div>

      {/* Section header */}
      <motion.div
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span
          className="font-script text-5xl text-[#DDA0B3] block mb-3"
          style={{ fontFamily: "Caveat, cursive" }}
        >
          Little Moments
        </span>
        <h2
          className="text-3xl sm:text-4xl text-[#A85F78]"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          That Became Special
        </h2>
        <div className="flex items-center justify-center gap-3 mt-4">
          <div className="h-px w-12 bg-[#DDA0B3] opacity-50" />
          <span className="text-[#DDA0B3]">🌷</span>
          <div className="h-px w-12 bg-[#DDA0B3] opacity-50" />
        </div>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-2xl mx-auto z-10">
        {/* Vertical line */}
        <div
          className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px opacity-30"
          style={{
            background: "linear-gradient(180deg, transparent, #DDA0B3 10%, #DDA0B3 90%, transparent)",
          }}
        />

        {/* Mobile layout */}
        <div className="sm:hidden">
          {birthdayContent.timeline.map((entry, i) => (
            <MobileTimelineEntry key={entry.id} entry={entry} index={i} />
          ))}
        </div>

        {/* Desktop layout */}
        <div className="hidden sm:block">
          {birthdayContent.timeline.map((entry, index) => (
            <DesktopTimelineEntry key={entry.id} entry={entry} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
