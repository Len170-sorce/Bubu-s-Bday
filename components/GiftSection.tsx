"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { birthdayContent } from "@/data/birthday-content";

interface Particle {
  id: number;
  x: number;
  drift: number;
  rotation: number;
  scale: number;
  shape: string;
}

function Confetti({ active }: { active: boolean }) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const shapes = ["🌸", "💗", "✨", "🌷", "⭐", "💮"];

  useEffect(() => {
    if (!active) return;
    setParticles(
      Array.from({ length: 36 }, (_, i) => ({
        id: i,
        x: 10 + Math.random() * 80,
        drift: (Math.random() - 0.5) * 160,
        rotation: Math.random() * 360,
        scale: 0.7 + Math.random() * 0.7,
        shape: shapes[Math.floor(Math.random() * shapes.length)],
      }))
    );
    const timer = setTimeout(() => setParticles([]), 4200);
    return () => clearTimeout(timer);
  }, [active]);

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute text-2xl select-none"
          style={{ left: `${p.x}%`, top: "35%" }}
          initial={{ y: 0, opacity: 1, scale: p.scale, rotate: p.rotation }}
          animate={{
            y: ["0vh", "-18vh", "65vh"],
            x: [0, p.drift * 0.5, p.drift],
            opacity: [1, 1, 0],
            rotate: p.rotation + 480,
          }}
          transition={{
            duration: 3 + Math.random() * 1.2,
            delay: Math.random() * 0.35,
            ease: [0.16, 1, 0.3, 1],
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
    setTimeout(() => setOpened(true), 350);
  };

  return (
    <section
      id="gift"
      className="relative py-20 sm:py-24 px-4 sm:px-8 overflow-hidden"
      style={{ background: "#FFFDF8" }}
    >
      <div className="torn-top w-full" />

      <Confetti active={showConfetti} />

      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: "radial-gradient(circle at 50% 50%, #F7DDE5 0%, transparent 60%)",
          }}
        />
      </div>

      <motion.div
        className="text-center mb-12 sm:mb-14 relative z-10"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2
          className="text-2xl sm:text-3xl md:text-4xl text-[#A85F78]"
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
            <motion.div
              key="box"
              className="cursor-pointer text-center select-none"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              onClick={handleOpen}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleOpen();
                }
              }}
              aria-label="Open your surprise gift"
            >
              <svg
                width="200"
                height="200"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto drop-shadow-xl"
              >
                <rect x="20" y="90" width="160" height="90" rx="4" fill="#F7DDE5" />
                <rect x="20" y="90" width="160" height="90" rx="4" stroke="#DDA0B3" strokeWidth="2" />

                <rect x="12" y="68" width="176" height="30" rx="4" fill="#DDA0B3" />
                <rect x="12" y="68" width="176" height="30" rx="4" stroke="#A85F78" strokeWidth="1.5" />

                <rect x="90" y="68" width="20" height="112" fill="#A85F78" opacity="0.6" />
                <rect x="12" y="78" width="176" height="10" fill="#A85F78" opacity="0.6" />

                <ellipse cx="80" cy="68" rx="28" ry="14" fill="#A85F78" transform="rotate(-20 80 68)" />
                <ellipse cx="120" cy="68" rx="28" ry="14" fill="#A85F78" transform="rotate(20 120 68)" />
                <circle cx="100" cy="68" r="12" fill="#DDA0B3" />

                <text x="100" y="73" textAnchor="middle" fontSize="12" fill="#FFFDF8">★</text>

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
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              >
                Tap to open your gift! 🎁
              </motion.p>
            </motion.div>
          ) : (
            <motion.div
              key="message"
              className="text-center relative w-full"
              initial={{ opacity: 0, scale: 0.88, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {["🌸", "💗", "✨", "🌷", "⭐", "💮"].map((icon, i) => (
                <motion.span
                  key={i}
                  className="absolute text-2xl select-none pointer-events-none"
                  style={{
                    left: `${50 + 48 * Math.cos((i * Math.PI * 2) / 6)}%`,
                    top: `${50 + 48 * Math.sin((i * Math.PI * 2) / 6)}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1, y: [-4, 4, -4] }}
                  transition={{
                    delay: i * 0.08,
                    duration: 2.8,
                    y: { repeat: Infinity, duration: 2 + i * 0.3, ease: "easeInOut" },
                  }}
                >
                  {icon}
                </motion.span>
              ))}

              <div
                className="relative glass-card rounded-3xl p-6 sm:p-10 mx-auto max-w-[340px] sm:max-w-md w-full shadow-xl"
              >
                <motion.div
                  className="text-5xl mb-4 select-none"
                  animate={{ scale: [1, 1.12, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                >
                  🎉
                </motion.div>
                <h3
                  className="text-2xl sm:text-3xl text-[#A85F78] mb-4 leading-tight font-medium"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Happy Birthday,
                  <br />
                  <span className="italic">My Love!</span>
                </h3>
                {birthdayContent.gift.revealMessage.split("\n").map((line, i) => (
                  <p
                    key={i}
                    className="text-[#8D756D] leading-relaxed mb-2 text-base"
                    style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.08rem" }}
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
