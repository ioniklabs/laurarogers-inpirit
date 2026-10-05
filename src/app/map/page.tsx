import React from "react";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { WorldMap } from "@/components/WorldMap";
import { NOVEL_META } from "@/data/novelData";
import { MapPin, ShieldAlert, Radio } from "lucide-react";

export const metadata: Metadata = {
  title: `Interactive Two-Tiered Map | ${NOVEL_META.title}`,
  description: `Explore the dual-level map of the dystopian 1964 city. Navigate Tier 0 Sub-Grid slums and Tier 1 Stratum skyline.`,
};

export default function MapPage() {
  return (
    <div className="min-h-screen bg-[#fbf7ee] text-slate-900 flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Header Title Banner */}
        <div className="bg-slate-950 text-white border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0_#00e5ff] mb-8 relative">
          <div className="absolute inset-0 bg-halftone-cyan pointer-events-none" />

          <div className="relative z-10 space-y-2">
            <span className="bg-[#ff2a5f] text-white font-mono font-black text-xs px-2.5 py-1 uppercase border border-black inline-block">
              TACTICAL MAP ROOM
            </span>
            <h1 className="text-3xl sm:text-5xl font-black uppercase italic tracking-tight text-white">
              THE TWO-TIERED CITY SYSTEM
            </h1>
            <p className="font-mono text-cyan-400 text-sm max-w-2xl">
              Inspect both subterranean Sector 4 (Tier 0) and high-altitude Stratum heights (Tier 1). Discover hidden frequency ciphers and classified faction records.
            </p>
          </div>
        </div>

        {/* Full Interactive World Map Component */}
        <WorldMap />

        {/* Region Guide & Lore Information */}
        <section className="my-12 bg-white border-4 border-black p-6 sm:p-8 shadow-[6px_6px_0_#000]">
          <h2 className="text-2xl font-black uppercase italic mb-4 text-black border-b-2 border-black pb-2 flex items-center gap-2">
            <Radio className="w-6 h-6 text-red-600" /> TACTICAL RECONNAISSANCE GUIDE
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs sm:text-sm">
            <div className="bg-red-50 border-2 border-black p-4 space-y-2">
              <h3 className="font-black text-red-700 text-base uppercase">
                TIER 0: THE SUB-GRID (UNDERGROUND)
              </h3>
              <p className="text-slate-800 leading-relaxed">
                Located 120 meters beneath the Stratum steel pylons. Smog-choked, powered by leaking vacuum tube generators and illegal radio relays. Home to the Wiretappers Union and subterranean clinics.
              </p>
            </div>

            <div className="bg-cyan-50 border-2 border-black p-4 space-y-2">
              <h3 className="font-black text-cyan-800 text-base uppercase">
                TIER 1: THE STRATUM (HEIGHTS)
              </h3>
              <p className="text-slate-800 leading-relaxed">
                Suspended high above the clouds by electromagnetic Chrono-Pylons. Enjoys artificial daylight, scrubbed ozone air, and unlimited electricity drained directly from lower sector grids.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
