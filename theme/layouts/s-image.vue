<script setup>
import { resolveAssetUrl } from '@slidev/client'
import SlideFrame from '../components/SlideFrame.vue'

defineProps({
  image: { type: String, required: true },
  alt: { type: String, default: '' },
  caption: { type: String, default: '' },
  side: { type: String, default: 'right' },
  fit: { type: String, default: 'contain' },
  position: { type: String, default: 'center' },
})
</script>

<template>
  <SlideFrame class="s-image" :class="`s-image--${side}`" :grid="side === 'full' ? 'none' : 'sparse'">
    <template v-if="side === 'full'" #background>
      <img class="s-image-backdrop" :src="resolveAssetUrl(image)" :alt="alt" :style="{ objectFit: fit, objectPosition: position }">
    </template>
    <div class="s-image-grid">
      <div class="s-image-copy"><slot /></div>
      <figure v-if="side !== 'full'" class="s-image-figure">
        <img :src="resolveAssetUrl(image)" :alt="alt" :style="{ objectFit: fit, objectPosition: position }">
        <figcaption v-if="caption">{{ caption }}</figcaption>
      </figure>
    </div>
    <div v-if="side === 'full' && caption" class="s-image-credit">{{ caption }}</div>
  </SlideFrame>
</template>

<style scoped>
.s-image-grid { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 2.7rem; height: 100%; min-height: 0; align-items: center; }
.s-image-copy { min-width: 0; }
.s-image-copy :deep(h1) { font-size: 3.2rem; }
.s-image-figure { display: flex; flex-direction: column; height: 100%; min-height: 0; }
.s-image-figure img { width: 100%; min-height: 0; flex: 1; }
.s-image-figure figcaption, .s-image-credit { color: var(--s-muted); font-size: 0.65rem; line-height: 1.45; padding-top: 0.75rem; }
.s-image--left .s-image-figure { order: -1; }
.s-image-backdrop { position: absolute; inset: 0; width: 100%; height: 100%; }
.s-image--full .s-image-grid { display: flex; align-items: flex-end; }
.s-image--full .s-image-copy { max-width: 75%; }
.s-image--full .s-image-copy :deep(h1) { font-size: 4.5rem; }
.s-image-credit { margin-top: auto; }
</style>