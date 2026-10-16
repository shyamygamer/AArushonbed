import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HostessSection } from './components/HostessSection';
import { SpecialOffer } from './components/SpecialOffer';
import { MeetTheLegend } from './components/MeetTheLegend';
import { ReviewsSection } from './components/ReviewsSection';
import { BottomSurpriseSection } from './components/BottomSurpriseSection';
import { Footer } from './components/Footer';
import { PrankModal } from './components/PrankModal';
import { playChime } from './utils/audio';
import { Sparkles } from 'lucide-react';

export default function App() {
  const [isPrankOpen, setIsPrankOpen] = useState(false);
  // Requirement: Sound must be OFF by default
  const [isSoundEnabled, setIsSoundEnabled] = useState(false);
  const [globalToast, setGlobalToast] = useState<string | null>(null);

  const toggleSound = () => {
    setIsSoundEnabled((prev) => {
      const next = !prev;
      if (next) {
        // Play a light chime when turning on
        playChime(true);
      }
      return next;
    });
  };

  const handleOpenSurprise = () => {
    setIsPrankOpen(true);
  };

  const handleShareGlobal = async () => {
    playChime(isSoundEnabled);
    const shareTitle = "ARUSH ON BED 😂 - The Midnight Legend Hotel";
    const shareText = "Bhai check out this legendary 5-star hotel parody on Aarush! Five-star attitude, zero-star explanation! 😂😂👑";
    const currentUrl = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: currentUrl,
        });
        showToast("Shared with the gang successfully! 🚀");
      } catch (err) {
        if (err instanceof Error && err.name !== 'AbortError') {
          copyUrlToClipboard(currentUrl);
        }
      }
    } else {
      copyUrlToClipboard(currentUrl);
    }
  };

  const copyUrlToClipboard = async (url: string) => {
    try {
      await navigator.clipboard.writeText(`${url}\n\nCheck out Aarush's legendary hotel parody! 😂👑`);
      const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
      if (isLocal) {
        showToast("Prank link copied! (Note: Local preview is active) 📋");
      } else {
        showToast("Prank link copied to clipboard! Share with the gang! 📲✨");
      }
    } catch {
      showToast("Link ready to share! Copy the address bar URL to send to friends.");
    }
  };

  const showToast = (msg: string) => {
    setGlobalToast(msg);
    setTimeout(() => {
      setGlobalToast(null);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#0a0708] text-[#fdfbf7] flex flex-col font-sans-luxury selection:bg-yellow-500 selection:text-black">
      {/* Navigation Header */}
      <Navbar
        isSoundEnabled={isSoundEnabled}
        onToggleSound={toggleSound}
        onOpenSurprise={handleOpenSurprise}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 4: Hero */}
        <Hero onOpenSurprise={handleOpenSurprise} />

        {/* Section 5 & 6: Hostess Invitation with Photorealistic Hostess */}
        <HostessSection onOpenSurprise={handleOpenSurprise} />

        {/* Section 7: Special Comedy Offer */}
        <SpecialOffer onOpenSurprise={handleOpenSurprise} />

        {/* Section 11: Meet The Legend - Aarush */}
        <MeetTheLegend />

        {/* Section 12: Fictional Comedy Reviews */}
        <ReviewsSection isSoundEnabled={isSoundEnabled} />

        {/* Grand Finale Section at the Very Bottom with 20% opacity bed lounging scene */}
        <BottomSurpriseSection onOpenSurprise={handleOpenSurprise} />
      </main>

      {/* Section 13: Footer & Disclaimers */}
      <Footer onOpenSurprise={handleOpenSurprise} onShare={handleShareGlobal} />

      {/* Section 8: Main Prank Reveal Overlay */}
      <PrankModal
        isOpen={isPrankOpen}
        onClose={() => setIsPrankOpen(false)}
        isSoundEnabled={isSoundEnabled}
      />

      {/* Floating Action Button for Quick Prank Reveal on Mobile/Desktop */}
      <button
        onClick={handleOpenSurprise}
        className="fixed bottom-6 right-6 z-30 flex items-center gap-2 rounded-full border-2 border-yellow-400 bg-gradient-to-r from-red-600 to-amber-600 px-4 py-3 font-bold text-white shadow-[0_0_25px_rgba(234,179,8,0.5)] hover:scale-110 active:scale-95 transition-all cursor-pointer group"
        aria-label="Open surprise reveal"
      >
        <Sparkles className="w-5 h-5 text-yellow-300 animate-spin" style={{ animationDuration: '4s' }} />
        <span className="text-xs sm:text-sm font-black tracking-wide pr-1">Surprise 😂</span>
      </button>

      {/* Global Toast Notification */}
      {globalToast && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 rounded-2xl bg-[#1f0b10] border-2 border-yellow-500/80 px-6 py-3 text-sm font-bold text-yellow-200 shadow-[0_0_30px_rgba(234,179,8,0.4)] animate-in fade-in slide-in-from-bottom-4">
          {globalToast}
        </div>
      )}
    </div>
  );
}
