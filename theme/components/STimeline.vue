<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, provide, ref, shallowReactive, watch } from 'vue'
import { useSlideContext } from '@slidev/client'
import { gsap } from 'gsap'
import IconUp from '~icons/carbon/chevron-up'
import IconDown from '~icons/carbon/chevron-down'
import { useMotionState } from '../animations'

defineProps({ label: { type: String, default: 'Zeitstrahl' } })

const { $clicks, $clicksContext } = useSlideContext()
if (!$clicksContext.isMounted) $clicksContext.setup()
const { isActive, reducedMotion, staticView } = useMotionState()
const steps = shallowReactive([])
const viewportRef = ref(null)
const trackRef = ref(null)
const progressRef = ref(null)
const railStyle = ref({ top: '0px', height: '0px' })
const moving = ref(false)
let observer

const activeIndex = computed(() => {
  const match = steps.findLastIndex(step => $clicks.value >= step.start)
  return Math.max(0, match)
})

provide('s-timeline', {
  register(element) {
    const key = Symbol('timeline-step')
    const info = $clicksContext.calculateSince(steps.length ? '+1' : '+0')
    $clicksContext.register(key, info)
    const entry = { key, element, start: info.start }
    steps.push(entry)
    return {
      active: computed(() => steps[activeIndex.value] === entry),
      past: computed(() => $clicks.value > entry.start),
      unregister() {
        $clicksContext.unregister(key)
        const index = steps.indexOf(entry)
        if (index >= 0) steps.splice(index, 1)
      },
    }
  },
})

function moveToStep(animate = false) {
  const viewport = viewportRef.value
  const track = trackRef.value
  const first = steps[0]?.element.value
  const last = steps.at(-1)?.element.value
  const active = steps[activeIndex.value]?.element.value
  if (!viewport || !track || !first || !last || !active) return

  const firstMarker = first.offsetTop + 12
  const progress = active.offsetTop + 12 - firstMarker
  railStyle.value = { top: `${firstMarker}px`, height: `${last.offsetTop + 12 - firstMarker}px` }
  const offset = track.scrollHeight > viewport.clientHeight ? Math.max(0, active.offsetTop - 18) : 0
  const duration = animate && isActive.value && !reducedMotion.value && !staticView.value ? 0.55 : 0

  moving.value = duration > 0
  gsap.to(track, { y: -offset, duration, ease: 'power3.out', overwrite: true, onComplete: () => { moving.value = false } })
  gsap.to(progressRef.value, { height: progress, duration, ease: 'power3.out', overwrite: true })
}

function goToStep(index) {
  const step = steps[index]
  if (step) $clicksContext.current = step.start
}

watch([activeIndex, isActive, reducedMotion, staticView], () => nextTick(() => moveToStep(true)), { flush: 'post' })

onMounted(() => {
  observer = new ResizeObserver(() => moveToStep())
  observer.observe(viewportRef.value)
  observer.observe(trackRef.value)
  document.fonts.ready.then(() => { if (trackRef.value) moveToStep() })
  moveToStep()
})

onBeforeUnmount(() => {
  observer?.disconnect()
  gsap.killTweensOf([trackRef.value, progressRef.value].filter(Boolean))
})
</script>

<template>
  <section class="s-timeline" :data-active-index="activeIndex" :data-moving="moving" :data-static="staticView" :aria-label="label">
    <div class="s-timeline-toolbar">
      <output aria-live="polite" aria-atomic="true">{{ String(activeIndex + 1).padStart(2, '0') }} / {{ String(steps.length).padStart(2, '0') }}</output>
      <div class="s-timeline-controls" @pointerdown.stop>
        <button type="button" :disabled="activeIndex === 0" aria-label="Vorheriges Ereignis" title="Vorheriges Ereignis" @click.stop="goToStep(activeIndex - 1)"><IconUp /></button>
        <button type="button" :disabled="activeIndex >= steps.length - 1" aria-label="Naechstes Ereignis" title="Naechstes Ereignis" @click.stop="goToStep(activeIndex + 1)"><IconDown /></button>
      </div>
    </div>
    <div ref="viewportRef" class="s-timeline-viewport">
      <div ref="trackRef" class="s-timeline-track" role="list">
        <div class="s-timeline-rail" :style="railStyle" aria-hidden="true"><div ref="progressRef" class="s-timeline-progress" /></div>
        <slot />
      </div>
    </div>
  </section>
</template>

<style scoped>
.s-timeline { position: relative; display: flex; flex-direction: column; flex: 1; min-height: 0; min-width: 0; }
.s-timeline-toolbar { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem; padding-bottom: 0.6rem; border-bottom: 1px solid var(--s-rule); }
.s-timeline-toolbar output { color: var(--s-muted); font-size: 0.65rem; font-family: var(--s-font-mono); font-variant-numeric: tabular-nums; }
.s-timeline-controls { display: flex; gap: 0.4rem; }
.s-timeline-controls button { display: grid; place-items: center; width: 28px; height: 28px; border: 1px solid var(--s-rule-strong); border-radius: 2px; background: transparent; color: var(--s-ink); cursor: pointer; }
.s-timeline-controls button svg { width: 16px; height: 16px; }
.s-timeline-controls button:disabled { opacity: 0.25; cursor: default; }
.s-timeline-controls button:not(:disabled):hover { border-color: var(--s-accent); color: var(--s-accent); }
.s-timeline-viewport { flex: 1; min-height: 0; overflow: hidden; }
.s-timeline-track { position: relative; padding: 0.7rem 0 0.2rem; }
.s-timeline-rail { position: absolute; left: 8rem; width: 1px; background: var(--s-rule-strong); }
.s-timeline-progress { width: 100%; height: 0; background: var(--s-accent); }
.s-timeline[data-static="true"] .s-timeline-controls { visibility: hidden; }
</style>