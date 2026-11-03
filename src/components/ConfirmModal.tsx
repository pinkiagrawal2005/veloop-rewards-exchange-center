import React from 'react';
import { useVault } from '../context/VaultContext';

export const ConfirmModal: React.FC = () => {
  const {
    isConfirmModalOpen,
    setIsConfirmModalOpen,
    selectedTier,
    gems,
    ve,
    executeConversion,
    setPreviewState,
  } = useVault();

  if (!isConfirmModalOpen) return null;

  const handleClose = () => {
    setIsConfirmModalOpen(false);
    setPreviewState('standard');
  };

  const handleAuthorize = () => {
    executeConversion(selectedTier);
  };

  const balanceBeforeGems = gems;
  const balanceBeforeVe = ve;
  const balanceAfterGems = Math.max(0, gems - selectedTier.gemsRequired);
  const balanceAfterVe = ve + selectedTier.veReceived;
  const isAffordable = gems >= selectedTier.gemsRequired;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#101221]/80 backdrop-blur-md animate-fadeIn"
    >
      <div className="relative w-full max-w-lg rounded-2xl bg-[#1d1f2e] border border-white/10 p-6 sm:p-8 shadow-2xl animate-scaleUp">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#e5b54f]/20 border border-[#ffd277]/30 flex items-center justify-center text-[#ffd277]">
              <span className="material-symbols-outlined text-[24px]">published_with_changes</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#e1e1f6]">Confirm Conversion</h3>
              <span className="text-xs text-[#d2c5b1]">Transaction Review</span>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-2 rounded-lg bg-[#272939] hover:bg-[#323444] text-[#d2c5b1] hover:text-[#e1e1f6] transition-colors"
            type="button"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Conversion Summary Card */}
        <div className="p-4 rounded-xl bg-[#191b2a] border border-white/5 mb-4 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-white/5">
            <span className="text-sm text-[#d2c5b1]">Gems to Deduct</span>
            <span className="text-base font-bold text-[#d2bbff] flex items-center gap-1 tabular-nums">
              -{selectedTier.gemsRequired}{' '}
              <span className="material-symbols-outlined text-[18px]">diamond</span>
            </span>
          </div>

          <div className="flex items-center justify-between pb-2 border-b border-white/5">
            <span className="text-sm text-[#d2c5b1]">VEs to Receive</span>
            <span className="text-base font-bold text-[#ffd277] flex items-center gap-1 tabular-nums">
              +{selectedTier.veReceived}{' '}
              <span className="material-symbols-outlined text-[18px]">monetization_on</span>
            </span>
          </div>

          <div className="pt-1 space-y-1">
            <div className="flex items-center justify-between text-[#d2c5b1] text-xs">
              <span>Balance Before</span>
              <span className="tabular-nums">
                {balanceBeforeGems.toLocaleString()} Gems &nbsp;|&nbsp; {balanceBeforeVe.toLocaleString()} VEs
              </span>
            </div>
            <div className="flex items-center justify-between text-[#e1e1f6] text-sm font-bold">
              <span>Balance After</span>
              <span className="text-[#ffd277] tabular-nums">
                {balanceAfterGems.toLocaleString()} Gems &nbsp;|&nbsp; {balanceAfterVe.toLocaleString()} VEs
              </span>
            </div>
          </div>
        </div>

        {/* Reassurance Note */}
        <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#272939] border border-white/5 text-[#d2c5b1] mb-6">
          <span className="material-symbols-outlined text-[#ffd277] text-[18px] shrink-0 mt-0.5">
            verified
          </span>
          <span className="text-xs leading-relaxed">
            Exchange rate locked for this session. Authorizing will deduct{' '}
            <strong className="text-[#e1e1f6]">{selectedTier.gemsRequired} Gems</strong> and instantly credit{' '}
            <strong className="text-[#ffd277]">{selectedTier.veReceived} VE coins</strong> to your rewards vault.
          </span>
        </div>

        {!isAffordable && (
          <div className="mb-4 p-3 rounded-lg bg-[#93000a]/20 border border-[#ffb4ab]/30 text-xs text-[#ffdad6] flex items-center gap-2">
            <span className="material-symbols-outlined text-[#ffb4ab] text-[16px]">error</span>
            <span>You do not have enough gems for this bundle ({gems} / {selectedTier.gemsRequired}).</span>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-end gap-3">
          <button
            onClick={handleClose}
            className="px-5 py-2.5 rounded-xl bg-[#272939] hover:bg-[#323444] text-[#e1e1f6] text-sm font-semibold transition-all"
            type="button"
          >
            Cancel
          </button>
          <button
            onClick={handleAuthorize}
            disabled={!isAffordable}
            className={`px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg transition-all flex items-center gap-2 ${
              isAffordable
                ? 'bg-gradient-to-r from-[#ffd277] to-[#e5b54f] text-[#402d00] hover:shadow-[#ffd277]/30 hover:scale-[1.02]'
                : 'bg-[#272939] text-[#9b8f7d] cursor-not-allowed'
            }`}
            type="button"
          >
            <span>Authorize &amp; Exchange</span>
            <span className="material-symbols-outlined text-[18px]">check</span>
          </button>
        </div>
      </div>
    </div>
  );
};
