import React from 'react';
import { useVault } from '../context/VaultContext';

export const InsufficientAlert: React.FC = () => {
  const { showInsufficientAlert, setShowInsufficientAlert, gems, setPreviewState, setActiveTab, selectedTier } = useVault();

  if (!showInsufficientAlert) return null;

  const requiredGems = selectedTier.gemsRequired;
  const neededGems = Math.max(0, requiredGems - gems);

  return (
    <div className="mb-6 p-4 rounded-xl bg-[#93000a]/20 border border-[#ffb4ab]/30 text-[#ffdad6] flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg animate-fadeIn">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-[#93000a]/40 border border-[#ffb4ab]/20 flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-[#ffb4ab] text-[28px]">warning</span>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-base font-bold text-[#ffb4ab]">Insufficient Balance</span>
            <span className="px-2 py-0.5 rounded-full bg-[#93000a]/60 text-[#ffb4ab] text-xs font-semibold">
              Requires {requiredGems} Gems
            </span>
          </div>
          <p className="text-sm text-[#d2c5b1] mt-0.5">
            Your current balance is <strong className="text-[#e1e1f6]">{gems} Gems</strong>. You need{' '}
            <strong className="text-[#ffb4ab]">{neededGems} more Gems</strong> to execute the{' '}
            {selectedTier.title} conversion bundle.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={() => {
            setActiveTab('level-up');
            setShowInsufficientAlert(false);
          }}
          className="px-4 py-2 rounded-lg bg-[#ffd277] hover:bg-[#f0bf58] text-[#402d00] text-sm font-bold shadow-md transition-all flex items-center gap-1.5"
          type="button"
        >
          <span className="material-symbols-outlined text-[18px]">bolt</span>
          Earn More Gems
        </button>
        <button
          className="p-2 rounded-lg bg-[#1d1f2e] hover:bg-[#272939] text-[#d2c5b1] hover:text-[#e1e1f6] transition-colors"
          onClick={() => {
            setShowInsufficientAlert(false);
            setPreviewState('standard');
          }}
          type="button"
          aria-label="Dismiss alert"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>
      </div>
    </div>
  );
};
