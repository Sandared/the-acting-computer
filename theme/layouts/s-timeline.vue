<script setup>
import SlideFrame from '../components/SlideFrame.vue'
import STimeline from '../components/STimeline.vue'

defineProps({ label: { type: String, default: 'Zeitstrahl' } })
</script>

<template>
  <SlideFrame class="s-timeline-layout">
    <div class="s-timeline-heading"><slot /></div>
    <STimeline :label="label"><slot name="timeline" /></STimeline>
  </SlideFrame>
</template>

<style scoped>
.s-timeline-heading { flex-shrink: 0; }
.s-timeline-heading :deep(h1) { margin-bottom: 0.8rem; }
</style>