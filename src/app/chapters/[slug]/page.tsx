"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { CHAPTERS, Chapter, NOVEL_META } from "@/data/novelData";
import { generateChapterJsonLd } from "@/lib/jsonld";
import { BookOpen, ChevronLeft, ChevronRight, Bookmark, Sun, Moon, Type, Radio, Lock } from "lucide-react";

export default function ChapterReaderPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const chapter = CHAPTERS.find((c) => c.slug === resolvedParams.slug);

  if (!chapter) {
    notFound();
  }

  const [fontSize, setFontSize] = useState<"sm" | "base" | "lg">("base");
  const [theme, setTheme] = useState<"vintage" | "dark" | "newsprint">("vintage");
  const [bookmarked, setBookmarked] = useState(false);

  const currentIndex = CHAPTERS.findIndex((c) => c.slug === chapter.slug);
  const prevChapter = currentIndex > 0 ? CHAPTERS[currentIndex - 1] : null;
  const nextChapter = currentIndex < CHAPTERS.length - 1 ? CHAPTERS[currentIndex + 1] : null;

  const jsonLd = generateChapterJsonLd(chapter.slug);

  return (
    <div
      className={`min-h-screen flex flex-col font-sans transition-colors duration-200 ${
        theme === "dark"
          ? "bg-slate-950 text-slate-100"
          : theme === "newsprint"
          ? "bg-[#e8e2ce] text-slate-900"
          : "bg-[#fbf7ee] text-slate-900"
      }`}
    >
      {/* Schema.org JSON-LD */}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}

      <Navbar />

      {/* Reader Control Toolbar */}
      <div className="sticky top-[68px] z-40 bg-black text-white border-b-4 border-black py-2 px-4 shadow-[0_4px_0_#000]">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2">
            <Link
              href="/chapters"
              className="flex items-center gap-1 text-cyan-400 font-bold hover:underline"
            >
              <ChevronLeft className="w-4 h-4" /> CHAPTERS
            </Link>
            <span className="text-slate-600">|</span>
            <span className="font-bold text-amber-400">CH {chapter.number}</span>
          </div>

          {/* Reader Preferences Buttons */}
          <div className="flex items-center gap-3">
            {/* Font Size Adjust */}
            <div className="flex items-center gap-1 bg-slate-800 p-1 border border-slate-700">
              <Type className="w-3.5 h-3.5 text-slate-400 ml-1" />
              <button
                onClick={() => setFontSize("sm")}
                className={`px-1.5 py-0.5 ${fontSize === "sm" ? "bg-amber-400 text-black font-bold" : "text-slate-300"}`}
              >
                A-
              </button>
              <button
                onClick={() => setFontSize("base")}
                className={`px-1.5 py-0.5 ${fontSize === "base" ? "bg-amber-400 text-black font-bold" : "text-slate-300"}`}
              >
                A
              </button>
              <button
                onClick={() => setFontSize("lg")}
                className={`px-1.5 py-0.5 ${fontSize === "lg" ? "bg-amber-400 text-black font-bold" : "text-slate-300"}`}
              >
                A+
              </button>
            </div>

            {/* Theme Selector */}
            <div className="flex items-center gap-1 bg-slate-800 p-1 border border-slate-700">
              <button
                onClick={() => setTheme("vintage")}
                className={`px-2 py-0.5 font-bold ${theme === "vintage" ? "bg-[#ffd500] text-black" : "text-slate-300"}`}
              >
                VINTAGE
              </button>
              <button
                onClick={() => setTheme("dark")}
                className={`px-2 py-0.5 font-bold ${theme === "dark" ? "bg-[#00e5ff] text-black" : "text-slate-300"}`}
              >
                DARK
              </button>
            </div>

            {/* Bookmark Trigger */}
            <button
              onClick={() => setBookmarked(!bookmarked)}
              className={`p-1.5 border ${
                bookmarked
                  ? "bg-[#ff2a5f] text-white border-black"
                  : "bg-slate-800 text-slate-300 border-slate-700 hover:text-white"
              }`}
              title="Save Reader Bookmark"
            >
              <Bookmark className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Chapter Content Container */}
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 py-10 w-full">
        {/* Chapter Header Card */}
        <header className="mb-10 text-center border-b-4 border-black pb-8">
          <div className="inline-flex items-center gap-2 bg-black text-cyan-400 font-mono text-xs font-bold px-3 py-1 border-2 border-black shadow-[2px_2px_0_#00e5ff] mb-4">
            <Radio className="w-4 h-4 text-red-500 animate-pulse" />
            <span>SERIAL TRANSMISSION NO. 0{chapter.number}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase italic tracking-tight mb-2">
            {chapter.title}
          </h1>

          <p className="font-mono text-base sm:text-lg font-bold text-slate-600 dark:text-cyan-400 italic">
            "{chapter.subtitle}"
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
            <span className="bg-amber-300 text-black px-2.5 py-1 border border-black font-bold">
              RELEASED: {chapter.releaseDate}
            </span>
            <span className="bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-2.5 py-1 border border-black font-bold">
              {chapter.wordCount} WORDS
            </span>
          </div>
        </header>

        {/* Chapter Prose Text */}
        <article
          className={`space-y-6 font-mono leading-relaxed transition-all ${
            fontSize === "sm" ? "text-sm" : fontSize === "lg" ? "text-lg sm:text-xl" : "text-base sm:text-lg"
          }`}
        >
          {chapter.content.map((paragraph, index) => (
            <p
              key={index}
              className={`p-4 border-l-4 ${
                theme === "dark"
                  ? "border-cyan-500 bg-slate-900/80"
                  : "border-black bg-amber-50/50"
              }`}
            >
              {index === 0 && (
                <span className="text-3xl font-black text-[#ff2a5f] mr-1 float-left leading-none uppercase">
                  {paragraph.charAt(0)}
                </span>
              )}
              {index === 0 ? paragraph.slice(1) : paragraph}
            </p>
          ))}
        </article>

        {/* Cipher Hint Banner if attached */}
        {chapter.cipherHint && (
          <div className="my-8 bg-amber-300 text-black border-4 border-black p-5 shadow-[6px_6px_0_#000] font-mono text-xs font-bold">
            <span className="text-red-600 block uppercase font-black text-sm mb-1">
              🔑 SECRET CIPHER CLUE DISCOVERED IN THIS TRANSMISSION:
            </span>
            <p>{chapter.cipherHint}</p>
          </div>
        )}

        {/* Chapter Bottom Navigation Bar */}
        <div className="mt-12 pt-8 border-t-4 border-black flex flex-wrap items-center justify-between gap-4 font-mono">
          {prevChapter ? (
            <Link
              href={`/chapters/${prevChapter.slug}`}
              className="flex items-center gap-1.5 px-4 py-2 bg-white dark:bg-slate-800 text-black dark:text-white font-black text-xs uppercase border-2 border-black shadow-[3px_3px_0_#000] hover:bg-cyan-300 transition-all"
            >
              <ChevronLeft className="w-4 h-4" /> PREV: CH {prevChapter.number}
            </Link>
          ) : (
            <div />
          )}

          {nextChapter ? (
            <Link
              href={`/chapters/${nextChapter.slug}`}
              className="flex items-center gap-1.5 px-4 py-2 bg-[#00e5ff] text-black font-black text-xs uppercase border-2 border-black shadow-[3px_3px_0_#000] hover:bg-cyan-300 transition-all"
            >
              <span>NEXT: CH {nextChapter.number}</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          ) : (
            <div className="bg-slate-900 text-amber-400 p-3 border-2 border-black font-bold text-xs flex items-center gap-2">
              <Lock className="w-4 h-4" /> CHAPTER 4 RELEASES THIS FRIDAY!
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
