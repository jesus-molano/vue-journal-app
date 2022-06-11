<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    EntryItem: defineAsyncComponent(() => import('@/modules/daybook/components/EntryItem'))
  }
}
</script>

<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input type="search" placeholder="Search..." class="form-control">
    </div>
    <div class="entry-scrollarea">
      <EntryItem v-for="item in 100" :key="item" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.entry-list-container {
  border-right: 1px solid #2c3e50;
  height: calc(100vh - 60px);
}
.entry-scrollarea{
  height: calc(100vh - 110px);
  overflow-y: scroll;
}
</style>
