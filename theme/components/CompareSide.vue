<script setup>
defineProps({
  title: { type: String, required: true },
  label: { type: String, default: '' },
  highlight: { type: [Boolean, String], default: false },
})
</script>

<template>
  <section class="s-compare-side" :class="{ 's-compare-side--highlight': highlight !== false && highlight !== 'false' }">
    <span v-if="label" class="s-compare-label">{{ label }}</span>
    <h3>{{ title }}</h3>
    <slot />
  </section>
</template>

<style scoped>
.s-compare-side { border-top: 1px solid var(--s-rule-strong); padding-top: 1.4rem; min-width: 0; font-size: 0.95rem; }
.s-compare-side--highlight { border-color: var(--s-accent); }
.s-compare-label { display: block; font-size: 0.65rem; font-family: var(--s-font-mono); color: var(--s-muted); text-transform: uppercase; margin-bottom: 0.8rem; }
.s-compare-side--highlight .s-compare-label { color: var(--s-accent); }
.s-compare-side h3 { margin-bottom: 1.4rem; }
</style>