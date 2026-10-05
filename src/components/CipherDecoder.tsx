"use client";

import React, { useState } from "react";
import { SECRET_CIPHERS } from "@/data/novelData";
import { Key, Unlock, Shield, AlertCircle } from "lucide-react";

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
      setErrorMsg("INVALID FREQUENCY KEY. CHECK SURVEILLANCE LOGS AND FILES!");
    }
  };

  return (
    <div className="bg-[#121212] text-white border-2 border-neutral-600 p-6 shadow-[6px_6px_0_#000] relative overflow-hidden my-8 font-mono">
      <div className="absolute inset-0 bg-grain-dark pointer-events-none opacity-40" />

      <div className="relative z-10 max-w-2xl mx-auto space-y-4 text-center">
        <div className="inline-flex items-center gap-2 bg-black text-neutral-300 font-bold text-xs px-3 py-1 border border-neutral-600">
          <Key className="w-3.5 h-3.5" />
          <span>CLASSIFIED CIPHER TERMINAL // DECRYPTION UNIT</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-black uppercase italic tracking-wider text-white">
          DECRYPT INTERCEPTED TRANSMISSIONS
        </h3>

        <p className="text-xs text-neutral-300 leading-relaxed bg-black/60 p-3 border border-neutral-800">
          Input cipher frequency keys intercepted from dossier files, radar map nodes, or surveillance frames (e.g. <code className="bg-neutral-900 text-white px-1.5 py-0.5 border border-neutral-700">SUBGRID-VIP</code>, <code className="bg-neutral-900 text-white px-1.5 py-0.5 border border-neutral-700">1964-CRYSTAL</code>, or <code className="bg-neutral-900 text-white px-1.5 py-0.5 border border-neutral-700">STERLING-ECHO</code>).
        </p>

        <form onSubmit={handleDecode} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto pt-2">
          <input
            type="text"
            value={inputCode}
            onChange={(e) => setInputCode(e.target.value)}
            placeholder="ENTER CIPHER (e.g. SUBGRID-VIP)"
            className="flex-grow px-4 py-2.5 bg-neutral-900 border border-neutral-600 text-xs sm:text-sm text-white uppercase focus:outline-none focus:border-white"
          />
          <button
            type="submit"
            className="px-6 py-2.5 bg-white text-black font-black uppercase text-xs sm:text-sm border border-black shadow-[2px_2px_0_#000] hover:bg-neutral-200 transition-all cursor-pointer flex items-center justify-center gap-1.5"
          >
            <Unlock className="w-4 h-4" /> DECRYPT
          </button>
        </form>

        {errorMsg && (
          <div className="bg-neutral-900 border border-neutral-500 text-neutral-200 p-3 text-xs font-bold flex items-center justify-center gap-2">
            <AlertCircle className="w-4 h-4 text-neutral-400" /> {errorMsg}
          </div>
        )}

        {/* Decrypted Transmission List */}
        <div className="pt-6 border-t border-neutral-800 text-left space-y-4">
          <h4 className="text-xs font-bold text-neutral-400 uppercase">
            DECRYPTED GOVERNMENT FILES ({unlockedCodes.length}/{SECRET_CIPHERS.length}):
          </h4>

          {SECRET_CIPHERS.map((cipher) => {
            const isUnlocked = unlockedCodes.includes(cipher.code);
            return (
              <div
                key={cipher.code}
                className={`p-4 border font-mono text-xs transition-all ${
                  isUnlocked
                    ? "bg-neutral-900 border-neutral-500 text-white"
                    : "bg-black border-neutral-800 text-neutral-600 opacity-60"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`font-bold uppercase ${isUnlocked ? "text-white" : "text-neutral-500"}`}>
                    {isUnlocked ? `✓ CIPHER KEY: ${cipher.code}` : "🔒 CLASSIFIED ENCRYPTED LOG"}
                  </span>
                  <span className="text-[10px] bg-neutral-950 px-2 py-0.5 border border-neutral-800">
                    {cipher.title}
                  </span>
                </div>

                <p className="mt-2 text-neutral-300 leading-relaxed font-mono">
                  {isUnlocked ? cipher.revealedMessage : "•••••••• •••••••• •••••••• [CLASSIFIED CONTENT REDACTED - INPUT CIPHER TO UNLOCK]"}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
