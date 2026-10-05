import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { CHAPTERS, NOVEL_META } from "@/data/novelData";
import { BookOpen, Clock, Lock, Sparkles, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: `Serial Chapter Library | ${NOVEL_META.title}`,
  description: `Browse all published weekly serial chapters for ${NOVEL_META.title}. High-frequency dystopian sci-fi set in 1964.`,
};

export default function ChaptersIndexPage() {
  return (
    <div className="min-h-screen bg-[#fbf7ee] text-slate-900 flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Header Title Banner */}
        <div className="bg-black text-white border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0_#ff2a5f] mb-8 relative">
          <div className="absolute inset-0 bg-halftone-cyan pointer-events-none" />

          <div className="relative z-10 space-y-2">
            <span className="bg-[#ffd500] text-black font-mono font-black text-xs px-2.5 py-1 uppercase border border-black inline-block">
              SERIAL ARCHIVE INDEX
            </span>
            <h1 className="text-3xl sm:text-5xl font-black uppercase italic tracking-tight text-white">
              SERIAL CHAPTER TRANSMISSIONS
            </h1>
            <p className="font-mono text-cyan-400 text-sm max-w-2xl">
              Published weekly every Friday. Read Chapters 1 and 2 completely free! Subscribe to unlock early transmission feeds.
            </p>
          </div>
        </div>

        {/* Chapter List Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CHAPTERS.map((ch) => (
            <div
              key={ch.slug}
              className="bg-white border-4 border-black p-6 shadow-[6px_6px_0_#000] flex flex-col justify-between hover:translate-y-[-2px] transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="bg-black text-cyan-400 font-mono text-xs font-bold px-2.5 py-1 border border-black">
                      CHAPTER {ch.number}
                    </span>
                    <span className="text-xs font-mono text-slate-500 font-bold">
                      {ch.wordCount} WORDS
                    </span>
                  </div>

                  {ch.isFree ? (
                    <span className="bg-emerald-300 text-black border-2 border-black font-black text-xs px-2.5 py-0.5 uppercase flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> FREE READ
                    </span>
                  ) : (
                    <span className="bg-amber-300 text-black border-2 border-black font-black text-xs px-2.5 py-0.5 uppercase flex items-center gap-1">
                      <Lock className="w-3.5 h-3.5" /> VIP SUBSCRIBER
                    </span>
                  )}
                </div>

                <h2 className="text-2xl font-black text-black uppercase italic leading-tight">
                  {ch.title}
                </h2>
                <p className="text-xs font-mono text-slate-600 font-bold italic mt-0.5 mb-3">
                  "{ch.subtitle}"
                </p>

                <p className="font-mono text-xs text-slate-800 leading-relaxed bg-[#fbf7ee] p-4 border-2 border-black">
                  {ch.summary}
                </p>

                {ch.cipherHint && (
                  <div className="mt-3 bg-yellow-100 border border-yellow-500 p-2 font-mono text-[11px] font-bold text-yellow-900">
                    💡 {ch.cipherHint}
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t-2 border-black flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500">
                  DATE: {ch.releaseDate}
                </span>

                <Link
                  href={`/chapters/${ch.slug}`}
                  className="flex items-center gap-1 px-4 py-2 bg-[#ff2a5f] text-white font-black text-xs uppercase border-2 border-black shadow-[3px_3px_0_#000] hover:bg-red-600 transition-all"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>READ CHAPTER →</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
