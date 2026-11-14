"use client";

import { useEffect, useRef, useState } from "react";
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

export default function Home() {
  const [opened, setOpened] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  // Scroll to top on first reveal
  useEffect(() => {
    if (opened && mainRef.current) {
      mainRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [opened]);

  return (
    <>
      <CustomCursor />

      {/* Opening envelope overlay */}
      {!opened && (
        <OpeningScreen onOpen={() => setOpened(true)} />
      )}

      {/* Main website revealed after opening */}
      <div
        ref={mainRef}
        className={`transition-opacity duration-1000 ${
          opened ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <FloatingDecorations />
        <ScrollProgress />
        <MusicPlayer src={birthdayContent.music.src} title={birthdayContent.music.title} />

        <main className="relative">
          <HeroSection />
          <GallerySection />
          <TimelineSection />
          <LoveCardsSection />
          <LetterSection />
          <GiftSection />
          <FinalSection onReplay={() => setOpened(false)} />
        </main>
      </div>
    </>
  );
}
