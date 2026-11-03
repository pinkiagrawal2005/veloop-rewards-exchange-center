import React, { useState } from 'react';
import { useVault, CONVERSION_TIERS } from '../context/VaultContext';
import { ConversionTier } from '../types';

export const ConversionCards: React.FC = () => {
  const { gems, setSelectedTier, setIsConfirmModalOpen } = useVault();
  const [showCustomCalculator, setShowCustomCalculator] = useState(false);
  const [customGems, setCustomGems] = useState(50);

  const handleSelectTier = (tier: ConversionTier) => {
    setSelectedTier(tier);
    setIsConfirmModalOpen(true);
  };

  // Base rate calculation for custom amount ~5.4 VEs per gem + tier 7 bonus
  const calculateCustomVe = (gemAmount: number) => {
    const baseMultiplier = 5.4;
    const tierBonus = 1.05; // 5% tier 7 bonus
    return Math.floor(gemAmount * baseMultiplier * tierBonus);
  };

  const handleCustomConvert = () => {
    const customTier: ConversionTier = {
      id: 'custom-tier',
      tierNumber: 5,
      tag: 'Custom',
      tagColor: 'primary',
      title: 'Custom Gem Conversion',
      description: `Custom bundle of ${customGems} gems with Tier 7 Gold multiplier.`,
      gemsRequired: customGems,
      veReceived: calculateCustomVe(customGems),
    };
    handleSelectTier(customTier);
  };

  return (
    <div className="mb-8">
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <h2 className="text-xl font-bold text-[#e1e1f6]">Available Conversions</h2>
          <p className="text-sm text-[#d2c5b1]">
            Select your preferred bundle to exchange platform gems for official VE coins.
          </p>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            onClick={() => setShowCustomCalculator(!showCustomCalculator)}
            className="text-xs px-3 py-1 rounded-full bg-[#1d1f2e] hover:bg-[#272939] text-[#ffd277] border border-[#ffd277]/20 transition-colors flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[15px]">calculate</span>
            {showCustomCalculator ? 'Hide Calculator' : 'Custom Amount'}
          </button>
          <span className="text-[11px] text-[#d2c5b1] px-3 py-1 rounded-full bg-[#1d1f2e] border border-white/5">
            Rates reset daily at 00:00 UTC
          </span>
        </div>
      </div>

      {/* Custom Calculator Slider (Expandable) */}
      {showCustomCalculator && (
        <div className="mb-6 p-5 rounded-2xl bg-gradient-to-r from-[#191b2a] via-[#1d1f2e] to-[#191b2a] border border-[#ffd277]/20 shadow-xl animate-fadeIn">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="w-full md:w-2/3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-[#e1e1f6] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#d2bbff] text-[20px]">diamond</span>
                  Select Gem Quantity: <strong className="text-[#ffd277]">{customGems} Gems</strong>
                </span>
                <span className="text-xs text-[#d2c5b1]">Available: {gems} Gems</span>
              </div>
              <input
                type="range"
                min="10"
                max={Math.max(100, gems)}
                step="5"
                value={customGems}
                onChange={(e) => setCustomGems(Number(e.target.value))}
                className="w-full accent-[#ffd277] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[#9b8f7d] mt-1">
                <span>10 Min</span>
                <span>50 Standard</span>
                <span>{Math.max(100, gems)} Max</span>
              </div>
            </div>

            <div className="w-full md:w-1/3 flex items-center justify-between md:justify-end gap-4 p-3 rounded-xl bg-[#0b0d1c]/60 border border-white/5">
              <div>
                <span className="text-[10px] uppercase font-bold text-[#d2c5b1] block">You Receive</span>
                <span className="text-xl font-bold text-[#ffd277] tabular-nums">
                  {calculateCustomVe(customGems)} VE
                </span>
              </div>
              <button
                onClick={handleCustomConvert}
                disabled={gems < customGems}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  gems >= customGems
                    ? 'bg-gradient-to-r from-[#ffd277] to-[#e5b54f] text-[#402d00] hover:shadow-lg hover:shadow-[#ffd277]/20'
                    : 'bg-[#272939] text-[#9b8f7d] cursor-not-allowed'
                }`}
              >
                <span>Exchange</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4 TIER CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {CONVERSION_TIERS.map((tier) => {
          const isAffordable = gems >= tier.gemsRequired;

          return (
            <div
              key={tier.id}
              className="group relative rounded-2xl bg-[#191b2a] hover:bg-[#1d1f2e] p-5 flex flex-col justify-between shadow-md transition-all duration-300 hover:-translate-y-1 border border-white/5 hover:border-white/10"
            >
              <div>
                {/* Badge & Tier Number */}
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[11px] uppercase tracking-wider font-bold ${
                      tier.tagColor === 'primary'
                        ? 'bg-[#e5b54f]/25 text-[#ffd277] border border-[#ffd277]/30'
                        : tier.tagColor === 'tertiary'
                        ? 'bg-[#b7badf]/25 text-[#d3d6fc] border border-[#d3d6fc]/30'
                        : 'bg-[#5c03cb]/40 text-[#d2bbff] border border-[#d2bbff]/30'
                    }`}
                  >
                    {tier.tag}
                  </span>
                  <span className="text-xs text-[#d2c5b1]">Tier {tier.tierNumber}</span>
                </div>

                {/* Card Title & Description */}
                <h3 className="text-base font-bold text-[#e1e1f6] group-hover:text-[#ffd277] transition-colors">
                  {tier.title}
                </h3>
                <p className="text-xs text-[#d2c5b1] mt-1 mb-4 leading-relaxed">
                  {tier.description}
                </p>

                {/* Conversion Pathway Visual */}
                <div className="p-3 rounded-xl bg-[#0b0d1c]/80 border border-white/5 flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#d2bbff] text-[22px]">diamond</span>
                    <span className="text-base font-bold text-[#e1e1f6] tabular-nums">
                      {tier.gemsRequired}
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-[#d2c5b1] text-[18px]">
                    arrow_forward
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[#ffd277] text-[22px]">
                      monetization_on
                    </span>
                    <span className="text-base font-bold text-[#ffd277] tabular-nums">
                      {tier.veReceived} VE
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleSelectTier(tier)}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#ffd277] to-[#e5b54f] text-[#402d00] text-sm font-bold shadow-md hover:shadow-lg hover:shadow-[#ffd277]/25 transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
                type="button"
              >
                <span>Convert Rewards</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          );
        })}
      </div>

      <p className="mt-3 text-xs text-[#d2c5b1]/80">
        * Illustrative example exchange rates. Final exchange values are locked at the time of conversion and backed by verified reward vault reserves.
      </p>
    </div>
  );
};
