<template>
  <div
    class="banner-carousel"
    @mouseenter="pauseAutoplay"
    @mouseleave="resumeAutoplay"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
  >
    <!-- Slides Container -->
    <div
      class="carousel-track"
      :style="{ transform: `translateX(-${currentIndex * 100}%)`, transition: isTransitioning ? 'transform 0.4s ease' : 'none' }"
    >
      <div
        v-for="(slide, index) in slides"
        :key="slide.id"
        class="carousel-slide"
      >
        <a :href="slide.link" class="slide-link">
          <img :src="slide.image" :alt="slide.title" class="slide-image" loading="lazy" />
          <div class="slide-overlay">
            <h2 class="slide-title">{{ slide.title }}</h2>
            <p class="slide-subtitle">{{ slide.subtitle }}</p>
          </div>
        </a>
      </div>
    </div>

    <!-- Navigation Arrows -->
    <button
      class="carousel-arrow carousel-arrow--prev"
      @click="prevSlide"
      aria-label="上一张"
    >
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="15 18 9 12 15 6" />
      </svg>
    </button>
    <button
      class="carousel-arrow carousel-arrow--next"
      @click="nextSlide"
      aria-label="下一张"
    >
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </button>

    <!-- Indicator Dots -->
    <div class="carousel-indicators">
      <button
        v-for="(slide, index) in slides"
        :key="slide.id"
        class="carousel-dot"
        :class="{ 'carousel-dot--active': index === currentIndex }"
        @click="goToSlide(index)"
        :aria-label="`第${index + 1}张`"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  slides: {
    type: Array,
    required: true
  },
  interval: {
    type: Number,
    default: 3000
  }
});

const currentIndex = ref(0);
const isTransitioning = ref(true);
const autoplayTimer = ref(null);
const touchStartX = ref(0);
const touchEndX = ref(0);

function goToSlide(index) {
  if (index === currentIndex.value) return;
  currentIndex.value = index;
  resetAutoplay();
}

function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % props.slides.length;
  resetAutoplay();
}

function prevSlide() {
  currentIndex.value = (currentIndex.value - 1 + props.slides.length) % props.slides.length;
  resetAutoplay();
}

function startAutoplay() {
  stopAutoplay();
  autoplayTimer.value = setInterval(() => {
    nextSlide();
  }, props.interval);
}

function stopAutoplay() {
  if (autoplayTimer.value) {
    clearInterval(autoplayTimer.value);
    autoplayTimer.value = null;
  }
}

function pauseAutoplay() {
  stopAutoplay();
}

function resumeAutoplay() {
  startAutoplay();
}

function resetAutoplay() {
  stopAutoplay();
  startAutoplay();
}

// Touch handling for mobile swipe
function onTouchStart(e) {
  touchStartX.value = e.touches[0].clientX;
  isTransitioning.value = false;
}

function onTouchMove(e) {
  touchEndX.value = e.touches[0].clientX;
}

function onTouchEnd() {
  isTransitioning.value = true;
  const diff = touchStartX.value - touchEndX.value;
  const threshold = 50;

  if (Math.abs(diff) > threshold) {
    if (diff > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  }

  touchStartX.value = 0;
  touchEndX.value = 0;
}

onMounted(() => {
  startAutoplay();
});

onUnmounted(() => {
  stopAutoplay();
});
</script>

<style scoped>
.banner-carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: var(--radius-lg);
  background: var(--color-bg-white);
  box-shadow: var(--shadow-md);
}

.carousel-track {
  display: flex;
  width: 100%;
}

.carousel-slide {
  min-width: 100%;
  position: relative;
}

.slide-link {
  display: block;
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 7;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slide-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: var(--spacing-lg) var(--spacing-base);
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.6));
  color: #fff;
}

.slide-title {
  font-size: var(--font-size-xl);
  font-weight: 700;
  margin-bottom: var(--spacing-xs);
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

.slide-subtitle {
  font-size: var(--font-size-sm);
  opacity: 0.9;
}

/* Arrows */
.carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.85);
  border-radius: var(--radius-full);
  color: var(--color-text-primary);
  box-shadow: var(--shadow-sm);
  opacity: 0;
  transition: opacity var(--transition-base), background var(--transition-fast);
  z-index: 2;
}

.banner-carousel:hover .carousel-arrow {
  opacity: 1;
}

.carousel-arrow:hover {
  background: rgba(255, 255, 255, 1);
  color: var(--color-primary);
}

.carousel-arrow--prev {
  left: var(--spacing-sm);
}

.carousel-arrow--next {
  right: var(--spacing-sm);
}

/* Indicators */
.carousel-indicators {
  position: absolute;
  bottom: var(--spacing-sm);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: var(--spacing-xs);
  z-index: 2;
}

.carousel-dot {
  width: 8px;
  height: 8px;
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.5);
  transition: all var(--transition-base);
  padding: 0;
}

.carousel-dot--active {
  width: 20px;
  background: #fff;
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .banner-carousel {
    border-radius: 0;
    box-shadow: none;
  }

  .slide-overlay {
    padding: var(--spacing-md) var(--spacing-sm);
  }

  .slide-title {
    font-size: var(--font-size-md);
  }

  .slide-subtitle {
    font-size: var(--font-size-xs);
  }

  .carousel-arrow {
    display: none;
  }

  .carousel-dot {
    width: 6px;
    height: 6px;
  }

  .carousel-dot--active {
    width: 16px;
  }
}

@media (min-width: 1200px) {
  .slide-title {
    font-size: var(--font-size-2xl);
  }

  .carousel-arrow {
    width: 44px;
    height: 44px;
  }
}
</style>
