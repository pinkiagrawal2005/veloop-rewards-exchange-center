export interface ConversionTier {
  id: string;
  tierNumber: number;
  tag: string;
  tagColor: 'secondary' | 'primary' | 'tertiary';
  title: string;
  description: string;
  gemsRequired: number;
  veReceived: number;
  popular?: boolean;
  recommended?: boolean;
}

export type TransactionStatus = 'Completed' | 'Processing' | 'Failed';

export interface ConversionTransaction {
  id: string;
  refNumber: string;
  gemsDeducted: number;
  veCredited: number;
  timestamp: string;
  dateStr: string;
  status: TransactionStatus;
  tierTitle: string;
  canRetry?: boolean;
}

export interface Quest {
  id: string;
  title: string;
  category: 'Daily' | 'Weekly' | 'Achievement' | 'Security';
  gemReward: number;
  xpReward: number;
  progress: number;
  total: number;
  completed: boolean;
  claimed: boolean;
  icon: string;
}

export interface StoreReward {
  id: string;
  title: string;
  category: 'Vouchers' | 'Merchandise' | 'Digital Perks' | 'Boosters';
  veCost: number;
  image: string;
  icon: string;
  description: string;
  inStock: boolean;
  popular?: boolean;
}

export type PreviewState = 'standard' | 'modal' | 'success' | 'insufficient';
export type ActiveTab = 'dashboard' | 'rewards' | 'exchange-center' | 'history' | 'level-up';
