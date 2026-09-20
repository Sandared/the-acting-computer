<script setup>
import SlideFrame from '../components/SlideFrame.vue'

defineProps({
  divider: { type: [Boolean, String], default: true },
})
</script>

<template>
  <SlideFrame class="s-columns">
    <div v-if="$slots.header" class="s-columns-header"><slot name="header" /></div>
    <div class="s-columns-grid" :class="{ 's-columns-divided': divider !== false && divider !== 'false' }">
      <div class="s-columns-col"><slot /></div>
      <div class="s-columns-col"><slot name="col2" /></div>
      <div class="s-columns-col"><slot name="col3" /></div>
    </div>
  </SlideFrame>
</template>

<style scoped>
.s-columns-header { flex-shrink: 0; }
.s-columns-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); flex: 1; min-height: 0; gap: 2rem; align-items: center; }
.s-columns-col { position: relative; min-width: 0; }
.s-columns-divided .s-columns-col + .s-columns-col::before { content: ''; position: absolute; left: -1rem; top: 0; bottom: 0; width: 1px; background: var(--s-rule); }
.s-columns-col :deep(h1) { font-size: 2.8rem; }
</style>
