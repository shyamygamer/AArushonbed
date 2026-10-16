import React, { useState } from 'react';
import { Volume2, VolumeX, Crown, Menu, X, Sparkles, Laugh } from 'lucide-react';

interface NavbarProps {
  isSoundEnabled: boolean;
  onToggleSound: () => void;
  onOpenSurprise: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isSoundEnabled,
  onToggleSound,
  onOpenSurprise,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'The Legend', href: '#legend' },
    { label: 'Special Offer', href: '#special-offer' },
    { label: 'Hostess', href: '#hostess' },
    { label: 'Reviews', href: '#reviews' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-yellow-500/20 bg-[#0c0809]/90 backdrop-blur-md">
      {/* Top Banner: Fictional Comedy Experience Badge */}
      <div className="bg-gradient-to-r from-red-950 via-red-900 to-red-950 py-1.5 px-4 text-center border-b border-red-500/30">
        <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-amber-200">
          <Laugh className="w-3.5 h-3.5 text-yellow-400 animate-spin" style={{ animationDuration: '6s' }} />
          <span>FICTIONAL COMEDY EXPERIENCE</span>
          <span className="hidden sm:inline text-zinc-400">•</span>
          <span className="hidden sm:inline text-red-200">100% Joke Parody • No Real Bookings</span>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand */}
        <a
          href="#hero"
          className="group flex items-center gap-2.5 transition-transform active:scale-95"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#hero');
          }}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-500 to-amber-700 p-0.5 shadow-[0_0_15px_rgba(234,179,8,0.4)]">
            <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-black">
              <Crown className="h-5 w-5 text-yellow-400 transition-transform group-hover:rotate-12" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5 font-cinzel text-lg sm:text-xl font-black tracking-tight text-white group-hover:text-yellow-400 transition-colors">
              <span>ARUSH ON BED</span>
              <span className="text-xl">👑</span>
            </div>
            <div className="font-sans text-[10px] font-bold tracking-widest uppercase text-yellow-500/80">
              THE MIDNIGHT LEGEND
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="px-3.5 py-1.5 rounded-lg text-sm font-medium text-zinc-300 hover:text-yellow-400 hover:bg-yellow-500/10 transition-all cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#grand-surprise')}
            className="ml-2 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-sm font-bold text-red-300 bg-red-950/60 border border-red-500/40 hover:bg-red-900/60 transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
            Surprise at Bottom 👇
          </button>
        </nav>

        {/* Actions: Sound Toggle & Mobile Menu */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Working Sound Toggle */}
          <button
            onClick={onToggleSound}
            className={`inline-flex items-center gap-2 rounded-xl px-3 py-1.5 text-xs sm:text-sm font-semibold transition-all border cursor-pointer ${
              isSoundEnabled
                ? 'bg-yellow-500/20 border-yellow-500 text-yellow-300 shadow-[0_0_15px_rgba(234,179,8,0.25)]'
                : 'bg-zinc-900/80 border-zinc-700 text-zinc-400 hover:text-zinc-200'
            }`}
            title={isSoundEnabled ? 'Click to Mute Sound' : 'Click to Enable Comedy Sound'}
            aria-pressed={isSoundEnabled}
          >
            {isSoundEnabled ? (
              <>
                <Volume2 className="h-4 w-4 text-yellow-400 animate-pulse" />
                <span className="hidden xs:inline">SOUND ON</span>
              </>
            ) : (
              <>
                <VolumeX className="h-4 w-4 text-zinc-400" />
                <span className="hidden xs:inline">SOUND OFF</span>
              </>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden rounded-lg p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-yellow-500/20 bg-[#120a0d] px-4 py-4 space-y-2 animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-zinc-300 hover:bg-yellow-500/10 hover:text-yellow-400 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              handleNavClick('#grand-surprise');
            }}
            className="w-full flex items-center justify-center gap-2 mt-2 px-4 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-red-700 to-amber-600 text-white shadow-md cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-yellow-300" />
            GO TO GRAND SURPRISE AT BOTTOM 👇
          </button>
        </div>
      )}
    </header>
  );
};
