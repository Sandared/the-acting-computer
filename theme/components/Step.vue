<script setup>
defineProps({
  title: { type: String, required: true },
  num: { type: [Number, String], default: '' },
})
</script>

<template>
  <section class="s-step">
    <span class="s-step-number" :class="{ 's-step-number--auto': num === '' }">{{ num }}</span>
    <h3>{{ title }}</h3>
    <div class="s-step-copy"><slot /></div>
  </section>
</template>

<style scoped>
.s-step { counter-increment: s-step; display: grid; grid-template-columns: 2rem minmax(0, 2fr) minmax(0, 3fr); gap: 1.5rem; align-items: baseline; border-top: 1px solid var(--s-rule); padding: 1.3rem 0; }
.s-step-number { font-family: var(--s-font-mono); font-size: 0.7rem; color: var(--s-accent); }
.s-step-number--auto::before { content: counter(s-step, decimal-leading-zero); }
.s-step h3 { font-size: 1rem; }
.s-step-copy { color: var(--s-muted); font-size: 0.9rem; }
.s-step-copy :deep(p) { margin: 0; }
</style>