<template>
  <div class="s-compare"><slot /></div>
</template>

<style scoped>
.s-compare { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 2.5rem; margin-block: auto; }
</style>