import React, { useState } from 'react';
import { useVault } from '../context/VaultContext';
import { TransactionStatus } from '../types';

export const HistoryView: React.FC = () => {
  const { transactions, retryTransaction, setActiveTab } = useVault();
  const [filterStatus, setFilterStatus] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredTransactions = transactions.filter((tx) => {
    const matchesFilter = filterStatus === 'All' || tx.status === filterStatus;
    const matchesSearch =
      tx.refNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tx.tierTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tx.dateStr.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleExportCSV = () => {
    const headers = 'ID,Reference,Date,GemsDeducted,VECredited,Status,Tier\n';
    const rows = transactions
      .map(
        (t) =>
          `"${t.id}","${t.refNumber}","${t.dateStr}",${t.gemsDeducted},${t.veCredited},"${t.status}","${t.tierTitle}"`
      )
      .join('\n');
    const blob = new Blob([headers + rows], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `veloop_transactions_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-[#191b2a] border border-white/5 shadow-xl">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <button
              onClick={() => setActiveTab('exchange-center')}
              className="text-xs text-[#d2c5b1] hover:text-[#ffd277] flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[16px]">arrow_back</span>
              Exchange Center
            </button>
            <span className="text-[#9b8f7d]/50">/</span>
            <span className="text-xs text-[#ffd277] font-semibold">Ledger History</span>
          </div>
          <h1 className="text-2xl font-bold text-[#e1e1f6]">Conversion &amp; Vault History</h1>
          <p className="text-xs text-[#d2c5b1] mt-0.5">
            Full record of all gem-to-VE exchanges, atomic timestamps, and ledger validation statuses.
          </p>
        </div>

        <button
          onClick={handleExportCSV}
          className="self-start sm:self-auto px-4 py-2 rounded-xl bg-[#272939] hover:bg-[#323444] text-[#e1e1f6] text-xs font-semibold border border-white/10 transition-colors flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-[16px]">download</span>
          Export CSV Ledger
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 rounded-xl bg-[#1d1f2e] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Status Pills */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto">
          {['All', 'Completed', 'Processing', 'Failed'].map((st) => (
            <button
              key={st}
              onClick={() => setFilterStatus(st)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                filterStatus === st
                  ? 'bg-[#ffd277] text-[#402d00] font-bold shadow-sm'
                  : 'bg-[#191b2a] text-[#d2c5b1] hover:text-[#e1e1f6] hover:bg-[#272939]'
              }`}
            >
              {st}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-72">
          <span className="material-symbols-outlined absolute left-3 top-2.5 text-[#9b8f7d] text-[18px]">
            search
          </span>
          <input
            type="text"
            placeholder="Search reference or tier..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#101221] border border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs text-[#e1e1f6] placeholder-[#9b8f7d] focus:outline-none focus:border-[#ffd277]"
          />
        </div>
      </div>

      {/* Transactions Table */}
      <div className="rounded-2xl bg-[#1d1f2e] border border-white/5 overflow-hidden shadow-lg">
        <div className="p-4 border-b border-white/5 flex items-center justify-between text-xs text-[#d2c5b1]">
          <span>Showing {filteredTransactions.length} transaction entries</span>
          <span>Ledger Protocol: Atomic Vault Sync</span>
        </div>

        <div className="divide-y divide-white/5">
          {filteredTransactions.map((tx) => (
            <div
              key={tx.id}
              className="p-4 hover:bg-[#272939]/50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-xl bg-[#191b2a] border border-white/5 flex items-center justify-center shrink-0 ${
                    tx.status === 'Completed'
                      ? 'text-[#d2bbff]'
                      : tx.status === 'Processing'
                      ? 'text-[#ffd277]'
                      : 'text-[#ffb4ab]'
                  }`}
                >
                  <span
                    className={`material-symbols-outlined text-[20px] ${
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
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-[#e1e1f6]">{tx.tierTitle}</span>
                    <span className="font-mono text-xs text-[#9b8f7d]">{tx.refNumber}</span>
                  </div>
                  <div className="text-xs text-[#d2c5b1] mt-0.5">{tx.dateStr}</div>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-6">
                <div className="text-right">
                  <div className="text-sm font-bold text-[#ffd277] tabular-nums">
                    +{tx.veCredited} VE
                  </div>
                  <div className="text-xs text-[#d2bbff] tabular-nums">
                    -{tx.gemsDeducted} Gems
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {tx.status === 'Completed' && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#e5b54f]/20 text-[#ffd277] text-xs font-bold border border-[#ffd277]/20">
                      <span className="material-symbols-outlined text-[14px]">check</span> Completed
                    </span>
                  )}

                  {tx.status === 'Processing' && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#5c03cb]/30 text-[#d2bbff] text-xs font-bold border border-[#d2bbff]/20">
                      Processing
                    </span>
                  )}

                  {tx.status === 'Failed' && (
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#93000a]/30 text-[#ffb4ab] text-xs font-bold border border-[#ffb4ab]/20">
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
            </div>
          ))}

          {filteredTransactions.length === 0 && (
            <div className="p-8 text-center text-sm text-[#d2c5b1]">
              No transactions match your search filter.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
