"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Radio, MapPin, BookOpen, Layers, Key, Shield, X, Lock } from "lucide-react";

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
      <div className="bg-black text-neutral-300 text-xs py-1 px-4 font-mono border-b border-neutral-700 flex items-center justify-between overflow-x-hidden">
        <div className="flex items-center gap-2">
          <span className="bg-neutral-800 text-white text-[10px] px-1.5 py-0.5 font-bold uppercase border border-neutral-600">
            RESTRICTED FEED
          </span>
          <span>CLASSIFIED DISPATCH • NEW CHAPTER EVERY FRIDAY • FILES 01 & 02 UNCLASSIFIED</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-neutral-400">
          <span>SURVEILLANCE FREQ: 104.2 MHZ</span>
          <span className="text-white font-bold">GRID CLEARANCE LEVEL: 0 & 1</span>
        </div>
      </div>

      {/* Main Classified Government Header */}
      <header className="sticky top-0 z-50 bg-[#121212] text-white border-b-2 border-black shadow-[0_4px_0_#000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">

          {/* Logo Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-neutral-900 text-white p-2 font-black text-xl sm:text-2xl border-2 border-neutral-600 shadow-[2px_2px_0_#000] group-hover:bg-black transition-all">
              1964
            </div>
            <div>
              <span className="block text-lg sm:text-xl font-black text-white tracking-widest leading-none uppercase font-mono">
                CHRONO-CLASS
              </span>
              <span className="text-[10px] font-mono text-neutral-400 font-bold uppercase tracking-wider bg-neutral-900 px-1 border border-neutral-700">
                CLASSIFIED DOSSIER ARCHIVE
              </span>
            </div>
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-2 font-mono text-xs font-bold">
            <Link
              href="/chapters"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 text-white border border-neutral-600 shadow-[2px_2px_0_#000] hover:bg-neutral-800 transition-all"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>FILES</span>
            </Link>

            <Link
              href="/map"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 text-white border border-neutral-600 shadow-[2px_2px_0_#000] hover:bg-neutral-800 transition-all"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>RADAR MAP</span>
            </Link>

            <Link
              href="/comic"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 text-white border border-neutral-600 shadow-[2px_2px_0_#000] hover:bg-neutral-800 transition-all"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>SURVEILLANCE COMIC</span>
            </Link>

            <Link
              href="/codex"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 text-white border border-neutral-600 shadow-[2px_2px_0_#000] hover:bg-neutral-800 transition-all"
            >
              <Key className="w-3.5 h-3.5" />
              <span>CIPHER DECODER</span>
            </Link>
          </nav>

          {/* Action Callout */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowVIPModal(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-black font-mono font-black text-xs border-2 border-black shadow-[2px_2px_0_#000] hover:bg-neutral-200 transition-all cursor-pointer"
            >
              <Shield className="w-3.5 h-3.5" />
              <span>CLEARANCE REQUEST</span>
            </button>
          </div>
        </div>

        {/* Mobile Nav Bar Strip */}
        <div className="md:hidden flex items-center justify-around bg-black text-neutral-300 text-xs font-mono py-2 border-t border-neutral-800">
          <Link href="/chapters" className="hover:text-white">Files</Link>
          <Link href="/map" className="hover:text-white">Map</Link>
          <Link href="/comic" className="hover:text-white">Comic</Link>
          <Link href="/codex" className="hover:text-white">Decoder</Link>
        </div>
      </header>

      {/* Clearance Modal */}
      {showVIPModal && (
        <div className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4">
          <div className="bg-[#1a1a1a] text-white border-2 border-neutral-500 p-6 max-w-md w-full shadow-[8px_8px_0_#000] relative font-mono">
            <button
              onClick={() => setShowVIPModal(false)}
              className="absolute top-3 right-3 p-1 bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-600 font-bold"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 mb-3 text-neutral-400 text-xs font-bold uppercase border-b border-neutral-700 pb-2">
              <Lock className="w-4 h-4" /> GOVERNMENT CLEARANCE REQUEST
            </div>

            <h3 className="text-xl font-black uppercase italic mb-2 tracking-wide text-white">
              AUTHORIZED INTERCEPT CIRCUIT
            </h3>

            <p className="text-xs text-neutral-300 mb-4 leading-relaxed bg-black/60 p-3 border border-neutral-800">
              Submit your intelligence receiver address to get weekly dispatch alerts, decrypted cipher keys, and 24-hour advance access to Restricted File Chapter 4.
            </p>

            {subscribed ? (
              <div className="bg-neutral-900 border border-neutral-500 p-4 text-neutral-200 font-bold text-xs text-center">
                ✓ CLEARANCE VERIFIED. Check your transmission inbox for the secret key (CIPHER: SUBGRID-VIP).
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase mb-1 text-neutral-400">
                    RECEIVER ADDRESS (EMAIL):
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="agent.novawiretapper@subgrid.gov"
                    className="w-full px-3 py-2 bg-neutral-900 border border-neutral-600 text-white text-xs focus:outline-none focus:border-white"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 bg-white text-black font-black uppercase text-xs border border-black shadow-[2px_2px_0_#000] hover:bg-neutral-200 transition-all cursor-pointer"
                >
                  REQUEST AUTHORIZATION KEY
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
