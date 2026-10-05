import React from "react";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { CipherDecoder } from "@/components/CipherDecoder";
import { DOSSIERS, NOVEL_META } from "@/data/novelData";
import { Key, Shield, Radio, Sparkles, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: `World Codex & Cipher Decoder | ${NOVEL_META.title}`,
  description: `Access classified dossiers, faction profiles, and decrypt high-frequency ciphers from ${NOVEL_META.title}.`,
};

export default function CodexPage() {
  return (
    <div className="min-h-screen bg-[#fbf7ee] text-slate-900 flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Header Title Banner */}
        <div className="bg-[#ff2a5f] text-white border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0_#000] mb-8 relative">
          <div className="absolute inset-0 bg-halftone pointer-events-none" />

          <div className="relative z-10 space-y-2">
            <span className="bg-[#ffd500] text-black font-mono font-black text-xs px-2.5 py-1 uppercase border border-black inline-block">
              CLASSIFIED DOSSIER VAULT
            </span>
            <h1 className="text-3xl sm:text-5xl font-black uppercase italic tracking-tight text-white">
              WORLD CODEX & FREQUENCY CIPHER ROOM
            </h1>
            <p className="font-mono text-amber-200 text-sm max-w-2xl font-bold">
              Explore character files, faction records, and high-tech vacuum apparatus specs. Enter hidden ciphers found in the novel to unlock classified intel!
            </p>
          </div>
        </div>

        {/* Interactive Cipher Decoder Module */}
        <CipherDecoder />

        {/* Dossiers Directory Section */}
        <section className="my-12">
          <h2 className="text-2xl font-black uppercase italic mb-6 text-black border-b-4 border-black pb-2 flex items-center gap-2">
            <FileText className="w-6 h-6 text-red-600" /> ALL WORLD DOSSIERS ({DOSSIERS.length})
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DOSSIERS.map((dossier) => (
              <div
                key={dossier.id}
                className="bg-white border-4 border-black p-6 shadow-[6px_6px_0_#000] flex flex-col justify-between hover:translate-y-[-2px] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-black text-cyan-400 font-mono text-[10px] font-bold px-2 py-0.5 border border-black uppercase">
                      {dossier.category}
                    </span>
                    <span className="bg-amber-300 text-black font-mono font-bold text-[10px] px-2 py-0.5 border border-black uppercase">
                      {dossier.tierAffiliation}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-black uppercase italic mt-1">
                    {dossier.name}
                  </h3>
                  <p className="text-xs font-mono font-bold text-cyan-700 mb-3">
                    {dossier.role}
                  </p>

                  <p className="font-mono text-xs text-slate-800 leading-relaxed bg-[#fbf7ee] p-3 border-2 border-black mb-3">
                    {dossier.bio}
                  </p>

                  <blockquote className="font-mono text-xs italic text-red-900 bg-amber-100 p-2.5 border-l-4 border-red-600">
                    {dossier.quote}
                  </blockquote>
                </div>

                <div className="mt-4 pt-3 border-t-2 border-black text-[10px] font-mono text-slate-500 flex justify-between">
                  <span>FILE REF ID: {dossier.id}</span>
                  {dossier.requiredCipher && (
                    <span className="text-red-600 font-bold">🔒 CIPHER REQUIRED</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
