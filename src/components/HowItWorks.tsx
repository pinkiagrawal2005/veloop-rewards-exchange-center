import React from 'react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: 'STEP 01',
      title: 'Earn Gems',
      desc: 'Complete daily tasks, login streaks, and seasonal quests.',
      icon: 'stars',
      color: 'text-[#d2bbff]',
    },
    {
      step: 'STEP 02',
      title: 'Choose Bundle',
      desc: 'Select a conversion tier matching your current Gem balance.',
      icon: 'view_timeline',
      color: 'text-[#d2bbff]',
    },
    {
      step: 'STEP 03',
      title: 'Review Rates',
      desc: 'Preview locked exchange values and balance changes.',
      icon: 'lock_clock',
      color: 'text-[#ffd277]',
    },
    {
      step: 'STEP 04',
      title: 'Authorize',
      desc: 'Confirm with one click. Instant atomic wallet deduction.',
      icon: 'touch_app',
      color: 'text-[#ffd277]',
    },
    {
      step: 'STEP 05',
      title: 'Receive VEs',
      desc: 'VE coins are credited immediately, ready for perks.',
      icon: 'account_balance_wallet',
      color: 'text-[#ffd277]',
    },
  ];

  return (
    <div className="mb-8 p-6 rounded-2xl bg-[#191b2a] border border-white/5 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-[#e1e1f6]">How Platform Exchange Works</h2>
          <p className="text-sm text-[#d2c5b1]">Seamless five-step sequence from rewarded mission to vault coins.</p>
        </div>
        <span className="material-symbols-outlined text-[#ffd277] text-[24px]">verified_user</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {steps.map((st) => (
          <div
            key={st.step}
            className="p-4 rounded-xl bg-[#1d1f2e] border border-white/5 flex flex-col justify-between hover:bg-[#272939]/60 transition-colors"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[10px] font-bold tracking-wider ${st.color}`}>{st.step}</span>
                <span className={`material-symbols-outlined ${st.color} text-[20px]`}>{st.icon}</span>
              </div>
              <h4 className="text-sm font-bold text-[#e1e1f6]">{st.title}</h4>
              <p className="text-xs text-[#d2c5b1] mt-1 leading-relaxed">{st.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
