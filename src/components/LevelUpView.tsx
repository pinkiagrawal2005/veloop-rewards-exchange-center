import React from 'react';
import { useVault } from '../context/VaultContext';

export const LevelUpView: React.FC = () => {
  const { gems, quests, claimQuest, setActiveTab } = useVault();

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-[#191b2a] border border-white/5 p-6 lg:p-8 shadow-xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5c03cb]/30 text-[#d2bbff] text-xs font-semibold mb-3 border border-[#d2bbff]/20">
              <span className="material-symbols-outlined text-[14px]">stars</span>
              GEM REWARD MISSIONS &bull; SEASON 4
            </div>
            <h1 className="text-3xl font-bold text-[#e1e1f6]">Earn More Gems &amp; Level Up</h1>
            <p className="text-sm text-[#d2c5b1] max-w-xl mt-1">
              Complete community quests, maintain active streaks, and verify account security to earn platform Gems.
              Convert gems into official VE coins at guaranteed locked rates.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#0b0d1c] border border-white/10 flex items-center gap-4 shrink-0">
            <div className="w-12 h-12 rounded-xl bg-[#5c03cb]/30 flex items-center justify-center text-[#d2bbff]">
              <span className="material-symbols-outlined text-[28px]">diamond</span>
            </div>
            <div>
              <span className="text-[11px] uppercase font-bold text-[#d2c5b1]">Your Available Gems</span>
              <div className="text-2xl font-bold text-[#e1e1f6] tabular-nums">{gems.toLocaleString()}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Level XP Bar */}
      <div className="p-6 rounded-2xl bg-[#1d1f2e] border border-white/5 shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#ffd277] to-[#e5b54f] flex items-center justify-center text-[#402d00] font-bold">
              7
            </div>
            <div>
              <h3 className="text-base font-bold text-[#e1e1f6]">Gold Vault Status (Level 7)</h3>
              <p className="text-xs text-[#d2c5b1]">Current multiplier: +5.0% VE on every exchange</p>
            </div>
          </div>
          <span className="text-xs text-[#ffd277] font-semibold">
            1,550 XP needed for Level 8 Diamond Vault (+10% VE)
          </span>
        </div>

        <div className="w-full h-2.5 rounded-full bg-[#101221] overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#d2bbff] to-[#ffd277] rounded-full w-[84%]"></div>
        </div>
      </div>

      {/* Quests List */}
      <div className="rounded-2xl bg-[#1d1f2e] border border-white/5 p-6 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-base font-bold text-[#e1e1f6]">Active Reward Quests</h3>
            <p className="text-xs text-[#d2c5b1]">Claim your earned gems to replenish your exchange balance.</p>
          </div>
          <button
            onClick={() => setActiveTab('exchange-center')}
            className="text-xs text-[#ffd277] hover:underline flex items-center gap-1 font-semibold"
          >
            <span>Back to Exchange</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>

        <div className="space-y-3">
          {quests.map((quest) => (
            <div
              key={quest.id}
              className="p-4 rounded-xl bg-[#191b2a] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#272939]/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#272939] flex items-center justify-center text-[#ffd277] shrink-0">
                  <span className="material-symbols-outlined text-[22px]">{quest.icon}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-[#e1e1f6]">{quest.title}</span>
                    <span className="px-2 py-0.5 rounded-full bg-[#101221] text-[10px] font-bold text-[#d2c5b1]">
                      {quest.category}
                    </span>
                  </div>
                  <div className="text-xs text-[#d2c5b1] mt-0.5 flex items-center gap-3">
                    <span className="text-[#d2bbff] font-semibold">+{quest.gemReward} Gems</span>
                    <span>&bull;</span>
                    <span className="text-[#ffd277]">+{quest.xpReward} XP</span>
                    <span>&bull;</span>
                    <span>Progress: {quest.progress}/{quest.total}</span>
                  </div>
                </div>
              </div>

              <div>
                {quest.claimed ? (
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#272939] text-[#9b8f7d] text-xs font-semibold">
                    <span className="material-symbols-outlined text-[16px]">check</span> Claimed
                  </span>
                ) : quest.completed ? (
                  <button
                    onClick={() => claimQuest(quest.id)}
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#ffd277] to-[#e5b54f] text-[#402d00] text-xs font-bold shadow-md hover:shadow-[#ffd277]/20 transition-all flex items-center gap-1.5 animate-pulse"
                  >
                    <span className="material-symbols-outlined text-[16px]">stars</span>
                    <span>Claim +{quest.gemReward} Gems</span>
                  </button>
                ) : (
                  <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-[#101221] text-[#d2c5b1] text-xs font-semibold">
                    In Progress
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
