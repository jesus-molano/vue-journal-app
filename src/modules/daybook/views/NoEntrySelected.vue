<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    FloatingActionBtn: defineAsyncComponent(() => import('@/modules/daybook/components/FloatingActionBtn'))
  },
  methods: {
    createNewEntry () {
      this.$router.push({ name: 'entry', params: { id: 'new' } })
    }
  }
}
</script>

<template>
  <div class="d-flex justify-content-center">
    <h1 class="align-self-center">Nothing selected</h1>
  </div>
  <FloatingActionBtn @on:click="createNewEntry"/>
</template>

<style lang="scss" scoped>
div {
  height: 100%;
}
</style>
