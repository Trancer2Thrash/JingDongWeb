/**
 * Mock data for the e-commerce homepage.
 * All images use picsum.photos for reliable placeholder images.
 */

// --- Banner Carousel Data ---
export const bannerSlides = [
  {
    id: 1,
    image: 'https://picsum.photos/seed/banner1/800/400',
    title: '夏季大促 全场5折起',
    subtitle: '限时特惠 错过再等一年',
    link: '#'
  },
  {
    id: 2,
    image: 'https://picsum.photos/seed/banner2/800/400',
    title: '新品首发 科技前沿',
    subtitle: '最新数码产品 抢鲜体验',
    link: '#'
  },
  {
    id: 3,
    image: 'https://picsum.photos/seed/banner3/800/400',
    title: '家居焕新 品质生活',
    subtitle: '精选好物 打造理想家',
    link: '#'
  },
  {
    id: 4,
    image: 'https://picsum.photos/seed/banner4/800/400',
    title: '运动户外 活力无限',
    subtitle: '运动装备 满减优惠',
    link: '#'
  }
];

// --- Category Navigation Data ---
export const categories = [
  { id: 1, name: '手机数码', icon: 'https://picsum.photos/seed/cat1/120/120', color: '#ff6b6b' },
  { id: 2, name: '电脑办公', icon: 'https://picsum.photos/seed/cat2/120/120', color: '#4ecdc4' },
  { id: 3, name: '家居家装', icon: 'https://picsum.photos/seed/cat3/120/120', color: '#45b7d1' },
  { id: 4, name: '服饰鞋包', icon: 'https://picsum.photos/seed/cat4/120/120', color: '#f9ca24' },
  { id: 5, name: '食品生鲜', icon: 'https://picsum.photos/seed/cat5/120/120', color: '#6ab04c' },
  { id: 6, name: '美妆护肤', icon: 'https://picsum.photos/seed/cat6/120/120', color: '#eb4d4b' },
  { id: 7, name: '母婴玩具', icon: 'https://picsum.photos/seed/cat7/120/120', color: '#7ed6df' },
  { id: 8, name: '图书文娱', icon: 'https://picsum.photos/seed/cat8/120/120', color: '#e056fd' }
];

// --- Hot Products Data ---
export const hotProducts = [
  {
    id: 1,
    name: 'Apple iPhone 15 Pro Max 256GB',
    price: 9999,
    originalPrice: 11999,
    image: 'https://picsum.photos/seed/prod1/400/400',
    tag: '爆款',
    sales: '10万+'
  },
  {
    id: 2,
    name: 'Sony WH-1000XM5 降噪耳机',
    price: 2299,
    originalPrice: 2999,
    image: 'https://picsum.photos/seed/prod2/400/400',
    tag: '热卖',
    sales: '5万+'
  },
  {
    id: 3,
    name: '戴森 V15 Detect 无绳吸尘器',
    price: 4690,
    originalPrice: 5990,
    image: 'https://picsum.photos/seed/prod3/400/400',
    tag: '新品',
    sales: '3万+'
  },
  {
    id: 4,
    name: 'Nintendo Switch OLED 游戏机',
    price: 2349,
    originalPrice: 2599,
    image: 'https://picsum.photos/seed/prod4/400/400',
    tag: '爆款',
    sales: '8万+'
  },
  {
    id: 5,
    name: '小米14 Ultra 徕卡影像旗舰',
    price: 5999,
    originalPrice: 6499,
    image: 'https://picsum.photos/seed/prod5/400/400',
    tag: '限时',
    sales: '6万+'
  },
  {
    id: 6,
    name: 'iPad Air M2 11英寸 平板电脑',
    price: 4799,
    originalPrice: 5499,
    image: 'https://picsum.photos/seed/prod6/400/400',
    tag: '热卖',
    sales: '4万+'
  },
  {
    id: 7,
    name: '海尔 545升 风冷无霜冰箱',
    price: 3999,
    originalPrice: 4999,
    image: 'https://picsum.photos/seed/prod7/400/400',
    tag: '特惠',
    sales: '2万+'
  },
  {
    id: 8,
    name: 'Nike Air Max 270 运动鞋',
    price: 899,
    originalPrice: 1299,
    image: 'https://picsum.photos/seed/prod8/400/400',
    tag: '爆款',
    sales: '12万+'
  },
  {
    id: 9,
    name: 'SK-II 神仙水 护肤精华露 230ml',
    price: 1199,
    originalPrice: 1599,
    image: 'https://picsum.photos/seed/prod9/400/400',
    tag: '热卖',
    sales: '7万+'
  },
  {
    id: 10,
    name: '罗技 MX Master 3S 无线鼠标',
    price: 699,
    originalPrice: 899,
    image: 'https://picsum.photos/seed/prod10/400/400',
    tag: '新品',
    sales: '3万+'
  }
];

// --- Flash Sale Data ---
export const flashSaleProducts = [
  {
    id: 1,
    name: 'AirPods Pro 2 降噪耳机',
    price: 1399,
    originalPrice: 1999,
    image: 'https://picsum.photos/seed/flash1/300/300',
    discount: '7折'
  },
  {
    id: 2,
    name: 'Kindle Paperwhite 电子书',
    price: 799,
    originalPrice: 1099,
    image: 'https://picsum.photos/seed/flash2/300/300',
    discount: '7.3折'
  },
  {
    id: 3,
    name: '飞利浦 电动牙刷 钻石系列',
    price: 599,
    originalPrice: 999,
    image: 'https://picsum.photos/seed/flash3/300/300',
    discount: '6折'
  },
  {
    id: 4,
    name: '小米手环8 Pro 智能手表',
    price: 299,
    originalPrice: 499,
    image: 'https://picsum.photos/seed/flash4/300/300',
    discount: '6折'
  },
  {
    id: 5,
    name: '三只松鼠 坚果大礼包',
    price: 89,
    originalPrice: 168,
    image: 'https://picsum.photos/seed/flash5/300/300',
    discount: '5.3折'
  },
  {
    id: 6,
    name: '安踏 跑步鞋 轻便透气',
    price: 199,
    originalPrice: 399,
    image: 'https://picsum.photos/seed/flash6/300/300',
    discount: '5折'
  }
];

// Flash sale end time (set to 6 hours from now for demo)
export function getFlashSaleEndTime() {
  const now = new Date();
  now.setHours(now.getHours() + 6);
  return now;
}
