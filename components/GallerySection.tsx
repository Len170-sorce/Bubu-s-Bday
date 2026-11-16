"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { birthdayContent } from "@/data/birthday-content";

interface Photo {
  id: number;
  src: string;
  caption: string;
  date: string;
  rotation: number;
}

function PhotoCard({ photo, onClick }: { photo: Photo; onClick: () => void }) {
  return (
    <motion.div
      className="polaroid w-full"
      style={{ transform: `rotate(${photo.rotation}deg)` }}
      whileHover={{
        scale: 1.05,
        rotate: 0,
        zIndex: 20,
        boxShadow: "0 18px 45px rgba(168,95,120,0.2)",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div
        className="absolute -top-3 left-1/2 -translate-x-1/2 h-5 rounded-sm opacity-75 pointer-events-none"
        style={{
          width: `${48 + Math.abs(photo.rotation) * 4}px`,
          background:
            photo.id % 2 === 0
              ? "repeating-linear-gradient(90deg, #F7DDE5 0px, #F7DDE5 10px, #E9B7C6 10px, #E9B7C6 20px)"
              : "repeating-linear-gradient(90deg, #F5D5C8 0px, #F5D5C8 10px, #DDA0B3 10px, #DDA0B3 20px)",
        }}
      />

      <div
        className="w-full bg-[#F7DDE5] relative flex items-center justify-center overflow-hidden rounded-sm"
        style={{ aspectRatio: "4/5", minHeight: 180 }}
      >
        <Image
          src={photo.src}
          alt={photo.caption}
          fill
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 280px"
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="polaroid-caption px-1">
        <p className="text-sm font-medium">{photo.caption}</p>
        <p className="text-xs text-[#DDA0B3] mt-0.5">{photo.date}</p>
      </div>
    </motion.div>
  );
}

export default function GallerySection() {
  const [selected, setSelected] = useState<Photo | null>(null);

  return (
    <section
      id="gallery"
      className="relative py-20 sm:py-24 px-4 sm:px-8 overflow-hidden"
      style={{ background: "#FFFDF8" }}
    >
      <div className="torn-top w-full" />

      <div className="absolute inset-0 pointer-events-none opacity-20" aria-hidden="true">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #F7DDE5 0%, transparent 50%), radial-gradient(circle at 80% 20%, #F5D5C8 0%, transparent 40%)",
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
        <span
          className="font-script text-4xl sm:text-5xl text-[#DDA0B3] block mb-2 sm:mb-3"
          style={{ fontFamily: "Caveat, cursive" }}
        >
          Our Little Collection
        </span>
        <h2
          className="text-2xl sm:text-3xl md:text-4xl text-[#A85F78]"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          of Memories
        </h2>
        <div className="flex items-center justify-center gap-3 mt-4">
          <div className="h-px w-12 bg-[#DDA0B3] opacity-50" />
          <span className="text-[#DDA0B3]">🌸</span>
          <div className="h-px w-12 bg-[#DDA0B3] opacity-50" />
        </div>
        <p
          className="mt-3 text-[#8D756D] text-sm font-sans max-w-xs mx-auto"
          style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.05rem" }}
        >
          Click any photo to see it up close
        </p>
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 place-items-center">
          {birthdayContent.gallery.map((photo, index) => (
            <motion.div
              key={photo.id}
              className="w-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: index * 0.08,
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <PhotoCard photo={photo} onClick={() => setSelected(photo)} />
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
          Every picture is a little piece of our story 🌷
        </motion.p>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="polaroid max-w-[320px] sm:max-w-sm w-full relative"
              style={{ transform: `rotate(${selected.rotation}deg)` }}
              initial={{ scale: 0.85, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.88, opacity: 0, y: 10 }}
              transition={{
                duration: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-3 -right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center text-[#FFFDF8] shadow-md transition-transform hover:scale-110 active:scale-95"
                style={{ background: "#A85F78" }}
                onClick={() => setSelected(null)}
                aria-label="Close photo preview"
              >
                <X size={15} />
              </button>

              <div
                className="w-full bg-[#F7DDE5] relative flex items-center justify-center rounded-sm overflow-hidden"
                style={{ aspectRatio: "4/5", minHeight: 260 }}
              >
                <div className="text-center p-6">
                  <div className="text-6xl mb-3">📷</div>
                  <p
                    className="font-script text-sm text-[#A85F78]"
                    style={{ fontFamily: "Caveat, cursive" }}
                  >
                    Photo {selected.id}
                  </p>
                </div>
              </div>

              <div className="polaroid-caption mt-3">
                <p className="text-base font-medium">{selected.caption}</p>
                <p className="text-sm text-[#DDA0B3] mt-1">{selected.date}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="torn-bottom w-full" />
    </section>
  );
}
