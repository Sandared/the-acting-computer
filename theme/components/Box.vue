<script setup>
import SIcon from './SIcon.vue'

defineProps({
  title: { type: String, required: true },
  num: { type: [Number, String], default: '' },
  icon: { type: String, default: '' },
})
</script>

<template>
  <section class="s-box">
    <div class="s-box-meta">
      <span class="s-box-number" :class="{ 's-box-number--auto': num === '' }">{{ num }}</span>
      <SIcon v-if="icon" :name="icon" />
    </div>
    <h3>{{ title }}</h3>
    <div class="s-box-body"><slot /></div>
  </section>
</template>

<style scoped>
.s-box { counter-increment: s-box; border-top: 1px solid var(--s-rule-strong); padding: 1.25rem 0 1.5rem; min-width: 0; }
.s-box-meta { display: flex; justify-content: space-between; align-items: center; min-height: 1.4rem; margin-bottom: 1.5rem; }
.s-box-number { font-family: var(--s-font-mono); font-size: 0.7rem; color: var(--s-accent); }
.s-box-number--auto::before { content: counter(s-box, decimal-leading-zero); }
.s-box h3 { margin-bottom: 0.8rem; }
.s-box-body { font-size: 0.95rem; line-height: 1.6; color: var(--s-muted); overflow-wrap: anywhere; }
.s-box-body :deep(p:last-child) { margin-bottom: 0; }
</style>