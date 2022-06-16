<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    EntryItem: defineAsyncComponent(() => import('@/modules/daybook/components/EntryItem'))
  },
  data () {
    return {
      term: ''
    }
  },
  computed: {
    ...mapGetters('journal', ['getEntriesByTerm']),
    entriesByTerm () {
      return this.getEntriesByTerm(this.term)
    }
  }
}
</script>

<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input v-model="term" type="search" placeholder="Search..." class="form-control">
    </div>
    <div class="mt-2 d-flex flex-column">
      <button @click="$router.push({name: 'entry', params: {id: 'new'}})" class="btn btn-primary mx-3">
        <i class="fa fa-plus-circle"></i>
        New Entry
      </button>
    </div>
    <div class="entry-scrollarea">
      <EntryItem v-for="entry in entriesByTerm" :key="entry.id" :entry="entry" />
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
