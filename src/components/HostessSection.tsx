import React from 'react';
import { Sparkles, HeartHandshake, Smile, CheckCircle2 } from 'lucide-react';
import hostessImg from '../assets/images/hostess_welcome_1792078532394.jpg';

interface HostessSectionProps {
  onOpenSurprise: () => void;
}

export const HostessSection: React.FC<HostessSectionProps> = ({ onOpenSurprise }) => {
  return (
    <section id="hostess" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#0a0708] via-[#14080b] to-[#0a0708]">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-red-700/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-yellow-400 mb-3">
            <HeartHandshake className="w-4 h-4" />
            <span>VIP ROYAL RECEPTION</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-black text-white">
            MEET YOUR <span className="gold-gradient-text">LEGENDARY HOSTESS</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
            Directly from the imaginary 5-star grand lobby, rolling out the crimson carpet just for you.
          </p>
        </div>

        {/* Invitation Card Grid */}
        <div className="rounded-3xl border-2 border-yellow-500/50 bg-gradient-to-br from-[#1b0a0e] via-[#120709] to-[#0a0507] p-6 sm:p-10 shadow-[0_0_60px_rgba(234,179,8,0.2)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Hostess Portrait Container with Elegant Gold Frame */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative group w-full max-w-sm sm:max-w-md mx-auto">
                {/* Glowing border effect */}
                <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-yellow-500 via-red-600 to-amber-500 opacity-75 blur-md group-hover:opacity-100 transition duration-700" />
                
                {/* Gold Framed Card */}
                <div className="relative rounded-2xl overflow-hidden border-2 border-yellow-400/80 bg-black shadow-2xl">
                  {/* Hostess Badge Label */}
                  <div className="absolute top-3 left-3 z-10 rounded-full bg-black/80 backdrop-blur-md border border-yellow-400/60 px-3 py-1 text-[11px] font-extrabold uppercase tracking-widest text-yellow-300 shadow-md">
                    YOUR LEGENDARY HOSTESS
                  </div>

                  {/* Photorealistic Hostess Image */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-950">
                    <img
                      src={hostessImg}
                      alt="Fictional welcoming hostess in an elegant red blazer extending her hand at Aarush's comedy hotel"
                      className="h-full w-full object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
                      loading="eager"
                      referrerPolicy="no-referrer"
                    />
                    {/* Subtle warm vignette overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />
                  </div>

                  {/* Caption underneath picture */}
                  <div className="bg-gradient-to-r from-red-950/90 to-yellow-950/90 p-3 text-center border-t border-yellow-500/30">
                    <p className="text-xs font-semibold text-yellow-200">
                      ★ Certified Fictional Concierge ★
                    </p>
                    <p className="text-[11px] text-zinc-400">
                      &ldquo;Ready to welcome you with a warm smile and unlimited comedy!&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hostess Dialogue & Invitation Text */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Exact dialogue badges */}
              <div className="space-y-4">
                <div className="inline-block px-4 py-1.5 rounded-xl bg-yellow-500/15 border border-yellow-500/40 text-yellow-300 font-cinzel font-bold text-lg sm:text-xl tracking-wide">
                  HEY YOU! 😉
                </div>

                <div className="p-4 sm:p-6 rounded-2xl bg-black/40 border border-yellow-500/20 space-y-3">
                  <p className="font-playfair text-2xl sm:text-3xl font-bold text-red-400 italic">
                    &ldquo;Aao, aao! Jaldi aao!&rdquo;
                  </p>
                  <p className="font-cinzel text-xl sm:text-2xl font-bold text-white">
                    Welcome to Aarush&apos;s Legendary Hotel!
                  </p>
                  <p className="text-base sm:text-lg text-yellow-300 font-bold">
                    &ldquo;Aaiye na chacha! Love love ghopppoop! 😉💥&rdquo;
                  </p>
                  <p className="text-sm sm:text-base text-amber-200/90 font-medium">
                    A funny surprise is waiting for you! 😂 Ekdum desi comedy kaand!
                  </p>
                </div>
              </div>

              {/* Hostess Perks List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-zinc-300">
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                  <span>Warmest Imaginary Welcome</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                  <span>Zero Check-In Paperwork</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                  <span>100% Free Laugh Guarantee</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                  <span>Aarush&apos;s Royal Blessing</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={onOpenSurprise}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-red-600 via-amber-600 to-yellow-500 px-6 py-4 font-bold text-white shadow-lg hover:shadow-red-500/30 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
                >
                  <Smile className="w-5 h-5 text-yellow-200" />
                  <span>Accept Hostess Invitation &amp; See Surprise 😂</span>
                  <Sparkles className="w-4 h-4 text-yellow-200" />
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
