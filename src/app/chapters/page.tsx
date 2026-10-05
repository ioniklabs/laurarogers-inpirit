import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { CHAPTERS, NOVEL_META } from "@/data/novelData";
import { BookOpen, Shield, Lock, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: `Classified File Directory | ${NOVEL_META.title}`,
  description: `Access surveillance logs and weekly dispatch files for ${NOVEL_META.title}. Classified dystopian 1964 records.`,
};

export default function ChaptersIndexPage() {
  return (
    <div className="min-h-screen bg-[#d8d6d0] text-neutral-900 flex flex-col font-mono relative">
      <div className="fixed inset-0 bg-grain pointer-events-none opacity-30 z-50" />
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full z-10 relative">
        {/* Banner */}
        <div className="bg-[#121212] text-white border-2 border-neutral-700 p-6 sm:p-8 shadow-[6px_6px_0_#000] mb-8 relative">
          <div className="space-y-2">
            <span className="bg-black text-neutral-300 font-bold text-xs px-2.5 py-1 uppercase border border-neutral-600 inline-block">
              INTELLIGENCE ARCHIVE DIRECTORY
            </span>
            <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-wider text-white">
              SERIAL DISPATCH FILES
            </h1>
            <p className="text-neutral-400 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Dispatch logs updated weekly every Friday. Files 01 and 02 are unclassified for general review.
            </p>
          </div>
        </div>

        {/* Chapter Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CHAPTERS.map((ch) => (
            <div
              key={ch.slug}
              className="dossier-box p-6 flex flex-col justify-between hover:translate-y-[-2px] transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="bg-black text-white text-xs font-bold px-2.5 py-1">
                      FILE 0{ch.number}
                    </span>
                    <span className="text-xs text-neutral-600 font-bold">
                      {ch.wordCount} WORDS
                    </span>
                  </div>

                  {ch.isFree ? (
                    <span className="bg-neutral-200 text-black border border-black font-bold text-xs px-2.5 py-0.5 uppercase flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> UNCLASSIFIED
                    </span>
                  ) : (
                    <span className="bg-black text-white border border-black font-bold text-xs px-2.5 py-0.5 uppercase flex items-center gap-1">
                      <Lock className="w-3.5 h-3.5" /> RESTRICTED
                    </span>
                  )}
                </div>

                <h2 className="text-xl font-black text-black uppercase italic leading-tight tracking-wide">
                  {ch.title}
                </h2>
                <p className="text-xs font-mono text-neutral-600 italic mt-0.5 mb-3">
                  "{ch.subtitle}"
                </p>

                <p className="text-xs text-neutral-800 leading-relaxed bg-[#e8e6e0] p-4 border border-neutral-400">
                  {ch.summary}
                </p>

                {ch.cipherHint && (
                  <div className="mt-3 bg-neutral-200 border border-neutral-500 p-2 text-[11px] font-bold text-neutral-900">
                    💡 {ch.cipherHint}
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-black flex items-center justify-between">
                <span className="text-xs text-neutral-600">
                  RELEASED: {ch.releaseDate}
                </span>

                <Link
                  href={`/chapters/${ch.slug}`}
                  className="flex items-center gap-1 px-4 py-2 bg-black text-white font-black text-xs uppercase border border-black shadow-[2px_2px_0_#000] hover:bg-neutral-800 transition-all"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>INSPECT FILE →</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
