import React, { useState } from 'react';
import { useVault } from '../context/VaultContext';

const SHIELD_IMAGE_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuALXoyMWZJ-cjHnOexw-4ofC6j-VitscVisROg3YX8Ar2FZjjQoLyCZPfkGA8IuEVGSnwWVyYHKen9ZeEhhh4RUAU5lR2O5edtreOqHm1urLENdkT97C2JvA5aCkXo6jACTrAHxkYRzY4z56D1qVgjZ61Blp4DHh_G79HYQV55PDczscRcHkFz1aNiWH10Bur74qwspX4rnI2-YIHRzpir83Q7w0SGMShOQPCRRaNv8bTpqBe9NMl9oLw';

export const RulesAndSafeguards: React.FC = () => {
  const { setIsRulesModalOpen } = useVault();
  const [shieldLoaded, setShieldLoaded] = useState(true);

  return (
    <div className="lg:col-span-5 p-6 rounded-2xl bg-[#191b2a] border border-white/5 shadow-lg flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#d2bbff] text-[20px]">gavel</span>
            <h3 className="text-base font-bold text-[#e1e1f6]">Rules &amp; Safeguards</h3>
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-[#323444] text-[#d2bbff] text-[11px] font-bold border border-[#d2bbff]/20">
            Audited Policy
          </span>
        </div>

        {/* Security Visual Shield Header */}
        <div className="p-4 rounded-xl bg-[#1d1f2e] border border-white/5 flex items-center gap-4 mb-4">
          {shieldLoaded ? (
            <img
              src={SHIELD_IMAGE_URL}
              alt="Purple crystalline verification security shield"
              referrerPolicy="no-referrer"
              onError={() => setShieldLoaded(false)}
              className="w-16 h-16 object-contain drop-shadow-md shrink-0"
            />
          ) : (
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#5c03cb] to-[#d2bbff] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-white text-[32px]">shield</span>
            </div>
          )}
          <div>
            <h4 className="text-sm font-bold text-[#e1e1f6]">Vault Certified Conversions</h4>
            <p className="text-xs text-[#d2c5b1] mt-0.5">Protected by real-time platform ledger guarantees.</p>
          </div>
        </div>

        {/* Security Bullet points */}
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="material-symbols-outlined text-[#d2bbff] text-[18px] mt-0.5 shrink-0">
              check_circle
            </span>
            <span className="text-xs text-[#d2c5b1] leading-relaxed">
              <strong className="text-[#e1e1f6]">Predefined Platform Rates:</strong> Fixed reward multipliers based
              on your current membership tier level.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="material-symbols-outlined text-[#d2bbff] text-[18px] mt-0.5 shrink-0">
              check_circle
            </span>
            <span className="text-xs text-[#d2c5b1] leading-relaxed">
              <strong className="text-[#e1e1f6]">Verified Platform Gems:</strong> Only reward credits earned from
              authenticated community milestones are exchangeable.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="material-symbols-outlined text-[#d2bbff] text-[18px] mt-0.5 shrink-0">
              check_circle
            </span>
            <span className="text-xs text-[#d2c5b1] leading-relaxed">
              <strong className="text-[#e1e1f6]">Real-Time Atomic Sync:</strong> Immediate balance updates with
              zero delays, trading margins, or network gas fees.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="material-symbols-outlined text-[#d2bbff] text-[18px] mt-0.5 shrink-0">
              check_circle
            </span>
            <span className="text-xs text-[#d2c5b1] leading-relaxed">
              <strong className="text-[#e1e1f6]">Permanent Ledger:</strong> Confirmed exchanges are safe,
              definitive, and immediately redeemable in the vault store.
            </span>
          </li>
        </ul>
      </div>

      <div className="mt-5 pt-3 border-t border-white/5">
        <button
          onClick={() => setIsRulesModalOpen(true)}
          className="text-xs font-semibold text-[#d2bbff] hover:text-[#eaddff] flex items-center gap-1 transition-colors"
          type="button"
        >
          <span>Read Platform Terms &amp; Reward Policy</span>
          <span className="material-symbols-outlined text-[16px]">open_in_new</span>
        </button>
      </div>
    </div>
  );
};
