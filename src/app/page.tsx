import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { ComicTeaser } from "@/components/ComicTeaser";
import { WorldMap } from "@/components/WorldMap";
import { CHAPTERS, DOSSIERS, NOVEL_META } from "@/data/novelData";
import { generateBookJsonLd } from "@/lib/jsonld";
import { BookOpen, Radio, Sparkles, Clock, ArrowRight, Shield, Lock, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: `${NOVEL_META.title} | Classified Dystopian Sci-Fi Web Serial & Surveillance Comic`,
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
    <div className="min-h-screen bg-[#d8d6d0] text-neutral-900 flex flex-col font-mono relative">
      {/* Background Film Grain Overlay */}
      <div className="fixed inset-0 bg-grain pointer-events-none opacity-30 z-50" />

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full z-10 relative">

        {/* Classified Hero Section */}
        <section className="bg-[#121212] text-white border-2 border-neutral-700 p-6 sm:p-10 shadow-[8px_8px_0_#000] relative overflow-hidden mb-12">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left Hero Content */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-neutral-900 text-neutral-300 font-mono text-xs font-bold px-3 py-1 border border-neutral-600">
                <Shield className="w-4 h-4 text-white" />
                <span>RESTRICTED DOSSIER • DATED 1964</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-wider italic leading-none font-mono">
                {NOVEL_META.title}
              </h1>

              <p className="text-xs sm:text-sm font-mono text-neutral-300 font-bold uppercase tracking-widest bg-neutral-900 p-2 border border-neutral-700 inline-block">
                {NOVEL_META.tagline}
              </p>

              <p className="font-mono text-neutral-300 text-xs sm:text-sm leading-relaxed bg-black/80 border border-neutral-800 p-4">
                {NOVEL_META.synopsis}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/chapters/chapter-1-the-frequency-theft"
                  className="flex items-center gap-2 px-6 py-3 bg-white text-black font-black text-xs uppercase border-2 border-black shadow-[4px_4px_0_#000] hover:bg-neutral-200 transition-all"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>READ FILE 01 (FREE ACCESS)</span>
                </Link>

                <Link
                  href="/comic"
                  className="flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white font-black text-xs uppercase border-2 border-neutral-600 shadow-[4px_4px_0_#000] hover:bg-neutral-800 transition-all"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>INSPECT SURVEILLANCE COMIC</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Badge Visual */}
            <div className="lg:col-span-4 bg-black text-white border-2 border-neutral-700 p-6 shadow-[4px_4px_0_#000] flex flex-col justify-between h-full">
              <div>
                <span className="text-[11px] font-mono text-neutral-400 font-bold uppercase block mb-1">
                  [GOVERNMENT CLEARANCE LOG]
                </span>
                <h3 className="text-xl font-black uppercase text-white italic tracking-wide">
                  RESTRICTED FILE 04 RELEASING FRIDAY
                </h3>
                <p className="text-xs font-mono text-neutral-400 mt-2 leading-relaxed">
                  Weekly intelligence logs published every Friday. Submit email clearance to unlock advance transmissions.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-800">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-neutral-500">STATUS:</span>
                  <span className="bg-neutral-800 text-neutral-200 px-2 py-0.5 border border-neutral-600 font-bold">2 FILES UNCLASSIFIED</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Web Comic Teaser */}
        <ComicTeaser />

        {/* Latest Serial Chapters Section */}
        <section className="my-12">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-black pb-4 mb-6">
            <div>
              <span className="bg-[#000000] text-white font-black text-xs px-2.5 py-1 uppercase border border-neutral-600">
                DOSSIER ARCHIVE
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-black uppercase italic tracking-wider mt-1">
                PUBLISHED DISPATCH FILES
              </h2>
            </div>

            <Link
              href="/chapters"
              className="flex items-center gap-1.5 px-4 py-2 bg-[#f5f5f0] text-black font-black text-xs border-2 border-black shadow-[3px_3px_0_#000] hover:bg-white transition-all"
            >
              <span>VIEW ALL FILES ({CHAPTERS.length})</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CHAPTERS.map((ch) => (
              <div
                key={ch.slug}
                className="dossier-box p-5 flex flex-col justify-between hover:translate-y-[-2px] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-black text-white font-mono text-[10px] font-bold px-2 py-0.5">
                      FILE 0{ch.number}
                    </span>
                    {ch.isFree ? (
                      <span className="bg-neutral-200 text-black border border-black font-bold text-[10px] px-2 py-0.5 uppercase">
                        UNCLASSIFIED
                      </span>
                    ) : (
                      <span className="bg-black text-white border border-black font-bold text-[10px] px-2 py-0.5 uppercase flex items-center gap-1">
                        <Lock className="w-3 h-3" /> RESTRICTED
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-black text-black uppercase italic leading-snug tracking-wide">
                    {ch.title}
                  </h3>
                  <p className="text-[11px] font-mono text-neutral-600 italic mt-0.5 mb-3">
                    "{ch.subtitle}"
                  </p>

                  <p className="text-xs font-mono text-neutral-800 leading-relaxed bg-[#e8e6e0] p-3 border border-neutral-400">
                    {ch.summary}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-black flex items-center justify-between">
                  <span className="text-[10px] font-mono text-neutral-600">
                    DATE: {ch.releaseDate}
                  </span>
                  <Link
                    href={`/chapters/${ch.slug}`}
                    className="px-3 py-1.5 bg-black text-white font-black text-xs uppercase border border-black shadow-[2px_2px_0_#000] hover:bg-neutral-800 transition-all"
                  >
                    INSPECT FILE →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive World Map Section */}
        <WorldMap />

        {/* Featured Dossiers Section */}
        <section className="my-12">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-black pb-4 mb-6">
            <div>
              <span className="bg-black text-white font-black text-xs px-2.5 py-1 uppercase border border-neutral-600">
                INTELLIGENCE VAULT
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-black uppercase italic tracking-wider mt-1">
                FEATURED SUBJECT DOSSIERS
              </h2>
            </div>

            <Link
              href="/codex"
              className="flex items-center gap-1.5 px-4 py-2 bg-black text-white font-black text-xs border-2 border-black shadow-[3px_3px_0_#000] hover:bg-neutral-800 transition-all"
            >
              <FileText className="w-4 h-4" />
              <span>ACCESS FULL CODEX</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DOSSIERS.slice(0, 3).map((dossier) => (
              <div
                key={dossier.id}
                className="dossier-box p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-black text-white text-[10px] font-bold px-2 py-0.5 uppercase">
                      {dossier.category}
                    </span>
                    <span className="text-[10px] font-bold text-neutral-800 bg-neutral-300 px-2 py-0.5 border border-neutral-600">
                      {dossier.tierAffiliation}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-black uppercase italic tracking-wide">
                    {dossier.name}
                  </h3>
                  <p className="text-xs font-bold text-neutral-700 mb-2">
                    {dossier.role}
                  </p>

                  <p className="text-xs text-neutral-800 leading-relaxed mb-3 bg-[#e8e6e0] p-2.5 border border-neutral-400">
                    {dossier.bio}
                  </p>

                  <blockquote className="text-xs italic text-neutral-900 bg-neutral-200 p-2.5 border-l-4 border-black">
                    {dossier.quote}
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-black text-white border-t-2 border-black py-8 mt-12 font-mono text-xs z-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-black text-base text-neutral-200 block uppercase italic tracking-widest">
              CHRONO-CLASS: 1964
            </span>
            <p className="text-neutral-500 text-[10px] mt-0.5">
              RESTRICTED DISPATCH ARCHIVE • CLASSIFIED GOVERNMENT PROPERTY
            </p>
          </div>

          <div className="flex items-center gap-4 text-neutral-400">
            <Link href="/sitemap.xml" className="hover:text-white">
              Sitemap
            </Link>
            <Link href="/robots.txt" className="hover:text-white">
              Robots.txt
            </Link>
            <Link href="/chapters" className="hover:text-white">
              File Directory
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
