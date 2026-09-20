<script setup>
import SlideFrame from '../components/SlideFrame.vue'
import ArcMotif from '../components/ArcMotif.vue'

defineProps({
  arc: { type: [Boolean, String], default: true },
  meta: { type: String, default: '' },
})
</script>

<template>
  <SlideFrame class="s-title" grid="full">
    <template #background><ArcMotif v-if="arc !== false && arc !== 'false'" /></template>
    <div class="s-title-copy"><slot /></div>
    <div v-if="meta" class="s-title-meta">{{ meta }}</div>
  </SlideFrame>
</template>

<style scoped>
.s-title { background: var(--s-bg-deep); }
.s-title-copy { margin-block: auto; width: 85%; }
.s-title-copy :deep(h1) { font-size: 5.25rem; line-height: 0.99; margin: 0 0 1.8rem; }
.s-title-copy :deep(.s-eyebrow) { margin-bottom: 1.6rem !important; }
.s-title-copy :deep(.s-lead) { font-size: 1.1rem; max-width: 34rem; }
.s-title-meta { font-family: var(--s-font-mono); font-size: 0.7rem; color: var(--s-muted); margin-top: 0.8rem; }
</style>