import React from 'react';
import { Crown, Heart, ShieldCheck, Share2 } from 'lucide-react';

interface FooterProps {
  onOpenSurprise: () => void;
  onShare: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSurprise, onShare }) => {
  return (
    <footer className="border-t border-yellow-500/20 bg-[#070506] py-12 px-4 sm:px-6 lg:px-8 text-zinc-400">
      <div className="mx-auto max-w-6xl space-y-8">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-900">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-yellow-500 to-red-600 p-0.5 shadow-md flex items-center justify-center">
              <div className="h-full w-full bg-black rounded-[10px] flex items-center justify-center">
                <Crown className="w-5 h-5 text-yellow-400" />
              </div>
            </div>
            <div>
              <h3 className="font-cinzel text-xl font-black text-white flex items-center gap-1.5">
                <span>ARUSH ON BED</span>
                <span>😂</span>
              </h3>
              <p className="text-[11px] font-bold uppercase tracking-widest text-yellow-500/80">
                THE MIDNIGHT LEGEND
              </p>
            </div>
          </div>

          {/* Quick Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenSurprise}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-red-950/80 hover:bg-red-900 border border-red-500/40 text-red-200 transition-colors cursor-pointer"
            >
              Surprise Moment 🤣
            </button>
            <button
              onClick={onShare}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-yellow-500/10 hover:bg-yellow-500/20 border border-yellow-500/40 text-yellow-300 transition-colors cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5" />
              SHARE ROAST WITH GANG 📲
            </button>
          </div>
        </div>

        {/* Required Disclaimers Block */}
        <div className="rounded-2xl border border-yellow-500/15 bg-black/40 p-6 text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-yellow-400 uppercase tracking-widest mb-1">
            <ShieldCheck className="w-4 h-4 text-yellow-400" />
            <span>OFFICIAL PARODY &amp; ENTERTAINMENT NOTICE</span>
          </div>

          <p className="font-medium text-sm sm:text-base text-zinc-300">
            A fictional comedy website made for entertainment.
          </p>

          <p className="text-xs sm:text-sm text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            All prices, amenities, reviews, and hotel descriptions are jokes.
            This is not a real hotel or booking service.
          </p>

          <p className="text-xs font-semibold text-red-400 pt-1">
            No payments. No bookings. No personal information collection.
          </p>
        </div>

        {/* Bottom Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-4 pt-2">
          <p>
            Crafted for pure laughs &amp; royal banter. Dedicated to Aarush&apos;s legendary swag.
          </p>
          <div className="flex items-center gap-1 text-zinc-400">
            <span>Built with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>as a standalone web experience</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
