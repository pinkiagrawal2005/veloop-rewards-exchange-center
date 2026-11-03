import React from 'react';
import { useVault } from '../context/VaultContext';

export const RulesModal: React.FC = () => {
  const { isRulesModalOpen, setIsRulesModalOpen } = useVault();

  if (!isRulesModalOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#101221]/80 backdrop-blur-md animate-fadeIn"
    >
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#1d1f2e] border border-white/10 p-6 sm:p-8 shadow-2xl animate-scaleUp">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#5c03cb]/20 border border-[#d2bbff]/30 flex items-center justify-center text-[#d2bbff]">
              <span className="material-symbols-outlined text-[24px]">gavel</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#e1e1f6]">Exchange Rules &amp; FAQ</h3>
              <p className="text-xs text-[#d2c5b1]">VELOOP Vault Protocol &bull; Season 4 Audited Standards</p>
            </div>
          </div>
          <button
            onClick={() => setIsRulesModalOpen(false)}
            className="p-2 rounded-lg bg-[#272939] hover:bg-[#323444] text-[#d2c5b1] hover:text-[#e1e1f6] transition-colors"
            type="button"
            aria-label="Close dialog"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Content sections */}
        <div className="space-y-5 text-sm text-[#d2c5b1]">
          <div>
            <h4 className="font-bold text-[#e1e1f6] flex items-center gap-2 mb-1.5">
              <span className="material-symbols-outlined text-[#ffd277] text-[18px]">lock_clock</span>
              1. Guaranteed Rate Locks &amp; Daily Reset
            </h4>
            <p className="text-xs leading-relaxed">
              When you open the conversion preview modal, your exchange rate is locked for that active session.
              Daily exchange bundles reset dynamically at <strong>00:00 UTC</strong> every calendar day. Tier
              allocation limits refresh concurrently.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-[#e1e1f6] flex items-center gap-2 mb-1.5">
              <span className="material-symbols-outlined text-[#d2bbff] text-[18px]">verified</span>
              2. Tier Multipliers &amp; Level Boosts
            </h4>
            <p className="text-xs leading-relaxed">
              Your membership level grants active percentage boosts on all conversions. As a{' '}
              <strong className="text-[#ffd277]">Level 7 Gold Member</strong>, you currently enjoy a{' '}
              <strong className="text-[#ffd277]">+5% VE bonus</strong> on every exchange. Reach 4,000 VEs
              to maintain permanent status.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-[#e1e1f6] flex items-center gap-2 mb-1.5">
              <span className="material-symbols-outlined text-[#ffd277] text-[18px]">bolt</span>
              3. Atomic Execution with Zero Fees
            </h4>
            <p className="text-xs leading-relaxed">
              VELOOP does not charge trading spreads, network gas fees, or delayed escrow fees.
              Balance deduction and VE crediting happen in a single atomic transaction. Once confirmed,
              VEs are immediately spendable in the Rewards Store.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-[#e1e1f6] flex items-center gap-2 mb-1.5">
              <span className="material-symbols-outlined text-[#d2bbff] text-[18px]">shield</span>
              4. Ledger Audit &amp; Transaction Safety
            </h4>
            <p className="text-xs leading-relaxed">
              Every conversion generates an immutable transaction serial (e.g.{' '}
              <span className="font-mono text-[#e1e1f6]">#VEL-892401</span>). If an exchange ever encounters a
              network interruption, it will appear in your ledger marked as <em>Failed</em> with a 1-click{' '}
              <strong>Retry</strong> option that restores state without double deduction.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={() => setIsRulesModalOpen(false)}
            className="px-6 py-2.5 rounded-xl bg-[#ffd277] hover:bg-[#f0bf58] text-[#402d00] text-sm font-bold shadow-md transition-all"
            type="button"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
