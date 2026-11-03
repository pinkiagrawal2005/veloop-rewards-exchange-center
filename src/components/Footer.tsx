import React from 'react';
import { useVault } from '../context/VaultContext';

export const Footer: React.FC = () => {
  const { setIsRulesModalOpen } = useVault();

  return (
    <footer className="w-full bg-[#0b0d1c]/80 border-t border-white/5 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-[#272939] flex items-center justify-center text-[#ffd277] font-bold text-xs">
            V
          </div>
          <span className="text-xs text-[#d2c5b1]">
            &copy; 2025 VELOOP Rewards Vault. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-6 text-xs text-[#d2c5b1]">
          <button
            onClick={() => setIsRulesModalOpen(true)}
            className="hover:text-[#e1e1f6] transition-colors"
          >
            Terms of Rewards
          </button>
          <button
            onClick={() => setIsRulesModalOpen(true)}
            className="hover:text-[#e1e1f6] transition-colors"
          >
            Security Vault
          </button>
          <button
            onClick={() => setIsRulesModalOpen(true)}
            className="hover:text-[#e1e1f6] transition-colors"
          >
            Support Concierge
          </button>
        </div>
      </div>
    </footer>
  );
};
