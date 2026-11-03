import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { ConversionTier, ConversionTransaction, Quest, StoreReward, PreviewState, ActiveTab } from '../types';

export const CONVERSION_TIERS: ConversionTier[] = [
  {
    id: 'tier-1',
    tierNumber: 1,
    tag: 'Popular',
    tagColor: 'secondary',
    title: 'Daily Gem Conversion',
    description: 'Convert your daily earned platform Gems into VEs instantly.',
    gemsRequired: 28,
    veReceived: 151,
    popular: true,
  },
  {
    id: 'tier-2',
    tierNumber: 2,
    tag: 'Recommended',
    tagColor: 'primary',
    title: 'Reward Conversion',
    description: 'Higher conversion rate tailored for active weekly members.',
    gemsRequired: 39,
    veReceived: 168,
    recommended: true,
  },
  {
    id: 'tier-3',
    tierNumber: 3,
    tag: 'Value',
    tagColor: 'secondary',
    title: 'Value Conversion',
    description: 'Unlock greater value with larger platform Gem bundles.',
    gemsRequired: 57,
    veReceived: 255,
  },
  {
    id: 'tier-4',
    tierNumber: 4,
    tag: 'Best Rate',
    tagColor: 'tertiary',
    title: 'Premium Conversion',
    description: 'Exclusive tier for maximum platform VE return.',
    gemsRequired: 100,
    veReceived: 455,
  },
];

const INITIAL_TRANSACTIONS: ConversionTransaction[] = [
  {
    id: 'tx-1',
    refNumber: '#VEL-892401',
    gemsDeducted: 28,
    veCredited: 151,
    timestamp: '2026-08-26T16:32:00Z',
    dateStr: '26 Aug 2026, 04:32 PM',
    status: 'Completed',
    tierTitle: 'Daily Gem Conversion',
  },
  {
    id: 'tx-2',
    refNumber: '#VEL-892402',
    gemsDeducted: 39,
    veCredited: 168,
    timestamp: '2026-08-25T11:15:00Z',
    dateStr: '25 Aug 2026, 11:15 AM',
    status: 'Completed',
    tierTitle: 'Reward Conversion',
  },
  {
    id: 'tx-3',
    refNumber: '#VEL-892403',
    gemsDeducted: 57,
    veCredited: 255,
    timestamp: '2026-08-23T18:40:00Z',
    dateStr: '23 Aug 2026, 06:40 PM',
    status: 'Completed',
    tierTitle: 'Value Conversion',
  },
  {
    id: 'tx-4',
    refNumber: '#VEL-892404',
    gemsDeducted: 100,
    veCredited: 455,
    timestamp: '2026-08-21T14:10:00Z',
    dateStr: '21 Aug 2026, 02:10 PM',
    status: 'Processing',
    tierTitle: 'Premium Conversion',
  },
  {
    id: 'tx-5',
    refNumber: '#VEL-892405',
    gemsDeducted: 28,
    veCredited: 151,
    timestamp: '2026-08-19T15:22:00Z',
    dateStr: '19 Aug 2026, 03:22 PM',
    status: 'Failed',
    tierTitle: 'Daily Gem Conversion',
    canRetry: true,
  },
];

const INITIAL_QUESTS: Quest[] = [
  {
    id: 'q-1',
    title: 'Daily Check-in Streak',
    category: 'Daily',
    gemReward: 15,
    xpReward: 50,
    progress: 1,
    total: 1,
    completed: true,
    claimed: false,
    icon: 'calendar_today',
  },
  {
    id: 'q-2',
    title: 'Complete 1 Conversion Today',
    category: 'Daily',
    gemReward: 25,
    xpReward: 100,
    progress: 0,
    total: 1,
    completed: false,
    claimed: false,
    icon: 'sync_alt',
  },
  {
    id: 'q-3',
    title: 'Maintain 7-Day Active Vault Streak',
    category: 'Weekly',
    gemReward: 80,
    xpReward: 350,
    progress: 5,
    total: 7,
    completed: false,
    claimed: false,
    icon: 'local_fire_department',
  },
  {
    id: 'q-4',
    title: 'Audit Vault Security 2FA',
    category: 'Security',
    gemReward: 35,
    xpReward: 150,
    progress: 1,
    total: 1,
    completed: true,
    claimed: false,
    icon: 'verified_user',
  },
  {
    id: 'q-5',
    title: 'Refer a Fellow Vault Member',
    category: 'Achievement',
    gemReward: 120,
    xpReward: 500,
    progress: 1,
    total: 2,
    completed: false,
    claimed: false,
    icon: 'group_add',
  },
];

const INITIAL_REWARDS: StoreReward[] = [
  {
    id: 'rew-1',
    title: '$10 Global Gift Card Voucher',
    category: 'Vouchers',
    veCost: 1200,
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500&auto=format&fit=crop&q=80',
    icon: 'redeem',
    description: 'Instant digital code redeemable across Amazon, Steam, or App Store.',
    inStock: true,
    popular: true,
  },
  {
    id: 'rew-2',
    title: 'VELOOP Titanium Vault Keychain',
    category: 'Merchandise',
    veCost: 2400,
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?w=500&auto=format&fit=crop&q=80',
    icon: 'key',
    description: 'Physical custom-engraved titanium collector tag with membership serial.',
    inStock: true,
  },
  {
    id: 'rew-3',
    title: '3-Month Discord Nitro Pass',
    category: 'Digital Perks',
    veCost: 850,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=80',
    icon: 'chat_bubble',
    description: 'Unlock custom emojis, 4K streaming, and 2 server boosts.',
    inStock: true,
    popular: true,
  },
  {
    id: 'rew-4',
    title: '2x Gold Vault Multiplier Pass (7 Days)',
    category: 'Boosters',
    veCost: 1500,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=80',
    icon: 'bolt',
    description: 'Double all conversion bonuses and mission rewards for seven continuous days.',
    inStock: true,
  },
];

interface VaultContextType {
  gems: number;
  ve: number;
  userLevel: number;
  userName: string;
  milestoneTarget: number;
  transactions: ConversionTransaction[];
  quests: Quest[];
  storeRewards: StoreReward[];
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  previewState: PreviewState;
  setPreviewState: (state: PreviewState) => void;
  selectedTier: ConversionTier;
  setSelectedTier: (tier: ConversionTier) => void;
  isConfirmModalOpen: boolean;
  setIsConfirmModalOpen: (open: boolean) => void;
  isSuccessModalOpen: boolean;
  setIsSuccessModalOpen: (open: boolean) => void;
  isRulesModalOpen: boolean;
  setIsRulesModalOpen: (open: boolean) => void;
  showInsufficientAlert: boolean;
  setShowInsufficientAlert: (show: boolean) => void;
  lastCompletedTx: ConversionTransaction | null;
  executeConversion: (tier?: ConversionTier) => boolean;
  retryTransaction: (txId: string) => void;
  claimQuest: (questId: string) => void;
  redeemStoreReward: (reward: StoreReward) => boolean;
  resetToInitialData: () => void;
  setCustomBalance: (newGems: number, newVe: number) => void;
}

const VaultContext = createContext<VaultContextType | undefined>(undefined);

export const VaultProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load saved state or default
  const [gems, setGems] = useState<number>(() => {
    const saved = localStorage.getItem('veloop_gems');
    return saved !== null ? Number(saved) : 420;
  });

  const [ve, setVe] = useState<number>(() => {
    const saved = localStorage.getItem('veloop_ve');
    return saved !== null ? Number(saved) : 3850;
  });

  const [transactions, setTransactions] = useState<ConversionTransaction[]>(() => {
    const saved = localStorage.getItem('veloop_transactions');
    return saved !== null ? JSON.parse(saved) : INITIAL_TRANSACTIONS;
  });

  const [quests, setQuests] = useState<Quest[]>(() => {
    const saved = localStorage.getItem('veloop_quests');
    return saved !== null ? JSON.parse(saved) : INITIAL_QUESTS;
  });

  const [activeTab, setActiveTab] = useState<ActiveTab>('exchange-center');
  const [previewState, setPreviewStateState] = useState<PreviewState>('standard');
  const [selectedTier, setSelectedTier] = useState<ConversionTier>(CONVERSION_TIERS[0]);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isRulesModalOpen, setIsRulesModalOpen] = useState(false);
  const [showInsufficientAlert, setShowInsufficientAlert] = useState(false);
  const [lastCompletedTx, setLastCompletedTx] = useState<ConversionTransaction | null>(null);

  const userLevel = 7;
  const userName = 'Hasan';
  const milestoneTarget = 4000;

  useEffect(() => {
    localStorage.setItem('veloop_gems', gems.toString());
  }, [gems]);

  useEffect(() => {
    localStorage.setItem('veloop_ve', ve.toString());
  }, [ve]);

  useEffect(() => {
    localStorage.setItem('veloop_transactions', JSON.stringify(transactions));
  }, [transactions]);

  useEffect(() => {
    localStorage.setItem('veloop_quests', JSON.stringify(quests));
  }, [quests]);

  const triggerCelebration = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ffd277', '#e5b54f', '#d2bbff', '#5c03cb', '#ffffff'],
    });
  };

  const setPreviewState = (state: PreviewState) => {
    setPreviewStateState(state);
    if (state === 'standard') {
      setIsConfirmModalOpen(false);
      setIsSuccessModalOpen(false);
      setShowInsufficientAlert(false);
    } else if (state === 'modal') {
      setIsConfirmModalOpen(true);
      setIsSuccessModalOpen(false);
      setShowInsufficientAlert(false);
    } else if (state === 'success') {
      setIsConfirmModalOpen(false);
      setIsSuccessModalOpen(true);
      setShowInsufficientAlert(false);
      triggerCelebration();
    } else if (state === 'insufficient') {
      setIsConfirmModalOpen(false);
      setIsSuccessModalOpen(false);
      setShowInsufficientAlert(true);
    }
  };

  const executeConversion = (tierToConvert?: ConversionTier): boolean => {
    const tier = tierToConvert || selectedTier;
    if (gems < tier.gemsRequired) {
      setIsConfirmModalOpen(false);
      setShowInsufficientAlert(true);
      setPreviewStateState('insufficient');
      return false;
    }

    const newGems = gems - tier.gemsRequired;
    const newVe = ve + tier.veReceived;

    const newTx: ConversionTransaction = {
      id: `tx-${Date.now()}`,
      refNumber: `#VEL-${Math.floor(100000 + Math.random() * 900000)}`,
      gemsDeducted: tier.gemsRequired,
      veCredited: tier.veReceived,
      timestamp: new Date().toISOString(),
      dateStr: new Date().toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }) + ', ' + new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }),
      status: 'Completed',
      tierTitle: tier.title,
    };

    setGems(newGems);
    setVe(newVe);
    setTransactions((prev) => [newTx, ...prev]);
    setLastCompletedTx(newTx);

    // Update quest progress if applicable
    setQuests((prev) =>
      prev.map((q) =>
        q.id === 'q-2'
          ? { ...q, progress: 1, completed: true }
          : q
      )
    );

    setIsConfirmModalOpen(false);
    setIsSuccessModalOpen(true);
    setPreviewStateState('success');
    triggerCelebration();
    return true;
  };

  const retryTransaction = (txId: string) => {
    const tx = transactions.find((t) => t.id === txId);
    if (!tx || tx.status !== 'Failed') return;

    if (gems < tx.gemsDeducted) {
      setShowInsufficientAlert(true);
      setPreviewStateState('insufficient');
      return;
    }

    setGems((g) => g - tx.gemsDeducted);
    setVe((v) => v + tx.veCredited);

    setTransactions((prev) =>
      prev.map((t) =>
        t.id === txId
          ? {
              ...t,
              status: 'Completed',
              dateStr: 'Just now (Retried)',
              canRetry: false,
            }
          : t
      )
    );

    setLastCompletedTx({
      ...tx,
      status: 'Completed',
      dateStr: 'Just now (Retried)',
    });
    setIsSuccessModalOpen(true);
    setPreviewStateState('success');
    triggerCelebration();
  };

  const claimQuest = (questId: string) => {
    setQuests((prev) =>
      prev.map((q) => {
        if (q.id === questId && q.completed && !q.claimed) {
          setGems((g) => g + q.gemReward);
          return { ...q, claimed: true };
        }
        return q;
      })
    );
    triggerCelebration();
  };

  const redeemStoreReward = (reward: StoreReward): boolean => {
    if (ve < reward.veCost) {
      return false;
    }
    setVe((v) => v - reward.veCost);
    triggerCelebration();
    return true;
  };

  const resetToInitialData = () => {
    setGems(420);
    setVe(3850);
    setTransactions(INITIAL_TRANSACTIONS);
    setQuests(INITIAL_QUESTS);
    setPreviewState('standard');
    localStorage.removeItem('veloop_gems');
    localStorage.removeItem('veloop_ve');
    localStorage.removeItem('veloop_transactions');
    localStorage.removeItem('veloop_quests');
  };

  const setCustomBalance = (newGems: number, newVe: number) => {
    setGems(newGems);
    setVe(newVe);
  };

  return (
    <VaultContext.Provider
      value={{
        gems,
        ve,
        userLevel,
        userName,
        milestoneTarget,
        transactions,
        quests,
        storeRewards: INITIAL_REWARDS,
        activeTab,
        setActiveTab,
        previewState,
        setPreviewState,
        selectedTier,
        setSelectedTier,
        isConfirmModalOpen,
        setIsConfirmModalOpen,
        isSuccessModalOpen,
        setIsSuccessModalOpen,
        isRulesModalOpen,
        setIsRulesModalOpen,
        showInsufficientAlert,
        setShowInsufficientAlert,
        lastCompletedTx,
        executeConversion,
        retryTransaction,
        claimQuest,
        redeemStoreReward,
        resetToInitialData,
        setCustomBalance,
      }}
    >
      {children}
    </VaultContext.Provider>
  );
};

export const useVault = (): VaultContextType => {
  const context = useContext(VaultContext);
  if (!context) {
    throw new Error('useVault must be used within a VaultProvider');
  }
  return context;
};
