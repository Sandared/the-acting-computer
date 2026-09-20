<script setup>
defineProps({
  value: { type: [Number, String], required: true },
  label: { type: String, required: true },
  unit: { type: String, default: '' },
  tone: { type: String, default: 'default' },
})
</script>

<template>
  <section class="s-stat" :class="{ 's-stat--sage': tone === 'sage', 's-stat--accent': tone === 'accent' }">
    <div class="s-stat-value"><span>{{ value }}</span><span v-if="unit" class="s-stat-unit">{{ unit }}</span></div>
    <h3>{{ label }}</h3>
    <div class="s-stat-note"><slot /></div>
  </section>
</template>

<style scoped>
.s-stat { border-top: 1px solid var(--s-rule-strong); padding-block: 1.8rem; min-width: 0; }
.s-stat-value { display: flex; flex-wrap: wrap; gap: 0.2em; align-items: baseline; font-family: var(--s-font-mono); font-size: 2.7rem; line-height: 1.2; margin-bottom: 1.5rem; overflow-wrap: anywhere; }
.s-stat-value > span { min-width: 0; }
.s-stat-unit { color: var(--s-muted); font-size: 0.9rem; }
.s-stat h3 { font-size: 0.9rem; margin-bottom: 0.6rem; }
.s-stat-note { color: var(--s-muted); font-size: 0.8rem; }
.s-stat-note :deep(p) { margin: 0; }
.s-stat--sage .s-stat-value { color: var(--s-sage); }
.s-stat--accent .s-stat-value { color: var(--s-accent); }
</style>