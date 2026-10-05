"use client";

import React, { useState } from "react";
import Link from "next/link";
import { COMIC_PANELS, ComicPanel } from "@/data/novelData";
import { ChevronLeft, ChevronRight, Shield, Key, BookOpen, Radio } from "lucide-react";

export function ComicTeaser() {
  const [currentPanelIndex, setCurrentPanelIndex] = useState(0);
  const [revealedCipher, setRevealedCipher] = useState<string | null>(null);

  const panel: ComicPanel = COMIC_PANELS[currentPanelIndex];

  const handleNext = () => {
    if (currentPanelIndex < COMIC_PANELS.length - 1) {
      setCurrentPanelIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPanelIndex > 0) {
      setCurrentPanelIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="my-8 bg-[#1a1a1a] text-white border-2 border-neutral-600 p-4 sm:p-6 shadow-[6px_6px_0_#000] relative overflow-hidden font-mono">
      {/* Background Grain */}
      <div className="absolute inset-0 bg-grain-dark pointer-events-none opacity-40" />

      {/* Header Strip */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 border-b border-neutral-700 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <span className="bg-[#000000] text-white text-xs px-2.5 py-1 uppercase border border-neutral-600 font-bold">
            SURVEILLANCE LOG #00
          </span>
          <h2 className="text-lg sm:text-xl font-black uppercase italic tracking-wider text-neutral-200">
            FILE: THE CRYSTAL HEIST (PROLOGUE)
          </h2>
        </div>
        <div className="flex items-center gap-2 text-xs font-bold bg-neutral-900 text-neutral-300 px-3 py-1 border border-neutral-700">
          <span>FRAME 0{currentPanelIndex + 1} OF 0{COMIC_PANELS.length}</span>
        </div>
      </div>

      {/* Main Surveillance Display Box */}
      <div className="relative z-10 bg-black border-2 border-neutral-700 p-6 sm:p-8 min-h-[360px] flex flex-col justify-between text-white shadow-[4px_4px_0_#000]">

        {/* SFX Audio Signal Marker */}
        <div className="absolute top-4 right-4 z-20">
          <span className="inline-block bg-neutral-900 text-neutral-300 font-bold text-xs uppercase px-3 py-1 border border-neutral-600">
            [AUDIO SIGNAL: {panel.sfx}]
          </span>
        </div>

        {/* Narrative Box */}
        <div className="self-start max-w-md bg-neutral-900 text-neutral-200 border border-neutral-600 p-3 text-xs font-bold shadow-[2px_2px_0_#000] mb-6">
          <span className="text-neutral-400 block uppercase text-[10px] tracking-widest mb-1">
            LOCATION LOG • {panel.tier}
          </span>
          {panel.narrativeText}
        </div>

        {/* Dialogue Box */}
        <div className="my-auto max-w-xl mx-auto bg-[#171717] text-white border-2 border-neutral-500 p-5 shadow-[4px_4px_0_#000] relative">
          <div className="flex items-center gap-2 mb-1 border-b border-neutral-700 pb-1 text-xs text-neutral-400 font-bold">
            <Radio className="w-3.5 h-3.5" />
            <span className="uppercase tracking-widest text-neutral-200">
              INTERCEPTED VOICE: {panel.characterName}
            </span>
          </div>
          <p className="text-sm sm:text-base leading-relaxed font-bold">
            "{panel.dialogue}"
          </p>
        </div>

        {/* Secret Cipher Trigger */}
        {panel.hiddenCipher && (
          <div className="mt-4 text-center">
            {revealedCipher ? (
              <div className="inline-block bg-neutral-900 text-white border border-neutral-500 p-2 text-xs font-bold">
                🔑 CLASSIFIED FREQUENCY DECRYPTED: <span className="bg-black text-white px-2 py-0.5 border border-neutral-700">{revealedCipher}</span>
              </div>
            ) : (
              <button
                onClick={() => setRevealedCipher(panel.hiddenCipher || null)}
                className="inline-flex items-center gap-1.5 bg-neutral-800 text-neutral-200 text-xs font-bold px-3 py-1.5 border border-neutral-500 hover:bg-neutral-700 transition-all cursor-pointer"
              >
                <Key className="w-3.5 h-3.5" /> DECRYPT HIDDEN FREQUENCY CIPHER
              </button>
            )}
          </div>
        )}
      </div>

      {/* Navigation Controls */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 mt-6 pt-4 border-t border-neutral-700">
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            disabled={currentPanelIndex === 0}
            className="flex items-center gap-1 px-4 py-2 bg-neutral-900 text-white font-bold text-xs uppercase border border-neutral-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-neutral-800 transition-all cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" /> PREV FRAME
          </button>

          <button
            onClick={handleNext}
            disabled={currentPanelIndex === COMIC_PANELS.length - 1}
            className="flex items-center gap-1 px-4 py-2 bg-neutral-800 text-white font-bold text-xs uppercase border border-neutral-500 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-neutral-700 transition-all cursor-pointer"
          >
            NEXT FRAME <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <Link
          href="/chapters/chapter-1-the-frequency-theft"
          className="flex items-center gap-2 px-5 py-2.5 bg-white text-black font-black text-xs uppercase border-2 border-black shadow-[3px_3px_0_#000] hover:bg-neutral-200 transition-all"
        >
          <BookOpen className="w-4 h-4" />
          <span>PROCEED TO CHAPTER 1 FILE →</span>
        </Link>
      </div>
    </section>
  );
}
