<template>
  <div class="d-flex justify-content-center">
    <h1 class="align-self-center">Nothing selected</h1>
  </div>
  <FloatingActionBtn />
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    FloatingActionBtn: defineAsyncComponent(() => import('@/modules/daybook/components/FloatingActionBtn'))
  }
}
</script>

<style lang="scss" scoped>
div {
  height: 100%;
}
</style>
