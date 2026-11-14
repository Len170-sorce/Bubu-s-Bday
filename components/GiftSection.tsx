"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { birthdayContent } from "@/data/birthday-content";

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  rotation: number;
  scale: number;
  shape: string;
}

function Confetti({ active }: { active: boolean }) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const colors = ["#F7DDE5", "#DDA0B3", "#A85F78", "#F5D5C8", "#E9B7C6", "#FFFDF8"];
  const shapes = ["🌸", "💗", "✨", "🌷", "⭐", "💮"];

  useEffect(() => {
    if (!active) return;
    setParticles(
      Array.from({ length: 40 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: -10,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        scale: 0.6 + Math.random() * 0.8,
        shape: shapes[Math.floor(Math.random() * shapes.length)],
      }))
    );
    const timer = setTimeout(() => setParticles([]), 4000);
    return () => clearTimeout(timer);
  }, [active]);

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute text-2xl"
          style={{ left: `${p.x}%`, top: `${p.y}%` }}
          initial={{ y: -40, opacity: 1, rotate: p.rotation, scale: p.scale }}
          animate={{
            y: "110vh",
            opacity: [1, 1, 0],
            rotate: p.rotation + 360 + Math.random() * 360,
            x: (Math.random() - 0.5) * 200,
          }}
          transition={{
            duration: 2.5 + Math.random() * 1.5,
            delay: Math.random() * 0.8,
            ease: "easeIn",
          }}
        >
          {p.shape}
        </motion.div>
      ))}
    </div>
  );
}

export default function GiftSection() {
  const [opened, setOpened] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleOpen = () => {
    setShowConfetti(true);
    setTimeout(() => setOpened(true), 400);
  };

  return (
    <section
      id="gift"
      className="relative py-24 px-4 sm:px-8 overflow-hidden"
      style={{ background: "#FFFDF8" }}
    >
      <div className="torn-top w-full" />

      <Confetti active={showConfetti} />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, #F7DDE5 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Section header */}
      <motion.div
        className="text-center mb-14 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2
          className="text-3xl sm:text-4xl text-[#A85F78]"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          {birthdayContent.gift.heading}
        </h2>
        <div className="flex items-center justify-center gap-3 mt-4">
          <div className="h-px w-12 bg-[#DDA0B3] opacity-50" />
          <span className="text-[#DDA0B3]">🎁</span>
          <div className="h-px w-12 bg-[#DDA0B3] opacity-50" />
        </div>
      </motion.div>

      <div className="relative z-10 max-w-sm mx-auto flex flex-col items-center gap-8">
        <AnimatePresence mode="wait">
          {!opened ? (
            /* Gift box */
            <motion.div
              key="box"
              className="cursor-pointer text-center"
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.8 }}
              onClick={handleOpen}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* SVG Gift box */}
              <svg
                width="200"
                height="200"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto drop-shadow-xl"
              >
                {/* Box body */}
                <rect x="20" y="90" width="160" height="90" rx="4" fill="#F7DDE5" />
                <rect x="20" y="90" width="160" height="90" rx="4" stroke="#DDA0B3" strokeWidth="2" />

                {/* Box lid */}
                <rect x="12" y="68" width="176" height="30" rx="4" fill="#DDA0B3" />
                <rect x="12" y="68" width="176" height="30" rx="4" stroke="#A85F78" strokeWidth="1.5" />

                {/* Ribbon vertical */}
                <rect x="90" y="68" width="20" height="112" fill="#A85F78" opacity="0.6" />

                {/* Ribbon horizontal */}
                <rect x="12" y="78" width="176" height="10" fill="#A85F78" opacity="0.6" />

                {/* Bow */}
                <ellipse cx="80" cy="68" rx="28" ry="14" fill="#A85F78" transform="rotate(-20 80 68)" />
                <ellipse cx="120" cy="68" rx="28" ry="14" fill="#A85F78" transform="rotate(20 120 68)" />
                <circle cx="100" cy="68" r="12" fill="#DDA0B3" />

                {/* Star on ribbon */}
                <text x="100" y="73" textAnchor="middle" fontSize="12" fill="#FFFDF8">★</text>

                {/* Dots pattern on box */}
                {[40, 70, 100, 130, 160].map((x, i) =>
                  [110, 130, 150].map((y, j) => (
                    <circle key={`${i}-${j}`} cx={x} cy={y} r="2.5" fill="#E9B7C6" opacity="0.5" />
                  ))
                )}
              </svg>

              <motion.p
                className="font-script text-xl text-[#DDA0B3] mt-4"
                style={{ fontFamily: "Caveat, cursive" }}
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Tap to open your gift! 🎁
              </motion.p>
            </motion.div>
          ) : (
            /* Revealed message */
            <motion.div
              key="message"
              className="text-center relative"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", damping: 15, stiffness: 100 }}
            >
              {/* Floating emojis ring */}
              {["🌸", "💗", "✨", "🌷", "⭐", "💮"].map((icon, i) => (
                <motion.span
                  key={i}
                  className="absolute text-2xl"
                  style={{
                    left: `${50 + 48 * Math.cos((i * Math.PI * 2) / 6)}%`,
                    top: `${50 + 48 * Math.sin((i * Math.PI * 2) / 6)}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1, y: [-5, 5, -5] }}
                  transition={{
                    delay: i * 0.1,
                    duration: 3,
                    y: { repeat: Infinity, duration: 2 + i * 0.3 },
                  }}
                >
                  {icon}
                </motion.span>
              ))}

              <div
                className="relative glass-card rounded-3xl p-8 sm:p-10 mx-auto"
                style={{ maxWidth: 320 }}
              >
                <motion.div
                  className="text-5xl mb-4"
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  🎉
                </motion.div>
                <h3
                  className="text-2xl sm:text-3xl text-[#A85F78] mb-4 leading-tight"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Happy Birthday,
                  <br />
                  <span className="italic">My Love!</span>
                </h3>
                {birthdayContent.gift.revealMessage.split("\n").map((line, i) => (
                  <p
                    key={i}
                    className="text-[#8D756D] leading-relaxed mb-2"
                    style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.05rem" }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="torn-bottom w-full" />
    </section>
  );
}
