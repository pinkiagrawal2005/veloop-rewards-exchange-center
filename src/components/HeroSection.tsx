import React, { useState } from 'react';

const HERO_IMAGE_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA47kN9vaXVTQMUYqINI7m_MPg3PJGz1jkrhBcskiZww6Vdggeg6SQfHymzapkfrc9I757MtEn27g9WdOpoD8qgn-paKhGJCrV0fGrCIxUSIwHMPB7btpw5UeoY8c9wgBLa8GECM7o309MOoBDRzMJwRP0j6KPrea2nRs1Z_Lk_pV5B5IJ4AWtBQHGE0GuN4WuEaurx1DV5qLJG3bLlXPY_u75TdX6S2zcaAYqPTJphWv_GorhgE3Vvpg';

export const HeroSection: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(true);

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#191b2a] p-6 lg:p-8 mb-8 shadow-xl border border-white/5">
      {/* Ambient jewel nebulas */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#5c03cb]/25 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#e5b54f]/20 blur-3xl pointer-events-none"></div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Content */}
        <div className="lg:col-span-6 flex flex-col space-y-4">
          <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-[#272939] text-[#d2bbff] text-xs font-semibold border border-[#d2bbff]/20">
            <span className="w-2 h-2 rounded-full bg-[#d2bbff] animate-pulse"></span>
            VELOOP CONVERSION PORTAL ACTIVE
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-[38px] font-bold tracking-tight text-[#e1e1f6] leading-tight">
            Turn Your Gems{' '}
            <span className="bg-gradient-to-r from-[#d2bbff] via-[#ffd277] to-[#e5b54f] bg-clip-text text-transparent">
              into VEs
            </span>
          </h1>

          <p className="text-base text-[#d2c5b1] max-w-xl leading-relaxed">
            Convert your earned platform Gems into official VELOOP Coins (VEs) and accelerate your reward journey.
            Experience immediate crediting, guaranteed rate locks, and zero transaction fees.
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-2">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1d1f2e]/80 text-[#e1e1f6] text-xs font-semibold border border-white/5">
              <span className="material-symbols-outlined text-[#ffd277] text-[18px]">flash_on</span>
              Instant Crediting
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1d1f2e]/80 text-[#e1e1f6] text-xs font-semibold border border-white/5">
              <span className="material-symbols-outlined text-[#d2bbff] text-[18px]">shield</span>
              Guaranteed 1:1 Safety
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1d1f2e]/80 text-[#e1e1f6] text-xs font-semibold border border-white/5">
              <span className="material-symbols-outlined text-[#d3d6fc] text-[18px]">trending_up</span>
              Tier 7 Multiplier Active
            </div>
          </div>
        </div>

        {/* Right 3D Visual Stage Asset */}
        <div className="lg:col-span-6 relative flex items-center justify-center min-h-[260px]">
          <div className="relative w-full max-w-lg flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-[#5c03cb]/25 to-[#e5b54f]/20 rounded-full blur-2xl transform scale-90"></div>

            {imageLoaded ? (
              <img
                src={HERO_IMAGE_URL}
                alt="Luminous Gem to VE Coin portal transformation"
                referrerPolicy="no-referrer"
                onError={() => setImageLoaded(false)}
                className="relative z-10 w-full max-h-72 object-contain drop-shadow-[0_12px_36px_rgba(0,0,0,0.6)] transform hover:scale-105 transition-transform duration-500 ease-out"
              />
            ) : (
              /* High-fidelity CSS/SVG fallback matching design */
              <div className="relative z-10 w-full h-64 rounded-2xl bg-[#1d1f2e]/80 border border-white/10 flex items-center justify-center gap-6 p-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#5c03cb] to-[#d2bbff] flex items-center justify-center shadow-[0_0_30px_rgba(144,85,255,0.4)]">
                  <span className="material-symbols-outlined text-white text-[42px]">diamond</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="material-symbols-outlined text-[#ffd277] text-[28px] animate-pulse">sync_alt</span>
                  <span className="text-[10px] text-[#ffd277] font-bold mt-1">RATE LOCKED</span>
                </div>
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#e5b54f] to-[#ffd277] flex items-center justify-center shadow-[0_0_30px_rgba(229,181,79,0.4)]">
                  <span className="material-symbols-outlined text-[#402d00] text-[42px]">monetization_on</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
