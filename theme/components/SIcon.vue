<script setup>
import IconIdea from '~icons/carbon/idea'
import IconDataBase from '~icons/carbon/data-base'
import IconChartNetwork from '~icons/carbon/chart-network'
import IconUser from '~icons/carbon/user'
import IconCheckmark from '~icons/carbon/checkmark'

defineProps({ name: { type: String, default: '' } })

const icons = {
  idea: IconIdea,
  'data-base': IconDataBase,
  'chart-network': IconChartNetwork,
  user: IconUser,
  checkmark: IconCheckmark,
}
</script>

<template>
  <component :is="icons[name]" v-if="icons[name]" class="s-icon" aria-hidden="true" />
</template>

<style scoped>
.s-icon { width: 1.4rem; height: 1.4rem; color: var(--s-accent); flex-shrink: 0; }
</style>