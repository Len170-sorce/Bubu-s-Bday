# 🌸 Bubu's Birthday — Glad Marrie

A beautiful interactive birthday scrapbook website built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Opening Envelope** — Animated sealed envelope that opens to reveal the birthday experience
- **Hero Cover Page** — Elegant scrapbook-style cover with Polaroid photo placeholder
- **Photo Gallery** — Polaroid scrapbook layout with lightbox
- **Memory Timeline** — Journal-style relationship timeline
- **Love Cards** — Interactive 3D flip cards with personal notes
- **Birthday Letter** — Animated envelope with handwritten-style letter
- **Gift Surprise** — Interactive gift box with confetti and reveal
- **Final Page** — Warm closing with replay button
- **Music Player** — Custom scrapbook-style player
- **Scroll Progress** — Delicate pink heart progress indicator
- **Floating Decorations** — Subtle ambient flower/sparkle animations
- **Custom Cursor** — Tiny flower cursor on desktop

## 🎨 Personalization

**All personal content lives in one file:**

```
data/birthday-content.ts
```

Edit this file to change:
- Her name and nickname
- Birthday date
- All messages and captions
- Gallery photos
- Timeline milestones
- Love card messages
- Birthday letter paragraphs
- Gift reveal message
- Final closing note
- Music track

## 📸 Adding Photos

1. Place your photos in `public/photos/`
2. Update `gallery` array in `data/birthday-content.ts` with the correct filenames
3. In `components/GallerySection.tsx`, uncomment the `<Image />` component and remove the placeholder `<div>`
4. Repeat for the final page photo in `components/FinalSection.tsx`

## 🎵 Adding Music

1. Place your `.mp3` file in `public/music/`
2. Update `music.src` in `data/birthday-content.ts`

## 🚀 Deployment to Vercel

### Method 1: GitHub + Vercel (Recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **"Add New Project"**
4. Import your GitHub repository
5. Leave all settings as default — Vercel auto-detects Next.js
6. Click **Deploy**
7. Share the generated URL with Glad Marrie 💗

### Method 2: Vercel CLI

```bash
npm i -g vercel
vercel --prod
```

## 🛠 Local Development

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main page orchestrator
│   └── globals.css         # Global styles, animations, utilities
├── components/
│   ├── OpeningScreen.tsx   # Animated envelope intro
│   ├── HeroSection.tsx     # Birthday cover page
│   ├── GallerySection.tsx  # Polaroid photo gallery
│   ├── TimelineSection.tsx # Memory timeline
│   ├── LoveCardsSection.tsx# Flip cards
│   ├── LetterSection.tsx   # Birthday letter
│   ├── GiftSection.tsx     # Gift surprise + confetti
│   ├── FinalSection.tsx    # Closing page
│   ├── FloatingDecorations.tsx # Ambient floating elements
│   ├── MusicPlayer.tsx     # Custom music player
│   ├── ScrollProgress.tsx  # Heart scroll indicator
│   └── CustomCursor.tsx    # Desktop flower cursor
├── data/
│   └── birthday-content.ts # ✏️  ALL PERSONAL CONTENT HERE
└── public/
    ├── photos/             # 📸 Place photos here
    └── music/              # 🎵 Place music here
```

---

*Made with love for Glad Marrie's birthday — November 17, 2026 🌸*
