<template>
  <div class="s-arcs" aria-hidden="true">
    <div class="s-arc" />
    <div class="s-arc s-arc--middle" />
    <div class="s-arc s-arc--inner" />
    <div class="s-arc-tick" />
  </div>
</template>

<style scoped>
.s-arcs { position: absolute; width: 54%; aspect-ratio: 1; bottom: -12%; right: -5%; z-index: 0; pointer-events: none; }
.s-arc { position: absolute; right: 0; bottom: 0; width: 100%; height: 100%; border-top: 1px solid var(--s-rule-strong); border-left: 1px solid var(--s-rule-strong); border-top-left-radius: 100%; transform-origin: bottom right; }
.s-arc--middle { width: 78%; height: 78%; border-color: var(--s-accent); opacity: 0.65; }
.s-arc--inner { width: 56%; height: 56%; border-color: var(--s-rule); }
.s-arc-tick { position: absolute; top: 11%; right: 21%; width: 30px; height: 2px; background: var(--s-accent); }
</style>