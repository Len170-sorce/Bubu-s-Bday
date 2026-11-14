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

function PhotoPlaceholder({ photo, onClick }: { photo: Photo; onClick: () => void }) {
  return (
    <motion.div
      className="polaroid"
      style={{ transform: `rotate(${photo.rotation}deg)`, cursor: "pointer" }}
      whileHover={{
        scale: 1.07,
        rotate: 0,
        zIndex: 20,
        boxShadow: "0 20px 60px rgba(168,95,120,0.22)",
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      layout
    >
      {/* Washi tape decoration */}
      <div
        className="absolute -top-3 left-1/2 -translate-x-1/2 h-5 rounded-sm opacity-75"
        style={{
          width: `${48 + Math.abs(photo.rotation) * 4}px`,
          background:
            photo.id % 2 === 0
              ? "repeating-linear-gradient(90deg, #F7DDE5 0px, #F7DDE5 10px, #E9B7C6 10px, #E9B7C6 20px)"
              : "repeating-linear-gradient(90deg, #F5D5C8 0px, #F5D5C8 10px, #DDA0B3 10px, #DDA0B3 20px)",
        }}
      />

      {/* Photo area */}
      <div
        className="w-full bg-[#F7DDE5] relative flex items-center justify-center overflow-hidden rounded-sm"
        style={{ aspectRatio: "4/5", minHeight: 160, maxHeight: 240 }}
      >
        {/* Placeholder box — replace Image component when real photos are added */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-3">
          <div className="text-5xl">📷</div>
          <p
            className="font-script text-xs text-[#A85F78] text-center leading-tight"
            style={{ fontFamily: "Caveat, cursive" }}
          >
            Photo {photo.id}
          </p>
        </div>
        {/* Uncomment the Image below and remove the placeholder div above once you add real photos */}
        {/*
        <Image
          src={photo.src}
          alt={photo.caption}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 45vw, 220px"
        />
        */}
      </div>

      {/* Caption */}
      <div className="polaroid-caption px-1">
        <p className="text-sm">{photo.caption}</p>
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
      className="relative py-24 px-4 sm:px-8 overflow-hidden"
      style={{ background: "#FFFDF8" }}
    >
      {/* Torn paper top edge */}
      <div className="torn-top w-full" />

      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #F7DDE5 0%, transparent 50%), radial-gradient(circle at 80% 20%, #F5D5C8 0%, transparent 40%)",
          }}
        />
      </div>

      {/* Section header */}
      <motion.div
        className="text-center mb-14 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span
          className="font-script text-5xl text-[#DDA0B3] block mb-3"
          style={{ fontFamily: "Caveat, cursive" }}
        >
          Our Little Collection
        </span>
        <h2
          className="text-3xl sm:text-4xl text-[#A85F78]"
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
          className="mt-4 text-[#8D756D] text-sm font-sans max-w-xs mx-auto"
          style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.05rem" }}
        >
          Click any photo to see it up close
        </p>
      </motion.div>

      {/* Photo grid — Polaroid scrapbook layout */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 place-items-center">
          {birthdayContent.gallery.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 40, rotate: photo.rotation * 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: photo.rotation }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.7, type: "spring" }}
            >
              <PhotoPlaceholder photo={photo} onClick={() => setSelected(photo)} />
            </motion.div>
          ))}
        </div>

        {/* Handwritten note at bottom */}
        <motion.p
          className="font-script text-xl text-[#DDA0B3] text-center mt-10"
          style={{ fontFamily: "Caveat, cursive" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          Every picture is a little piece of our story 🌷
        </motion.p>
      </div>

      {/* Lightbox modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(6px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="polaroid max-w-xs sm:max-w-sm w-full relative"
              style={{ transform: `rotate(${selected.rotation}deg)` }}
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-3 -right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center text-[#FFFDF8]"
                style={{ background: "#A85F78" }}
                onClick={() => setSelected(null)}
              >
                <X size={14} />
              </button>

              {/* Enlarged photo placeholder */}
              <div
                className="w-full bg-[#F7DDE5] relative flex items-center justify-center rounded-sm overflow-hidden"
                style={{ aspectRatio: "4/5", minHeight: 280 }}
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
                {/*
                <Image
                  src={selected.src}
                  alt={selected.caption}
                  fill
                  className="object-cover"
                  sizes="90vw"
                />
                */}
              </div>
              <div className="polaroid-caption">
                <p className="text-base">{selected.caption}</p>
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
