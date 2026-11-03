import React, { useState } from 'react';
import { useVault } from '../context/VaultContext';
import { ActiveTab } from '../types';

export const Navbar: React.FC = () => {
  const { gems, ve, activeTab, setActiveTab, setIsRulesModalOpen } = useVault();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNotificationToast, setShowNotificationToast] = useState(false);

  const navItems: { label: string; tab: ActiveTab }[] = [
    { label: 'Dashboard', tab: 'dashboard' },
    { label: 'Rewards', tab: 'rewards' },
    { label: 'Exchange Center', tab: 'exchange-center' },
    { label: 'History', tab: 'history' },
    { label: 'Level Up', tab: 'level-up' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#101221]/90 backdrop-blur-xl shadow-[0_1px_12px_rgba(0,0,0,0.45)] border-b border-white/10">
      <div className="h-20 max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
        {/* Brand Zone */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={() => setActiveTab('exchange-center')}
            className="flex items-center gap-2 text-left group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#5c03cb] via-[#272939] to-[#ffd277] flex items-center justify-center shadow-[0_0_16px_rgba(92,3,203,0.35)] transition-transform group-hover:scale-105">
              <span className="text-base font-bold text-[#ffd277]">V</span>
            </div>
            <span className="text-base tracking-tight text-[#e1e1f6] font-bold">VELOOP</span>
          </button>
          <div className="hidden lg:flex items-center text-[#d2c5b1] text-xs font-semibold">
            <span className="text-[#9b8f7d]/40 mx-2">/</span>
            <span className="capitalize">{activeTab.replace('-', ' ')}</span>
          </div>
        </div>

        {/* Center Nav Zone */}
        <nav className="hidden xl:flex items-center gap-1 bg-[#191b2a]/70 p-1 rounded-xl">
          {navItems.map((item) => {
            const isActive = activeTab === item.tab;
            return (
              <button
                key={item.tab}
                onClick={() => setActiveTab(item.tab)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-[#272939] text-[#ffd277] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]'
                    : 'text-[#d2c5b1] hover:text-[#e1e1f6] hover:bg-[#272939]/60'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action / User Zone */}
        <div className="flex items-center gap-4 shrink-0">
          {/* Live Balance Pill */}
          <div className="hidden sm:flex items-center gap-2 bg-[#191b2a] px-4 py-1.5 rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] border border-white/5">
            <button
              onClick={() => setActiveTab('level-up')}
              title="Click to view gem quests"
              className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
            >
              <span className="material-symbols-outlined text-[#d2bbff] text-[18px]">diamond</span>
              <span className="text-xs text-[#e1e1f6] font-bold tabular-nums">
                {gems.toLocaleString()}
              </span>
            </button>
            <div className="w-px h-3.5 bg-[#9b8f7d]/30"></div>
            <button
              onClick={() => setActiveTab('rewards')}
              title="Click to view reward catalog"
              className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
            >
              <span className="material-symbols-outlined text-[#ffd277] text-[18px]">monetization_on</span>
              <span className="text-xs text-[#ffd277] font-bold tabular-nums">
                {ve.toLocaleString()}
              </span>
              <span className="text-[10px] font-bold text-[#d2c5b1]">VE</span>
            </button>
          </div>

          {/* Quick Action Icons */}
          <div className="flex items-center gap-1">
            <button
              aria-label="Notifications"
              onClick={() => setShowNotificationToast(!showNotificationToast)}
              className="relative p-2 rounded-lg text-[#d2c5b1] hover:text-[#e1e1f6] hover:bg-[#272939] transition-colors"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#e5b54f] ring-2 ring-[#101221]"></span>
            </button>
            <button
              aria-label="Help and FAQ"
              onClick={() => setIsRulesModalOpen(true)}
              className="p-2 rounded-lg text-[#d2c5b1] hover:text-[#e1e1f6] hover:bg-[#272939] transition-colors"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">help</span>
            </button>
          </div>

          {/* User Profile Pill */}
          <div className="flex items-center gap-2 pl-2 border-l border-white/10">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#ffd277] to-[#e5b54f] flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-[#402d00] text-[18px]">person</span>
            </div>
            <div className="hidden md:flex flex-col text-left">
              <span className="text-xs font-semibold text-[#e1e1f6] leading-none">Hasan</span>
              <span className="text-[10px] font-bold text-[#d2bbff] leading-none mt-1">Level 7 Gold</span>
            </div>
          </div>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-[#d2c5b1] hover:text-[#e1e1f6] hover:bg-[#272939]"
            aria-label="Open Navigation Menu"
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#101221] border-b border-white/10 px-6 py-4 animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.tab}
                onClick={() => {
                  setActiveTab(item.tab);
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  activeTab === item.tab
                    ? 'bg-[#272939] text-[#ffd277]'
                    : 'text-[#d2c5b1] hover:text-[#e1e1f6] hover:bg-[#191b2a]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-[#d2c5b1]">
              <span>Current Vault Status:</span>
              <span className="text-[#ffd277] font-bold">Gold Tier 7 (+5% Boost)</span>
            </div>
          </div>
        </div>
      )}

      {/* Notification Toast Dropdown */}
      {showNotificationToast && (
        <div className="absolute right-6 top-20 w-80 p-4 rounded-xl bg-[#1d1f2e] border border-white/10 shadow-2xl z-50 text-xs">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10">
            <span className="font-bold text-[#e1e1f6]">Notifications</span>
            <span className="text-[#ffd277] cursor-pointer hover:underline" onClick={() => setShowNotificationToast(false)}>Mark read</span>
          </div>
          <div className="space-y-2 text-[#d2c5b1]">
            <div className="p-2 rounded-lg bg-[#272939]/50 flex items-start gap-2">
              <span className="material-symbols-outlined text-[#ffd277] text-sm mt-0.5">verified</span>
              <div>
                <p className="font-semibold text-[#e1e1f6]">Gold Milestone Nearing</p>
                <p className="text-[11px] text-[#9b8f7d] mt-0.5">Reach 4,000 VEs to permanently lock in Tier 7 multipliers.</p>
              </div>
            </div>
            <div className="p-2 rounded-lg bg-[#272939]/50 flex items-start gap-2">
              <span className="material-symbols-outlined text-[#d2bbff] text-sm mt-0.5">stars</span>
              <div>
                <p className="font-semibold text-[#e1e1f6]">Daily Gem Drop Available</p>
                <p className="text-[11px] text-[#9b8f7d] mt-0.5">Claim +15 platform gems from your daily login streak.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
