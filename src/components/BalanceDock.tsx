import React from 'react';
import { useVault } from '../context/VaultContext';

export const BalanceDock: React.FC = () => {
  const { gems, ve, milestoneTarget, setActiveTab } = useVault();

  const progressPercent = Math.min(100, (ve / milestoneTarget) * 100);
  const remainingVe = Math.max(0, milestoneTarget - ve);

  return (
    <div className="mb-8 p-6 rounded-2xl bg-[#1d1f2e] border border-white/5 shadow-lg relative overflow-hidden">
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6">
        {/* Card A: Available Gems */}
        <div className="flex-1 p-4 rounded-xl bg-[#191b2a] flex items-center justify-between group hover:bg-[#272939]/70 transition-all border border-white/5">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-[#5c03cb]/30 border border-[#d2bbff]/20 flex items-center justify-center text-[#d2bbff] shadow-[0_0_24px_rgba(144,85,255,0.35)] shrink-0">
              <span className="material-symbols-outlined text-[32px]">diamond</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs text-[#d2c5b1] font-bold uppercase tracking-wider">Available Gems</span>
                <span
                  className="material-symbols-outlined text-[#9b8f7d] text-[16px] cursor-help hover:text-[#e1e1f6]"
                  title="Reward credits earned through eligible platform activities, daily streaks, and missions."
                >
                  info
                </span>
              </div>
              <div className="text-3xl font-bold text-[#e1e1f6] leading-none mt-1.5 tabular-nums">
                {gems.toLocaleString()}
              </div>
              <span className="text-xs text-[#d2bbff] mt-0.5 inline-block">Ready for exchange</span>
            </div>
          </div>
          <button
            onClick={() => setActiveTab('history')}
            className="hidden sm:inline-flex items-center justify-center p-2.5 rounded-lg bg-[#1d1f2e] text-[#d2c5b1] hover:text-[#e1e1f6] hover:bg-[#272939] transition-colors"
            title="Gem History"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">history</span>
          </button>
        </div>

        {/* Connector: Luminous Portal Pathway */}
        <div className="shrink-0 flex lg:flex-col items-center justify-center gap-2 py-2 lg:py-0 px-4">
          <div className="hidden lg:block w-px h-6 bg-gradient-to-b from-[#d2bbff] to-[#ffd277] opacity-40"></div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#323444] border border-white/10 shadow-inner">
            <span className="material-symbols-outlined text-[#d2bbff] text-[16px]">sync_alt</span>
            <span className="text-[10px] uppercase tracking-wider font-bold text-[#ffd277]">Exchange Portal</span>
          </div>
          <div className="hidden lg:block w-px h-6 bg-gradient-to-b from-[#ffd277] to-[#d2bbff] opacity-40"></div>
        </div>

        {/* Card B: Available VEs */}
        <div className="flex-1 p-4 rounded-xl bg-[#191b2a] flex items-center justify-between group hover:bg-[#272939]/70 transition-all border border-white/5">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-[#e5b54f]/25 border border-[#ffd277]/20 flex items-center justify-center text-[#ffd277] shadow-[0_0_24px_rgba(229,181,79,0.35)] shrink-0">
              <span className="material-symbols-outlined text-[32px]">monetization_on</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs text-[#d2c5b1] font-bold uppercase tracking-wider">Available VEs</span>
                <span
                  className="material-symbols-outlined text-[#9b8f7d] text-[16px] cursor-help hover:text-[#e1e1f6]"
                  title="VELOOP virtual reward currency redeemable in the Rewards Store for perks and prizes."
                >
                  info
                </span>
              </div>
              <div className="flex items-baseline gap-1 mt-1.5">
                <span className="text-3xl font-bold text-[#ffd277] leading-none tabular-nums">
                  {ve.toLocaleString()}
                </span>
                <span className="text-base text-[#d2c5b1] font-semibold">VE</span>
              </div>
              <span className="text-xs text-[#f0bf58] mt-0.5 inline-block">Vault purchasing power</span>
            </div>
          </div>
          <button
            onClick={() => setActiveTab('rewards')}
            className="hidden sm:inline-flex items-center justify-center p-2.5 rounded-lg bg-[#1d1f2e] text-[#d2c5b1] hover:text-[#e1e1f6] hover:bg-[#272939] transition-colors"
            title="Spend in store"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">storefront</span>
          </button>
        </div>
      </div>

      {/* Progress status line */}
      <div className="mt-4 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-[#0b0d1c]/60 rounded-xl px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#ffd277] text-[18px]">verified</span>
          <span className="text-xs sm:text-sm text-[#d2c5b1]">
            Next tier milestone: Reach <strong className="text-[#e1e1f6]">{milestoneTarget.toLocaleString()} VEs</strong> for Gold Vault Status (+5% conversion boost)
          </span>
        </div>
        <div className="w-full sm:w-56 flex items-center gap-3">
          <div className="flex-1 h-2 rounded-full bg-[#272939] overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#d2bbff] to-[#ffd277] rounded-full transition-all duration-700"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
          <span className="text-xs text-[#ffd277] font-bold shrink-0 tabular-nums">
            {remainingVe > 0 ? `${remainingVe} VE left` : 'Unlocked!'}
          </span>
        </div>
      </div>
    </div>
  );
};
