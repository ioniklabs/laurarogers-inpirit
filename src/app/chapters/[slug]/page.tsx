"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { CHAPTERS } from "@/data/novelData";
import { generateChapterJsonLd } from "@/lib/jsonld";
import { ChevronLeft, ChevronRight, Bookmark, Type, Shield, Lock } from "lucide-react";

export default function ChapterReaderPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const chapter = CHAPTERS.find((c) => c.slug === resolvedParams.slug);

  if (!chapter) {
    notFound();
  }

  const [fontSize, setFontSize] = useState<"sm" | "base" | "lg">("base");
  const [theme, setTheme] = useState<"monochrome" | "dark" | "dossier">("dossier");
  const [bookmarked, setBookmarked] = useState(false);

  const currentIndex = CHAPTERS.findIndex((c) => c.slug === chapter.slug);
  const prevChapter = currentIndex > 0 ? CHAPTERS[currentIndex - 1] : null;
  const nextChapter = currentIndex < CHAPTERS.length - 1 ? CHAPTERS[currentIndex + 1] : null;

  const jsonLd = generateChapterJsonLd(chapter.slug);

  return (
    <div
      className={`min-h-screen flex flex-col font-mono transition-colors duration-200 ${
        theme === "dark"
          ? "bg-[#121212] text-neutral-100"
          : theme === "monochrome"
          ? "bg-white text-black"
          : "bg-[#d8d6d0] text-neutral-900"
      }`}
    >
      {/* Background Film Grain Overlay */}
      <div className="fixed inset-0 bg-grain pointer-events-none opacity-25 z-50" />

      {/* Schema.org JSON-LD */}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}

      <Navbar />

      {/* Reader Control Toolbar */}
      <div className="sticky top-[60px] z-40 bg-[#121212] text-white border-b-2 border-black py-2 px-4 shadow-[0_4px_0_#000]">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2">
            <Link
              href="/chapters"
              className="flex items-center gap-1 text-neutral-300 font-bold hover:underline"
            >
              <ChevronLeft className="w-4 h-4" /> DIRECTORY
            </Link>
            <span className="text-neutral-600">|</span>
            <span className="font-bold text-white">FILE 0{chapter.number}</span>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 bg-neutral-900 p-1 border border-neutral-700">
              <Type className="w-3.5 h-3.5 text-neutral-400 ml-1" />
              <button
                onClick={() => setFontSize("sm")}
                className={`px-1.5 py-0.5 ${fontSize === "sm" ? "bg-white text-black font-bold" : "text-neutral-400"}`}
              >
                A-
              </button>
              <button
                onClick={() => setFontSize("base")}
                className={`px-1.5 py-0.5 ${fontSize === "base" ? "bg-white text-black font-bold" : "text-neutral-400"}`}
              >
                A
              </button>
              <button
                onClick={() => setFontSize("lg")}
                className={`px-1.5 py-0.5 ${fontSize === "lg" ? "bg-white text-black font-bold" : "text-neutral-400"}`}
              >
                A+
              </button>
            </div>

            <div className="flex items-center gap-1 bg-neutral-900 p-1 border border-neutral-700">
              <button
                onClick={() => setTheme("dossier")}
                className={`px-2 py-0.5 font-bold ${theme === "dossier" ? "bg-white text-black" : "text-neutral-400"}`}
              >
                DOSSIER
              </button>
              <button
                onClick={() => setTheme("dark")}
                className={`px-2 py-0.5 font-bold ${theme === "dark" ? "bg-white text-black" : "text-neutral-400"}`}
              >
                DARK
              </button>
            </div>

            <button
              onClick={() => setBookmarked(!bookmarked)}
              className={`p-1.5 border ${
                bookmarked
                  ? "bg-white text-black border-black"
                  : "bg-neutral-900 text-neutral-400 border-neutral-700 hover:text-white"
              }`}
              title="Save Reader Bookmark"
            >
              <Bookmark className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 py-10 w-full z-10 relative">
        <header className="mb-10 text-center border-b-2 border-black pb-8">
          <div className="inline-flex items-center gap-2 bg-black text-white font-mono text-xs font-bold px-3 py-1 border border-neutral-700 mb-4">
            <Shield className="w-4 h-4" />
            <span>DISPATCH LOG FILE NO. 0{chapter.number}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-wider italic mb-2">
            {chapter.title}
          </h1>

          <p className="font-mono text-xs sm:text-sm font-bold text-neutral-600 italic">
            "{chapter.subtitle}"
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
            <span className="bg-neutral-900 text-white px-2.5 py-1 border border-black font-bold">
              DATE: {chapter.releaseDate}
            </span>
            <span className="bg-neutral-200 text-neutral-900 px-2.5 py-1 border border-black font-bold">
              {chapter.wordCount} WORDS
            </span>
          </div>
        </header>

        {/* Prose Content */}
        <article
          className={`space-y-6 font-mono leading-relaxed transition-all ${
            fontSize === "sm" ? "text-xs sm:text-sm" : fontSize === "lg" ? "text-base sm:text-lg" : "text-sm sm:text-base"
          }`}
        >
          {chapter.content.map((paragraph, index) => (
            <p
              key={index}
              className="p-4 border-l-2 border-black bg-black/5"
            >
              {index === 0 && (
                <span className="text-2xl font-black text-black mr-1 float-left leading-none uppercase">
                  {paragraph.charAt(0)}
                </span>
              )}
              {index === 0 ? paragraph.slice(1) : paragraph}
            </p>
          ))}
        </article>

        {/* Cipher Clue Banner */}
        {chapter.cipherHint && (
          <div className="my-8 bg-black text-white border-2 border-neutral-700 p-5 font-mono text-xs font-bold shadow-[4px_4px_0_#000]">
            <span className="text-neutral-400 block uppercase font-black text-xs mb-1">
              🔑 CIPHER KEY DISCOVERED IN THIS DISPATCH:
            </span>
            <p>{chapter.cipherHint}</p>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t-2 border-black flex flex-wrap items-center justify-between gap-4 font-mono">
          {prevChapter ? (
            <Link
              href={`/chapters/${prevChapter.slug}`}
              className="flex items-center gap-1.5 px-4 py-2 bg-black text-white font-black text-xs uppercase border border-black shadow-[2px_2px_0_#000] hover:bg-neutral-800 transition-all"
            >
              <ChevronLeft className="w-4 h-4" /> PREV: FILE 0{prevChapter.number}
            </Link>
          ) : (
            <div />
          )}

          {nextChapter ? (
            <Link
              href={`/chapters/${nextChapter.slug}`}
              className="flex items-center gap-1.5 px-4 py-2 bg-white text-black font-black text-xs uppercase border border-black shadow-[2px_2px_0_#000] hover:bg-neutral-200 transition-all"
            >
              <span>NEXT: FILE 0{nextChapter.number}</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          ) : (
            <div className="bg-black text-white p-3 border border-neutral-700 font-bold text-xs flex items-center gap-2">
              <Lock className="w-4 h-4" /> RESTRICTED FILE 04 RELEASING FRIDAY
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
