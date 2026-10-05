"use client";

import React, { useState } from "react";
import { MAP_LOCATIONS, MapLocation } from "@/data/novelData";
import { MapPin, AlertTriangle, Shield, Key, Layers, Radio, Info } from "lucide-react";

export function WorldMap() {
  const [activeTier, setActiveTier] = useState<0 | 1>(0);
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(
    MAP_LOCATIONS.find((loc) => loc.tier === 0) || null
  );

  const filteredLocations = MAP_LOCATIONS.filter((loc) => loc.tier === activeTier);

  return (
    <section className="my-8 bg-[#121212] text-white border-2 border-neutral-600 p-4 sm:p-6 shadow-[6px_6px_0_#000] relative font-mono">
      {/* Background Grain */}
      <div className="absolute inset-0 bg-grain-dark pointer-events-none opacity-40" />

      {/* Control Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-neutral-700 pb-4 mb-6">
        <div>
          <span className="bg-[#000000] text-neutral-300 font-bold text-xs px-2.5 py-1 uppercase border border-neutral-600">
            CARTOGRAPHY SURVEILLANCE
          </span>
          <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-white mt-1">
            DIVIDED CITY RADAR SYSTEM
          </h2>
        </div>

        {/* Tier Controls */}
        <div className="flex items-center gap-2 bg-neutral-900 p-1.5 border border-neutral-700">
          <button
            onClick={() => {
              setActiveTier(0);
              setSelectedLocation(MAP_LOCATIONS.find((loc) => loc.tier === 0) || null);
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 font-bold text-xs uppercase border transition-all cursor-pointer ${
              activeTier === 0
                ? "bg-white text-black border-black shadow-[2px_2px_0_#000]"
                : "bg-neutral-800 text-neutral-400 border-neutral-700 hover:bg-neutral-700"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            TIER 0: SUB-GRID (-120M)
          </button>

          <button
            onClick={() => {
              setActiveTier(1);
              setSelectedLocation(MAP_LOCATIONS.find((loc) => loc.tier === 1) || null);
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 font-bold text-xs uppercase border transition-all cursor-pointer ${
              activeTier === 1
                ? "bg-white text-black border-black shadow-[2px_2px_0_#000]"
                : "bg-neutral-800 text-neutral-400 border-neutral-700 hover:bg-neutral-700"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            TIER 1: STRATUM (+800M)
          </button>
        </div>
      </div>

      {/* Map Layout */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Radar Graphic Canvas */}
        <div className="lg:col-span-2 relative min-h-[380px] sm:min-h-[440px] bg-black border-2 border-neutral-700 p-4 overflow-hidden shadow-[4px_4px_0_#000] flex flex-col justify-between">

          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          />

          <div className="absolute top-4 left-4 z-10 bg-neutral-900 border border-neutral-700 p-2 text-xs font-mono">
            <span className="text-neutral-300 font-bold">
              RADAR LOCK: {activeTier === 0 ? "TIER 0 [SUB-GRID LEVEL]" : "TIER 1 [STRATUM LEVEL]"}
            </span>
          </div>

          <div className="relative w-full h-[320px] sm:h-[380px] my-auto border border-dashed border-neutral-800 bg-neutral-950">
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
                    className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold uppercase border shadow-[2px_2px_0_#000] ${
                      isSelected
                        ? "bg-white text-black border-black"
                        : "bg-neutral-800 text-neutral-300 border-neutral-600"
                    }`}
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{loc.name}</span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-neutral-400 border-t border-neutral-800 pt-2">
            <span>[SELECT SECTOR MARKER TO VIEW CLASSIFIED DOSSIER]</span>
            <span>FREQ: 98.4 MHZ</span>
          </div>
        </div>

        {/* Intelligence Drawer Box */}
        <div className="bg-neutral-900 border-2 border-neutral-700 p-5 shadow-[4px_4px_0_#000] flex flex-col justify-between">
          {selectedLocation ? (
            <div className="space-y-4">
              <div className="border-b border-neutral-700 pb-3">
                <span className="bg-black text-neutral-400 font-bold text-[10px] px-2 py-0.5 uppercase border border-neutral-700">
                  SECTOR DOSSIER FILE
                </span>
                <h3 className="text-lg font-black text-white uppercase italic mt-1 tracking-wide">
                  {selectedLocation.name}
                </h3>
                <p className="text-xs text-neutral-400 italic">
                  "{selectedLocation.tagline}"
                </p>
              </div>

              <div>
                <h4 className="text-[11px] font-bold uppercase text-neutral-400 mb-1">
                  TACTICAL OVERVIEW
                </h4>
                <p className="text-xs text-neutral-300 leading-relaxed bg-black p-3 border border-neutral-800">
                  {selectedLocation.description}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-2 text-xs">
                <div className="bg-black border border-neutral-800 p-2.5 text-neutral-300">
                  <div className="flex items-center gap-1.5 font-bold uppercase text-neutral-400 mb-0.5">
                    <AlertTriangle className="w-3.5 h-3.5" /> THREAT ASSESSMENT
                  </div>
                  {selectedLocation.dangers}
                </div>

                <div className="bg-black border border-neutral-800 p-2.5 text-neutral-300">
                  <div className="flex items-center gap-1.5 font-bold uppercase text-neutral-400 mb-0.5">
                    <Shield className="w-3.5 h-3.5" /> DOMINANT FACTION
                  </div>
                  {selectedLocation.keyFaction}
                </div>
              </div>

              {selectedLocation.cipherCode && (
                <div className="bg-neutral-800 text-white border border-neutral-500 p-3 text-xs font-bold">
                  <div className="flex items-center gap-1 text-neutral-300 mb-0.5">
                    <Key className="w-3.5 h-3.5" /> CLASSIFIED CIPHER KEY:
                  </div>
                  <span className="bg-black text-white px-2 py-0.5 border border-neutral-700">
                    {selectedLocation.cipherCode}
                  </span>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center my-auto py-12 text-neutral-500 text-xs">
              <Info className="w-8 h-8 mx-auto mb-2 opacity-50" />
              SELECT SECTOR TO VIEW INTEL
            </div>
          )}

          <div className="mt-4 pt-3 border-t border-neutral-800 text-[10px] text-neutral-500 text-right">
            FILE REF: SURVEILLANCE LOG #004
          </div>
        </div>
      </div>

      {/* Crawlable Fallback Directory for SEO */}
      <div className="mt-8 pt-6 border-t border-neutral-800 text-neutral-400 text-xs">
        <h4 className="font-bold text-white uppercase mb-2">
          SEO DIRECTORY OF ALL WORLD LOCATIONS:
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {MAP_LOCATIONS.map((loc) => (
            <div key={`seo-${loc.id}`} className="bg-black p-3 border border-neutral-800">
              <strong className="text-white block">{loc.name} (Tier {loc.tier})</strong>
              <p className="mt-1 text-[11px] text-neutral-400">{loc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
