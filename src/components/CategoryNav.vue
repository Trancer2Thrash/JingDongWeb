<template>
  <section class="category-nav">
    <div class="category-grid">
      <a
        v-for="category in categories"
        :key="category.id"
        href="#"
        class="category-item"
        :style="{ '--category-color': category.color }"
      >
        <div class="category-icon-wrapper">
          <img :src="category.icon" :alt="category.name" class="category-icon" loading="lazy" />
        </div>
        <span class="category-name">{{ category.name }}</span>
      </a>
    </div>
  </section>
</template>

<script setup>
defineProps({
  categories: {
    type: Array,
    required: true
  }
});
</script>

<style scoped>
.category-nav {
  background: var(--color-bg-white);
  border-radius: var(--radius-lg);
  padding: var(--spacing-base) var(--spacing-sm);
  box-shadow: var(--shadow-sm);
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-md) var(--spacing-sm);
}

.category-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-sm);
  border-radius: var(--radius-md);
  transition: transform var(--transition-fast), background var(--transition-fast);
  text-decoration: none;
  color: var(--color-text-primary);
}

.category-item:hover {
  transform: translateY(-2px);
  background: var(--color-border-light);
}

.category-item:active {
  transform: scale(0.96);
}

.category-icon-wrapper {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--color-border-light);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: box-shadow var(--transition-base);
}

.category-item:hover .category-icon-wrapper {
  box-shadow: 0 4px 12px color-mix(in srgb, var(--category-color) 30%, transparent);
}

.category-icon {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.category-name {
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
  text-align: center;
  line-height: 1.3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}

/* Tablet: 4 columns already set as default */

/* PC: 8 columns */
@media (min-width: 1200px) {
  .category-nav {
    padding: var(--spacing-xl) var(--spacing-base);
  }

  .category-grid {
    grid-template-columns: repeat(8, 1fr);
    gap: var(--spacing-lg);
  }

  .category-icon-wrapper {
    width: 64px;
    height: 64px;
  }

  .category-name {
    font-size: var(--font-size-sm);
  }
}
</style>
