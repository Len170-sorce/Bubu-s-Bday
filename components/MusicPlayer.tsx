"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Music } from "lucide-react";

interface MusicPlayerProps {
  src: string;
  title: string;
}

export default function MusicPlayer({ src, title }: MusicPlayerProps) {
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(src);
    audioRef.current.loop = true;
    return () => {
      audioRef.current?.pause();
    };
  }, [src]);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {
        // Auto-play blocked — user must interact first
      });
    }
    setPlaying(!playing);
  };

  return (
    <motion.div
      className="fixed bottom-6 left-4 z-50 flex items-center gap-2"
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.5, duration: 0.6 }}
    >
      {/* Player pill */}
      <div
        className="flex items-center gap-2 px-3 py-2 rounded-full"
        style={{
          background: "rgba(255,253,248,0.9)",
          border: "1px solid #E9B7C6",
          boxShadow: "0 4px 20px rgba(168,95,120,0.15)",
          backdropFilter: "blur(8px)",
        }}
      >
        {/* Play/pause button */}
        <button
          onClick={toggle}
          className="w-7 h-7 rounded-full flex items-center justify-center transition-all"
          style={{ background: "#A85F78" }}
          aria-label={playing ? "Pause music" : "Play music"}
        >
          {playing ? (
            <Pause size={12} color="#FFFDF8" />
          ) : (
            <Play size={12} color="#FFFDF8" />
          )}
        </button>

        {/* Song title */}
        <AnimatePresence>
          {visible && (
            <motion.div
              className="flex items-center gap-1.5 overflow-hidden"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "auto", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
            >
              {/* Music bars animation */}
              {playing && (
                <div className="flex items-end gap-0.5 h-4">
                  {[1, 1.4, 0.8, 1.2].map((delay, i) => (
                    <div
                      key={i}
                      className="music-bar"
                      style={{
                        width: 3,
                        height: 12,
                        animationDelay: `${delay * 0.2}s`,
                        animationDuration: `${0.6 + delay * 0.15}s`,
                      }}
                    />
                  ))}
                </div>
              )}
              <span
                className="text-xs text-[#A85F78] whitespace-nowrap"
                style={{ fontFamily: "Caveat, cursive" }}
              >
                {title}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
