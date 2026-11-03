import React from 'react';
import { useVault, CONVERSION_TIERS } from '../context/VaultContext';

export const DashboardView: React.FC = () => {
  const { gems, ve, setActiveTab, setSelectedTier, setIsConfirmModalOpen } = useVault();

  const handleQuickConvert = () => {
    setSelectedTier(CONVERSION_TIERS[0]);
    setIsConfirmModalOpen(true);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Welcome Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-[#191b2a] border border-white/5 p-6 lg:p-8 shadow-xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#5c03cb]/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#ffd277] to-[#e5b54f] flex items-center justify-center shadow-lg text-[#402d00]">
              <span className="material-symbols-outlined text-[36px]">shield_person</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold text-[#e1e1f6]">Welcome Back, Hasan</h1>
                <span className="px-2.5 py-0.5 rounded-full bg-[#e5b54f]/25 text-[#ffd277] text-xs font-bold border border-[#ffd277]/30">
                  Gold Vault Tier 7
                </span>
              </div>
              <p className="text-sm text-[#d2c5b1] mt-1">
                Vault Season 4 is active. You have a 14-day login streak with an active +5% bonus on all gem exchanges!
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab('exchange-center')}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#ffd277] to-[#e5b54f] text-[#402d00] text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">sync_alt</span>
              Exchange Center
            </button>
            <button
              onClick={() => setActiveTab('rewards')}
              className="px-4 py-2.5 rounded-xl bg-[#272939] hover:bg-[#323444] text-[#e1e1f6] text-sm font-semibold transition-all flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[18px]">storefront</span>
              Rewards Store
            </button>
          </div>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-[#1d1f2e] border border-white/5 shadow-md">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#d2c5b1]">Available Gems</span>
            <span className="material-symbols-outlined text-[#d2bbff] text-[20px]">diamond</span>
          </div>
          <div className="text-3xl font-bold text-[#e1e1f6] tabular-nums">{gems.toLocaleString()}</div>
          <span className="text-xs text-[#d2bbff] mt-1 inline-block">Ready to convert</span>
        </div>

        <div className="p-5 rounded-2xl bg-[#1d1f2e] border border-white/5 shadow-md">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#d2c5b1]">Available VEs</span>
            <span className="material-symbols-outlined text-[#ffd277] text-[20px]">monetization_on</span>
          </div>
          <div className="text-3xl font-bold text-[#ffd277] tabular-nums">{ve.toLocaleString()}</div>
          <span className="text-xs text-[#ffd277]/80 mt-1 inline-block">Redeemable in store</span>
        </div>

        <div className="p-5 rounded-2xl bg-[#1d1f2e] border border-white/5 shadow-md">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#d2c5b1]">Active Streak</span>
            <span className="material-symbols-outlined text-[#ffd277] text-[20px]">local_fire_department</span>
          </div>
          <div className="text-3xl font-bold text-[#e1e1f6] tabular-nums">14 Days</div>
          <span className="text-xs text-[#d2c5b1] mt-1 inline-block">+15 Gems drop unlocked</span>
        </div>

        <div className="p-5 rounded-2xl bg-[#1d1f2e] border border-white/5 shadow-md">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#d2c5b1]">Tier Multiplier</span>
            <span className="material-symbols-outlined text-[#d3d6fc] text-[20px]">trending_up</span>
          </div>
          <div className="text-3xl font-bold text-[#d3d6fc] tabular-nums">+5.0%</div>
          <span className="text-xs text-[#d2c5b1] mt-1 inline-block">Tier 8 diamond at 5k VEs</span>
        </div>
      </div>

      {/* Two Column Layout: Roadmap & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Vault Progression Tier Roadmap (7 cols) */}
        <div className="lg:col-span-7 p-6 rounded-2xl bg-[#1d1f2e] border border-white/5 shadow-lg">
          <h3 className="text-base font-bold text-[#e1e1f6] mb-1">Vault Membership Progression</h3>
          <p className="text-xs text-[#d2c5b1] mb-6">Upgrade your loyalty rank to unlock higher exchange rates and exclusive rewards.</p>

          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-[#191b2a] border border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#272939] flex items-center justify-center text-[#d2c5b1]">
                  <span className="material-symbols-outlined text-[20px]">workspace_premium</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#e1e1f6]">Level 6 &bull; Silver Vault</h4>
                  <span className="text-xs text-[#9b8f7d]">Standard conversion rates</span>
                </div>
              </div>
              <span className="text-xs font-bold text-[#d2bbff] px-2.5 py-1 rounded-full bg-[#5c03cb]/20">Achieved</span>
            </div>

            <div className="p-4 rounded-xl bg-[#272939]/80 border border-[#ffd277]/40 flex items-center justify-between shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#e5b54f]/30 flex items-center justify-center text-[#ffd277]">
                  <span className="material-symbols-outlined text-[20px]">military_tech</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-[#ffd277]">Level 7 &bull; Gold Vault</h4>
                    <span className="text-[10px] uppercase font-bold text-[#402d00] bg-[#ffd277] px-2 py-0.5 rounded-full">Current</span>
                  </div>
                  <span className="text-xs text-[#d2c5b1]">+5% bonus on all gem exchanges &bull; VIP drops</span>
                </div>
              </div>
              <span className="text-xs font-bold text-[#ffd277]">Active</span>
            </div>

            <div className="p-4 rounded-xl bg-[#191b2a] border border-white/5 flex items-center justify-between opacity-80">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#272939] flex items-center justify-center text-[#9b8f7d]">
                  <span className="material-symbols-outlined text-[20px]">diamond</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#e1e1f6]">Level 8 &bull; Diamond Vault</h4>
                  <span className="text-xs text-[#9b8f7d]">+10% bonus &bull; 0 cooldown instant cashout</span>
                </div>
              </div>
              <span className="text-xs font-bold text-[#9b8f7d]">Unlocks at 5,000 VE</span>
            </div>
          </div>
        </div>

        {/* Right: Quick Action Pod (5 cols) */}
        <div className="lg:col-span-5 p-6 rounded-2xl bg-[#191b2a] border border-white/5 shadow-lg flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-[#e1e1f6]">Quick Exchange</h3>
              <span className="text-xs text-[#ffd277] font-semibold">Tier 1 Starter</span>
            </div>

            <div className="p-4 rounded-xl bg-[#1d1f2e] border border-white/5 mb-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-[#d2c5b1]">Exchange Cost</span>
                <span className="text-sm font-bold text-[#d2bbff] flex items-center gap-1">
                  28 <span className="material-symbols-outlined text-[16px]">diamond</span>
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#d2c5b1]">Immediate Credit</span>
                <span className="text-sm font-bold text-[#ffd277] flex items-center gap-1">
                  151 VE <span className="material-symbols-outlined text-[16px]">monetization_on</span>
                </span>
              </div>
            </div>

            <p className="text-xs text-[#d2c5b1] leading-relaxed mb-6">
              Convert directly now without navigating away. Your transaction will be atomic and credited instantaneously.
            </p>
          </div>

          <button
            onClick={handleQuickConvert}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-[#ffd277] to-[#e5b54f] text-[#402d00] text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <span>Convert 28 Gems Now</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};
