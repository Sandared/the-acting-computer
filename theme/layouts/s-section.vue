<script setup>
import SlideFrame from '../components/SlideFrame.vue'
import ArcMotif from '../components/ArcMotif.vue'

defineProps({ num: { type: [Number, String], default: '' } })
</script>

<template>
  <SlideFrame class="s-section" grid="full">
    <template #background><ArcMotif class="s-section-arcs" /></template>
    <div class="s-section-copy">
      <span v-if="num !== ''" class="s-section-number">{{ String(num).padStart(2, '0') }}</span>
      <div><slot /></div>
    </div>
  </SlideFrame>
</template>

<style scoped>
.s-section { background: var(--s-bg-deep); }
.s-section-copy { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 2.5rem; align-items: baseline; margin-block: auto; max-width: 90%; }
.s-section-copy > :only-child { grid-column: 1 / -1; }
.s-section-number { color: var(--s-accent); font-family: var(--s-font-mono); font-size: 1rem; }
.s-section-copy :deep(h1) { font-size: 4.6rem; margin-bottom: 1.4rem; }
.s-section-arcs { opacity: 0.3; }
</style>