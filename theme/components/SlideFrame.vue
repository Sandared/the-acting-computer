<script setup>
import { computed, ref } from 'vue'
import { useSlideContext } from '@slidev/client'
import { useSlideReveal } from '../animations'

const props = defineProps({
  grid: { type: String, default: 'sparse' },
  footer: { type: String, default: '' },
  motion: { type: String, default: 'content' },
})

const rootRef = ref(null)
const motionState = useSlideReveal(rootRef, () => props.motion)
const { $page } = useSlideContext()
const pageNumber = computed(() => String($page.value).padStart(2, '0'))
</script>

<template>
  <div ref="rootRef" class="slidev-layout s-layout" :data-s-motion="motionState">
    <div class="s-background" :class="`s-background--${grid}`" aria-hidden="true" />
    <slot name="background" />
    <div class="s-content"><slot /></div>
    <footer class="s-frame-footer">
      <span>{{ footer }}</span>
      <span class="s-frame-page">{{ pageNumber }}</span>
    </footer>
    <span class="s-registration" aria-hidden="true" />
  </div>
</template>

<style scoped>
.s-background { position: absolute; inset: 0; z-index: -1; pointer-events: none; }
.s-background--full {
  background-image: linear-gradient(to right, var(--s-grid) 1px, transparent 1px), linear-gradient(to bottom, var(--s-grid) 1px, transparent 1px);
  background-size: 12.5% 100%, 100% 20%;
  background-position: -1px 0, 0 -1px;
}
.s-background--full::after { content: ''; position: absolute; top: 0; bottom: 0; right: 12.5%; width: 12.5%; background: rgba(242, 239, 231, 0.018); }
.s-background--sparse::before { content: ''; position: absolute; inset: 0 3.125%; border-inline: 1px solid var(--s-grid); }
.s-frame-footer { position: absolute; bottom: 1.2rem; left: var(--s-margin); right: var(--s-margin); display: flex; justify-content: space-between; gap: 2rem; align-items: baseline; padding-top: 0.6rem; border-top: 1px solid var(--s-rule); color: var(--s-faint); font-family: var(--s-font-mono); font-size: 0.59rem; line-height: 1.3; }
.s-frame-footer > :first-child { max-width: 80%; overflow-wrap: anywhere; }
.s-frame-page { font-variant-numeric: tabular-nums; }
.s-registration { position: absolute; top: 1.8rem; right: var(--s-margin); width: 13px; height: 13px; opacity: 0.6; }
.s-registration::before, .s-registration::after { content: ''; position: absolute; background: var(--s-muted); }
.s-registration::before { top: 6px; width: 13px; height: 1px; }
.s-registration::after { left: 6px; width: 1px; height: 13px; }
</style>