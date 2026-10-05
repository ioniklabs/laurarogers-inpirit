import React from "react";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { CipherDecoder } from "@/components/CipherDecoder";
import { DOSSIERS, NOVEL_META } from "@/data/novelData";
import { Shield, FileText, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: `Classified Codex & Cipher Decoder | ${NOVEL_META.title}`,
  description: `Access restricted subject dossiers, faction records, and decrypt government frequency ciphers for ${NOVEL_META.title}.`,
};

export default function CodexPage() {
  return (
    <div className="min-h-screen bg-[#d8d6d0] text-neutral-900 flex flex-col font-mono relative">
      <div className="fixed inset-0 bg-grain pointer-events-none opacity-30 z-50" />
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full z-10 relative">
        {/* Banner */}
        <div className="bg-[#121212] text-white border-2 border-neutral-700 p-6 sm:p-8 shadow-[6px_6px_0_#000] mb-8 relative">
          <div className="space-y-2">
            <span className="bg-black text-neutral-300 font-bold text-xs px-2.5 py-1 uppercase border border-neutral-600 inline-block">
              INTELLIGENCE VAULT ARCHIVE
            </span>
            <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-wider text-white">
              WORLD CODEX & FREQUENCY CIPHER UNIT
            </h1>
            <p className="text-neutral-400 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Review subject dossiers, faction profiles, and vacuum engine schematics. Enter intercepted cipher keys to decrypt government audio logs.
            </p>
          </div>
        </div>

        {/* Cipher Decoder Terminal */}
        <CipherDecoder />

        {/* Dossiers Grid */}
        <section className="my-12">
          <h2 className="text-xl font-black uppercase italic mb-6 text-black border-b-2 border-black pb-2 flex items-center gap-2 tracking-wide">
            <FileText className="w-5 h-5 text-black" /> RESTRICTED SUBJECT DOSSIERS ({DOSSIERS.length})
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DOSSIERS.map((dossier) => (
              <div
                key={dossier.id}
                className="dossier-box p-6 flex flex-col justify-between hover:translate-y-[-2px] transition-all"
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

                  <h3 className="text-lg font-black text-black uppercase italic mt-1 tracking-wide">
                    {dossier.name}
                  </h3>
                  <p className="text-xs font-bold text-neutral-700 mb-3">
                    {dossier.role}
                  </p>

                  <p className="text-xs text-neutral-800 leading-relaxed bg-[#e8e6e0] p-3 border border-neutral-400 mb-3 font-mono">
                    {dossier.bio}
                  </p>

                  <blockquote className="text-xs italic text-neutral-900 bg-neutral-200 p-2.5 border-l-4 border-black font-mono">
                    {dossier.quote}
                  </blockquote>
                </div>

                <div className="mt-4 pt-3 border-t border-black text-[10px] font-mono text-neutral-600 flex justify-between">
                  <span>REF ID: {dossier.id}</span>
                  {dossier.requiredCipher && (
                    <span className="text-black font-bold flex items-center gap-1">
                      <Lock className="w-3 h-3" /> CIPHER REQUIRED
                    </span>
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
