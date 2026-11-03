import React from 'react';
import { useVault } from '../context/VaultContext';
import { PreviewState } from '../types';

export const StateController: React.FC = () => {
  const { previewState, setPreviewState, gems, setCustomBalance, resetToInitialData } = useVault();

  const states: { id: PreviewState; label: string }[] = [
    { id: 'standard', label: 'Standard View' },
    { id: 'modal', label: 'Confirm Modal' },
    { id: 'success', label: 'Success State' },
    { id: 'insufficient', label: 'Insufficient Gems State' },
  ];

  return (
    <div className="mb-6 p-2 bg-[#0b0d1c] border border-white/5 rounded-xl flex flex-wrap items-center justify-between gap-3 shadow-md">
      <div className="flex items-center gap-2 px-2">
        <span className="material-symbols-outlined text-[#ffd277] text-[18px]">tune</span>
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#d2c5b1]">
          Live Preview States:
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {states.map((st) => {
          const isActive = previewState === st.id;
          return (
            <button
              key={st.id}
              onClick={() => {
                if (st.id === 'insufficient' && gems > 20) {
                  // Temporarily adjust balance to 12 gems to match the mockup demo perfectly if requested
                  setCustomBalance(12, 3850);
                }
                setPreviewState(st.id);
              }}
              type="button"
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                isActive
                  ? 'bg-[#272939] text-[#ffd277] font-bold shadow-sm ring-1 ring-[#ffd277]/20'
                  : 'text-[#d2c5b1] hover:text-[#e1e1f6] hover:bg-[#1d1f2e]'
              }`}
            >
              {st.label}
            </button>
          );
        })}

        <div className="h-4 w-px bg-white/10 mx-1 hidden sm:block"></div>

        {/* Demo balance quick-switch helper */}
        <button
          onClick={resetToInitialData}
          title="Reset balances back to 420 Gems & 3,850 VEs"
          className="text-[11px] px-2.5 py-1 text-[#9b8f7d] hover:text-[#ffd277] hover:bg-[#1d1f2e] rounded-md transition-colors flex items-center gap-1"
        >
          <span className="material-symbols-outlined text-[14px]">restart_alt</span>
          Reset Demo
        </button>
      </div>
    </div>
  );
};
