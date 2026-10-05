"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Radio, MapPin, BookOpen, Layers, Key, Zap, Bell, X } from "lucide-react";

export function Navbar() {
  const [showVIPModal, setShowVIPModal] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <>
      {/* Top Ticker Notification Banner */}
      <div className="bg-black text-amber-400 text-xs py-1 px-4 font-mono border-b-2 border-black flex items-center justify-between overflow-x-hidden">
        <div className="flex items-center gap-2 animate-pulse">
          <span className="bg-red-600 text-white text-[10px] px-1.5 py-0.5 font-bold uppercase rounded-none">
            LIVE BROADCAST
          </span>
          <span>NEW SERIAL CHAPTER RELEASED EVERY FRIDAY • CHAPTER 1 & 2 NOW FREE TO READ</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-slate-300">
          <span>FREQ: 104.2 MHZ</span>
          <span className="text-cyan-400 font-bold">GRID TIER: 0 & 1 ACTIVE</span>
        </div>
      </div>

      {/* Main Comic Pop Header */}
      <header className="sticky top-0 z-50 bg-[#ffd500] border-b-4 border-black shadow-[0_4px_0_#000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">

          {/* Logo Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-black text-cyan-400 p-2 font-black text-2xl border-2 border-black shadow-[2px_2px_0_#00e5ff] group-hover:scale-105 transition-transform">
              1964
            </div>
            <div>
              <span className="block text-xl sm:text-2xl font-black text-black tracking-tight leading-none uppercase italic">
                CHRONO-CLASS
              </span>
              <span className="text-xs font-mono text-black font-bold uppercase tracking-wider bg-white px-1 border border-black">
                DYSTOPIAN SERIAL
              </span>
            </div>
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-2 font-black text-sm">
            <Link
              href="/chapters"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-black border-2 border-black shadow-[2px_2px_0_#000] hover:bg-cyan-300 hover:translate-y-[-2px] transition-all"
            >
              <BookOpen className="w-4 h-4" />
              <span>CHAPTERS</span>
            </Link>

            <Link
              href="/map"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-black border-2 border-black shadow-[2px_2px_0_#000] hover:bg-cyan-300 hover:translate-y-[-2px] transition-all"
            >
              <MapPin className="w-4 h-4" />
              <span>WORLD MAP</span>
            </Link>

            <Link
              href="/comic"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-black border-2 border-black shadow-[2px_2px_0_#000] hover:bg-cyan-300 hover:translate-y-[-2px] transition-all"
            >
              <Layers className="w-4 h-4" />
              <span>WEB COMIC</span>
            </Link>

            <Link
              href="/codex"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-black border-2 border-black shadow-[2px_2px_0_#000] hover:bg-cyan-300 hover:translate-y-[-2px] transition-all"
            >
              <Key className="w-4 h-4" />
              <span>CODEX & CIPHER</span>
            </Link>
          </nav>

          {/* Action Callout */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowVIPModal(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#ff2a5f] text-white font-black text-xs sm:text-sm border-2 border-black shadow-[3px_3px_0_#000] hover:bg-red-600 hover:scale-105 transition-all cursor-pointer"
            >
              <Radio className="w-4 h-4 animate-spin" />
              <span>TRANSMISSION VIP</span>
            </button>
          </div>
        </div>

        {/* Mobile Nav Bar Strip */}
        <div className="md:hidden flex items-center justify-around bg-black text-white text-xs font-bold py-2 border-t border-black">
          <Link href="/chapters" className="flex items-center gap-1 hover:text-amber-400">
            <BookOpen className="w-3.5 h-3.5" /> Read
          </Link>
          <Link href="/map" className="flex items-center gap-1 hover:text-cyan-400">
            <MapPin className="w-3.5 h-3.5" /> Map
          </Link>
          <Link href="/comic" className="flex items-center gap-1 hover:text-amber-400">
            <Layers className="w-3.5 h-3.5" /> Comic
          </Link>
          <Link href="/codex" className="flex items-center gap-1 hover:text-red-400">
            <Key className="w-3.5 h-3.5" /> Codex
          </Link>
        </div>
      </header>

      {/* Transmission VIP Modal */}
      {showVIPModal && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-[#fbf7ee] border-4 border-black p-6 max-w-md w-full shadow-[8px_8px_0_#ff2a5f] relative">
            <button
              onClick={() => setShowVIPModal(false)}
              className="absolute top-3 right-3 p-1 bg-black text-white hover:bg-red-600 border border-black font-bold"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3 text-red-600 font-mono text-xs font-bold uppercase">
              <Zap className="w-4 h-4" /> Sub-Grid Pirate Signal
            </div>

            <h3 className="text-2xl font-black text-black uppercase italic mb-2">
              Join The Wiretapper Circuit
            </h3>

            <p className="text-sm font-mono text-slate-800 mb-4 leading-relaxed">
              Subscribe to receive weekly chapter alerts, exclusive cipher keys, and 24-hour early access to Chapter 4 before Stratum enforcers intercept the wire!
            </p>

            {subscribed ? (
              <div className="bg-emerald-200 border-2 border-black p-4 text-emerald-950 font-bold font-mono text-sm text-center">
                ✓ SIGNAL ESTABLISHED! Check your inbox for the secret transmission key (CIPHER: SUBGRID-VIP).
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div>
                  <label className="block text-xs font-bold uppercase font-mono mb-1 text-black">
                    Frequency Audio Receiver (Email):
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="novawiretapper@subgrid.net"
                    className="w-full px-3 py-2 bg-white border-2 border-black font-mono text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#00e5ff] text-black font-black uppercase text-sm border-2 border-black shadow-[3px_3px_0_#000] hover:bg-cyan-300 transition-all cursor-pointer"
                >
                  Tune In & Unlock Bonus Lore
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
