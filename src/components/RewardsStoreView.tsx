import React, { useState } from 'react';
import { useVault } from '../context/VaultContext';
import { StoreReward } from '../types';

export const RewardsStoreView: React.FC = () => {
  const { ve, storeRewards, redeemStoreReward } = useVault();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [redeemedCode, setRedeemedCode] = useState<{ title: string; code: string } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const categories = ['All', 'Vouchers', 'Digital Perks', 'Merchandise', 'Boosters'];

  const filteredRewards = selectedCategory === 'All'
    ? storeRewards
    : storeRewards.filter((r) => r.category === selectedCategory);

  const handleRedeem = (reward: StoreReward) => {
    if (ve < reward.veCost) {
      setErrorMessage(`Insufficient VE coins. You need ${reward.veCost - ve} more VE coins to redeem this item.`);
      return;
    }
    setErrorMessage(null);
    const success = redeemStoreReward(reward);
    if (success) {
      const generatedCode = `VEL-REDEEM-${Math.random().toString(36).substring(2, 8).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setRedeemedCode({ title: reward.title, code: generatedCode });
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="relative overflow-hidden rounded-2xl bg-[#191b2a] border border-white/5 p-6 lg:p-8 shadow-xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e5b54f]/20 text-[#ffd277] text-xs font-semibold mb-3 border border-[#ffd277]/20">
              <span className="material-symbols-outlined text-[14px]">storefront</span>
              VELOOP REWARDS VAULT STORE
            </div>
            <h1 className="text-3xl font-bold text-[#e1e1f6]">Redeem Your VEs</h1>
            <p className="text-sm text-[#d2c5b1] max-w-xl mt-1">
              Spend your converted platform VE coins on exclusive digital gifts, gaming memberships, physical merchandise, and multipliers.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#0b0d1c] border border-white/10 flex items-center gap-4 shrink-0">
            <div className="w-12 h-12 rounded-xl bg-[#e5b54f]/25 flex items-center justify-center text-[#ffd277]">
              <span className="material-symbols-outlined text-[28px]">monetization_on</span>
            </div>
            <div>
              <span className="text-[11px] uppercase font-bold text-[#d2c5b1]">Your Vault Purchasing Power</span>
              <div className="text-2xl font-bold text-[#ffd277] tabular-nums">{ve.toLocaleString()} VE</div>
            </div>
          </div>
        </div>
      </div>

      {/* Error Alert */}
      {errorMessage && (
        <div className="p-4 rounded-xl bg-[#93000a]/20 border border-[#ffb4ab]/30 text-xs text-[#ffdad6] flex items-center justify-between gap-3 animate-fadeIn">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#ffb4ab] text-[18px]">warning</span>
            <span>{errorMessage}</span>
          </div>
          <button onClick={() => setErrorMessage(null)} className="text-[#ffdad6] hover:text-white">
            <span className="material-symbols-outlined text-[16px]">close</span>
          </button>
        </div>
      )}

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? 'bg-[#ffd277] text-[#402d00] font-bold shadow-md'
                : 'bg-[#191b2a] text-[#d2c5b1] hover:text-[#e1e1f6] hover:bg-[#272939]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Rewards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredRewards.map((reward) => {
          const canAfford = ve >= reward.veCost;

          return (
            <div
              key={reward.id}
              className="group rounded-2xl bg-[#191b2a] border border-white/5 hover:border-white/10 overflow-hidden shadow-md flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="h-44 w-full bg-[#101221] relative overflow-hidden flex items-center justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#272939] flex items-center justify-center text-[#ffd277] shadow-lg group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[36px]">{reward.icon}</span>
                  </div>
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#0b0d1c]/80 text-[#d2bbff] text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                    {reward.category}
                  </span>
                  {reward.popular && (
                    <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-[#e5b54f] text-[#402d00] text-[10px] font-bold uppercase tracking-wider">
                      Popular
                    </span>
                  )}
                </div>

                <div className="p-5">
                  <h3 className="text-base font-bold text-[#e1e1f6] group-hover:text-[#ffd277] transition-colors">
                    {reward.title}
                  </h3>
                  <p className="text-xs text-[#d2c5b1] mt-1.5 leading-relaxed">
                    {reward.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="flex items-center justify-between mb-4 pt-3 border-t border-white/5">
                  <span className="text-xs text-[#d2c5b1]">Redemption Cost</span>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[#ffd277] text-[18px]">monetization_on</span>
                    <span className="text-base font-bold text-[#ffd277] tabular-nums">{reward.veCost.toLocaleString()} VE</span>
                  </div>
                </div>

                <button
                  onClick={() => handleRedeem(reward)}
                  disabled={!canAfford}
                  className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    canAfford
                      ? 'bg-gradient-to-r from-[#ffd277] to-[#e5b54f] text-[#402d00] hover:shadow-lg hover:shadow-[#ffd277]/20 active:scale-[0.98]'
                      : 'bg-[#272939] text-[#9b8f7d] cursor-not-allowed'
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">redeem</span>
                  <span>{canAfford ? 'Redeem Perk' : 'Need More VE'}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Redemption Success Modal */}
      {redeemedCode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#101221]/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-md rounded-2xl bg-[#1d1f2e] border border-white/10 p-6 shadow-2xl text-center animate-scaleUp">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#e5b54f]/20 text-[#ffd277] flex items-center justify-center mb-3">
              <span className="material-symbols-outlined text-[32px]">task_alt</span>
            </div>
            <h3 className="text-xl font-bold text-[#e1e1f6]">Reward Claimed!</h3>
            <p className="text-xs text-[#d2c5b1] mt-1 mb-4">
              Your {redeemedCode.title} is ready. Use the activation key below to redeem:
            </p>

            <div className="p-3 rounded-xl bg-[#0b0d1c] border border-[#ffd277]/30 text-[#ffd277] font-mono text-sm font-bold tracking-wider mb-5 select-all">
              {redeemedCode.code}
            </div>

            <button
              onClick={() => setRedeemedCode(null)}
              className="w-full py-2.5 rounded-xl bg-[#ffd277] hover:bg-[#f0bf58] text-[#402d00] text-sm font-bold shadow-md transition-all"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
