import React from "react";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { ComicTeaser } from "@/components/ComicTeaser";
import { COMIC_PANELS, NOVEL_META } from "@/data/novelData";
import { Layers, Sparkles, BookOpen } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Web Comic Issue #0: The Crystal Heist | ${NOVEL_META.title}`,
  description: `Experience the official prologue web comic for ${NOVEL_META.title}. Retro 1960s pop-art style with interactive panels and sound effects.`,
};

export default function ComicPage() {
  return (
    <div className="min-h-screen bg-[#fbf7ee] text-slate-900 flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Header Title Banner */}
        <div className="bg-amber-300 border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0_#000] mb-8 relative">
          <div className="absolute inset-0 bg-halftone pointer-events-none" />

          <div className="relative z-10 space-y-2">
            <span className="bg-[#ff2a5f] text-white font-mono font-black text-xs px-2.5 py-1 uppercase border border-black inline-block">
              PROLOGUE WEB COMIC
            </span>
            <h1 className="text-3xl sm:text-5xl font-black uppercase italic tracking-tight text-black">
              ISSUE #0: THE CRYSTAL HEIST
            </h1>
            <p className="font-mono text-black text-sm max-w-2xl font-bold">
              Step through the panels of the Sub-Grid before diving into Chapter 1. Discover hidden frequency ciphers built directly into the art!
            </p>
          </div>
        </div>

        {/* Comic Teaser Reader Component */}
        <ComicTeaser />

        {/* Panel Gallery View */}
        <section className="my-12">
          <h2 className="text-2xl font-black uppercase italic mb-6 text-black border-b-4 border-black pb-2 flex items-center gap-2">
            <Layers className="w-6 h-6 text-cyan-600" /> ALL COMIC PANELS (SUMMARY)
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMIC_PANELS.map((panel) => (
              <div
                key={panel.id}
                className={`bg-gradient-to-br ${panel.bgGradient} border-4 border-black p-5 text-white shadow-[6px_6px_0_#000] flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-black text-amber-400 font-mono text-[10px] font-bold px-2 py-0.5 border border-black">
                      PANEL 0{panel.id}
                    </span>
                    <span className="bg-white text-black font-mono font-bold text-[10px] px-2 py-0.5 border border-black uppercase">
                      {panel.tier}
                    </span>
                  </div>

                  <span className="font-black text-2xl italic uppercase text-yellow-300 block my-1">
                    {panel.sfx}
                  </span>

                  <p className="font-mono text-xs text-amber-100 bg-black/60 p-2.5 border border-slate-700 leading-relaxed my-2">
                    "{panel.dialogue}"
                  </p>
                </div>

                <p className="text-[11px] font-mono text-slate-300 italic border-t border-slate-700 pt-2 mt-2">
                  {panel.narrativeText}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/chapters/chapter-1-the-frequency-theft"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#00e5ff] text-black font-black text-base uppercase border-3 border-black shadow-[5px_5px_0_#000] hover:bg-cyan-300 hover:scale-105 transition-all"
            >
              <BookOpen className="w-5 h-5" />
              <span>CONTINUE TO CHAPTER 1 SERIAL NOVEL →</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
