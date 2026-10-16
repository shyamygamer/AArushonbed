import React from 'react';
import { Sparkles, Laugh, Crown, ShieldAlert, HeartHandshake } from 'lucide-react';
import bedSceneImg from '../assets/images/arush_on_bed_scene_1792079642545.jpg';

interface BottomSurpriseSectionProps {
  onOpenSurprise: () => void;
}

export const BottomSurpriseSection: React.FC<BottomSurpriseSectionProps> = ({ onOpenSurprise }) => {
  return (
    <section
      id="grand-surprise"
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8 border-t-2 border-yellow-500/30 bg-[#0a0708]"
    >
      {/* Background Image: Man and woman relaxing on the luxury bed with exact 20% opacity */}
      <div className="absolute inset-0 z-0">
        <img
          src={bedSceneImg}
          alt="Arush on bed comedy parody scene with girl and man lounging in five-star suite"
          className="h-full w-full object-cover object-center opacity-20 pointer-events-none scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Subtle dark gradient overlay to ensure perfect text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0708] via-transparent to-[#0a0708]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-950/30 via-transparent to-black/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center space-y-6">
        
        {/* Top Grand Finale Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border-2 border-yellow-400 bg-red-950/80 px-5 py-2 backdrop-blur-md shadow-[0_0_30px_rgba(234,179,8,0.3)] animate-bounce">
          <Crown className="w-5 h-5 text-yellow-400" />
          <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-yellow-300">
            THE GRAND FINALE • SABSE KADAK REVEAL
          </span>
          <Crown className="w-5 h-5 text-yellow-400" />
        </div>

        {/* Section Heading */}
        <div className="space-y-3">
          <h2 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-black text-white drop-shadow-[0_4px_20px_rgba(234,179,8,0.4)]">
            ARUSH ON BED <span className="gold-gradient-text">MAHA KAAND</span> 😂👑
          </h2>
          <p className="font-playfair text-xl sm:text-2xl italic text-yellow-200">
            &ldquo;Khatam hua intezaar! Ab aayega asli maza!&rdquo;
          </p>
        </div>

        {/* The requested Desi Suspense Box */}
        <div className="mx-auto max-w-2xl rounded-3xl border-2 border-yellow-400 bg-gradient-to-r from-red-950/95 via-black/90 to-red-950/95 p-6 shadow-[0_0_50px_rgba(234,179,8,0.4)]">
          <div className="flex items-center justify-center gap-2 font-cinzel text-xl sm:text-2xl font-black text-yellow-300 animate-pulse">
            <Sparkles className="w-6 h-6 text-yellow-400" />
            <span>&ldquo;AAIYE NA CHACHA! LOVE LOVE GHOPPPOOP!&rdquo;</span>
            <Sparkles className="w-6 h-6 text-yellow-400" />
          </div>

          <p className="mt-3 text-base sm:text-lg font-bold text-red-200 leading-snug">
            Arre chacha, poori hotel ki nautanki dekh li, bed par Aarush bhai ka swagger bhi dekh liya! Ab yaha dabaao button aur dekho sabse bada comedy jhatka! 🤣💥
          </p>

          <p className="mt-2 text-xs sm:text-sm text-yellow-200/90 italic">
            &ldquo;Bed par aaram, dimag me toofan — Aarush bhai ka VIP five-star roasteelious surprise!&rdquo;
          </p>
        </div>

        {/* Main Big Bottom Reveal Button */}
        <div className="pt-4 flex flex-col items-center justify-center gap-3">
          <button
            onClick={onOpenSurprise}
            className="group relative inline-flex items-center justify-center gap-3.5 rounded-2xl bg-gradient-to-r from-yellow-400 via-amber-500 to-red-600 px-10 py-6 text-xl sm:text-2xl font-black uppercase tracking-wider text-black shadow-[0_0_60px_rgba(234,179,8,0.7)] hover:shadow-[0_0_80px_rgba(234,179,8,1)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <Sparkles className="h-7 w-7 text-black group-hover:rotate-90 transition-transform duration-500" />
            <span>REVEAL THE SURPRISE 😂</span>
            <Laugh className="h-7 w-7 text-black animate-bounce" />
          </button>
          
          <div className="flex items-center gap-2 text-xs font-bold text-zinc-400">
            <HeartHandshake className="w-4 h-4 text-yellow-400" />
            <span>Free unlimited laughs • Zero charges • 100% Aarush style</span>
          </div>
        </div>

        {/* Small Disclaimer */}
        <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-zinc-500">
          <ShieldAlert className="w-3.5 h-3.5 text-yellow-500/60" />
          <span>Fictional parody climax. No real hotel beds or bookings harmed in this production.</span>
        </div>

      </div>
    </section>
  );
};
