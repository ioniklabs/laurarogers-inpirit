"use client";

import React, { useState } from "react";
import Link from "next/link";
import { COMIC_PANELS, ComicPanel } from "@/data/novelData";
import { ChevronLeft, ChevronRight, Zap, Sparkles, BookOpen, Volume2 } from "lucide-react";

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
    <section className="my-8 bg-[#fbf7ee] border-4 border-black p-4 sm:p-6 shadow-[8px_8px_0_#000] relative overflow-hidden">
      {/* Background Halftone Overlay */}
      <div className="absolute inset-0 bg-halftone pointer-events-none" />

      {/* Comic Header Strip */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 border-b-4 border-black pb-4 mb-6">
        <div className="flex items-center gap-3">
          <span className="bg-[#ff2a5f] text-white font-black text-xs px-2.5 py-1 uppercase border-2 border-black shadow-[2px_2px_0_#000]">
            TEASER ISSUE #0
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-black uppercase italic tracking-tight">
            WEB COMIC: THE CRYSTAL HEIST
          </h2>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs font-bold bg-amber-300 px-3 py-1 border-2 border-black">
          <span>PANEL {currentPanelIndex + 1} OF {COMIC_PANELS.length}</span>
        </div>
      </div>

      {/* Main Comic Panel Display Box */}
      <div className={`relative z-10 bg-gradient-to-br ${panel.bgGradient} border-4 border-black p-6 sm:p-8 min-h-[360px] flex flex-col justify-between text-white shadow-[6px_6px_0_#000] transition-all duration-300`}>

        {/* SFX Pop Art Sound Overlay */}
        <div className="absolute top-4 right-4 z-20 transform rotate-12 hover:scale-110 transition-transform">
          <span className={`inline-block font-black text-2xl sm:text-4xl italic uppercase px-4 py-1.5 border-4 border-black shadow-[4px_4px_0_#000] ${
            panel.sfxColor === 'cyan' ? 'bg-[#00e5ff] text-black' :
            panel.sfxColor === 'red' ? 'bg-[#ff2a5f] text-white' : 'bg-[#ffd500] text-black'
          }`}>
            {panel.sfx}
          </span>
        </div>

        {/* Narrative Box (Top Left Comic Box) */}
        <div className="self-start max-w-md bg-amber-100 text-black border-3 border-black p-3 font-mono text-xs sm:text-sm font-bold shadow-[3px_3px_0_#000] mb-6">
          <span className="text-red-600 block uppercase text-[10px] tracking-wider mb-1">
            LOCATION LOG • {panel.tier}
          </span>
          {panel.narrativeText}
        </div>

        {/* Dialogue Bubble */}
        <div className="my-auto max-w-xl mx-auto bg-white text-black border-4 border-black p-5 shadow-[5px_5px_0_#000] speech-bubble-bottom relative">
          <div className="flex items-center gap-2 mb-1 border-b-2 border-slate-200 pb-1">
            <Volume2 className="w-4 h-4 text-cyan-600" />
            <span className="font-black text-sm uppercase italic tracking-wider text-cyan-900">
              {panel.characterName}
            </span>
          </div>
          <p className="font-mono text-sm sm:text-base font-bold leading-relaxed">
            "{panel.dialogue}"
          </p>
        </div>

        {/* Secret Cipher Trigger (if present) */}
        {panel.hiddenCipher && (
          <div className="mt-4 text-center">
            {revealedCipher ? (
              <div className="inline-block bg-yellow-300 text-black border-2 border-black p-2 font-mono text-xs font-bold">
                🔑 ENCRYPTED FREQUENCY UNLOCKED: <span className="bg-black text-cyan-400 px-2 py-0.5">{revealedCipher}</span>
              </div>
            ) : (
              <button
                onClick={() => setRevealedCipher(panel.hiddenCipher || null)}
                className="inline-flex items-center gap-1.5 bg-[#ff2a5f] text-white text-xs font-black px-3 py-1.5 border-2 border-black shadow-[2px_2px_0_#000] hover:bg-red-600 transition-all cursor-pointer animate-bounce"
              >
                <Sparkles className="w-4 h-4" /> REVEAL HIDDEN FREQUENCY CIPHER IN THIS PANEL
              </button>
            )}
          </div>
        )}
      </div>

      {/* Comic Navigation Bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 mt-6 pt-4 border-t-4 border-black">
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            disabled={currentPanelIndex === 0}
            className="flex items-center gap-1 px-4 py-2 bg-white text-black font-black text-sm border-2 border-black shadow-[3px_3px_0_#000] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-cyan-300 transition-all cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" /> PREV PANEL
          </button>

          <button
            onClick={handleNext}
            disabled={currentPanelIndex === COMIC_PANELS.length - 1}
            className="flex items-center gap-1 px-4 py-2 bg-[#ffd500] text-black font-black text-sm border-2 border-black shadow-[3px_3px_0_#000] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-amber-400 transition-all cursor-pointer"
          >
            NEXT PANEL <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Direct Link to Chapter 1 */}
        <Link
          href="/chapters/chapter-1-the-frequency-theft"
          className="flex items-center gap-2 px-5 py-2.5 bg-[#00e5ff] text-black font-black text-sm border-3 border-black shadow-[4px_4px_0_#000] hover:bg-cyan-300 hover:scale-105 transition-all"
        >
          <BookOpen className="w-4 h-4" />
          <span>START READING CHAPTER 1 NOW →</span>
        </Link>
      </div>
    </section>
  );
}
