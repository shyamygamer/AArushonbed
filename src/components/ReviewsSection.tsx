import React, { useState } from 'react';
import { Star, MessageSquareQuote, Shuffle, ShieldCheck } from 'lucide-react';
import { playChime } from '../utils/audio';

interface ReviewsSectionProps {
  isSoundEnabled: boolean;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ isSoundEnabled }) => {
  const baseReviews = [
    {
      quote: 'Five stars for confidence. Still waiting for the explanation.',
      author: 'The Imaginary Guest',
      title: 'Honorary Member, Suite 404',
      rating: 5,
      date: 'Checked out: Never',
    },
    {
      quote: 'Best hotel in my imagination. The comedy was complimentary.',
      author: 'Guest Who Never Checked In',
      title: 'Professional Daydreamer',
      rating: 5,
      date: 'Reservation: Eternal',
    },
    {
      quote: 'Luxury vibes, legendary nonsense.',
      author: 'The Mystery Reviewer',
      title: 'Verified Comedy Critic',
      rating: 5,
      date: 'Status: Confused but Entertained',
    },
  ];

  const bonusQuotes = [
    { quote: "Aarush promised room service, but brought only high-voltage punchlines.", author: "Hungry Roommate", title: "Looking for real food" },
    { quote: "I asked for the Wi-Fi password. Aarush told me confidence needs no router.", author: "Offline Nomad", title: "Still disconnected" },
    { quote: "10/10 pillows. 0/10 logic. Would recommend to everyone with a funny bone.", author: "Pillow Connoisseur", title: "Sleep Specialist" },
    { quote: "He walked me to my imaginary balcony and charged me ₹0.00 for the view.", author: "Delighted Non-Guest", title: "Zero Expense Tourist" },
  ];

  const [bonusReview, setBonusReview] = useState<{ quote: string; author: string; title: string } | null>(null);

  const handleShuffle = () => {
    playChime(isSoundEnabled);
    const next = bonusQuotes[Math.floor(Math.random() * bonusQuotes.length)];
    setBonusReview(next);
  };

  return (
    <section id="reviews" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0708]">
      <div className="relative mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/30 px-4 py-1 text-xs font-bold uppercase tracking-widest text-red-300 mb-3">
            <ShieldCheck className="w-4 h-4 text-red-400" />
            <span>100% FICTIONAL • NOT REAL GUESTS</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-black text-white">
            REVIEWS FROM THE <span className="gold-gradient-text">IMAGINARY GUESTS 😂</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
            Real laughter from guests who have never, ever set foot in a real hotel.
          </p>
        </div>

        {/* 3 Core Required Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {baseReviews.map((rev, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between rounded-3xl border border-yellow-500/30 bg-gradient-to-b from-[#14080b] to-[#0c0507] p-6 sm:p-8 shadow-lg transition-transform hover:-translate-y-1 hover:border-yellow-400/60"
            >
              <div>
                {/* 5 Yellow Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-yellow-400 gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400" />
                    ))}
                  </div>
                  <MessageSquareQuote className="w-6 h-6 text-yellow-500/30" />
                </div>

                {/* Review Quote */}
                <p className="font-playfair text-lg sm:text-xl font-medium text-white italic leading-relaxed mb-6">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-white/10">
                <p className="font-cinzel text-sm font-bold text-yellow-300">
                  — {rev.author}
                </p>
                <p className="text-xs text-zinc-400">
                  {rev.title}
                </p>
                <p className="mt-1 text-[10px] text-red-400 font-mono">
                  {rev.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bonus Interactive Comedy Review Generator */}
        <div className="mt-10 rounded-2xl border border-yellow-500/20 bg-[#160a0e]/60 p-6 text-center max-w-2xl mx-auto">
          {bonusReview ? (
            <div className="space-y-2 mb-4 animate-in fade-in duration-200">
              <p className="font-playfair text-lg text-yellow-200 italic">
                &ldquo;{bonusReview.quote}&rdquo;
              </p>
              <p className="text-xs font-cinzel text-red-300 font-bold">
                — {bonusReview.author} ({bonusReview.title})
              </p>
            </div>
          ) : (
            <p className="text-xs sm:text-sm text-zinc-400 mb-3">
              Want to see more imaginary hospitality feedback?
            </p>
          )}

          <button
            onClick={handleShuffle}
            className="inline-flex items-center gap-2 rounded-xl border border-yellow-500/50 bg-yellow-500/10 hover:bg-yellow-500/20 px-4 py-2 text-xs sm:text-sm font-bold text-yellow-300 transition-colors cursor-pointer"
          >
            <Shuffle className="w-4 h-4" />
            <span>Generate Another Imaginary Review 😂</span>
          </button>
        </div>

      </div>
    </section>
  );
};
