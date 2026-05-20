<template>
  <section class="hot-products">
    <div class="section-header">
      <h2 class="section-title">
        <span class="title-icon">🔥</span>
        爆款推荐
      </h2>
      <a href="#" class="section-more">查看更多 &gt;</a>
    </div>

    <div class="products-grid">
      <div
        v-for="product in products"
        :key="product.id"
        class="product-card"
      >
        <div class="product-image-wrapper">
          <img :src="product.image" :alt="product.name" class="product-image" loading="lazy" />
          <span class="product-tag" :class="getTagClass(product.tag)">{{ product.tag }}</span>
          <div class="product-overlay">
            <button class="quick-view-btn">快速查看</button>
          </div>
        </div>
        <div class="product-info">
          <h3 class="product-name">{{ product.name }}</h3>
          <div class="product-meta">
            <div class="product-price-row">
              <span class="product-price">
                <span class="currency">¥</span>{{ product.price }}
              </span>
              <span class="product-original-price">¥{{ product.originalPrice }}</span>
            </div>
            <span class="product-sales">已售 {{ product.sales }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  products: {
    type: Array,
    required: true
  }
});

function getTagClass(tag) {
  const map = {
    '爆款': 'badge--hot',
    '热卖': 'badge--hot',
    '新品': 'badge--new',
    '限时': 'badge--sale',
    '特惠': 'badge--sale'
  };
  return map[tag] || '';
}
</script>

<style scoped>
.hot-products {
  background: var(--color-bg-white);
  border-radius: var(--radius-lg);
  padding: var(--spacing-base);
  box-shadow: var(--shadow-sm);
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-base);
  padding-bottom: var(--spacing-sm);
  border-bottom: 1px solid var(--color-border-light);
}

.section-title {
  font-size: var(--font-size-lg);
  font-weight: 700;
  color: var(--color-text-primary);
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
}

.title-icon {
  font-size: var(--font-size-xl);
}

.section-more {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  transition: color var(--transition-fast);
}

.section-more:hover {
  color: var(--color-primary);
}

/* Products Grid */
.products-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-sm);
}

.product-card {
  background: var(--color-bg-white);
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid var(--color-border-light);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.product-image-wrapper {
  position: relative;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  background: var(--color-bg);
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.product-card:hover .product-image {
  transform: scale(1.05);
}

.product-tag {
  position: absolute;
  top: var(--spacing-xs);
  left: var(--spacing-xs);
  padding: 2px 8px;
  font-size: 10px;
  color: #fff;
  border-radius: var(--radius-sm);
  font-weight: 600;
  z-index: 1;
}

.product-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--transition-base);
}

.product-card:hover .product-overlay {
  opacity: 1;
}

.quick-view-btn {
  padding: var(--spacing-xs) var(--spacing-base);
  background: var(--color-bg-white);
  color: var(--color-text-primary);
  border-radius: var(--radius-full);
  font-size: var(--font-size-sm);
  font-weight: 500;
  transform: translateY(10px);
  transition: transform var(--transition-base), background var(--transition-fast);
}

.product-card:hover .quick-view-btn {
  transform: translateY(0);
}

.quick-view-btn:hover {
  background: var(--color-primary);
  color: #fff;
}

.product-info {
  padding: var(--spacing-sm);
}

.product-name {
  font-size: var(--font-size-sm);
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

.product-meta {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}

.product-price-row {
  display: flex;
  align-items: baseline;
  gap: var(--spacing-xs);
}

.product-price {
  color: var(--color-primary);
  font-size: var(--font-size-lg);
  font-weight: 700;
  line-height: 1;
}

.product-price .currency {
  font-size: var(--font-size-xs);
  margin-right: 1px;
}

.product-original-price {
  color: var(--color-text-muted);
  font-size: var(--font-size-xs);
  text-decoration: line-through;
}

.product-sales {
  font-size: 10px;
  color: var(--color-text-muted);
  white-space: nowrap;
}

/* Tablet: 3 columns */
@media (min-width: 768px) {
  .products-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-md);
  }

  .hot-products {
    padding: var(--spacing-xl);
  }
}

/* PC: 5 columns */
@media (min-width: 1200px) {
  .products-grid {
    grid-template-columns: repeat(5, 1fr);
    gap: var(--spacing-lg);
  }

  .product-name {
    font-size: var(--font-size-base);
  }

  .product-price {
    font-size: var(--font-size-xl);
  }
}
</style>
