import React from 'react';
import { 
  Sparkles, 
  Crown, 
  Bed, 
  Moon, 
  Flame, 
  Laugh, 
  HelpCircle, 
  ShieldAlert,
  ArrowRight,
  Gift
} from 'lucide-react';

interface SpecialOfferProps {
  onOpenSurprise: () => void;
}

export const SpecialOffer: React.FC<SpecialOfferProps> = ({ onOpenSurprise }) => {
  const comedyAmenities = [
    {
      icon: Bed,
      title: 'Presidential-Level Pillow Confidence',
      desc: 'Rest your head on pillows stuffed with pure fictional grandeur and zero doubts.',
      color: 'text-amber-400',
    },
    {
      icon: Sparkles,
      title: 'Five-Star Dreams',
      desc: 'Dream of owning the hotel, the city, and the galaxy — waking up is completely optional.',
      color: 'text-yellow-400',
    },
    {
      icon: Moon,
      title: 'Unlimited Midnight Drama',
      desc: 'Late-night existential debates, high-stakes overthinking, and midnight snack cravings.',
      color: 'text-indigo-400',
    },
    {
      icon: Laugh,
      title: 'Complimentary Comedy',
      desc: 'Every moment spent in this imaginary suite comes with uncontrollable laughter.',
      color: 'text-red-400',
    },
    {
      icon: Crown,
      title: 'Royal Attitude Available 24/7',
      desc: 'Complaints are met with majestic silence and unearned royal posture.',
      color: 'text-yellow-400',
    },
    {
      icon: HelpCircle,
      title: 'Mystery-Level Explanations',
      desc: 'Why did Aarush book this? How did you get here? Nobody knows, and nobody cares.',
      color: 'text-rose-400',
    },
  ];

  return (
    <section id="special-offer" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0708] border-y border-yellow-500/20">
      <div className="relative mx-auto max-w-6xl">
        
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-950/40 px-4 py-1 text-xs font-bold uppercase tracking-widest text-red-300 mb-3">
            <Gift className="w-3.5 h-3.5 text-red-400" />
            <span>EXCLUSIVE PARODY PACKAGE</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-black text-white">
            THE <span className="gold-gradient-text">MIDNIGHT LEGEND</span>
          </h2>
          <p className="mt-2 font-cinzel text-base sm:text-xl font-bold text-yellow-400 tracking-wide">
            &ldquo;Five-Star Attitude, Zero-Star Explanation!&rdquo;
          </p>
        </div>

        {/* Pricing & Comedy Offer Banner */}
        <div className="mb-14 overflow-hidden rounded-3xl border-2 border-yellow-500/60 bg-gradient-to-r from-[#1f0a0e] via-[#16080b] to-[#12070a] p-6 sm:p-10 shadow-[0_0_50px_rgba(234,179,8,0.25)]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* Price Presentation */}
            <div className="space-y-3 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600 text-white font-black text-xs uppercase tracking-wider animate-pulse shadow-md">
                <Flame className="w-3.5 h-3.5" />
                91% COMEDY DISCOUNT APPLIED!
              </div>

              <div className="flex items-baseline justify-center lg:justify-start gap-4 flex-wrap">
                <div className="text-zinc-500 text-xl sm:text-2xl font-semibold">
                  <span>MRP: </span>
                  <span className="line-through decoration-red-500 decoration-2">₹899</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-xs uppercase font-bold text-yellow-400">JOKE PRICE:</span>
                  <span className="font-cinzel text-5xl sm:text-6xl md:text-7xl font-black text-yellow-400 drop-shadow-[0_4px_15px_rgba(234,179,8,0.5)]">
                    ₹79
                  </span>
                  <span className="text-sm font-semibold text-zinc-400">/ lifetime laugh</span>
                </div>
              </div>

              {/* Mandatory Disclaimer directly beside prices */}
              <div className="inline-flex items-center gap-2 rounded-xl bg-red-950/70 border border-red-500/40 px-3.5 py-1.5 text-xs font-bold text-red-200">
                <ShieldAlert className="w-4 h-4 text-red-400 flex-shrink-0" />
                <span>FICTIONAL JOKE PRICES — NOT A REAL OFFER.</span>
              </div>
            </div>

            {/* Claim Parody Offer CTA Button */}
            <div className="flex flex-col items-center gap-2 w-full lg:w-auto">
              <button
                onClick={onOpenSurprise}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-yellow-500 via-amber-500 to-red-600 px-8 py-5 text-base sm:text-lg font-black uppercase text-black shadow-xl hover:shadow-[0_0_40px_rgba(234,179,8,0.6)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <span>BOOK IMAGINARY SUITE 😂</span>
                <ArrowRight className="w-5 h-5 text-black" />
              </button>
              <div className="text-center">
                <span className="block text-xs font-bold text-yellow-300">
                  &ldquo;Aaiye na chacha! Love love ghopppoop! 🤣💥&rdquo;
                </span>
                <span className="text-[11px] text-zinc-400">
                  *Clicking reveals the main joke (Zero payment • 100% comedy)
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Humorous Imaginary Amenities Grid */}
        <div className="space-y-4">
          <div className="text-center">
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-yellow-300">
              INCLUDED IMAGINARY AMENITIES
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400">
              Curated exclusively for guests with unmatched comedic tolerance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {comedyAmenities.map((amenity, idx) => {
              const Icon = amenity.icon;
              return (
                <div
                  key={idx}
                  className="group relative rounded-2xl border border-yellow-500/25 bg-[#12070a]/80 p-5 backdrop-blur-sm transition-all duration-300 hover:border-yellow-400/60 hover:bg-[#1a0a0e] hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(234,179,8,0.15)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-yellow-500/30 bg-black/60 shadow-inner group-hover:border-yellow-400">
                      <Icon className={`h-6 w-6 ${amenity.color} transition-transform group-hover:scale-110`} />
                    </div>
                    <div>
                      <h4 className="font-cinzel text-base font-bold text-white group-hover:text-yellow-300 transition-colors">
                        {amenity.title}
                      </h4>
                      <p className="mt-1 text-xs sm:text-sm text-zinc-400 leading-snug">
                        {amenity.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
