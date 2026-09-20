<script setup>
import { computed } from 'vue'
import { resolveAssetUrl } from '@slidev/client'

const props = defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: '' },
  caption: { type: String, default: '' },
  height: { type: [Number, String], default: 260 },
  fit: { type: String, default: 'contain' },
})

const imageHeight = computed(() => `${Math.min(420, Math.max(80, Number(props.height) || 260))}px`)
</script>

<template>
  <figure class="s-figure">
    <img :src="resolveAssetUrl(src)" :alt="alt" :style="{ height: imageHeight, objectFit: fit }">
    <figcaption v-if="caption || $slots.default"><slot>{{ caption }}</slot></figcaption>
  </figure>
</template>

<style scoped>
.s-figure { margin-block: auto; min-width: 0; }
.s-figure img { display: block; width: 100%; }
.s-figure figcaption { padding-top: 0.65rem; margin-top: 0.75rem; border-top: 1px solid var(--s-rule); font-size: 0.7rem; line-height: 1.5; color: var(--s-muted); }
.s-figure figcaption :deep(p) { margin: 0; }
</style>