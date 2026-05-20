<template>
  <section class="flash-sale">
    <!-- Header with countdown -->
    <div class="flash-header">
      <div class="flash-title-row">
        <h2 class="flash-title">
          <span class="flash-icon">⚡</span>
          限时秒杀
        </h2>
        <div class="countdown-wrapper">
          <span class="countdown-label">距结束</span>
          <div class="countdown-blocks">
            <span class="countdown-block">{{ hours }}</span>
            <span class="countdown-sep">:</span>
            <span class="countdown-block">{{ minutes }}</span>
            <span class="countdown-sep">:</span>
            <span class="countdown-block">{{ seconds }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Products list -->
    <div class="flash-products-wrapper">
      <div class="flash-products">
        <div
          v-for="product in products"
          :key="product.id"
          class="flash-product-card"
        >
          <div class="flash-product-image-wrapper">
            <img :src="product.image" :alt="product.name" class="flash-product-image" loading="lazy" />
            <span class="flash-discount">{{ product.discount }}</span>
          </div>
          <div class="flash-product-info">
            <h3 class="flash-product-name">{{ product.name }}</h3>
            <div class="flash-price-row">
              <span class="flash-price">
                <span class="currency">¥</span>{{ product.price }}
              </span>
              <span class="flash-original-price">¥{{ product.originalPrice }}</span>
            </div>
            <button class="flash-buy-btn">立即抢购</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  products: {
    type: Array,
    required: true
  },
  endTime: {
    type: Date,
    required: true
  }
});

const hours = ref('00');
const minutes = ref('00');
const seconds = ref('00');
const timer = ref(null);

function padZero(num) {
  return String(num).padStart(2, '0');
}

function updateCountdown() {
  const now = new Date();
  const diff = props.endTime.getTime() - now.getTime();

  if (diff <= 0) {
    hours.value = '00';
    minutes.value = '00';
    seconds.value = '00';
    if (timer.value) {
      clearInterval(timer.value);
      timer.value = null;
    }
    return;
  }

  const totalSeconds = Math.floor(diff / 1000);
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;

  hours.value = padZero(h);
  minutes.value = padZero(m);
  seconds.value = padZero(s);
}

onMounted(() => {
  updateCountdown();
  timer.value = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
  if (timer.value) {
    clearInterval(timer.value);
    timer.value = null;
  }
});
</script>

<style scoped>
.flash-sale {
  background: linear-gradient(135deg, #e4393c 0%, #c81623 50%, #a01020 100%);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.flash-header {
  padding: var(--spacing-base);
  color: #fff;
}

.flash-title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.flash-title {
  font-size: var(--font-size-xl);
  font-weight: 800;
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  letter-spacing: 1px;
}

.flash-icon {
  font-size: var(--font-size-2xl);
  animation: pulse 1.5s ease-in-out infinite;
}

.countdown-wrapper {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
}

.countdown-label {
  font-size: var(--font-size-sm);
  opacity: 0.9;
}

.countdown-blocks {
  display: flex;
  align-items: center;
  gap: 2px;
}

.countdown-block {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 28px;
  padding: 0 var(--spacing-xs);
  background: rgba(0, 0, 0, 0.3);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-md);
  font-weight: 700;
  font-family: 'Courier New', monospace;
  animation: countdownPulse 2s ease-in-out infinite;
}

.countdown-sep {
  font-size: var(--font-size-lg);
  font-weight: 700;
  opacity: 0.8;
}

/* Products wrapper for horizontal scroll on mobile */
.flash-products-wrapper {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}

.flash-products-wrapper::-webkit-scrollbar {
  display: none;
}

.flash-products {
  display: flex;
  gap: var(--spacing-sm);
  padding: 0 var(--spacing-base) var(--spacing-base);
}

.flash-product-card {
  flex-shrink: 0;
  width: 140px;
  background: var(--color-bg-white);
  border-radius: var(--radius-md);
  overflow: hidden;
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.flash-product-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.flash-product-image-wrapper {
  position: relative;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  background: var(--color-bg);
}

.flash-product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.flash-product-card:hover .flash-product-image {
  transform: scale(1.05);
}

.flash-discount {
  position: absolute;
  top: var(--spacing-xs);
  right: var(--spacing-xs);
  padding: 2px 6px;
  background: var(--color-primary);
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  border-radius: var(--radius-sm);
}

.flash-product-info {
  padding: var(--spacing-sm);
}

.flash-product-name {
  font-size: var(--font-size-xs);
  font-weight: 500;
  color: var(--color-text-primary);
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: var(--spacing-xs);
  min-height: 2.8em;
}

.flash-price-row {
  display: flex;
  align-items: baseline;
  gap: var(--spacing-xs);
  margin-bottom: var(--spacing-xs);
}

.flash-price {
  color: var(--color-primary);
  font-size: var(--font-size-md);
  font-weight: 700;
  line-height: 1;
}

.flash-price .currency {
  font-size: var(--font-size-xs);
}

.flash-original-price {
  color: var(--color-text-muted);
  font-size: 10px;
  text-decoration: line-through;
}

.flash-buy-btn {
  width: 100%;
  padding: var(--spacing-xs) 0;
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
  color: #fff;
  font-size: var(--font-size-xs);
  font-weight: 600;
  border-radius: var(--radius-sm);
  transition: opacity var(--transition-fast), transform var(--transition-fast);
}

.flash-buy-btn:hover {
  opacity: 0.9;
}

.flash-buy-btn:active {
  transform: scale(0.96);
}

/* PC: grid layout */
@media (min-width: 1200px) {
  .flash-sale {
    padding-bottom: var(--spacing-base);
  }

  .flash-products-wrapper {
    overflow-x: visible;
  }

  .flash-products {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: var(--spacing-md);
    padding: 0 var(--spacing-base) var(--spacing-base);
  }

  .flash-product-card {
    width: auto;
  }

  .flash-title {
    font-size: var(--font-size-2xl);
  }

  .countdown-block {
    min-width: 36px;
    height: 32px;
    font-size: var(--font-size-lg);
  }
}
</style>
