import React from "react";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { WorldMap } from "@/components/WorldMap";
import { NOVEL_META } from "@/data/novelData";
import { ShieldAlert, Radio } from "lucide-react";

export const metadata: Metadata = {
  title: `Radar Surveillance Map | ${NOVEL_META.title}`,
  description: `Inspect radar surveillance maps of the divided city. Navigate Tier 0 Sub-Grid sectors and Tier 1 Stratum heights.`,
};

export default function MapPage() {
  return (
    <div className="min-h-screen bg-[#d8d6d0] text-neutral-900 flex flex-col font-mono relative">
      <div className="fixed inset-0 bg-grain pointer-events-none opacity-30 z-50" />
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full z-10 relative">
        {/* Banner */}
        <div className="bg-[#121212] text-white border-2 border-neutral-700 p-6 sm:p-8 shadow-[6px_6px_0_#000] mb-8 relative">
          <div className="space-y-2">
            <span className="bg-black text-neutral-300 font-bold text-xs px-2.5 py-1 uppercase border border-neutral-600 inline-block">
              RADAR SURVEILLANCE ROOM
            </span>
            <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-wider text-white">
              DIVIDED CITY RADAR FEED
            </h1>
            <p className="text-neutral-400 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Inspect both subterranean Sector 4 (Tier 0) and high-altitude Stratum heights (Tier 1). Discover hidden frequency ciphers and classified faction records.
            </p>
          </div>
        </div>

        {/* Radar Map Component */}
        <WorldMap />

        {/* Sector Recon Guide */}
        <section className="my-12 bg-white border-2 border-black p-6 sm:p-8 shadow-[4px_4px_0_#000]">
          <h2 className="text-xl font-black uppercase italic mb-4 text-black border-b border-black pb-2 flex items-center gap-2 tracking-wide">
            <Radio className="w-5 h-5 text-black" /> RECONNAISSANCE SECTOR ANALYSIS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="bg-[#e8e6e0] border border-black p-4 space-y-2">
              <h3 className="font-black text-black text-base uppercase tracking-wide">
                TIER 0: SUB-GRID (-120M)
              </h3>
              <p className="text-neutral-800 leading-relaxed font-mono">
                Located 120 meters beneath Stratum steel pylons. Smog-choked, powered by leaking vacuum tube generators and illegal radio relays. Home to the Wiretappers Union and subterranean clinics.
              </p>
            </div>

            <div className="bg-[#e8e6e0] border border-black p-4 space-y-2">
              <h3 className="font-black text-black text-base uppercase tracking-wide">
                TIER 1: THE STRATUM (+800M)
              </h3>
              <p className="text-neutral-800 leading-relaxed font-mono">
                Suspended high above the clouds by electromagnetic Chrono-Pylons. Enjoys artificial daylight, scrubbed ozone air, and unlimited electricity drained directly from lower sector grids.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
