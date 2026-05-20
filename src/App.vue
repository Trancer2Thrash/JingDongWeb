<template>
  <div class="app">
    <!-- Header -->
    <header class="app-header">
      <div class="header-inner container">
        <h1 class="logo">
          <span class="logo-icon">🛒</span>
          <span class="logo-text">优品商城</span>
        </h1>
        <div class="header-search">
          <input type="text" placeholder="搜索商品、品牌..." class="search-input" />
          <button class="search-btn" aria-label="搜索">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </div>
        <nav class="header-nav">
          <a href="#" class="nav-link">登录</a>
          <a href="#" class="nav-link nav-link--cart">
            购物车
            <span class="cart-badge">3</span>
          </a>
        </nav>
      </div>
    </header>

    <!-- Main Content -->
    <main class="app-main container">
      <!-- Banner Carousel -->
      <section class="section animate-fade-in-up">
        <BannerCarousel :slides="bannerSlides" />
      </section>

      <!-- Category Navigation -->
      <section class="section animate-fade-in-up" style="animation-delay: 0.1s;">
        <CategoryNav :categories="categories" />
      </section>

      <!-- Flash Sale -->
      <section class="section animate-fade-in-up" style="animation-delay: 0.2s;">
        <FlashSale :products="flashSaleProducts" :end-time="flashSaleEndTime" />
      </section>

      <!-- Hot Products -->
      <section class="section animate-fade-in-up" style="animation-delay: 0.3s;">
        <HotProducts :products="hotProducts" />
      </section>
    </main>

    <!-- Footer -->
    <footer class="app-footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3 class="footer-title">关于我们</h3>
            <ul class="footer-links">
              <li><a href="#">公司介绍</a></li>
              <li><a href="#">联系我们</a></li>
              <li><a href="#">招聘信息</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h3 class="footer-title">购物指南</h3>
            <ul class="footer-links">
              <li><a href="#">购物流程</a></li>
              <li><a href="#">支付方式</a></li>
              <li><a href="#">配送说明</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h3 class="footer-title">售后服务</h3>
            <ul class="footer-links">
              <li><a href="#">退换货政策</a></li>
              <li><a href="#">价格保护</a></li>
              <li><a href="#">发票说明</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h3 class="footer-title">关注我们</h3>
            <p class="footer-contact">客服热线: 400-888-8888</p>
            <p class="footer-contact">服务时间: 9:00 - 21:00</p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2026 优品商城 版权所有</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import BannerCarousel from './components/BannerCarousel.vue';
import CategoryNav from './components/CategoryNav.vue';
import HotProducts from './components/HotProducts.vue';
import FlashSale from './components/FlashSale.vue';

/* ===== Mock Data (inlined to avoid SFC loader ESM issues) ===== */
const bannerSlides = [
  { id: 1, image: 'https://picsum.photos/seed/banner1/800/350', title: '夏季大促 全场5折起', subtitle: '限时特惠 错过再等一年', link: '#' },
  { id: 2, image: 'https://picsum.photos/seed/banner2/800/350', title: '新品首发 科技前沿', subtitle: '最新数码产品 抢鲜体验', link: '#' },
  { id: 3, image: 'https://picsum.photos/seed/banner3/800/350', title: '家居焕新 品质生活', subtitle: '精选好物 打造理想家', link: '#' },
  { id: 4, image: 'https://picsum.photos/seed/banner4/800/350', title: '运动户外 活力无限', subtitle: '运动装备 满减优惠', link: '#' }
];

const categories = [
  { id: 1, name: '手机数码', icon: 'https://picsum.photos/seed/cat1/120/120', color: '#ff6b6b' },
  { id: 2, name: '电脑办公', icon: 'https://picsum.photos/seed/cat2/120/120', color: '#4ecdc4' },
  { id: 3, name: '家居家装', icon: 'https://picsum.photos/seed/cat3/120/120', color: '#45b7d1' },
  { id: 4, name: '服饰鞋包', icon: 'https://picsum.photos/seed/cat4/120/120', color: '#f9ca24' },
  { id: 5, name: '食品生鲜', icon: 'https://picsum.photos/seed/cat5/120/120', color: '#6ab04c' },
  { id: 6, name: '美妆护肤', icon: 'https://picsum.photos/seed/cat6/120/120', color: '#eb4d4b' },
  { id: 7, name: '母婴玩具', icon: 'https://picsum.photos/seed/cat7/120/120', color: '#7ed6df' },
  { id: 8, name: '图书文娱', icon: 'https://picsum.photos/seed/cat8/120/120', color: '#e056fd' }
];

const hotProducts = [
  { id: 1, name: 'Apple iPhone 15 Pro Max 256GB', price: 9999, originalPrice: 11999, image: 'https://picsum.photos/seed/prod1/400/400', tag: '爆款', sales: '10万+' },
  { id: 2, name: 'Sony WH-1000XM5 降噪耳机', price: 2299, originalPrice: 2999, image: 'https://picsum.photos/seed/prod2/400/400', tag: '热卖', sales: '5万+' },
  { id: 3, name: '戴森 V15 Detect 无绳吸尘器', price: 4690, originalPrice: 5990, image: 'https://picsum.photos/seed/prod3/400/400', tag: '新品', sales: '3万+' },
  { id: 4, name: 'Nintendo Switch OLED 游戏机', price: 2349, originalPrice: 2599, image: 'https://picsum.photos/seed/prod4/400/400', tag: '爆款', sales: '8万+' },
  { id: 5, name: '小米14 Ultra 徕卡影像旗舰', price: 5999, originalPrice: 6499, image: 'https://picsum.photos/seed/prod5/400/400', tag: '限时', sales: '6万+' },
  { id: 6, name: 'iPad Air M2 11英寸 平板电脑', price: 4799, originalPrice: 5499, image: 'https://picsum.photos/seed/prod6/400/400', tag: '热卖', sales: '4万+' },
  { id: 7, name: '海尔 545升 风冷无霜冰箱', price: 3999, originalPrice: 4999, image: 'https://picsum.photos/seed/prod7/400/400', tag: '特惠', sales: '2万+' },
  { id: 8, name: 'Nike Air Max 270 运动鞋', price: 899, originalPrice: 1299, image: 'https://picsum.photos/seed/prod8/400/400', tag: '爆款', sales: '12万+' },
  { id: 9, name: 'SK-II 神仙水 护肤精华露 230ml', price: 1199, originalPrice: 1599, image: 'https://picsum.photos/seed/prod9/400/400', tag: '热卖', sales: '7万+' },
  { id: 10, name: '罗技 MX Master 3S 无线鼠标', price: 699, originalPrice: 899, image: 'https://picsum.photos/seed/prod10/400/400', tag: '新品', sales: '3万+' }
];

const flashSaleProducts = [
  { id: 1, name: 'AirPods Pro 2 降噪耳机', price: 1399, originalPrice: 1999, image: 'https://picsum.photos/seed/flash1/300/300', discount: '7折' },
  { id: 2, name: 'Kindle Paperwhite 电子书', price: 799, originalPrice: 1099, image: 'https://picsum.photos/seed/flash2/300/300', discount: '7.3折' },
  { id: 3, name: '飞利浦 电动牙刷 钻石系列', price: 599, originalPrice: 999, image: 'https://picsum.photos/seed/flash3/300/300', discount: '6折' },
  { id: 4, name: '小米手环8 Pro 智能手表', price: 299, originalPrice: 499, image: 'https://picsum.photos/seed/flash4/300/300', discount: '6折' },
  { id: 5, name: '三只松鼠 坚果大礼包', price: 89, originalPrice: 168, image: 'https://picsum.photos/seed/flash5/300/300', discount: '5.3折' },
  { id: 6, name: '安踏 跑步鞋 轻便透气', price: 199, originalPrice: 399, image: 'https://picsum.photos/seed/flash6/300/300', discount: '5折' }
];

function getFlashSaleEndTime() {
  const now = new Date();
  now.setHours(now.getHours() + 6);
  return now;
}

const flashSaleEndTime = ref(getFlashSaleEndTime());
</script>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Header */
.app-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--color-bg-white);
  box-shadow: var(--shadow-sm);
}

.header-inner {
  display: flex;
  align-items: center;
  height: var(--header-height);
  gap: var(--spacing-base);
}

.logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  font-size: var(--font-size-lg);
  font-weight: 800;
  color: var(--color-primary);
  flex-shrink: 0;
}

.logo-icon {
  font-size: var(--font-size-xl);
}

.header-search {
  flex: 1;
  display: flex;
  max-width: 480px;
  border: 2px solid var(--color-primary);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.search-input {
  flex: 1;
  padding: var(--spacing-xs) var(--spacing-base);
  border: none;
  outline: none;
  font-size: var(--font-size-sm);
  background: transparent;
}

.search-btn {
  padding: var(--spacing-xs) var(--spacing-base);
  background: var(--color-primary);
  color: #fff;
  display: flex;
  align-items: center;
  transition: background var(--transition-fast);
}

.search-btn:hover {
  background: var(--color-primary-dark);
}

.header-nav {
  display: flex;
  align-items: center;
  gap: var(--spacing-base);
  flex-shrink: 0;
}

.nav-link {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  transition: color var(--transition-fast);
  white-space: nowrap;
}

.nav-link:hover {
  color: var(--color-primary);
}

.nav-link--cart {
  position: relative;
}

.cart-badge {
  position: absolute;
  top: -8px;
  right: -14px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  background: var(--color-primary);
  color: #fff;
  font-size: 10px;
  font-weight: 600;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Main */
.app-main {
  flex: 1;
  padding-top: var(--spacing-base);
  padding-bottom: var(--spacing-2xl);
}

/* Footer */
.app-footer {
  background: var(--color-text-primary);
  color: rgba(255, 255, 255, 0.7);
  padding: var(--spacing-2xl) 0 var(--spacing-base);
  margin-top: auto;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
}

.footer-title {
  font-size: var(--font-size-base);
  font-weight: 600;
  color: #fff;
  margin-bottom: var(--spacing-sm);
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.footer-links a {
  font-size: var(--font-size-sm);
  transition: color var(--transition-fast);
}

.footer-links a:hover {
  color: #fff;
}

.footer-contact {
  font-size: var(--font-size-sm);
  margin-bottom: var(--spacing-xs);
}

.footer-bottom {
  padding-top: var(--spacing-base);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  font-size: var(--font-size-xs);
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .header-inner {
    flex-wrap: wrap;
    height: auto;
    padding: var(--spacing-sm) var(--spacing-base);
    gap: var(--spacing-sm);
  }

  .logo {
    font-size: var(--font-size-md);
  }

  .header-search {
    order: 3;
    max-width: 100%;
    width: 100%;
  }

  .header-nav {
    margin-left: auto;
  }

  .nav-link:first-child {
    display: none;
  }

  .footer-content {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-base);
  }
}

@media (min-width: 1200px) {
  .footer-content {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
