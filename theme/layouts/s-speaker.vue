<script setup>
import { computed } from 'vue'
import { resolveAssetUrl } from '@slidev/client'
import SlideFrame from '../components/SlideFrame.vue'

const props = defineProps({
  name: { type: String, required: true },
  eyebrow: { type: String, default: 'Zur Person' },
  role: { type: String, default: '' },
  organization: { type: String, default: '' },
  photo: { type: String, default: '' },
  alt: { type: String, default: '' },
  contact: { type: String, default: '' },
  url: { type: String, default: '' },
  position: { type: String, default: 'center' },
  fit: { type: String, default: 'cover' },
})

const initials = computed(() => props.name.split(/\s+/).filter(Boolean).slice(0, 2).map(part => part[0]).join(''))
</script>

<template>
  <SlideFrame class="s-speaker">
    <div class="s-speaker-grid">
      <div class="s-speaker-portrait">
        <img v-if="photo" :src="resolveAssetUrl(photo)" :alt="alt || name" :style="{ objectPosition: position, objectFit: fit }">
        <span v-else class="s-speaker-initials" aria-hidden="true">{{ initials }}</span>
      </div>
      <div class="s-speaker-copy">
        <span v-if="eyebrow" class="s-eyebrow">{{ eyebrow }}</span>
        <h1>{{ name }}</h1>
        <div v-if="role || organization" class="s-speaker-details">
          <p v-if="role" class="s-speaker-role">{{ role }}</p>
          <p v-if="organization" class="s-speaker-organization">{{ organization }}</p>
        </div>
        <div class="s-speaker-bio"><slot /></div>
        <div v-if="contact || url || $slots.contact" class="s-speaker-contact">
          <slot name="contact">
            <a v-if="url" :href="url">{{ contact || url }}</a>
            <span v-else>{{ contact }}</span>
          </slot>
        </div>
      </div>
    </div>
  </SlideFrame>
</template>

<style scoped>
.s-speaker-grid { display: grid; grid-template-columns: minmax(0, 2fr) minmax(0, 3fr); gap: 3.5rem; height: 100%; align-items: center; }
.s-speaker-portrait { height: 100%; min-height: 0; background: var(--s-surface); border: 1px solid var(--s-rule); overflow: hidden; display: grid; place-items: center; }
.s-speaker-portrait img { display: block; width: 100%; height: 100%; }
.s-speaker-initials { font-family: var(--s-font-display); color: var(--s-accent); font-size: 7rem; }
.s-speaker-copy { min-width: 0; }
.s-speaker-copy h1 { font-size: 4rem; margin-bottom: 0.8rem; }
.s-speaker-details { margin-bottom: 1.5rem; }
.s-speaker-details .s-speaker-role { color: var(--s-ink); font-size: 1rem; margin: 0; }
.s-speaker-details .s-speaker-organization { color: var(--s-muted); font-size: 0.85rem; margin: 0.2rem 0 0; }
.s-speaker-bio { color: var(--s-muted); font-size: 1rem; }
.s-speaker-contact { margin-top: 1.8rem; padding-top: 1rem; border-top: 1px solid var(--s-rule); font-size: 0.75rem; overflow-wrap: anywhere; }
</style>