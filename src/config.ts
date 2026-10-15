// Central App Configuration - Single source of truth for app identity
export const APP_CONFIG = {
  name: 'AhaHub',
  shortName: 'AhaHub',
  description: 'Your ultimate Multi-App & Game Hub - Play 50+ games, access social apps, earn coins, and more!',
  version: '1.0.0',
  author: 'AhaHub Team',
  themeColor: '#FF6B00',
  backgroundColor: '#FFFFFF',
  // Capacitor specific
  capacitorAppName: 'AhaHub',
  capacitorAppId: 'com.ahahub.app',
  // GitHub Pages base (repo name)
  githubPagesBase: '/AhaHub/',
  // Feature flags
  features: {
    games: true,
    socialApps: true,
    downloads: true,
    profile: true,
    coins: true,
    adFreePass: true,
    offlineSupport: true,
  },
  // Social app URLs (web wrappers)
  socialApps: [
    { id: 'whatsapp', name: 'WhatsApp', url: 'https://web.whatsapp.com/', icon: '💬', category: 'Must Have' },
    { id: 'instagram', name: 'Instagram', url: 'https://www.instagram.com/', icon: '📷', category: 'Must Have' },
    { id: 'facebook', name: 'Facebook', url: 'https://www.facebook.com/', icon: '👍', category: 'Must Have' },
    { id: 'youtube', name: 'YouTube', url: 'https://www.youtube.com/', icon: '▶️', category: 'Must Have' },
    { id: 'twitter', name: 'X (Twitter)', url: 'https://x.com/', icon: '🐦', category: 'Must Have' },
    { id: 'telegram', name: 'Telegram', url: 'https://web.telegram.org/', icon: '✈️', category: 'Must Have' },
  ],
  // Ad-Free Pass pricing (in INR)
  adFreePasses: [
    { id: '1m', label: '1 Month', price: 99, originalPrice: 149, coins: 500, popular: false },
    { id: '3m', label: '3 Months', price: 249, originalPrice: 399, coins: 1500, popular: true },
    { id: '12m', label: '12 Months', price: 799, originalPrice: 1199, coins: 5000, popular: false },
  ],
  // Game categories
  gameCategories: [
    'All',
    'Must Have',
    'Puzzle',
    'Simulation',
    'Action',
    'Adventure',
    'Racing',
    'Shooting',
    'Casual',
  ],
} as const;

export type AppConfig = typeof APP_CONFIG;