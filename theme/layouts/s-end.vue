<script setup>
import SlideFrame from '../components/SlideFrame.vue'
</script>

<template>
  <SlideFrame class="s-end" grid="full">
    <div class="s-end-copy">
      <span class="s-end-mark" aria-hidden="true" />
      <slot />
    </div>
  </SlideFrame>
</template>

<style scoped>
.s-end-copy { margin-block: auto; max-width: 90%; }
.s-end-copy :deep(h1) { font-size: 5.5rem; margin-bottom: 1.3rem; }
.s-end-mark { position: relative; display: block; width: 32px; height: 32px; margin-bottom: 2rem; }
.s-end-mark::before, .s-end-mark::after { content: ''; position: absolute; background: var(--s-accent); }
.s-end-mark::before { top: 15px; width: 32px; height: 2px; }
.s-end-mark::after { left: 15px; width: 2px; height: 32px; }
</style>