<script>
import { defineAsyncComponent } from 'vue'
import { mapActions, mapState } from 'vuex'

export default {
  components: {
    NavBar: defineAsyncComponent(() => import('@/modules/daybook/components/NavBar')),
    EntryList: defineAsyncComponent(() => import('@/modules/daybook/components/EntryList'))
  },
  computed: {
    ...mapState('journal', ['isLoading'])
  },
  methods: {
    ...mapActions('journal', ['loadEntries'])
  },
  created () {
    this.loadEntries()
  }
}
</script>

<template>
 <NavBar />
  <div v-if="isLoading" class="row justify-content-center">
    <div class="col-3 alert-info text-center mt-5">
      Please wait a moment
      <h3 class="mt-2">
        <i class="fa fa-spin fa-sync"></i>
      </h3>
    </div>
  </div>
  <div v-else class="d-flex">
    <div class="col-4">
      <EntryList />
    </div>
    <div class="col">
      <RouterView />
    </div>
  </div>
</template>
