import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useNav, useSlideContext } from '@slidev/client'
import { gsap } from 'gsap'

export function useMotionState() {
  const { $nav, $page, $renderContext } = useSlideContext()
  const { isPrintMode } = useNav()
  const media = typeof window === 'undefined' ? null : window.matchMedia('(prefers-reduced-motion: reduce)')
  const reducedMotion = ref(media?.matches ?? true)
  const updatePreference = event => { reducedMotion.value = event.matches }
  const isActive = computed(() => Number($page.value) === Number($nav.value.currentSlideNo))
  const staticView = computed(() => Boolean(
    isPrintMode.value || ['print', 'overview', 'preview'].includes($renderContext.value),
  ))

  onMounted(() => media?.addEventListener('change', updatePreference))
  onBeforeUnmount(() => media?.removeEventListener('change', updatePreference))

  return { isActive, reducedMotion, staticView }
}

export function useSlideReveal(rootRef, getVariant) {
  const { isActive, reducedMotion, staticView } = useMotionState()
  const state = ref('static')
  let context

  const cleanup = () => {
    context?.revert()
    context = undefined
  }

  watch([rootRef, isActive, reducedMotion, staticView, getVariant], () => {
    cleanup()
    const root = rootRef.value
    if (!root || !isActive.value || reducedMotion.value || staticView.value || getVariant() === 'none') {
      state.value = 'static'
      return
    }

    const select = selector => [...root.querySelectorAll(selector)].filter(element =>
      !element.closest('.slidev-vclick-target') && !element.querySelector('.slidev-vclick-target'),
    )

    state.value = 'running'
    context = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: { duration: 0.65, ease: 'power3.out' },
        onComplete: () => { state.value = 'complete' },
      })
      const headings = select('.s-content h1')
      const details = select('.s-content .s-eyebrow, .s-title-meta, .s-section-number, .s-end-mark')
      const blocks = select('.s-box, .s-stat, .s-step, .s-compare-side, .s-speaker-portrait, .s-image-figure')

      if (details.length)
        timeline.from(details, { y: 8, autoAlpha: 0, stagger: 0.06, clearProps: 'transform,opacity,visibility' }, 0)
      if (headings.length)
        timeline.from(headings, { y: 20, autoAlpha: 0, clipPath: 'inset(0 0 100% 0)', duration: 0.95, clearProps: 'transform,opacity,visibility,clipPath' }, 0.12)
      if (blocks.length)
        timeline.from(blocks, { y: 16, autoAlpha: 0, stagger: 0.09, clearProps: 'transform,opacity,visibility' }, 0.2)

      const arcs = root.querySelectorAll('.s-arc')
      if (arcs.length) {
        timeline.from(arcs, { scale: 0.86, rotation: 8, autoAlpha: 0, duration: 1.4, stagger: 0.12, ease: 'power2.out', clearProps: 'transform,opacity,visibility' }, 0)
        gsap.to(root.querySelector('.s-arcs'), { x: -10, y: 12, duration: 24, delay: 1.8, repeat: -1, yoyo: true, ease: 'sine.inOut' })
      }
      const tick = root.querySelector('.s-arc-tick')
      if (tick)
        timeline.from(tick, { scaleX: 0, transformOrigin: 'left center', clearProps: 'transform' }, 0.8)
      if (!timeline.duration())
        state.value = 'complete'
    }, root)
  }, { immediate: true, flush: 'post' })

  onBeforeUnmount(cleanup)
  return state
}