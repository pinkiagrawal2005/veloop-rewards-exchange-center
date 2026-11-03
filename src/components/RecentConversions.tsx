import React from 'react';
import { useVault } from '../context/VaultContext';

export const RecentConversions: React.FC = () => {
  const { transactions, retryTransaction, setActiveTab } = useVault();

  // Display top 5 recent conversions on the Exchange Center screen
  const displayTxs = transactions.slice(0, 5);

  return (
    <div className="lg:col-span-7 p-6 rounded-2xl bg-[#1d1f2e] border border-white/5 shadow-lg flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#ffd277] text-[20px]">receipt_long</span>
            <h3 className="text-base font-bold text-[#e1e1f6]">Recent Conversions</h3>
          </div>
          <span className="text-xs text-[#d2c5b1]">Last 30 Days</span>
        </div>

        <div className="space-y-2">
          {displayTxs.map((tx) => (
            <div
              key={tx.id}
              className="p-3 rounded-xl bg-[#191b2a] flex items-center justify-between gap-3 hover:bg-[#272939]/70 transition-colors border border-white/5"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-lg bg-[#272939] flex items-center justify-center shrink-0 ${
                    tx.status === 'Completed'
                      ? 'text-[#d2bbff]'
                      : tx.status === 'Processing'
                      ? 'text-[#ffd277]'
                      : 'text-[#ffb4ab]'
                  }`}
                >
                  <span
                    className={`material-symbols-outlined text-[18px] ${
                      tx.status === 'Processing' ? 'animate-spin' : ''
                    }`}
                  >
                    {tx.status === 'Completed'
                      ? 'sync'
                      : tx.status === 'Processing'
                      ? 'autorenew'
                      : 'cancel'}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-bold text-[#e1e1f6]">
                    {tx.gemsDeducted} Gems → {tx.veCredited} VEs
                  </div>
                  <div className="text-xs text-[#d2c5b1]">{tx.dateStr}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {tx.status === 'Completed' && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#e5b54f]/20 text-[#ffd277] text-xs font-bold border border-[#ffd277]/20">
                    <span className="material-symbols-outlined text-[14px]">check</span> Completed
                  </span>
                )}

                {tx.status === 'Processing' && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#5c03cb]/30 text-[#d2bbff] text-xs font-bold border border-[#d2bbff]/20">
                    Processing
                  </span>
                )}

                {tx.status === 'Failed' && (
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#93000a]/30 text-[#ffb4ab] text-xs font-bold border border-[#ffb4ab]/20">
                      Failed
                    </span>
                    <button
                      onClick={() => retryTransaction(tx.id)}
                      className="text-xs text-[#ffd277] hover:underline font-semibold"
                    >
                      Retry
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 pt-3 flex justify-end border-t border-white/5">
        <button
          onClick={() => setActiveTab('history')}
          className="text-xs font-semibold text-[#ffd277] hover:text-[#f0bf58] flex items-center gap-1 transition-colors"
          type="button"
        >
          <span>View Full History</span>
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};
