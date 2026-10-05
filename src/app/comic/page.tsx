import React from "react";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { ComicTeaser } from "@/components/ComicTeaser";
import { COMIC_PANELS, NOVEL_META } from "@/data/novelData";
import { Layers, BookOpen } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Surveillance Comic Log #00 | ${NOVEL_META.title}`,
  description: `Inspect official surveillance comic frames for ${NOVEL_META.title}. Monochromatic classified government log format.`,
};

export default function ComicPage() {
  return (
    <div className="min-h-screen bg-[#d8d6d0] text-neutral-900 flex flex-col font-mono relative">
      <div className="fixed inset-0 bg-grain pointer-events-none opacity-30 z-50" />
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full z-10 relative">
        {/* Banner */}
        <div className="bg-[#121212] text-white border-2 border-neutral-700 p-6 sm:p-8 shadow-[6px_6px_0_#000] mb-8 relative">
          <div className="space-y-2">
            <span className="bg-black text-neutral-300 font-bold text-xs px-2.5 py-1 uppercase border border-neutral-600 inline-block">
              SURVEILLANCE LOG PROLOGUE
            </span>
            <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-wider text-white">
              FILE: THE CRYSTAL HEIST
            </h1>
            <p className="text-neutral-400 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Inspect surveillance frame intercepts prior to reviewing File 01. Decrypt hidden frequency ciphers embedded directly into the surveillance stream.
            </p>
          </div>
        </div>

        {/* Comic Teaser Component */}
        <ComicTeaser />

        {/* Panel Frame Gallery */}
        <section className="my-12">
          <h2 className="text-xl font-black uppercase italic mb-6 text-black border-b-2 border-black pb-2 flex items-center gap-2 tracking-wide">
            <Layers className="w-5 h-5 text-black" /> SURVEILLANCE FRAME DIRECTORY
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMIC_PANELS.map((panel) => (
              <div
                key={panel.id}
                className="bg-black text-white border-2 border-neutral-700 p-5 shadow-[4px_4px_0_#000] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-neutral-900 text-neutral-300 text-[10px] font-bold px-2 py-0.5 border border-neutral-700">
                      FRAME 0{panel.id}
                    </span>
                    <span className="bg-white text-black font-bold text-[10px] px-2 py-0.5 border border-black uppercase">
                      {panel.tier}
                    </span>
                  </div>

                  <span className="font-bold text-xs uppercase text-neutral-400 block my-1">
                    AUDIO SIGNAL: {panel.sfx}
                  </span>

                  <p className="text-xs text-neutral-200 bg-neutral-900 p-2.5 border border-neutral-800 leading-relaxed my-2">
                    "{panel.dialogue}"
                  </p>
                </div>

                <p className="text-[11px] text-neutral-400 italic border-t border-neutral-800 pt-2 mt-2">
                  {panel.narrativeText}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/chapters/chapter-1-the-frequency-theft"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-black text-white font-black text-xs uppercase border-2 border-black shadow-[4px_4px_0_#000] hover:bg-neutral-800 transition-all"
            >
              <BookOpen className="w-4 h-4" />
              <span>PROCEED TO CHAPTER 1 SERIAL FILE →</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
