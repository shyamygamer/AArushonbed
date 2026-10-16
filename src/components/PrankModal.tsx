import React, { useEffect, useState, useCallback } from 'react';
import { ConfettiCanvas } from './ConfettiCanvas';
import { playComedyFanfare, playChime } from '../utils/audio';
import { Crown, Sparkles, X, RotateCcw, Share2, Laugh, Hotel } from 'lucide-react';

interface PrankModalProps {
  isOpen: boolean;
  onClose: () => void;
  isSoundEnabled: boolean;
}

export const PrankModal: React.FC<PrankModalProps> = ({
  isOpen,
  onClose,
  isSoundEnabled,
}) => {
  const [replayKey, setReplayKey] = useState<number>(0);
  const [shareToast, setShareToast] = useState<string | null>(null);

  const triggerRevealEffects = useCallback(() => {
    // Play fanfare if sound is enabled
    playComedyFanfare(isSoundEnabled);
    setReplayKey((prev) => prev + 1);
  }, [isSoundEnabled]);

  useEffect(() => {
    if (isOpen) {
      triggerRevealEffects();

      // Escape key listener
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);

      // Lock body scroll
      document.body.style.overflow = 'hidden';

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
      };
    }
  }, [isOpen, triggerRevealEffects, onClose]);

  const handleReplay = () => {
    playChime(isSoundEnabled);
    triggerRevealEffects();
  };

  const handleShare = async () => {
    playChime(isSoundEnabled);
    const shareTitle = "ARUSH ON BED 😂 - The Midnight Legend Hotel";
    const shareText = "Bhai check out this legendary 5-star hotel prank on Aarush! Five-star attitude, zero-star explanation! 😂😂👑";
    const currentUrl = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: currentUrl,
        });
        setShareToast("Shared with the gang successfully! 🚀");
        setTimeout(() => setShareToast(null), 3500);
      } catch (err) {
        // Only ignore AbortError (user cancelled dialog)
        if (err instanceof Error && err.name !== 'AbortError') {
          copyToClipboard(currentUrl);
        }
      }
    } else {
      copyToClipboard(currentUrl);
    }
  };

  const copyToClipboard = async (url: string) => {
    try {
      await navigator.clipboard.writeText(`${url}\n\nCheck out Aarush's legendary hotel prank! 😂`);
      const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
      if (isLocal) {
        setShareToast("Prank link copied! (Note: Local preview link is only visible on this device) 📋");
      } else {
        setShareToast("Prank link copied to clipboard! Share it with the gang! 📲✨");
      }
      setTimeout(() => setShareToast(null), 4000);
    } catch {
      setShareToast("Could not copy automatically. Copy the browser URL to share!");
      setTimeout(() => setShareToast(null), 3500);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-xl bg-black/85 transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="prank-title"
      onClick={onClose}
    >
      {/* Confetti Animation with dynamic key for clean replay */}
      <ConfettiCanvas key={replayKey} durationMs={4500} />

      {/* Main Prank Panel - Stop propagation so clicks inside don't close modal */}
      <div
        className="relative z-10 w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-3xl border-2 border-yellow-500/70 bg-gradient-to-b from-[#1c080b] via-[#12070a] to-[#0a0507] p-6 sm:p-10 text-center shadow-[0_0_80px_rgba(234,179,8,0.35)] animate-in fade-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button top-right */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rounded-full p-2.5 text-zinc-400 hover:text-yellow-400 hover:bg-yellow-500/10 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400"
          aria-label="Close prank overlay"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Decorative Crown with Glowing Halo */}
        <div className="relative mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl border border-yellow-500/40 bg-gradient-to-tr from-yellow-600/30 via-red-600/20 to-yellow-400/20 shadow-[0_0_40px_rgba(234,179,8,0.4)] animate-bounce">
          <Crown className="h-10 w-10 text-yellow-400 drop-shadow-[0_2px_10px_rgba(234,179,8,0.8)]" />
          <Sparkles className="absolute -top-1 -right-1 h-5 w-5 text-amber-300 animate-pulse" />
        </div>

        {/* Parody Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-red-600/30 border border-red-500/40 text-red-300 mb-4">
          <Laugh className="w-3.5 h-3.5" />
          PARODY REVEAL MOMENT
        </div>

        {/* EXACT REQUIRED REVEAL TEXT */}
        <div className="space-y-2 mb-6">
          <h2
            id="prank-title"
            className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white drop-shadow-md"
          >
            ARUSH BHAI! <span className="inline-block animate-pulse">😂😂</span>
          </h2>
          <p className="font-playfair text-xl sm:text-2xl font-semibold text-yellow-400 tracking-wide">
            WELCOME TO YOUR LEGENDARY HOTEL!
          </p>
          <div className="py-2">
            <span className="inline-block text-2xl sm:text-3xl font-extrabold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-500/30 px-4 py-1.5 rounded-xl shadow-inner">
              BRO, YOU JUST GOT PRANKED! 🤣
            </span>
          </div>
          <p className="font-cinzel text-lg sm:text-xl font-bold tracking-widest text-amber-300">
            YOU ARE THE KING OF COMEDY! 👑
          </p>
        </div>

        {/* Desi Comedy Punchline Banner */}
        <div className="my-4 rounded-2xl border-2 border-yellow-400 bg-gradient-to-r from-red-950 via-yellow-950/40 to-red-950 p-3.5 shadow-[0_0_25px_rgba(234,179,8,0.4)]">
          <div className="font-cinzel text-base sm:text-lg font-black text-yellow-300 animate-pulse">
            💥 &ldquo;AAIYE NA CHACHA! LOVE LOVE GHOPPPOOP!&rdquo; 💥
          </div>
          <p className="text-xs sm:text-sm text-red-200 font-bold mt-1">
            Arre chacha dekha? Yeh hai Aarush bhai ka asli 5-star hotel kaand! 🤣😂
          </p>
        </div>

        {/* Additional Required Text */}
        <div className="my-4 rounded-2xl border border-yellow-500/30 bg-black/50 p-4 text-sm sm:text-base space-y-1.5 text-zinc-300">
          <p className="italic text-yellow-200/90 font-serif text-base sm:text-lg">
            &ldquo;Your five-star imagination just checked in!&rdquo;
          </p>
          <p className="font-bold text-red-400 text-sm tracking-wide uppercase">
            Zero bookings. Unlimited laughter.
          </p>
          <p className="text-xs text-zinc-400 pt-2 border-t border-zinc-800">
            Attitude: 100% • Room Service: Nonexistent • Bill: Paid in Pure Laughs 😂
          </p>
        </div>

        {/* Share Toast Notification if active */}
        {shareToast && (
          <div className="mb-4 rounded-xl bg-yellow-500/20 border border-yellow-500/50 p-2.5 text-sm font-medium text-yellow-200 animate-in fade-in">
            {shareToast}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          {/* Replay Button */}
          <button
            onClick={handleReplay}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-600 px-6 py-3.5 text-sm sm:text-base font-bold text-black shadow-lg hover:from-yellow-400 hover:to-amber-500 active:scale-95 transition-all cursor-pointer focus:ring-2 focus:ring-yellow-300"
          >
            <RotateCcw className="w-4 h-4" />
            PLAY AGAIN 🤣
          </button>

          {/* Share Button */}
          <button
            onClick={handleShare}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-red-500/60 bg-red-900/40 hover:bg-red-800/60 px-5 py-3.5 text-sm sm:text-base font-semibold text-red-200 active:scale-95 transition-all cursor-pointer"
          >
            <Share2 className="w-4 h-4 text-red-400" />
            SHARE ROAST WITH GANG 📲
          </button>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/80 hover:bg-zinc-800 px-5 py-3.5 text-sm sm:text-base font-medium text-zinc-300 active:scale-95 transition-all cursor-pointer"
          >
            <Hotel className="w-4 h-4 text-yellow-500" />
            BACK TO HOTEL
          </button>
        </div>

        <p className="mt-4 text-[11px] text-zinc-500">
          Press <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 font-mono text-[10px]">Esc</kbd> or click outside to return
        </p>
      </div>
    </div>
  );
};
