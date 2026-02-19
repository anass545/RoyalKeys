
import { Product, CategoryType } from './types';

export const PRODUCTS: Product[] = [
  // Software
  { id: 'sw1', title: 'Windows 11 Pro Retail CD Key', price: 5.51, category: CategoryType.SOFTWARE, image: 'https://picsum.photos/400/300?random=1', oldPrice: 199.99, badge: 'BESTSELLER' },
  { id: 'sw2', title: 'Windows 10 Pro Retail CD Key', price: 4.89, category: CategoryType.SOFTWARE, image: 'https://picsum.photos/400/300?random=2', oldPrice: 149.99 },
  { id: 'sw3', title: 'Microsoft Office 2021 Pro Plus', price: 12.24, category: CategoryType.SOFTWARE, image: 'https://picsum.photos/400/300?random=3', badge: 'POPULAR' },
  { id: 'sw4', title: 'Microsoft Office 2019 Pro Plus', price: 8.57, category: CategoryType.SOFTWARE, image: 'https://picsum.photos/400/300?random=4' },
  { id: 'sw5', title: 'Visual Studio 2022 Enterprise', price: 25.00, category: CategoryType.SOFTWARE, image: 'https://picsum.photos/400/300?random=5', badge: 'DEVELOPER' },

  // Trending
  { id: 'tr1', title: 'Adobe Creative Cloud Pro - 1 Month', price: 6.46, category: CategoryType.TRENDING, image: 'https://picsum.photos/400/300?random=6', badge: 'HOT' },
  { id: 'tr2', title: 'Elden Ring EU Steam CD Key', price: 42.33, category: CategoryType.TRENDING, image: 'https://picsum.photos/400/300?random=7' },
  { id: 'tr3', title: 'Ready Or Not Steam CD Key', price: 26.82, category: CategoryType.TRENDING, image: 'https://picsum.photos/400/300?random=8' },
  { id: 'tr4', title: 'Cyberpunk 2077: Ultimate Edition', price: 34.50, category: CategoryType.TRENDING, image: 'https://picsum.photos/400/300?random=9' },

  // Subscriptions
  { id: 'sub1', title: 'Xbox Game Pass Ultimate - 1 Month', price: 18.80, category: CategoryType.SUBSCRIPTIONS, image: 'https://picsum.photos/400/300?random=14', badge: 'PROMO' },
  { id: 'sub2', title: 'Discord Nitro 3 Months Trial', price: 0.87, category: CategoryType.SUBSCRIPTIONS, image: 'https://picsum.photos/400/300?random=15' },
  { id: 'sub3', title: 'Spotify Premium 12 Months Family', price: 45.90, category: CategoryType.SUBSCRIPTIONS, image: 'https://picsum.photos/400/300?random=16', oldPrice: 99.00 },
  { id: 'sub4', title: 'Netflix Premium 4K - 1 Month Private', price: 4.99, category: CategoryType.SUBSCRIPTIONS, image: 'https://picsum.photos/400/300?random=17', badge: 'PRIVATE' },

  // Games
  { id: 'g1', title: 'Minecraft Java & Bedrock Edition', price: 15.99, category: CategoryType.GAMES, image: 'https://picsum.photos/400/300?random=20', badge: 'CLASSIC' },
  { id: 'g2', title: 'Red Dead Redemption 2 Rockstar Key', price: 19.45, category: CategoryType.GAMES, image: 'https://picsum.photos/400/300?random=21' },
  { id: 'g3', title: 'GTA V Premium Online Edition', price: 11.20, category: CategoryType.GAMES, image: 'https://picsum.photos/400/300?random=22' },
  { id: 'g4', title: 'Call of Duty: Modern Warfare III', price: 54.99, category: CategoryType.GAMES, image: 'https://picsum.photos/400/300?random=23', oldPrice: 69.99 },

  // Antivirus
  { id: 'av1', title: 'Kaspersky Total Security - 1 Year / 1 Device', price: 9.88, category: CategoryType.ANTIVIRUS, image: 'https://picsum.photos/400/300?random=30', badge: 'SECURE' },
  { id: 'av2', title: 'McAfee Total Protection - 1 Year / 5 Devices', price: 12.45, category: CategoryType.ANTIVIRUS, image: 'https://picsum.photos/400/300?random=31', oldPrice: 45.00 },
  { id: 'av3', title: 'Malwarebytes Premium - Lifetime', price: 18.99, category: CategoryType.ANTIVIRUS, image: 'https://picsum.photos/400/300?random=32' },
  { id: 'av4', title: 'Norton 360 Deluxe - 1 Year Key', price: 14.50, category: CategoryType.ANTIVIRUS, image: 'https://picsum.photos/400/300?random=33' },
];
