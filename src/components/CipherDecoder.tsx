"use client";

import React, { useState } from "react";
import { SECRET_CIPHERS, SecretCipher } from "@/data/novelData";
import { Key, Unlock, Sparkles, Check, AlertCircle } from "lucide-react";

export function CipherDecoder() {
  const [inputCode, setInputCode] = useState("");
  const [unlockedCodes, setUnlockedCodes] = useState<string[]>([]);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleDecode = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    const cleanInput = inputCode.trim().toUpperCase();
    const match = SECRET_CIPHERS.find((c) => c.code === cleanInput);

    if (match) {
      if (!unlockedCodes.includes(cleanInput)) {
        setUnlockedCodes([...unlockedCodes, cleanInput]);
      }
      setInputCode("");
    } else {
      setErrorMsg("INVALID CIPHER FREQUENCY. CHECK MAP HOTSPOTS AND CHAPTER TEXT!");
    }
  };

  return (
    <div className="bg-slate-950 text-white border-4 border-black p-6 shadow-[8px_8px_0_#ff2a5f] relative overflow-hidden my-8">
      <div className="absolute inset-0 bg-halftone-cyan pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto space-y-4 text-center">
        <div className="inline-flex items-center gap-2 bg-[#ffd500] text-black font-mono text-xs font-black px-3 py-1 border-2 border-black">
          <Key className="w-4 h-4 text-red-600" />
          <span>FREQUENCY CIPHER DECODER Terminal</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-black uppercase italic tracking-tight text-white">
          DECRYPT SUB-GRID SECRETS
        </h3>

        <p className="font-mono text-xs sm:text-sm text-cyan-300">
          Enter frequency ciphers discovered across the serial chapters, comic panels, or world map (e.g., <code className="bg-black text-yellow-300 px-1.5 py-0.5 border border-slate-700">SUBGRID-VIP</code>, <code className="bg-black text-yellow-300 px-1.5 py-0.5 border border-slate-700">1964-CRYSTAL</code>, or <code className="bg-black text-yellow-300 px-1.5 py-0.5 border border-slate-700">STERLING-ECHO</code>).
        </p>

        <form onSubmit={handleDecode} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto pt-2">
          <input
            type="text"
            value={inputCode}
            onChange={(e) => setInputCode(e.target.value)}
            placeholder="ENTER CIPHER (e.g. SUBGRID-VIP)"
            className="flex-grow px-4 py-2.5 bg-slate-900 border-2 border-cyan-400 font-mono text-xs sm:text-sm text-white uppercase focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            type="submit"
            className="px-6 py-2.5 bg-[#00e5ff] text-black font-black uppercase text-xs sm:text-sm border-2 border-black shadow-[3px_3px_0_#000] hover:bg-cyan-300 transition-all cursor-pointer flex items-center justify-center gap-1.5"
          >
            <Unlock className="w-4 h-4" /> DECODE
          </button>
        </form>

        {errorMsg && (
          <div className="bg-red-950 border-2 border-red-500 text-red-200 p-3 font-mono text-xs font-bold flex items-center justify-center gap-2">
            <AlertCircle className="w-4 h-4 text-red-400" /> {errorMsg}
          </div>
        )}

        {/* Unlocked Messages List */}
        <div className="pt-6 border-t border-slate-800 text-left space-y-4">
          <h4 className="font-mono text-xs font-bold text-amber-400 uppercase">
            UNLOCKED CLASSIFIED TRANSMISSIONS ({unlockedCodes.length}/{SECRET_CIPHERS.length}):
          </h4>

          {SECRET_CIPHERS.map((cipher) => {
            const isUnlocked = unlockedCodes.includes(cipher.code);
            return (
              <div
                key={cipher.code}
                className={`p-4 border-2 font-mono text-xs transition-all ${
                  isUnlocked
                    ? "bg-slate-900 border-emerald-400 text-slate-200"
                    : "bg-slate-950 border-slate-800 text-slate-600 opacity-60"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`font-bold uppercase ${isUnlocked ? "text-emerald-400" : "text-slate-500"}`}>
                    {isUnlocked ? `✓ CIPHER: ${cipher.code}` : "🔒 LOCKED TRANSMISSION"}
                  </span>
                  <span className="text-[10px] bg-black px-2 py-0.5 border border-slate-700">
                    {cipher.title}
                  </span>
                </div>

                <p className="mt-2 text-slate-300 leading-relaxed">
                  {isUnlocked ? cipher.revealedMessage : "•••••••• •••••••• •••••••• [ENTER VALID FREQUENCY CODE TO UNLOCK]"}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
