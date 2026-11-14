"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause } from "lucide-react";

interface MusicPlayerProps {
  src: string;
  title: string;
}

export default function MusicPlayer({ src, title }: MusicPlayerProps) {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(src);
    audioRef.current.loop = true;
    return () => {
      audioRef.current?.pause();
    };
  }, [src]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  return (
    <motion.div
      className="fixed bottom-6 left-4 z-50 flex items-center gap-2 select-none"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="flex items-center gap-2 px-3 py-2 rounded-full border border-[#E9B7C6] shadow-sm"
        style={{
          background: "rgba(255,253,248,0.92)",
          boxShadow: "0 4px 20px rgba(168,95,120,0.12)",
          backdropFilter: "blur(10px)",
        }}
      >
        <button
          onClick={togglePlay}
          className="w-7 h-7 rounded-full flex items-center justify-center transition-transform hover:scale-105 active:scale-95 focus:outline-none"
          style={{ background: "#A85F78" }}
          aria-label={playing ? "Pause music" : "Play music"}
        >
          {playing ? (
            <Pause size={12} color="#FFFDF8" />
          ) : (
            <Play size={12} color="#FFFDF8" className="translate-x-[1px]" />
          )}
        </button>

        <div className="flex items-center gap-1.5 overflow-hidden pr-1">
          {playing && (
            <div className="flex items-end gap-0.5 h-3.5">
              {[1, 1.4, 0.8, 1.2].map((delay, i) => (
                <div
                  key={i}
                  className="music-bar"
                  style={{
                    width: 2.5,
                    height: 12,
                    animationDelay: `${delay * 0.2}s`,
                    animationDuration: `${0.65 + delay * 0.15}s`,
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
        </div>
      </div>
    </motion.div>
  );
}
