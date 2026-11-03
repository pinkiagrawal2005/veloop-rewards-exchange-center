/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { VaultProvider, useVault } from './context/VaultContext';
import { Navbar } from './components/Navbar';
import { StateController } from './components/StateController';
import { InsufficientAlert } from './components/InsufficientAlert';
import { HeroSection } from './components/HeroSection';
import { BalanceDock } from './components/BalanceDock';
import { ConversionCards } from './components/ConversionCards';
import { HowItWorks } from './components/HowItWorks';
import { RecentConversions } from './components/RecentConversions';
import { RulesAndSafeguards } from './components/RulesAndSafeguards';
import { ConfirmModal } from './components/ConfirmModal';
import { SuccessModal } from './components/SuccessModal';
import { RulesModal } from './components/RulesModal';
import { DashboardView } from './components/DashboardView';
import { RewardsStoreView } from './components/RewardsStoreView';
import { HistoryView } from './components/HistoryView';
import { LevelUpView } from './components/LevelUpView';
import { Footer } from './components/Footer';

const AppContent: React.FC = () => {
  const { activeTab, setActiveTab, setIsRulesModalOpen } = useVault();

  return (
    <div className="bg-[#101221] text-[#e1e1f6] min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="w-full pt-20 flex-1 bg-[#101221]">
        <div className="max-w-7xl mx-auto px-6 py-8 min-h-[calc(100vh-5rem)]">
          {activeTab === 'exchange-center' && (
            <div className="flex flex-col w-full text-[#e1e1f6]">
              {/* 1. SUB-HEADER / BREADCRUMB BAR */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setActiveTab('rewards')}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#1d1f2e] hover:bg-[#272939] text-[#d2c5b1] hover:text-[#e1e1f6] transition-all duration-200 text-sm font-semibold border border-white/5"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                    <span>Back to Rewards</span>
                  </button>

                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl sm:text-[28px] font-bold tracking-tight text-[#e1e1f6]">
                      Exchange Center
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#5c03cb]/40 text-[#d2bbff] text-[10px] font-bold uppercase tracking-wider border border-[#d2bbff]/20">
                      <span className="material-symbols-outlined text-[12px]">verified</span>
                      Vault Season 4
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsRulesModalOpen(true)}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#1d1f2e] hover:bg-[#272939] text-[#d2c5b1] hover:text-[#e1e1f6] text-xs font-semibold transition-all border border-white/5"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">help</span>
                    Exchange Rules &amp; FAQ
                  </button>
                  <button
                    onClick={() => setIsRulesModalOpen(true)}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#1d1f2e] hover:bg-[#272939] text-[#d2c5b1] hover:text-[#e1e1f6] text-xs font-semibold transition-all border border-white/5"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">support_agent</span>
                    Support
                  </button>
                </div>
              </div>

              {/* INTERACTIVE DEV STATE CONTROLLER BAR */}
              <StateController />

              {/* INSUFFICIENT BALANCE INLINE ALERT */}
              <InsufficientAlert />

              {/* 2. HERO SECTION */}
              <HeroSection />

              {/* 3. CONNECTED BALANCE OVERVIEW DOCK */}
              <BalanceDock />

              {/* 4. AVAILABLE CONVERSIONS (4 TIER CARDS GRID) */}
              <ConversionCards />

              {/* 6. HOW IT WORKS (5 STEPS PROGRESSION) */}
              <HowItWorks />

              {/* 7. LOWER SECTION: TWO-COLUMN LAYOUT */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
                <RecentConversions />
                <RulesAndSafeguards />
              </div>
            </div>
          )}

          {activeTab === 'dashboard' && <DashboardView />}
          {activeTab === 'rewards' && <RewardsStoreView />}
          {activeTab === 'history' && <HistoryView />}
          {activeTab === 'level-up' && <LevelUpView />}
        </div>
      </main>

      <Footer />

      {/* Global Modals */}
      <ConfirmModal />
      <SuccessModal />
      <RulesModal />
    </div>
  );
};

export default function App() {
  return (
    <VaultProvider>
      <AppContent />
    </VaultProvider>
  );
}
