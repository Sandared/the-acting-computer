<script setup>
import SlideFrame from '../components/SlideFrame.vue'
import Boxes from '../components/Boxes.vue'

defineProps({ columns: { type: [Number, String], default: 3 } })
</script>

<template>
  <SlideFrame class="s-boxes-layout">
    <div><slot /></div>
    <Boxes :columns="columns"><slot name="boxes" /></Boxes>
  </SlideFrame>
</template>