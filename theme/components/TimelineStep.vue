<script setup>
import { inject, onBeforeUnmount, ref } from 'vue'

defineProps({
  date: { type: String, required: true },
  title: { type: String, required: true },
})

const rootRef = ref(null)
const timeline = inject('s-timeline', null)
const registration = timeline?.register(rootRef)
const active = registration?.active
const past = registration?.past
onBeforeUnmount(() => registration?.unregister())
</script>

<template>
  <article ref="rootRef" class="s-timeline-step" :class="{ 'is-active': active, 'is-past': past, 'is-standalone': !timeline }" role="listitem" :aria-current="active ? 'step' : undefined">
    <span class="s-timeline-date">{{ date }}</span>
    <span class="s-timeline-marker" aria-hidden="true" />
    <div class="s-timeline-copy">
      <h3>{{ title }}</h3>
      <div class="s-timeline-description"><slot /></div>
    </div>
  </article>
</template>

<style scoped>
.s-timeline-step { position: relative; display: grid; grid-template-columns: 6rem 1rem minmax(0, 1fr); gap: 1.5rem; min-height: 106px; padding-bottom: 1.8rem; opacity: 0.38; transition: opacity 0.3s ease; }
.s-timeline-step.is-past { opacity: 0.65; }
.s-timeline-step.is-active, .s-timeline-step.is-standalone { opacity: 1; }
.s-timeline-date { color: var(--s-muted); font-family: var(--s-font-mono); font-size: 0.72rem; line-height: 1.5; padding-top: 0.18rem; text-align: right; }
.s-timeline-marker { width: 7px; height: 7px; margin: 8.5px auto 0; background: var(--s-muted); border-radius: 50%; outline: 5px solid var(--s-bg); }
.is-active .s-timeline-marker, .is-past .s-timeline-marker { background: var(--s-accent); }
.is-active .s-timeline-date { color: var(--s-accent); }
.s-timeline-copy { min-width: 0; }
.s-timeline-copy h3 { margin-bottom: 0.45rem; font-size: 1.15rem; }
.s-timeline-description { color: var(--s-muted); font-size: 0.9rem; line-height: 1.55; overflow-wrap: anywhere; }
.s-timeline-description :deep(p) { margin: 0; }
</style>