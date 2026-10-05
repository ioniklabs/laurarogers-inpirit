import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { ComicTeaser } from "@/components/ComicTeaser";
import { WorldMap } from "@/components/WorldMap";
import { CHAPTERS, DOSSIERS, NOVEL_META } from "@/data/novelData";
import { generateBookJsonLd } from "@/lib/jsonld";
import { BookOpen, Radio, Sparkles, Clock, ArrowRight, Shield, Zap, Key } from "lucide-react";

export const metadata: Metadata = {
  title: `${NOVEL_META.title} | Dystopian Sci-Fi Web Serial & Web Comic`,
  description: NOVEL_META.synopsis,
  openGraph: {
    title: NOVEL_META.title,
    description: NOVEL_META.synopsis,
    type: "website",
    url: "https://chrono-class-1964.com",
  },
};

export default function HomePage() {
  const jsonLd = generateBookJsonLd();

  return (
    <div className="min-h-screen bg-[#fbf7ee] text-slate-900 flex flex-col font-sans">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">

        {/* Hero Banner Section */}
        <section className="bg-amber-300 border-4 border-black p-6 sm:p-10 shadow-[8px_8px_0_#000] relative overflow-hidden mb-12">
          <div className="absolute inset-0 bg-halftone pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left Hero Content */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-black text-cyan-400 font-mono text-xs font-bold px-3 py-1 border-2 border-black shadow-[2px_2px_0_#00e5ff]">
                <Radio className="w-4 h-4 animate-pulse text-red-500" />
                <span>1960s RETRO-FUTURISTIC SERIAL NOVEL & COMIC</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-black text-black uppercase tracking-tight italic leading-none">
                {NOVEL_META.title}
              </h1>

              <p className="text-lg sm:text-xl font-mono text-black font-bold uppercase italic bg-white p-2 border-2 border-black inline-block shadow-[2px_2px_0_#000]">
                {NOVEL_META.tagline}
              </p>

              <p className="font-mono text-slate-900 text-sm sm:text-base leading-relaxed bg-[#fbf7ee] border-2 border-black p-4 shadow-[3px_3px_0_#000]">
                {NOVEL_META.synopsis}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/chapters/chapter-1-the-frequency-theft"
                  className="flex items-center gap-2 px-6 py-3 bg-[#ff2a5f] text-white font-black text-base uppercase border-3 border-black shadow-[4px_4px_0_#000] hover:bg-red-600 hover:scale-105 transition-all"
                >
                  <BookOpen className="w-5 h-5" />
                  <span>READ CHAPTER 1 FREE</span>
                </Link>

                <Link
                  href="/comic"
                  className="flex items-center gap-2 px-6 py-3 bg-[#00e5ff] text-black font-black text-base uppercase border-3 border-black shadow-[4px_4px_0_#000] hover:bg-cyan-300 hover:scale-105 transition-all"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>PREVIEW ISSUE #0 COMIC</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Badge Visual */}
            <div className="lg:col-span-4 bg-slate-950 text-white border-4 border-black p-6 shadow-[6px_6px_0_#000] flex flex-col justify-between h-full">
              <div>
                <span className="text-xs font-mono text-amber-400 font-bold uppercase block mb-1">
                  [SERIAL TRANSMISSION SCHEDULE]
                </span>
                <h3 className="text-2xl font-black uppercase text-cyan-400 italic">
                  CHAPTER 4 RELEASING FRIDAY
                </h3>
                <p className="text-xs font-mono text-slate-300 mt-2">
                  A new chapter drops every Friday. Subscribe to unlock subscriber early access.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">STATUS:</span>
                  <span className="bg-emerald-500 text-black px-2 py-0.5 font-bold">2 CHAPTERS FREE</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Web Comic Teaser */}
        <ComicTeaser />

        {/* Latest Serial Chapters Section */}
        <section className="my-12">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b-4 border-black pb-4 mb-6">
            <div>
              <span className="bg-[#ff2a5f] text-white font-black text-xs px-2.5 py-1 uppercase border-2 border-black shadow-[2px_2px_0_#000]">
                SERIAL LIBRARY
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-black uppercase italic tracking-tight mt-1">
                LATEST PUBLISHED CHAPTERS
              </h2>
            </div>

            <Link
              href="/chapters"
              className="flex items-center gap-1.5 px-4 py-2 bg-white text-black font-black text-sm border-2 border-black shadow-[3px_3px_0_#000] hover:bg-amber-300 transition-all"
            >
              <span>VIEW FULL LIBRARY ({CHAPTERS.length})</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CHAPTERS.map((ch) => (
              <div
                key={ch.slug}
                className="bg-white border-4 border-black p-5 shadow-[6px_6px_0_#000] flex flex-col justify-between hover:translate-y-[-2px] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-black text-cyan-400 font-mono text-xs font-bold px-2 py-0.5">
                      CHAPTER {ch.number}
                    </span>
                    {ch.isFree ? (
                      <span className="bg-emerald-300 text-black border border-black font-bold text-[10px] px-2 py-0.5 uppercase">
                        FREE TO READ
                      </span>
                    ) : (
                      <span className="bg-amber-300 text-black border border-black font-bold text-[10px] px-2 py-0.5 uppercase flex items-center gap-1">
                        <Clock className="w-3 h-3" /> VIP / SUBSCRIBER
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-black text-black uppercase italic leading-snug">
                    {ch.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-600 italic mt-0.5 mb-3">
                    "{ch.subtitle}"
                  </p>

                  <p className="text-xs font-mono text-slate-800 leading-relaxed bg-[#fbf7ee] p-3 border border-black">
                    {ch.summary}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t-2 border-black flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500">
                    RELEASED: {ch.releaseDate}
                  </span>
                  <Link
                    href={`/chapters/${ch.slug}`}
                    className="px-3 py-1.5 bg-[#00e5ff] text-black font-black text-xs uppercase border-2 border-black shadow-[2px_2px_0_#000] hover:bg-cyan-300 transition-all"
                  >
                    READ CHAPTER →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive World Map Section */}
        <WorldMap />

        {/* Featured Lore Dossiers */}
        <section className="my-12">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b-4 border-black pb-4 mb-6">
            <div>
              <span className="bg-[#ffd500] text-black font-black text-xs px-2.5 py-1 uppercase border-2 border-black shadow-[2px_2px_0_#000]">
                WORLD ARCHIVES
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-black uppercase italic tracking-tight mt-1">
                FEATURED DOSSIERS & FACTIONS
              </h2>
            </div>

            <Link
              href="/codex"
              className="flex items-center gap-1.5 px-4 py-2 bg-black text-white font-black text-sm border-2 border-black shadow-[3px_3px_0_#000] hover:bg-slate-800 transition-all"
            >
              <Key className="w-4 h-4 text-cyan-400" />
              <span>ENTER CIPHER DECODER ROOM</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DOSSIERS.slice(0, 3).map((dossier) => (
              <div
                key={dossier.id}
                className="bg-[#f1ebd9] border-4 border-black p-5 shadow-[6px_6px_0_#000] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-[#ff2a5f] text-white font-mono text-[10px] font-bold px-2 py-0.5 uppercase">
                      {dossier.category}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-slate-700 bg-white px-2 py-0.5 border border-black">
                      {dossier.tierAffiliation}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-black uppercase italic">
                    {dossier.name}
                  </h3>
                  <p className="text-xs font-mono font-bold text-cyan-700 mb-2">
                    {dossier.role}
                  </p>

                  <p className="text-xs font-mono text-slate-800 leading-relaxed mb-3">
                    {dossier.bio}
                  </p>

                  <blockquote className="text-xs font-mono italic text-red-900 bg-amber-100 p-2.5 border-l-4 border-red-600">
                    {dossier.quote}
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-black text-white border-t-4 border-black py-8 mt-12 font-mono text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-black text-lg text-amber-400 block uppercase italic">
              CHRONO-CLASS: 1964
            </span>
            <p className="text-slate-400 text-[11px] mt-0.5">
              © 1964 CHRONO-CLASS SERIALS. ALL FREQUENCIES RESERVED.
            </p>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <Link href="/sitemap.xml" className="hover:text-cyan-400">
              Sitemap
            </Link>
            <Link href="/robots.txt" className="hover:text-cyan-400">
              Robots.txt
            </Link>
            <Link href="/chapters" className="hover:text-cyan-400">
              Serial Index
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
