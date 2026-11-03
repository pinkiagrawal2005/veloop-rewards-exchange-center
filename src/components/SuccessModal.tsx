import React, { useState } from 'react';
import { useVault } from '../context/VaultContext';

const CHEST_IMAGE_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuChr0i83G0uUZiSF1ykrQIh3cB5xaRVjUW1-PfiHeKL51eW-DMtnJmvKeArcJPm_UjjjBf4U-DyFn6cqwpcSY5hqdaNW-DkvhFwbrdC8qDLky8AoFkj3GR6zmKh57zMOt8-61pZHV7bXArpI5nwNtyz5NV053hj7QJc5VmxB8MqDUKRh0OnP7NloxwsI-jMw7wcA-BnN9nsW6uOO5KKHYDlg5aJF33VLP1l2xVaahhBEV19TvHRkl91CQ';

export const SuccessModal: React.FC = () => {
  const {
    isSuccessModalOpen,
    setIsSuccessModalOpen,
    setPreviewState,
    gems,
    ve,
    lastCompletedTx,
    setActiveTab,
  } = useVault();
  const [chestLoaded, setChestLoaded] = useState(true);

  if (!isSuccessModalOpen) return null;

  const handleClose = () => {
    setIsSuccessModalOpen(false);
    setPreviewState('standard');
  };

  const handleViewHistory = () => {
    setIsSuccessModalOpen(false);
    setPreviewState('standard');
    setActiveTab('history');
  };

  const gemsDeducted = lastCompletedTx ? lastCompletedTx.gemsDeducted : 28;
  const veCredited = lastCompletedTx ? lastCompletedTx.veCredited : 151;
  const refCode = lastCompletedTx ? lastCompletedTx.refNumber : '#VEL-892401';

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#101221]/80 backdrop-blur-md animate-fadeIn"
    >
      <div className="relative w-full max-w-lg rounded-2xl bg-[#1d1f2e] border border-white/10 p-6 sm:p-8 shadow-2xl text-center animate-scaleUp">
        {/* Success Icon / Celebratory Chest Visual */}
        <div className="flex justify-center mb-4">
          {chestLoaded ? (
            <img
              src={CHEST_IMAGE_URL}
              alt="Gilded treasure chest overflowing with glowing purple gems and coins"
              referrerPolicy="no-referrer"
              onError={() => setChestLoaded(false)}
              className="w-48 h-32 object-contain drop-shadow-[0_8px_24px_rgba(229,181,79,0.3)] animate-float"
            />
          ) : (
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-[#e5b54f] to-[#ffd277] flex items-center justify-center text-[#402d00] shadow-[0_0_30px_rgba(229,181,79,0.5)]">
              <span className="material-symbols-outlined text-[48px]">inventory_2</span>
            </div>
          )}
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e5b54f]/20 text-[#ffd277] text-xs font-bold uppercase mb-2 border border-[#ffd277]/30">
          <span className="material-symbols-outlined text-[14px]">task_alt</span>
          Vault Credited
        </div>

        <h3 className="text-2xl font-bold text-[#e1e1f6]">Conversion Complete</h3>
        <p className="text-sm text-[#d2c5b1] mt-1 mb-5">
          {gemsDeducted} Gems converted &bull;{' '}
          <strong className="text-[#ffd277]">+{veCredited} VEs</strong> added to your vault
        </p>

        {/* Updated Balance Pill Box */}
        <div className="p-4 rounded-xl bg-[#191b2a] border border-white/5 mb-4 grid grid-cols-2 gap-3 text-left">
          <div className="p-2 rounded-lg bg-[#0b0d1c]/50">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#d2c5b1]">
              New Gem Balance
            </span>
            <div className="text-xl font-bold text-[#d2bbff] mt-1 tabular-nums">
              {gems.toLocaleString()}
            </div>
          </div>
          <div className="p-2 rounded-lg bg-[#0b0d1c]/50">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#d2c5b1]">
              New VE Balance
            </span>
            <div className="text-xl font-bold text-[#ffd277] mt-1 tabular-nums">
              {ve.toLocaleString()} VE
            </div>
          </div>
        </div>

        <div className="text-xs text-[#d2c5b1] mb-6">
          Transaction Reference:{' '}
          <span className="font-mono text-[#e1e1f6] font-semibold tracking-wide">
            {refCode}
          </span>
        </div>

        <div className="flex items-center justify-center gap-3">
          <button
            onClick={handleViewHistory}
            className="w-full py-2.5 rounded-xl bg-[#272939] hover:bg-[#323444] text-[#e1e1f6] text-sm font-semibold transition-all"
            type="button"
          >
            View in History
          </button>
          <button
            onClick={handleClose}
            className="w-full py-2.5 rounded-xl bg-[#ffd277] hover:bg-[#f0bf58] text-[#402d00] text-sm font-bold shadow-lg transition-all"
            type="button"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};
