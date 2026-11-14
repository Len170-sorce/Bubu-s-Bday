"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { birthdayContent } from "@/data/birthday-content";
import OpeningScreen from "@/components/OpeningScreen";
import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import TimelineSection from "@/components/TimelineSection";
import LoveCardsSection from "@/components/LoveCardsSection";
import LetterSection from "@/components/LetterSection";
import GiftSection from "@/components/GiftSection";
import FinalSection from "@/components/FinalSection";
import FloatingDecorations from "@/components/FloatingDecorations";
import MusicPlayer from "@/components/MusicPlayer";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import DuduBear from "@/components/DuduBear";

export default function Home() {
  const [opened, setOpened] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (opened && mainRef.current) {
      mainRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [opened]);

  return (
    <>
      <CustomCursor />

      <AnimatePresence mode="wait">
        {!opened && (
          <OpeningScreen onOpen={() => setOpened(true)} />
        )}
      </AnimatePresence>

      <motion.div
        ref={mainRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: opened ? 1 : 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={opened ? "pointer-events-auto" : "pointer-events-none"}
      >
        <FloatingDecorations />
        <ScrollProgress />
        <MusicPlayer src={birthdayContent.music.src} title={birthdayContent.music.title} />
        <DuduBear />

        <main className="relative">
          <HeroSection />
          <GallerySection />
          <TimelineSection />
          <LoveCardsSection />
          <LetterSection />
          <GiftSection />
          <FinalSection onReplay={() => setOpened(false)} />
        </main>
      </motion.div>
    </>
  );
}
