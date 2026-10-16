import React from 'react';
import { Star, Sparkles, Laugh, Crown, ShieldAlert } from 'lucide-react';
import hotelHeroImg from '../assets/images/luxury_hotel_hero_1792078531197.jpg';

interface HeroProps {
  onOpenSurprise: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSurprise }) => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
      {/* Background Hero Image with rich cinematic overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={hotelHeroImg}
          alt="Cinematic luxury penthouse suite comedy backdrop"
          className="h-full w-full object-cover object-center opacity-30 scale-105 transition-transform duration-1000"
          loading="eager"
          decoding="async"
          referrerPolicy="no-referrer"
        />
        {/* Gradients to blend midnight black, deep crimson, and royal gold ambiance */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0708] via-[#0a0708]/80 to-[#180509]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-600/15 via-red-950/20 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Five Star Comedy Rating Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/40 bg-black/60 px-4 py-1.5 backdrop-blur-md shadow-[0_0_20px_rgba(234,179,8,0.2)] mb-6">
          <div className="flex text-yellow-400 gap-0.5" aria-hidden="true">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-xs font-semibold tracking-wider text-yellow-200 uppercase">
            Parody Five-Star Standard
          </span>
          <span className="text-zinc-500">•</span>
          <span className="text-xs text-red-400 font-bold">100% Imaginary</span>
        </div>

        {/* Brand / Main Title */}
        <div className="flex items-center justify-center gap-3 mb-3">
          <Crown className="w-7 h-7 sm:w-9 sm:h-9 text-yellow-400 animate-float" />
          <h1 className="font-cinzel text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white drop-shadow-[0_4px_25px_rgba(234,179,8,0.3)]">
            ARUSH ON BED <span className="inline-block hover:scale-125 transition-transform cursor-pointer">👑</span>
          </h1>
          <Crown className="w-7 h-7 sm:w-9 sm:h-9 text-yellow-400 animate-float" />
        </div>

        {/* Subtitle / Headline */}
        <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl italic font-bold text-yellow-400/90 mb-4 drop-shadow">
          &ldquo;Welcome to Aarush&apos;s Legendary Hotel!&rdquo;
        </h2>

        {/* Tagline */}
        <div className="inline-block px-5 py-2 rounded-2xl bg-gradient-to-r from-red-950/80 via-red-900/60 to-red-950/80 border border-red-500/50 shadow-[0_0_30px_rgba(220,38,38,0.25)] mb-6">
          <p className="font-cinzel text-base sm:text-xl md:text-2xl font-extrabold uppercase tracking-wide text-white">
            &ldquo;Five-Star Attitude, Zero-Star Explanation!&rdquo;
          </p>
        </div>

        {/* Supporting Text */}
        <p className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-zinc-300 font-light leading-relaxed mb-10">
          Welcome to the internet&apos;s most legendary imaginary hotel.
          <br className="hidden sm:inline" />
          <span className="text-yellow-200/90 font-medium"> Massive attitude</span>,
          <span className="text-red-300 font-medium"> royal dreams</span>, and
          <span className="text-amber-300 font-medium"> absolutely no explanation!</span>
        </p>

        {/* Primary Call to Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => {
              const el = document.getElementById('grand-surprise');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-yellow-400 via-amber-500 to-red-600 px-8 py-5 text-lg sm:text-xl font-black uppercase tracking-wider text-black shadow-[0_0_40px_rgba(234,179,8,0.6)] hover:shadow-[0_0_60px_rgba(234,179,8,0.9)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <Sparkles className="h-6 w-6 text-black group-hover:rotate-45 transition-transform" />
            <span>GO TO SURPRISE AT THE BOTTOM 👇</span>
            <Laugh className="h-6 w-6 text-black" />
          </button>
          
          <button
            onClick={onOpenSurprise}
            className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-yellow-500/60 bg-black/60 px-6 py-5 text-base sm:text-lg font-bold text-yellow-300 hover:bg-yellow-500/10 active:scale-95 transition-all cursor-pointer"
          >
            <span>INSTANT REVEAL 🤣</span>
          </button>
        </div>

        {/* Desi Comedy Suspense & Main Joke Hook */}
        <div className="mt-5 mx-auto max-w-xl rounded-2xl border-2 border-yellow-400/80 bg-gradient-to-r from-red-950/90 via-black to-red-950/90 p-4 shadow-[0_0_35px_rgba(234,179,8,0.35)] animate-pulse">
          <div className="flex items-center justify-center gap-2 text-yellow-300 font-cinzel text-lg sm:text-xl font-black">
            <span>💥 &ldquo;AAIYE NA CHACHA! LOVE LOVE GHOPPPOOP!&rdquo; 💥</span>
          </div>
          <p className="mt-1.5 text-sm sm:text-base font-bold text-red-300">
            Arre chacha ruko mat, button dabao! Asli 5-star kaand aur main joke yahi andar band hai! 😂🤣
          </p>
          <p className="mt-1 text-xs text-amber-200/90 font-medium italic">
            &ldquo;Aarush bhai ka VIP room service dekh kar hansi nahi rukegi!&rdquo;
          </p>
        </div>

        {/* Disclaimer note */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-zinc-400">
          <ShieldAlert className="w-3.5 h-3.5 text-yellow-500/70" />
          <span>Warning: May cause intense laughter. Not a certified lodging facility.</span>
        </div>
      </div>

      {/* Decorative Gold Border Corner Accents */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0708] to-transparent" />
    </section>
  );
};
