import React from 'react';
import { Crown, Zap, AlertCircle, Sparkles, Trophy } from 'lucide-react';

export const MeetTheLegend: React.FC = () => {
  const cards = [
    {
      badge: 'TRAIT 01',
      title: 'ATTITUDE LEVEL',
      rating: 'Legendary',
      description: 'Walking into any room like he owns the freehold title, the hotel chain, and the chandelier.',
      stat: '9999% Aura',
      statLabel: 'Maximum Swagger Cap',
      icon: Zap,
      accent: 'border-yellow-500/40 from-yellow-950/40 to-black',
      highlightColor: 'text-yellow-400',
    },
    {
      badge: 'TRAIT 02',
      title: 'EXPLANATION LEVEL',
      rating: 'Currently Unavailable',
      description: 'Why answer questions when you can raise an eyebrow and let the mystery marinate?',
      stat: 'Error 404',
      statLabel: 'Reasoning System Down',
      icon: AlertCircle,
      accent: 'border-red-500/40 from-red-950/40 to-black',
      highlightColor: 'text-red-400',
    },
    {
      badge: 'TRAIT 03',
      title: 'ROYAL DREAMS',
      rating: 'Beyond Five Stars',
      description: 'Standard luxury hotels stop at 5 stars. Aarush&apos;s imagination is currently exploring 7 stars in outer space.',
      stat: '∞ Infinity',
      statLabel: 'Delusion Grade',
      icon: Trophy,
      accent: 'border-amber-500/40 from-amber-950/40 to-black',
      highlightColor: 'text-amber-300',
    },
  ];

  return (
    <section id="legend" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0708] via-[#15070a] to-[#0a0708]">
      <div className="relative mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-yellow-400 mb-3">
            <Crown className="w-4 h-4" />
            <span>THE MAN. THE MYTH. THE MATTRESS.</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-black text-white">
            MEET THE LEGEND — <span className="gold-gradient-text">AARUSH 👑</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-300 font-light max-w-2xl mx-auto leading-relaxed">
            &ldquo;Some people have confidence. Some people have attitude. And then there is Aarush — operating on legendary settings!&rdquo;
          </p>
        </div>

        {/* 3 Comedy Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className={`relative rounded-3xl border-2 bg-gradient-to-b p-6 sm:p-8 backdrop-blur-sm shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(234,179,8,0.25)] flex flex-col justify-between ${card.accent}`}
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                    {card.badge}
                  </span>
                  <div className="h-10 w-10 rounded-xl bg-black/60 border border-yellow-500/30 flex items-center justify-center">
                    <Icon className={`w-5 h-5 ${card.highlightColor}`} />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3 mb-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                    {card.title}
                  </h3>
                  <div className={`font-cinzel text-2xl sm:text-3xl font-black ${card.highlightColor}`}>
                    {card.rating}
                  </div>
                  <p className="text-sm text-zinc-300 leading-relaxed pt-1">
                    {card.description}
                  </p>
                </div>

                {/* Meter / Comedy Metric Box */}
                <div className="pt-4 border-t border-white/10 rounded-xl bg-black/40 p-3.5 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase font-bold text-zinc-400">
                      {card.statLabel}
                    </div>
                    <div className="font-cinzel text-lg font-bold text-white flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                      {card.stat}
                    </div>
                  </div>
                  <div className="flex text-yellow-400 text-xs">
                    ★★★★★
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Humorous Banner Bottom */}
        <div className="mt-12 rounded-2xl border border-yellow-500/20 bg-black/40 p-5 text-center text-xs sm:text-sm text-zinc-400">
          <p>
            ⚠️ <span className="font-semibold text-yellow-300">Aarush Protocol Rule #1:</span> If anyone questions the five-star rating, simply smile, look at the chandelier, and reply: <span className="italic text-zinc-200">&ldquo;You wouldn&apos;t understand the luxury.&rdquo;</span>
          </p>
        </div>

      </div>
    </section>
  );
};
