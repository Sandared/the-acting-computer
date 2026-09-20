<script setup>
import SlideFrame from '../components/SlideFrame.vue'
</script>

<template>
  <SlideFrame class="s-statement">
    <div class="s-statement-copy"><slot /></div>
  </SlideFrame>
</template>

<style scoped>
.s-statement-copy { margin-block: auto; padding-block: 2rem; border-block: 1px solid var(--s-rule-strong); }
.s-statement-copy :deep(h1) { font-size: 4.4rem; line-height: 1.08; margin-bottom: 1.2rem; }
.s-statement-copy :deep(h1:last-child) { margin-bottom: 0; }
.s-statement-copy :deep(p:last-child) { margin-bottom: 0; }
</style>