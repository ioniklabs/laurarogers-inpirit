"use client";

import React, { useState } from "react";
import { MAP_LOCATIONS, MapLocation } from "@/data/novelData";
import { MapPin, AlertTriangle, Shield, Key, Radio, Info, Layers } from "lucide-react";

export function WorldMap() {
  const [activeTier, setActiveTier] = useState<0 | 1>(0); // 0 = Sub-Grid, 1 = Stratum
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(
    MAP_LOCATIONS.find((loc) => loc.tier === 0) || null
  );

  const filteredLocations = MAP_LOCATIONS.filter((loc) => loc.tier === activeTier);

  return (
    <section className="my-8 bg-slate-950 text-white border-4 border-black p-4 sm:p-6 shadow-[8px_8px_0_#000] relative">
      {/* Halftone BG Accent */}
      <div className={`absolute inset-0 pointer-events-none ${activeTier === 0 ? 'bg-halftone-red' : 'bg-halftone-cyan'}`} />

      {/* Map Control Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b-4 border-black pb-4 mb-6">
        <div>
          <span className="bg-[#ffd500] text-black font-black text-xs px-2.5 py-1 uppercase border-2 border-black shadow-[2px_2px_0_#000]">
            CARTOGRAPHY ARCHIVE
          </span>
          <h2 className="text-2xl sm:text-3xl font-black uppercase italic tracking-tight text-white mt-1">
            THE DIVIDED CITY MAP
          </h2>
        </div>

        {/* Tier Switcher Controls */}
        <div className="flex items-center gap-2 bg-slate-900 p-1.5 border-3 border-black shadow-[3px_3px_0_#000]">
          <button
            onClick={() => {
              setActiveTier(0);
              setSelectedLocation(MAP_LOCATIONS.find((loc) => loc.tier === 0) || null);
            }}
            className={`flex items-center gap-1.5 px-4 py-2 font-black text-xs sm:text-sm uppercase border-2 border-black transition-all cursor-pointer ${
              activeTier === 0
                ? "bg-[#ff2a5f] text-white shadow-[2px_2px_0_#000]"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            <Layers className="w-4 h-4" />
            TIER 0: SUB-GRID (UNDERGROUND)
          </button>

          <button
            onClick={() => {
              setActiveTier(1);
              setSelectedLocation(MAP_LOCATIONS.find((loc) => loc.tier === 1) || null);
            }}
            className={`flex items-center gap-1.5 px-4 py-2 font-black text-xs sm:text-sm uppercase border-2 border-black transition-all cursor-pointer ${
              activeTier === 1
                ? "bg-[#00e5ff] text-black shadow-[2px_2px_0_#000]"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            <Layers className="w-4 h-4" />
            TIER 1: THE STRATUM (HEIGHTS)
          </button>
        </div>
      </div>

      {/* Dual Column Layout: Map Graphic Canvas + Location Details */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Map Graphic Canvas */}
        <div className="lg:col-span-2 relative min-h-[380px] sm:min-h-[440px] bg-slate-900 border-4 border-black p-4 overflow-hidden shadow-[6px_6px_0_#000] flex flex-col justify-between">

          {/* Map Grid Lines Overlay */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(${activeTier === 0 ? '#ff2a5f' : '#00e5ff'} 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          />

          {/* Active Tier Watermark Badge */}
          <div className="absolute top-4 left-4 z-10 bg-black/80 border-2 border-black p-2 text-xs font-mono">
            <span className={activeTier === 0 ? "text-red-400 font-bold" : "text-cyan-400 font-bold"}>
              CURRENT TIER: {activeTier === 0 ? "TIER 0 [SUB-GRID LEVEL -120M]" : "TIER 1 [STRATUM LEVEL +800M]"}
            </span>
          </div>

          {/* Hotspot Pins Rendered dynamically */}
          <div className="relative w-full h-[320px] sm:h-[380px] my-auto border-2 border-dashed border-slate-700 bg-slate-950/80">
            {filteredLocations.map((loc) => {
              const isSelected = selectedLocation?.id === loc.id;
              return (
                <button
                  key={loc.id}
                  onClick={() => setSelectedLocation(loc)}
                  style={{ left: `${loc.coordinates.x}%`, top: `${loc.coordinates.y}%` }}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 group transition-transform ${
                    isSelected ? "scale-125 z-30" : "hover:scale-110 z-20"
                  }`}
                >
                  <div
                    className={`flex items-center gap-1.5 px-2.5 py-1 font-mono text-xs font-black uppercase border-2 border-black shadow-[2px_2px_0_#000] ${
                      isSelected
                        ? activeTier === 0
                          ? "bg-[#ff2a5f] text-white"
                          : "bg-[#00e5ff] text-black"
                        : "bg-amber-300 text-black"
                    }`}
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{loc.name}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Map Footer Note */}
          <div className="relative z-10 flex items-center justify-between text-xs font-mono text-slate-400 border-t border-slate-800 pt-2">
            <span>[CLICK LOCATIONS TO INSPECT CLASSIFIED FILES]</span>
            <span>RADAR FREQ: 98.4 MHZ</span>
          </div>
        </div>

        {/* Location Info Drawer Box */}
        <div className="bg-slate-900 border-4 border-black p-5 shadow-[6px_6px_0_#000] flex flex-col justify-between">
          {selectedLocation ? (
            <div className="space-y-4">
              <div className="border-b-2 border-slate-800 pb-3">
                <span className="bg-amber-400 text-black font-black text-[10px] px-2 py-0.5 uppercase border border-black">
                  CLASSIFIED LOCATION FILE
                </span>
                <h3 className="text-xl font-black text-white uppercase italic mt-1">
                  {selectedLocation.name}
                </h3>
                <p className="text-xs font-mono text-cyan-400 mt-0.5 italic">
                  "{selectedLocation.tagline}"
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase font-mono text-slate-400 mb-1">
                  OVERVIEW & INTEL
                </h4>
                <p className="text-xs font-mono text-slate-300 leading-relaxed bg-slate-950 p-3 border border-slate-800">
                  {selectedLocation.description}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-2 text-xs font-mono">
                <div className="bg-red-950/60 border border-red-800 p-2.5 text-red-200">
                  <div className="flex items-center gap-1.5 font-bold uppercase text-red-400 mb-0.5">
                    <AlertTriangle className="w-3.5 h-3.5" /> DANGERS & HAZARDS
                  </div>
                  {selectedLocation.dangers}
                </div>

                <div className="bg-slate-950 border border-slate-800 p-2.5 text-slate-300">
                  <div className="flex items-center gap-1.5 font-bold uppercase text-amber-400 mb-0.5">
                    <Shield className="w-3.5 h-3.5" /> DOMINANT FACTION
                  </div>
                  {selectedLocation.keyFaction}
                </div>
              </div>

              {selectedLocation.cipherCode && (
                <div className="bg-yellow-300 text-black border-2 border-black p-3 font-mono text-xs font-bold shadow-[2px_2px_0_#000]">
                  <div className="flex items-center gap-1 text-red-600 mb-0.5">
                    <Key className="w-3.5 h-3.5" /> SECRET FREQUENCY CIPHER:
                  </div>
                  <span className="bg-black text-cyan-400 px-2 py-0.5 text-sm">
                    {selectedLocation.cipherCode}
                  </span>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center my-auto py-12 text-slate-500 font-mono text-xs">
              <Info className="w-8 h-8 mx-auto mb-2 opacity-50" />
              SELECT A MAP NODE TO VIEW CLASSIFIED INTEL
            </div>
          )}

          <div className="mt-4 pt-3 border-t border-slate-800 text-[10px] font-mono text-slate-500 text-right">
            GRID DATA REF: NOVEL ISSUE #0-4
          </div>
        </div>
      </div>

      {/* Crawlable Fallback List for SEO Crawlers */}
      <div className="mt-8 pt-6 border-t-2 border-slate-800 text-slate-400 font-mono text-xs">
        <h4 className="font-bold text-white uppercase mb-2">
          SEO DIRECTORY OF ALL WORLD LOCATIONS:
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {MAP_LOCATIONS.map((loc) => (
            <div key={`seo-${loc.id}`} className="bg-slate-900 p-3 border border-slate-800">
              <strong className="text-cyan-400 block">{loc.name} (Tier {loc.tier})</strong>
              <p className="mt-1 text-[11px]">{loc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
